/* CampusCarbon — Assistant backend
   ---------------------------------------------------------------------------
   PRIMARY   : Groq (free tier)  — needs GROQ_API_KEY
   FALLBACK  : Google Gemini     — needs GEMINI_API_KEY (already set on this site)

   Why two providers:
   The Scan Plant tab uses Gemini and sends photos, which is expensive. If the
   chat also used Gemini, a busy chat day could drain the scanner's quota. Groq
   has its own separate free quota, so the chat can be hammered all day and the
   plant scanner is untouched. Gemini is only used if Groq is unavailable.

   Why groq/compound is first:
   It is a model PLUS tools — it can search the web, open a page, run a
   calculation, and it decides for itself when that is needed. That is what
   lets the assistant answer "what is the current price of carbon credits"
   instead of saying it has no internet access. Everything below it in the
   chain is a plain model with no web access, which is why the system prompt
   changes depending on which one answers (see buildPrompt).

   Set GROQ_API_KEY in Netlify:
     Site configuration -> Environment variables -> Add a variable
     Key:   GROQ_API_KEY
     Value: your gsk_... key      <- mark it as a SECRET, not a plain variable
   Free key, no credit card: https://console.groq.com/keys
   --------------------------------------------------------------------------- */

const BASE_PROMPT = `You are the CampusCarbon Assistant, a general-purpose AI on an Indian website that helps universities and institutions apply for carbon credits under India's Carbon Credit Trading Scheme (CCTS).

Answer any question on any subject — studies, science, technology, writing help, everyday queries. Never refuse a question simply because it is not about carbon credits.

You have extra depth on carbon credits, CCTS, the Indian Carbon Market (ICM) portal, ACVA verification, the Green Credit Programme, afforestation, biogas and solar. On those, give India-specific detail, and mention the site's Calculator, Apply, Plan a Project or Scan Plant tabs when they would genuinely help. Never claim to be a government body or an official verification agency.`;

const STYLE_AND_SAFETY = `Be concise — a few sentences or a short list unless the question clearly needs more. Assume an Indian context: rupees, Indian institutions, Indian rules and seasons. Most visitors are college students and faculty, so be clear without being condescending. If the visitor writes in Tamil or Hindi, reply in that language.

If you are not certain of a number, rule, date or current policy detail, say so plainly instead of inventing one.

For medical, legal, financial or tax questions: give helpful general information, then clearly recommend confirming with a qualified professional before acting on it. Do not give specific medicine dosages. Do not give pesticide dosages, dilution ratios or spray schedules — name the product class only and point the person to their local agriculture extension officer or Krishi Vigyan Kendra.

If someone seems distressed or in danger, reply briefly and warmly, and encourage them to reach out to someone they trust or a professional.`;

/* The instructions MUST match what the model can actually do. Telling a
   search-capable model it has no internet makes it refuse to search; telling
   a plain model it can search makes it invent sources. */
const CAN_SEARCH = `You can search the web, open pages, and run calculations. Use those tools whenever a question depends on current facts — prices, news, recent policy changes, or who currently holds a position. When you use a source, say where the information came from. Do not search for things you already know; answer timeless questions directly.`;

const NO_SEARCH = `You have no live internet access, so you cannot look up today's prices, news or recent events. If a question needs current information, say so and suggest checking an official source.`;

function buildPrompt(canSearch) {
  return [BASE_PROMPT, canSearch ? CAN_SEARCH : NO_SEARCH, STYLE_AND_SAFETY].join("\n\n");
}

/* Never hard-code a single model — providers retire them without warning.
   (That is what silently broke the Help Assistant when Gemini 2.5 was pulled.)
   Tried in order, top to bottom. The two compound entries can search the web;
   everything below them cannot. */
const GROQ_MODELS = [
  { id: "groq/compound", search: true },       // model + web search + calculator
  { id: "groq/compound-mini", search: true },  // same tools, faster, single tool call
  { id: "llama-3.3-70b-versatile", search: false },
  { id: "openai/gpt-oss-20b", search: false },
  { id: "llama-3.1-8b-instant", search: false },
];

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-flash-latest", // permanent safety net — Google keeps this alias alive
];

const MAX_HISTORY = 8;   // messages sent to the AI — keeps token cost flat
const MAX_REPLY_TOKENS = 700;
/* Searched answers are longer — they carry findings and source names — so
   the web-capable models get more room than the plain ones. */
const MAX_REPLY_TOKENS_SEARCH = 1600;

/* ------------------------------------------------------------------ */

function normalise(messages) {
  return messages
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role === "assistant" || m.role === "model" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 4000),
    }))
    .filter((m) => m.content.trim().length > 0);
}

/* One attempt at one model. tokenParam lets us retry with the other spelling
   of the reply-length setting: Groq deprecated "max_tokens" in favour of
   "max_completion_tokens", and the newer models REJECT the old name outright
   with a 400. Older ones may only know the old name. Rather than guess, we
   try the current name and fall back to the legacy one if it is refused. */
async function groqAttempt(apiKey, model, messages, tokenParam) {
  const body = {
    model: model.id,
    messages: [{ role: "system", content: buildPrompt(model.search) }, ...messages],
  };
  body[tokenParam] = model.search ? MAX_REPLY_TOKENS_SEARCH : MAX_REPLY_TOKENS;
  // Leave compound on its own defaults — it orchestrates tools internally.
  if (!model.search) body.temperature = 0.6;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = (await res.text()).slice(0, 400);
    const err = new Error(`HTTP ${res.status}: ${detail}`);
    err.status = res.status;
    err.detail = detail;
    return { ok: false, error: err };
  }
  return { ok: true, res };
}

async function callGroq(apiKey, messages) {
  let lastError = "no models attempted";

  for (const model of GROQ_MODELS) {
    try {
      let attempt = await groqAttempt(apiKey, model, messages, "max_completion_tokens");

      // If the reply-length parameter was the problem, retry with the old name
      // before writing this model off. Costs one extra call, only on failure.
      if (!attempt.ok && attempt.error.status === 400 &&
          /max_completion_tokens|max_tokens|unsupported_parameter/i.test(attempt.error.detail)) {
        console.log(`[chat] ${model.id}: retrying with legacy max_tokens`);
        attempt = await groqAttempt(apiKey, model, messages, "max_tokens");
      }

      if (!attempt.ok) {
        lastError = `${model.id} -> ${attempt.error.message}`;
        // Log the REAL reason. Vague errors waste hours — this is how the
        // Gemini 2.5 shutdown stayed hidden for so long.
        console.log(`[chat] SKIPPED ${lastError}`);
        // 429 = rate limited this minute. 4xx = model retired or bad request.
        // Either way try the next one, then let Gemini answer.
        continue;
      }
      const res = attempt.res;

      const data = await res.json();
      const choice = (data.choices || [])[0];
      const text = ((choice?.message?.content) || "").trim();

      if (text) {
        // executed_tools tells us whether it actually searched — handy when
        // checking the Netlify function log to see why an answer was slow.
        const tools = choice?.message?.executed_tools || data.executed_tools || [];
        const used = Array.isArray(tools) && tools.length
          ? " +" + tools.map((t) => t.type || t.name || "tool").join(",")
          : "";
        const via = `groq:${model.id}${used}`;
        console.log(`[chat] ANSWERED BY ${via}`);
        return { text, via };
      }
      lastError = `${model.id} -> empty reply`;
      console.log(`[chat] SKIPPED ${lastError}`);
    } catch (err) {
      lastError = `${model.id} -> ${String(err)}`;
      console.log(`[chat] SKIPPED ${lastError}`);
    }
  }

  throw new Error(lastError);
}

async function callGemini(apiKey, messages) {
  // Gemini uses "user" / "model" roles instead of "user" / "assistant"
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: m.content }],
  }));

  let lastError = "no models attempted";

  for (const model of GEMINI_MODELS) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: buildPrompt(false) }] },
          contents: contents,
          generationConfig: { maxOutputTokens: MAX_REPLY_TOKENS },
        }),
      });

      if (!res.ok) {
        lastError = `${model} -> HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`;
        continue;
      }

      const data = await res.json();
      const candidate = (data.candidates || [])[0];
      const parts = candidate?.content?.parts || [];
      const text = parts.map((p) => p.text || "").join("\n").trim();
      if (text) {
        console.log(`[chat] ANSWERED BY gemini:${model}`);
        return { text, via: `gemini:${model}` };
      }
      lastError = `${model} -> empty reply (finishReason: ${candidate?.finishReason || "unknown"})`;
      console.log(`[chat] SKIPPED gemini ${lastError}`);
    } catch (err) {
      lastError = `${model} -> ${String(err)}`;
      console.log(`[chat] SKIPPED gemini ${lastError}`);
    }
  }

  throw new Error(lastError);
}

/* ------------------------------------------------------------------ */

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const groqKey = process.env.GROQ_API_KEY;
  const geminiKey = process.env.GEMINI_API_KEY;

  if (!groqKey && !geminiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "No AI key is configured on this site yet. Set GROQ_API_KEY in Netlify." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body." }) };
  }

  const messages = normalise(Array.isArray(payload.messages) ? payload.messages : []);
  if (messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: "No messages provided." }) };
  }

  const problems = [];

  // 1. Groq first — its quota is separate from the plant scanner's.
  if (groqKey) {
    try {
      const result = await callGroq(groqKey, messages);
      return { statusCode: 200, body: JSON.stringify(result) };
    } catch (err) {
      problems.push("groq: " + String(err.message || err));
    }
  } else {
    problems.push("groq: GROQ_API_KEY not set");
  }

  // 2. Groq unavailable — quietly fall back to Gemini so the visitor sees a
  //    normal reply rather than an error.
  if (geminiKey) {
    try {
      const result = await callGemini(geminiKey, messages);
      return { statusCode: 200, body: JSON.stringify(result) };
    } catch (err) {
      problems.push("gemini: " + String(err.message || err));
    }
  } else {
    problems.push("gemini: GEMINI_API_KEY not set");
  }

  // 3. Both providers failed. Return the real error text — vague errors waste
  //    hours, as the Gemini 2.5 shutdown proved.
  return {
    statusCode: 502,
    body: JSON.stringify({ error: "All AI providers failed.", detail: problems.join(" | ") }),
  };
};

/* CampusCarbon — Assistant backend
   ---------------------------------------------------------------------------
   PRIMARY   : Groq (free tier)  — needs GROQ_API_KEY
   FALLBACK  : Google Gemini     — needs GEMINI_API_KEY (already set on this site)

   Why two providers:
   The Scan Plant tab uses Gemini and sends photos, which is expensive. If the
   chat also used Gemini, a busy chat day could drain the scanner's quota. Groq
   has its own separate free quota, so the chat can be hammered all day and the
   plant scanner is untouched.

   Gemini is only called if Groq is unavailable — rate limited, down, or the
   key isn't set yet. The visitor never sees an error either way.

   Set GROQ_API_KEY in Netlify:
     Site configuration -> Environment variables -> Add a variable
     Key:   GROQ_API_KEY
     Value: your gsk_... key
     Mark it as a SECRET, not a plain variable.
   Get a free key (no credit card) at https://console.groq.com/keys
   --------------------------------------------------------------------------- */

const SYSTEM_PROMPT = `You are the CampusCarbon Assistant, a general-purpose AI on an Indian website that helps universities and institutions apply for carbon credits under India's Carbon Credit Trading Scheme (CCTS).

Answer any question on any subject — studies, science, technology, writing help, everyday queries. Never refuse a question simply because it is not about carbon credits.

You have extra depth on carbon credits, CCTS, the Indian Carbon Market (ICM) portal, ACVA verification, the Green Credit Programme, afforestation, biogas and solar. On those, give India-specific detail, and mention the site's Calculator, Apply, Plan a Project or Scan Plant tabs when they would genuinely help. Never claim to be a government body or an official verification agency.

Be concise — a few sentences or a short list unless the question clearly needs more. Assume an Indian context: rupees, Indian institutions, Indian rules and seasons. Most visitors are college students and faculty, so be clear without being condescending. If the visitor writes in Tamil or Hindi, reply in that language.

If you are not certain of a number, rule, date or current policy detail, say so plainly instead of inventing one. You have no live internet access, so you cannot look up today's prices, news or recent events.

For medical, legal, financial or tax questions: give helpful general information, then clearly recommend confirming with a qualified professional before acting on it. Do not give specific medicine dosages. Do not give pesticide dosages, dilution ratios or spray schedules — name the product class only and point the person to their local agriculture extension officer or Krishi Vigyan Kendra.

If someone seems distressed or in danger, reply briefly and warmly, and encourage them to reach out to someone they trust or a professional.`;

/* Never hard-code a single model — providers retire them without warning.
   (That is what silently broke the Help Assistant when Gemini 2.5 was pulled.)
   These are tried in order, top to bottom. */
const GROQ_MODELS = [
  "llama-3.3-70b-versatile", // best quality for general questions
  "openai/gpt-oss-20b",      // fast, good general fallback
  "llama-3.1-8b-instant",    // last resort, very fast
];

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-flash-latest", // permanent safety net — Google keeps this alias alive
];

const MAX_HISTORY = 8;   // messages sent to the AI — keeps token cost flat
const MAX_REPLY_TOKENS = 500;

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

async function callGroq(apiKey, messages) {
  let lastError = "no models attempted";

  for (const model of GROQ_MODELS) {
    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: model,
          messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
          max_tokens: MAX_REPLY_TOKENS,
          temperature: 0.6,
        }),
      });

      if (!res.ok) {
        lastError = `${model} -> HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`;
        // 429 = rate limited this minute. 4xx = model retired or bad request.
        // Either way, try the next model, then give up and let Gemini answer.
        continue;
      }

      const data = await res.json();
      const text = ((data.choices || [])[0]?.message?.content || "").trim();
      if (text) return { text, via: `groq:${model}` };
      lastError = `${model} -> empty reply`;
    } catch (err) {
      lastError = `${model} -> ${String(err)}`;
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
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
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
      if (text) return { text, via: `gemini:${model}` };
      lastError = `${model} -> empty reply (finishReason: ${candidate?.finishReason || "unknown"})`;
    } catch (err) {
      lastError = `${model} -> ${String(err)}`;
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

  // 1. Try Groq first — its quota is separate from the plant scanner's.
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

  // 2. Groq unavailable — quietly fall back to Gemini so the visitor sees
  //    a normal reply rather than an error.
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

  // 3. Both providers failed. Return the real error text — vague errors
  //    waste hours, as the Gemini 2.5 shutdown proved.
  return {
    statusCode: 502,
    body: JSON.stringify({ error: "All AI providers failed.", detail: problems.join(" | ") }),
  };
};

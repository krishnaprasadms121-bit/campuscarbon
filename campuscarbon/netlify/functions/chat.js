/* CampusCarbon — Assistant backend
   ---------------------------------------------------------------------------
   WEB SEARCH : Tavily        — needs TAVILY_API_KEY  (free, no credit card)
   ANSWERING  : Groq          — needs GROQ_API_KEY
   FALLBACK   : Google Gemini — needs GEMINI_API_KEY  (already on this site)

   HOW SEARCH WORKS NOW (and why it changed):
   We used to ask groq/compound to search for us. It refused every request from
   this site with HTTP 413 "request body too large" — it pulls whole web pages
   into its own request and leaves very little room for ours, and its real
   limits are not documented anywhere. Three attempts to guess them failed.

   So this version does the searching itself. Our code calls Tavily, takes the
   top 3 SHORT snippets, and hands them to a plain Groq model as context. We
   control exactly how much text goes in, so there is no hidden ceiling to
   trip over. It also runs on the plain models' 1,000 requests/day instead of
   compound's 250.

   If Tavily is missing, slow, or out of credits, the chat still works — it
   just answers from the model's own knowledge and says so. Nothing breaks.

   Netlify setup — Site configuration -> Environment variables:
     GROQ_API_KEY     your gsk_...  key   (mark as SECRET)
     TAVILY_API_KEY   your tvly_... key   (mark as SECRET)
     GEMINI_API_KEY   unchanged, still powers the Scan Plant tab
   Free Tavily key, no card: https://app.tavily.com
   --------------------------------------------------------------------------- */

const BASE_PROMPT = `You are the CampusCarbon Assistant, a general-purpose AI on an Indian website that helps universities and institutions apply for carbon credits under India's Carbon Credit Trading Scheme (CCTS).

Answer any question on any subject — studies, science, technology, writing help, everyday queries. Never refuse a question simply because it is not about carbon credits.

You have extra depth on carbon credits, CCTS, the Indian Carbon Market (ICM) portal, ACVA verification, the Green Credit Programme, afforestation, biogas and solar. On those, give India-specific detail, and mention the site's Calculator, Apply, Plan a Project or Scan Plant tabs when they would genuinely help. Never claim to be a government body or an official verification agency.`;

const STYLE_AND_SAFETY = `Be concise — a few sentences or a short list unless the question clearly needs more. Assume an Indian context: rupees, Indian institutions, Indian rules and seasons. Most visitors are college students and faculty, so be clear without being condescending. If the visitor writes in Tamil or Hindi, reply in that language.

If you are not certain of a number, rule, date or current policy detail, say so plainly instead of inventing one.

For medical, legal, financial or tax questions: give helpful general information, then clearly recommend confirming with a qualified professional before acting on it. Do not give specific medicine dosages. Do not give pesticide dosages, dilution ratios or spray schedules — name the product class only and point the person to their local agriculture extension officer or Krishi Vigyan Kendra.

If someone seems distressed or in danger, reply briefly and warmly, and encourage them to reach out to someone they trust or a professional.`;

const NO_SEARCH = `You have no live internet access, so you cannot look up today's prices, news or recent events. If a question needs current information, say so and suggest checking an official source.`;

/* When we DID manage to search, the instructions must say so — otherwise the
   model ignores the results in front of it and recites its training cutoff. */
function searchNote(context) {
  return `Live web search results are provided below. They were fetched moments ago, so they are more current than your own training. Use them as the basis for your answer and name the source (site or URL) you relied on. If they do not actually answer the question, say so rather than guessing.

--- WEB SEARCH RESULTS ---
${context}
--- END OF RESULTS ---`;
}

function buildPrompt(context) {
  return [BASE_PROMPT, context ? searchNote(context) : NO_SEARCH, STYLE_AND_SAFETY].join("\n\n");
}

/* Never hard-code a single model — providers retire them without warning.
   (That is what silently broke the Help Assistant when Gemini 2.5 was pulled.) */
const GROQ_MODELS = [
  "llama-3.3-70b-versatile",
  "openai/gpt-oss-20b",
  "llama-3.1-8b-instant",
];

const GEMINI_MODELS = [
  "gemini-3.1-flash-lite",
  "gemini-flash-latest", // permanent safety net — Google keeps this alias alive
];

const MAX_HISTORY = 8;      // messages sent to the AI — keeps token cost flat
const MAX_CHARS = 4000;
const MAX_REPLY_TOKENS = 700;

const SEARCH_RESULTS = 3;   // Tavily allows 1,000 searches/month on the free plan
const SNIPPET_CHARS = 550;  // per result — 3 x 550 is about 400 tokens total
const SEARCH_TIMEOUT_MS = 6000;

/* ------------------------------------------------------------------ */

function normalise(messages) {
  return messages
    .slice(-MAX_HISTORY)
    .map((m) => ({
      role: m.role === "assistant" || m.role === "model" ? "assistant" : "user",
      content: String(m.content || "").slice(0, MAX_CHARS),
    }))
    .filter((m) => m.content.trim().length > 0);
}

function latestQuestion(messages) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i].role === "user") return messages[i].content;
  }
  return "";
}

/* Only search when the question actually depends on current information.
   Searching every message would burn the monthly Tavily allowance in days,
   and most questions ("what is a carbon credit") do not need it. */
const NEEDS_CURRENT_INFO = new RegExp(
  [
    "\\btoday'?s?\\b", "\\bcurrent(ly)?\\b", "\\blatest\\b", "\\brecent(ly)?\\b",
    "\\bthis (year|month|week)\\b", "\\bnowadays\\b", "\\bright now\\b",
    "\\bup[- ]?to[- ]?date\\b", "\\bnews\\b", "\\bprice(s)?\\b", "\\brate(s)?\\b",
    "\\b20(2[5-9]|[3-9]\\d)\\b",
    // "who is prime minister" must search even without the words "today" or
    // "current" — people rarely phrase it that carefully.
    "\\bwho\\s+(is|are|was|were)\\b", "\\bwho'?s\\b",
    "\\b(prime minister|president|chief minister|ceo|governor)\\b",
    "\\bsearch\\b", "\\blook up\\b", "\\bhappening\\b", "\\bnew rules?\\b",
    "\\bdeadline\\b", "\\bannounce(d|ment)?\\b",
  ].join("|"),
  "i"
);

function shouldSearch(question) {
  return NEEDS_CURRENT_INFO.test(question);
}

/* Ask Tavily, then squeeze the answer down to a few hundred words.
   Returns null on ANY problem — a failed search must never break the chat. */
async function webSearch(apiKey, question) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SEARCH_TIMEOUT_MS);
  try {
    const res = await fetch("https://api.tavily.com/search", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: question.slice(0, 400),
        max_results: SEARCH_RESULTS,
        search_depth: "basic",
        include_answer: true,
        country: "india",
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.log(`[chat] SEARCH FAILED HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
      return null;
    }

    const data = await res.json();
    const parts = [];
    if (data.answer) parts.push(`Summary: ${String(data.answer).slice(0, 700)}`);

    (data.results || []).slice(0, SEARCH_RESULTS).forEach((r, i) => {
      parts.push(
        `[${i + 1}] ${r.title || "Untitled"} — ${r.url || ""}\n${String(r.content || "").slice(0, SNIPPET_CHARS)}`
      );
    });

    if (!parts.length) {
      console.log("[chat] SEARCH returned nothing useful");
      return null;
    }
    console.log(`[chat] SEARCHED "${question.slice(0, 60)}" -> ${(data.results || []).length} results`);
    return parts.join("\n\n");
  } catch (err) {
    console.log(`[chat] SEARCH ERROR ${String(err && err.message ? err.message : err)}`);
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/* ------------------------------------------------------------------ */

/* Groq deprecated "max_tokens" in favour of "max_completion_tokens" and the
   newer models reject the old name with a 400. Try the current name, fall
   back to the legacy one rather than losing the model. */
async function groqAttempt(apiKey, model, systemPrompt, messages, tokenParam) {
  const body = {
    model: model,
    messages: [{ role: "system", content: systemPrompt }, ...messages],
    temperature: 0.6,
  };
  body[tokenParam] = MAX_REPLY_TOKENS;

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

async function callGroq(apiKey, systemPrompt, messages, searched) {
  let lastError = "no models attempted";

  for (const model of GROQ_MODELS) {
    try {
      let attempt = await groqAttempt(apiKey, model, systemPrompt, messages, "max_completion_tokens");

      if (!attempt.ok && attempt.error.status === 400 &&
          /max_completion_tokens|max_tokens|unsupported_parameter/i.test(attempt.error.detail)) {
        console.log(`[chat] ${model}: retrying with legacy max_tokens`);
        attempt = await groqAttempt(apiKey, model, systemPrompt, messages, "max_tokens");
      }

      if (!attempt.ok) {
        lastError = `${model} -> ${attempt.error.message}`;
        // Log the REAL reason. Vague errors waste hours.
        console.log(`[chat] SKIPPED ${lastError}`);
        continue;
      }

      const data = await attempt.res.json();
      const text = String((data.choices || [])[0]?.message?.content || "").trim();
      if (text) {
        const via = `groq:${model}${searched ? " +web" : ""}`;
        console.log(`[chat] ANSWERED BY ${via}`);
        return { text, via };
      }
      lastError = `${model} -> empty reply`;
      console.log(`[chat] SKIPPED ${lastError}`);
    } catch (err) {
      lastError = `${model} -> ${String(err)}`;
      console.log(`[chat] SKIPPED ${lastError}`);
    }
  }

  throw new Error(lastError);
}

async function callGemini(apiKey, systemPrompt, messages, searched) {
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
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents: contents,
          generationConfig: { maxOutputTokens: MAX_REPLY_TOKENS },
        }),
      });

      if (!res.ok) {
        lastError = `${model} -> HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`;
        console.log(`[chat] SKIPPED gemini ${lastError}`);
        continue;
      }

      const data = await res.json();
      const candidate = (data.candidates || [])[0];
      const parts = candidate?.content?.parts || [];
      const text = parts.map((p) => p.text || "").join("\n").trim();
      if (text) {
        const via = `gemini:${model}${searched ? " +web" : ""}`;
        console.log(`[chat] ANSWERED BY ${via}`);
        return { text, via };
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
  const tavilyKey = process.env.TAVILY_API_KEY;

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

  // 1. Search first, but only when the question needs current facts.
  const question = latestQuestion(messages);
  let context = null;
  if (tavilyKey && shouldSearch(question)) {
    context = await webSearch(tavilyKey, question);
  } else if (!tavilyKey) {
    console.log("[chat] TAVILY_API_KEY not set — answering without web search");
  }

  // 2. The instructions match what we actually have. This matters: telling a
  //    model it has search results when it hasn't makes it invent sources.
  const systemPrompt = buildPrompt(context);
  const problems = [];

  // 3. Groq answers. Its quota is separate from the plant scanner's.
  if (groqKey) {
    try {
      const result = await callGroq(groqKey, systemPrompt, messages, !!context);
      return { statusCode: 200, body: JSON.stringify(result) };
    } catch (err) {
      problems.push("groq: " + String(err.message || err));
    }
  } else {
    problems.push("groq: GROQ_API_KEY not set");
  }

  // 4. Groq unavailable — fall back to Gemini so the visitor sees a normal
  //    reply rather than an error.
  if (geminiKey) {
    try {
      const result = await callGemini(geminiKey, systemPrompt, messages, !!context);
      return { statusCode: 200, body: JSON.stringify(result) };
    } catch (err) {
      problems.push("gemini: " + String(err.message || err));
    }
  } else {
    problems.push("gemini: GEMINI_API_KEY not set");
  }

  return {
    statusCode: 502,
    body: JSON.stringify({ error: "All AI providers failed.", detail: problems.join(" | ") }),
  };
};

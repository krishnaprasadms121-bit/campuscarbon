/* CampusCarbon — Help Assistant backend (Gemini version)
   Runs on Netlify's server, never in the browser, so the API key stays secret.
   Requires a GEMINI_API_KEY environment variable set in Netlify's site settings.
   Get a free key (no billing required) at https://aistudio.google.com/apikey */

const SYSTEM_PROMPT = `You are the CampusCarbon Help Assistant, embedded in a website that helps Indian universities and institutions understand, apply for, plan, and track carbon credit projects under India's Carbon Credit Trading Scheme (CCTS).

Stay strictly on topic: carbon credits, CCTS, the Indian Carbon Market (ICM) portal, ACVA verification, the Green Credit Programme, tree plantation / afforestation, biogas, solar projects, and directly related institutional sustainability topics. If asked something clearly unrelated, politely decline and steer the conversation back to carbon credits.

Be concise, accurate, and practical, with India-specific context. If you're not certain of a specific number, rule, or current policy detail, say so rather than inventing one. Mention the site's own Calculator, Apply, and Plan tabs when they'd genuinely help. Never claim to be a government body or an official verification agency — you are a helpful assistant, not a substitute for an ACVA or official guidance.`;

const GEMINI_MODEL = "gemini-2.5-flash-lite";

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "GEMINI_API_KEY is not configured on this site yet." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid request body." }) };
  }

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: "No messages provided." }) };
  }

  // Gemini uses "user" / "model" roles instead of "user" / "assistant"
  const contents = messages.map((m) => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content || "") }],
  }));

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: contents,
        generationConfig: { maxOutputTokens: 700 },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: res.status, body: JSON.stringify({ error: "Gemini API error", detail: errText }) };
    }

    const data = await res.json();
    const candidate = (data.candidates || [])[0];
    const parts = candidate && candidate.content && candidate.content.parts ? candidate.content.parts : [];
    const text = parts.map((p) => p.text || "").join("\n").trim();

    if (!text) {
      const reason = candidate && candidate.finishReason ? candidate.finishReason : "unknown";
      return { statusCode: 502, body: JSON.stringify({ error: "Empty response from model.", reason }) };
    }
    return { statusCode: 200, body: JSON.stringify({ text }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Request failed", detail: String(err) }) };
  }
};

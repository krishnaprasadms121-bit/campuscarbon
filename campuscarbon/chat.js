/* CampusCarbon — Help Assistant backend
   Runs on Netlify's server, never in the browser, so the API key stays secret.
   Requires an ANTHROPIC_API_KEY environment variable set in Netlify's site settings. */

const SYSTEM_PROMPT = `You are the CampusCarbon Help Assistant, embedded in a website that helps Indian universities and institutions understand, apply for, plan, and track carbon credit projects under India's Carbon Credit Trading Scheme (CCTS).

Stay strictly on topic: carbon credits, CCTS, the Indian Carbon Market (ICM) portal, ACVA verification, the Green Credit Programme, tree plantation / afforestation, biogas, solar projects, and directly related institutional sustainability topics. If asked something clearly unrelated, politely decline and steer the conversation back to carbon credits.

Be concise, accurate, and practical, with India-specific context. If you're not certain of a specific number, rule, or current policy detail, say so rather than inventing one. Mention the site's own Calculator, Apply, and Plan tabs when they'd genuinely help. Never claim to be a government body or an official verification agency — you are a helpful assistant, not a substitute for an ACVA or official guidance.`;

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured on this site yet." }),
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

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 700,
        system: SYSTEM_PROMPT,
        messages: messages.map((m) => ({ role: m.role, content: m.content })),
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return { statusCode: res.status, body: JSON.stringify({ error: "Anthropic API error", detail: errText }) };
    }

    const data = await res.json();
    const text = (data.content || []).map((b) => b.text || "").join("\n").trim();
    if (!text) {
      return { statusCode: 502, body: JSON.stringify({ error: "Empty response from model." }) };
    }
    return { statusCode: 200, body: JSON.stringify({ text }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Request failed", detail: String(err) }) };
  }
};
/* CampusCarbon — Photo Analysis backend
   Runs on Netlify's server, never in the browser, so the API key stays secret.
   Requires a GEMINI_API_KEY environment variable set in Netlify's site settings.
   Handles two modes: "species" (identify a tree/plant) and "problem" (diagnose visible issues). */

const SPECIES_PROMPT = `You are a plant identification assistant embedded in an Indian university sustainability website. Given a photo, identify the most likely tree or plant species.

Respond concisely with:
- Common name (and scientific name if you're reasonably confident)
- One or two identifying features you can see in the photo that support your answer
- Whether it's commonly native to or planted in India

If the photo is unclear, not a plant, or you're not confident, say so plainly rather than guessing a specific species. Never state a species name with false certainty.`;

const PROBLEM_PROMPT = `You are a tree/plant health assistant embedded in an Indian university sustainability website. Given a photo, look for visible signs of problems: yellowing or browning leaves, spots, wilting, pest damage, physical damage, or signs of poor growth.

Respond concisely with:
- What you can see that looks abnormal (or note if it looks healthy)
- The most likely cause(s) based on visible symptoms
- Practical, general next steps (e.g. watering adjustment, pest check, pruning)

Be honest about uncertainty — many issues look similar in a single photo and need an in-person check. Never state a diagnosis with false certainty, and always end by recommending a local horticulturist or the project's ACVA verifier for anything that looks serious.`;

const GEMINI_MODEL = "gemini-2.5-flash";

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

  const { imageBase64, mimeType, mode } = payload;
  if (!imageBase64 || !mimeType) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing image data." }) };
  }
  if (mode !== "species" && mode !== "problem") {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid mode — must be 'species' or 'problem'." }) };
  }

  const systemPrompt = mode === "species" ? SPECIES_PROMPT : PROBLEM_PROMPT;
  const userText = mode === "species" ? "Identify this tree or plant." : "What's wrong with this tree or plant, if anything?";

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [
          {
            role: "user",
            parts: [{ inline_data: { mime_type: mimeType, data: imageBase64 } }, { text: userText }],
          },
        ],
        generationConfig: { maxOutputTokens: 500 },
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

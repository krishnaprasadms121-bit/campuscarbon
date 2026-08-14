/* CampusCarbon — Plant & Tree Scanner backend (Gemini version)
   Runs on Netlify's server, never in the browser, so the API key stays secret.
   Uses the same GEMINI_API_KEY environment variable as chat.js. */

const GEMINI_MODEL = "gemini-2.5-flash";

const SYSTEM_PROMPT = `You are a botanist and plant pathologist assisting users of CampusCarbon, an Indian sustainability platform. You will receive one or more photographs of a plant or tree, and possibly the user's location and answers to a few questions.

HOW TO IDENTIFY
- Use the location, if given, to narrow down species. A plant photographed in Tamil Nadu is far more likely to be a locally common species than an exotic one.
- If several species look alike in the photo, list the alternatives instead of picking one at random.
- Set confidence honestly. "high" only when the photo clearly shows diagnostic features. If the photo is blurry, distant, or shows only a generic green leaf, say "low".

HOW TO DIAGNOSE
- Only report a problem you can actually SEE evidence of in the photo. Never invent symptoms.
- Use the user's answers. Spreading to nearby plants suggests something infectious. Not spreading suggests nutrient, water, or soil issues. Sudden onset suggests shock or pests; slow onset suggests deficiency.
- Many problems look identical in a photograph. Fungal and bacterial leaf spot often cannot be told apart by eye. Root rot, nematodes and drought all show as wilting. When this is the case, SAY SO in the caution field rather than guessing.
- If the plant looks healthy, say so and leave problems empty.

SAFETY RULES — these are not optional
- Never give pesticide or fungicide dosages, concentrations, dilution ratios, or spray schedules. Wrong chemical advice can destroy a crop or harm the person applying it.
- For chemicalTreatment, name the general class of product only (for example "a copper-based fungicide") and always add that the local agriculture extension officer or Krishi Vigyan Kendra should confirm the product and quantity.
- Organic and cultural remedies (pruning, spacing, drainage, neem oil, removing affected leaves) may be described in practical detail.

Reply with ONLY a JSON object. No markdown, no backticks, no text before or after.

{
  "isPlant": true,
  "imageQuality": "good | fair | poor",
  "identification": {
    "commonName": "",
    "botanicalName": "",
    "localNames": "",
    "family": "",
    "confidence": "high | medium | low",
    "alternatives": [{ "name": "", "howToTellApart": "" }]
  },
  "about": {
    "description": "",
    "nativeRegion": "",
    "matureSize": "",
    "lifespan": "",
    "uses": "",
    "sunlight": "",
    "water": "",
    "soil": "",
    "carbonNote": ""
  },
  "health": {
    "status": "healthy | problem detected | cannot tell",
    "summary": "",
    "problems": [
      {
        "name": "",
        "type": "fungal | bacterial | viral | pest | nutrient deficiency | watering | environmental",
        "visibleSigns": "",
        "confidence": "high | medium | low",
        "organicTreatment": "",
        "chemicalTreatment": "",
        "prevention": ""
      }
    ]
  },
  "betterPhotoTip": "",
  "caution": ""
}

For carbonNote, add one short line on whether this species is suitable for campus afforestation or carbon-credit planting in India, since this site is about carbon credits. Keep it to one sentence.
For betterPhotoTip, say what photo would improve the answer — but leave it as an empty string if the photos were already good.
Always fill caution with the honest limits of this diagnosis.`;

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

  const images = Array.isArray(payload.images) ? payload.images : [];
  if (images.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: "No photo received." }) };
  }

  // Build the text half of the prompt from whatever context the user gave us.
  const lines = [];
  if (payload.location && payload.location.lat) {
    lines.push(
      `User's location: latitude ${payload.location.lat}, longitude ${payload.location.lng}. Use this to narrow down likely species.`
    );
  }
  if (payload.month) lines.push(`Current month: ${payload.month}. Consider seasonal diseases.`);
  if (payload.duration) lines.push(`How long the plant has looked like this: ${payload.duration}`);
  if (payload.watering) lines.push(`Watering frequency: ${payload.watering}`);
  if (payload.spreading) lines.push(`Are nearby plants also affected: ${payload.spreading}`);
  if (payload.notes) lines.push(`Extra notes from user: ${String(payload.notes).slice(0, 300)}`);

  const contextText =
    lines.length > 0
      ? "Context provided by the user:\n" + lines.join("\n")
      : "The user provided no extra context. Rely on the photos alone and lower your confidence accordingly.";

  // Photos are sent in a known order so the model knows what it is looking at.
  const parts = [{ text: contextText }];
  images.slice(0, 4).forEach(function (img) {
    if (!img || !img.data) return;
    parts.push({ text: `Photo — ${img.label || "plant"}:` });
    parts.push({
      inline_data: {
        mime_type: img.mimeType || "image/jpeg",
        data: img.data,
      },
    });
  });

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: parts }],
        generationConfig: {
          temperature: 0.2,
          maxOutputTokens: 2000,
          responseMimeType: "application/json",
          thinkingConfig: { thinkingBudget: 0 },
        },
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Gemini API error", detail: errText }),
      };
    }

    const data = await res.json();
    const candidate = (data.candidates || [])[0];
    const partsOut = candidate && candidate.content && candidate.content.parts ? candidate.content.parts : [];
    const text = partsOut.map((p) => p.text || "").join("").trim();

    if (!text) {
      const reason = candidate && candidate.finishReason ? candidate.finishReason : "unknown";
      return { statusCode: 502, body: JSON.stringify({ error: "Empty response from model.", reason }) };
    }

    const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let result;
    try {
      result = JSON.parse(cleaned);
    } catch (e) {
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Could not read the reply. Try a clearer photo.", raw: cleaned.slice(0, 300) }),
      };
    }

    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "Request failed", detail: String(err) }) };
  }
};

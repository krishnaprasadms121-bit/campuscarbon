/* CampusCarbon — Plant & Tree Scanner backend (Gemini version)
   Runs on Netlify's server, never in the browser, so the API key stays secret.
   Uses the same GEMINI_API_KEY environment variable as chat.js. */

// Model list. Tried in order — if one is retired or busy, the next is used.
// "gemini-flash-latest" is an alias Google keeps pointing at a live model,
// so it acts as a permanent safety net against future shutdowns.
const GEMINI_MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.1-flash-lite",
  "gemini-flash-latest",
];

const SYSTEM_PROMPT = `You are a botanist and plant pathologist assisting users of CampusCarbon, an Indian sustainability platform. You will receive one or more photographs of a plant or tree, and possibly the user's location and answers to a few questions.

HOW TO IDENTIFY
- Use the location, if given, to narrow down species. A plant photographed in Tamil Nadu is far more likely to be a locally common species than an exotic one.
- If several species look alike in the photo, list the alternatives instead of picking one at random.
- Set confidence honestly. "high" only when the photo clearly shows diagnostic features. If the photo is blurry, distant, or shows only a generic green leaf, say "low".

REGIONAL NAMES
- For tamilName, give the name actually used in Tamil Nadu, written in Tamil script followed by English transliteration in brackets. Example: வேம்பு (Vembu)
- For hindiName, give the Hindi name in Devanagari script followed by transliteration. Example: नीम (Neem)
- If the plant has no established name in that language, or you are not confident of it, write exactly "Not commonly named in Tamil" or "Not commonly named in Hindi". NEVER invent or guess a regional name — a wrong local name is worse than none, because the user cannot check it.
- Many exotic and ornamental species genuinely have no Tamil or Hindi name. Say so rather than translating the English name.
- Put any other regional names (Telugu, Malayalam, Kannada, Sanskrit, Bengali) in otherLocalNames, or leave it empty.

AGE ESTIMATION — pick the right method for what this plant actually is
The site does all the arithmetic itself and prints everything as an
approximate range. Do NOT state an age, a year, or a CO2 figure yourself.
Your only job is to choose the method and supply the species facts below.
Fill these in whether or not the user measured anything.

agingMethod — choose exactly one:
  "girth"  Ordinary dicot trees with a single woody trunk: neem, mango, teak,
           tamarind, jamun, gulmohar, rain tree, casuarina, ashoka, pongamia,
           arjuna, mahogany, rosewood, sandalwood, guava, eucalyptus. These
           add a ring of wood every year, so thickness tracks age.
  "palm"   ALL palms: coconut, areca/betel nut, palmyra, date, oil palm, royal
           palm, fishtail palm. Palms are monocots with no cambium — the trunk
           does NOT thicken with age, so girth is meaningless. Their age comes
           from trunk height and the scar rings left by fallen fronds.
  "none"   Banana and plantain (a pseudostem, not a trunk, and the plant dies
           after fruiting). Bamboo (a culm reaches full width in one season).
           Banyan, peepal or any Ficus whose aerial roots have fused into
           multiple merged trunks — though a YOUNG one with a single clean
           trunk may use "girth". Also all herbs, shrubs, climbers, succulents,
           cycads, tree ferns, and anything growing in a pot as a bonsai.

girthAgingNote — only when agingMethod is "none". One plain sentence a
  non-botanist understands, saying why this plant cannot be aged from outside.
  Example: "A banana plant has no woody trunk at all — what looks like one is
  a roll of leaf bases, and the whole plant dies after it fruits."

For agingMethod "girth":
- growthFactorLow / growthFactorHigh: the range for age = factor x trunk
  diameter in inches. IMPORTANT: published arborist factors come from slow
  temperate species and are far too high for India. Use tropical values:
    1.0 to 2.0  fast — neem, gulmohar, rain tree, eucalyptus, subabul,
                casuarina, silver oak, ashoka
    2.0 to 3.5  moderate — mango, jamun, tamarind, Indian almond, guava,
                pongamia, arjuna, mahogany
    3.0 to 5.0  slow dense hardwood — teak, sandalwood, rosewood, ironwood
  Always a range, never one value. Set both to 0 if you do not know the
  species well enough — no age is better than a wrong age.
- typicalHeightM: height in metres expected for a healthy tree of this species
  at the trunk thickness visible in the photo. Used only if the user did not
  measure height. 0 if you cannot judge.

For agingMethod "palm":
- palmLeavesPerYear: fronds produced per year. Coconut in India is 12 to 14;
  use 13 unless the species clearly differs. Areca is around 5 to 6.
- palmPreTrunkYears: years as a sapling before any trunk starts forming.
  Tall coconut varieties 4 to 6, dwarf varieties 3 to 4, areca about 3 to 4.

OLD BUT SMALL — look at this carefully, it is the biggest weakness
A tree starved of light, water or soil grows very slowly. It can be fifty
years old with the thickness of a twelve-year-old, and the girth method will
badly underestimate it. The photograph often shows this even though the tape
measure cannot.

- looksOlderThanGirth: true when the bark and form look distinctly older than
  the trunk thickness suggests. The signs are deeply furrowed, plated, flaking
  or gnarled bark; heavy lichen or moss; dead branch stubs; a twisted or
  leaning form; and a flat or rounded crown that has stopped sending up new
  leaders. A young fast-grown tree instead has smooth, thin, tight bark and a
  crown still reaching upward. Set false if the bark is smooth or you cannot
  see bark clearly in any photo — do not guess.
- olderThanGirthNote: when true, one sentence naming what you actually see.
  Example: "The bark is deeply furrowed and carries heavy lichen, which does
  not match such a thin trunk — this tree has probably been growing slowly in
  shade or poor soil."

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
    "tamilName": "",
    "hindiName": "",
    "otherLocalNames": "",
    "family": "",
    "confidence": "high | medium | low",
    "alternatives": [{ "name": "", "howToTellApart": "" }],
    "agingMethod": "girth | palm | none",
    "girthAgingNote": "",
    "growthFactorLow": 0,
    "growthFactorHigh": 0,
    "typicalHeightM": 0,
    "palmLeavesPerYear": 0,
    "palmPreTrunkYears": 0,
    "looksOlderThanGirth": false,
    "olderThanGirthNote": ""
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
  if (payload.girthCm) {
    lines.push(
      `Trunk girth measured at chest height: ${payload.girthCm} cm ` +
      `(trunk diameter about ${(payload.girthCm / Math.PI).toFixed(1)} cm). ` +
      `Fill in agingMethod and the matching species fields. ` +
      `Do not state an age or a CO2 figure yourself — the site calculates those.`
    );
  }
  if (payload.heightM) lines.push(`Height measured by the user: ${payload.heightM} m (for a palm this is trunk height only)`);
  if (payload.scarsPerMetre) lines.push(`Leaf scar rings counted in one metre of trunk: ${payload.scarsPerMetre}. This is a palm measurement — set agingMethod to "palm" if that is what this is.`);
  if (payload.site) {
    const siteWords = {
      open: "open ground, watered or good soil",
      normal: "ordinary conditions",
      shaded: "crowded or shaded by bigger trees",
      poor: "poor, rocky, sandy or dry soil",
      pot: "in a pot or restricted space",
    };
    lines.push(`Growing conditions reported by the user: ${siteWords[payload.site] || payload.site}. The site adjusts the age for this itself — do not adjust it yourself.`);
  }
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

  const models = GEMINI_MODELS;
  let lastError = "";

  for (let i = 0; i < models.length; i++) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${models[i]}:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: parts }],
          generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1400,
            responseMimeType: "application/json",
            thinkingConfig: { thinkingBudget: 0 },
          },
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        lastError = `[${models[i]}] HTTP ${res.status}: ${errText.slice(0, 400)}`;
        continue;
      }

      const data = await res.json();
      const candidate = (data.candidates || [])[0];
      const partsOut = candidate && candidate.content && candidate.content.parts ? candidate.content.parts : [];
      const text = partsOut.map((p) => p.text || "").join("").trim();

      if (!text) {
        const reason = candidate && candidate.finishReason ? candidate.finishReason : "unknown";
        lastError = `[${models[i]}] Empty reply, finishReason: ${reason}`;
        continue;
      }

      const cleaned = text.replace(/```json/g, "").replace(/```/g, "").trim();

      try {
        const result = JSON.parse(cleaned);
        return { statusCode: 200, body: JSON.stringify(result) };
      } catch (e) {
        lastError = `[${models[i]}] Reply was not valid JSON: ${cleaned.slice(0, 300)}`;
        continue;
      }
    } catch (err) {
      lastError = `[${models[i]}] Network error: ${String(err).slice(0, 300)}`;
    }
  }

  return { statusCode: 502, body: JSON.stringify({ error: "Scan failed", detail: lastError }) };
};

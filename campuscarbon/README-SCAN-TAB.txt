CAMPUSCARBON — SCAN PLANT TAB
==============================

WHAT IS NEW
-----------
A sixth tab called "Scan Plant" has been added to your site.
Everything from your original site is untouched and still works.

New file added:
  netlify/functions/plant-scan.js

Files changed:
  app.js      (tab button added, tab wired up, scan code added at the end)
  style.css   (styling for the scan tab added at the end)
  index.html  (Scan Plant link added to the top menu)

Files NOT changed:
  netlify/functions/chat.js
  netlify.toml


IMPORTANT: THE API KEY
----------------------
The scanner uses the SAME key your Help Assistant already uses.
It is called GEMINI_API_KEY in your Netlify settings.
You do NOT need a new key. You do NOT need to change anything.

If the scanner says "the API key is missing on the server", go to:
  Netlify > your site > Site configuration > Environment variables
and check that GEMINI_API_KEY is there.


WHICH MODEL IT USES
-------------------
plant-scan.js uses "gemini-2.5-flash" (better at reading leaves)
chat.js uses "gemini-2.5-flash-lite" (cheaper, fine for text)

If you ever want the scanner to be cheaper, open
netlify/functions/plant-scan.js and change line 5 from:
    const GEMINI_MODEL = "gemini-2.5-flash";
to:
    const GEMINI_MODEL = "gemini-2.5-flash-lite";
It will be roughly 5x cheaper but noticeably worse at spotting disease.


COST
----
You are on the free tier. Google gives about 1,000 requests per day
free. If you never add a credit card to Google AI Studio, you CANNOT
be charged. When the free limit runs out, the app simply shows an
error until the next day.


HOW ACCURACY WAS IMPROVED
-------------------------
1. Four photo slots instead of one (whole plant, leaf top,
   leaf underside, bark/flower)
2. GPS location button - rules out most of the world's species
3. Three questions the photo cannot answer (how long, watering,
   whether it is spreading)
4. Current month is sent automatically for seasonal diseases
5. Confidence level is always shown on screen
6. Photos are shrunk to 1024px in the browser before upload,
   so scans are fast and cheap


SAFETY BUILT IN
---------------
The AI is instructed to NEVER give pesticide dosages, dilution
ratios, or spray schedules. It names the product type only and
always tells the user to confirm with their local agriculture
extension officer or Krishi Vigyan Kendra.

Do not remove this. Wrong chemical advice can destroy a crop or
harm the person spraying it.


BEFORE YOU SHOW ANYONE
----------------------
Photograph 10 plants you can identify with certainty. Run them
through the scanner. Count how many it gets right.

That number is your real accuracy. If it is poor on local trees,
you need to know before a judge or a farmer finds out.

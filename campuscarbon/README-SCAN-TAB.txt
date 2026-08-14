CAMPUSCARBON — MODEL FIX (IMPORTANT)
=====================================

WHAT WAS WRONG
--------------
Google has RETIRED the Gemini 2.5 models for new API keys.
Any request to them now returns "404 no longer available to new users".

This broke TWO things, not one:
  1. The new Plant Scanner (you saw the red error)
  2. Your Help Assistant chat — it was already broken and you
     did not notice, because it silently fell back to canned
     answers instead of showing an error.


WHAT IS FIXED
-------------
netlify/functions/plant-scan.js
  Now tries these models in order:
    1. gemini-3.5-flash-lite
    2. gemini-3.1-flash-lite
    3. gemini-flash-latest

netlify/functions/chat.js
  Changed from gemini-2.5-flash-lite to gemini-3.1-flash-lite


WHY THREE MODELS INSTEAD OF ONE
-------------------------------
If Google retires one again, the code moves down the list
automatically instead of breaking.

"gemini-flash-latest" is a special name. Google always keeps it
pointing at a working model. It is the safety net, so your site
should never fully break from a model shutdown again.


AFTER YOU UPLOAD — TEST BOTH
----------------------------
1. Scan Plant tab -> add one photo -> Scan plant
2. Help Assistant -> ask "what is the capital of Japan?"
   It should politely refuse and steer back to carbon credits.
   If it gives a generic carbon answer ignoring your question,
   it is still on the fallback and something is wrong.


ABOUT COST
----------
Flash-Lite models are the cheapest tier. You are still on the
free plan. If you never add a credit card to Google AI Studio,
you cannot be charged. When the daily free limit runs out, the
app shows an error until the next day.

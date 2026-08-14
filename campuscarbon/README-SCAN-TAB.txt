CAMPUSCARBON — FINAL NETLIFY VERSION
=====================================

This is everything from 14 August, all in one upload.
Upload this ONCE. Do not deploy again for small changes.


WHAT IS INCLUDED
----------------
1. Scan Plant tab
     - 4 photo slots: whole plant, leaf top, leaf underside, bark/flower
     - Camera AND Gallery buttons on every slot
     - Location button (now visible - it used to be white on white)
     - 3 diagnostic questions the photo cannot answer
     - Confidence shown honestly on every result
     - No pesticide dosages, by design

2. Updated Gemini models
     plant-scan.js: gemini-3.5-flash-lite -> gemini-3.1-flash-lite
                    -> gemini-flash-latest  (tries each in order)
     chat.js:       gemini-3.1-flash-lite

     The old gemini-2.5 models were retired by Google and returned
     404 to new API keys. This broke the scanner AND the Help
     Assistant (the Assistant failed silently, using canned replies).

3. Location improvements
     20 second timeout instead of 8
     Shows your actual coordinates when it works
     Explains WHY it failed instead of a vague message


YOUR API KEY
------------
You created a new Gemini key today. Netlify still has the OLD one.
The old key was exposed in a screenshot, so it should be replaced.

  Netlify > Site configuration > Environment variables
  > GEMINI_API_KEY > Options > Edit
  Paste the new key. Save.

Then trigger one deploy so it takes effect.
Also delete the old key at aistudio.google.com/apikey if not done.


IMPORTANT: PROTECT YOUR CREDITS
-------------------------------
Billing period: 14 August to 13 September.
Personal plan gives 1,000 credits. Each deploy costs 15.
That is about 66 deploys this month - plenty, IF you batch changes.

To go back to the free plan, CANCEL BEFORE 13 SEPTEMBER.
Set a phone reminder for 11 September.

On the free plan you get 300 credits = only 20 deploys per month.
So from September: collect several changes, then deploy once.


FILES IN THIS ZIP
-----------------
  index.html
  app.js
  style.css
  netlify.toml
  netlify/functions/chat.js
  netlify/functions/plant-scan.js

Your repo also has netlify/functions/analyze.js.
Nothing calls it. Leave it alone - uploading does not delete it.


AFTER IT IS LIVE - TEST BOTH
----------------------------
1. Scan Plant  -> one photo -> should identify the plant
2. Help Assistant -> ask "what is the capital of Japan?"
   It should politely refuse and return to carbon credits.
   A generic carbon answer that ignores your question means
   the AI is not connected.

Then scan 10 plants you can identify with certainty and count
how many it gets right. That number is your real accuracy.

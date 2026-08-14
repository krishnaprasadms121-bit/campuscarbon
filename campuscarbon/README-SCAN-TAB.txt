CAMPUSCARBON — PLANT SCANNER (FIX UPDATE)
==========================================

WHAT CHANGED IN THIS UPDATE
---------------------------
1. The error message now shows the REAL reason a scan failed,
   instead of a vague "Scan failed" message. This is temporary —
   it is there so we can find the problem.

2. Photos are now shrunk to 800px instead of 1024px, and
   compressed slightly more. Smaller upload = faster = less
   likely to hit Netlify's 10 second time limit.

3. If gemini-2.5-flash fails for any reason, the function now
   automatically retries with gemini-2.5-flash-lite. So a busy
   model or a rate limit no longer breaks the scan.

4. Reply length reduced from 2000 to 1400 tokens, which makes
   the answer come back faster.


WHAT TO DO
----------
Upload these files to GitHub the same way as last time:
  github.com/krishnaprasadms121-bit/campuscarbon/tree/main/campuscarbon

Remember: drag the "netlify" FOLDER on its own first, then drag
the 5 loose files. Dragging all 6 together does not work.


IF IT STILL FAILS
-----------------
The red message under the Scan button will now show the actual
error. Send that whole message. Common ones:

"HTTP 429"        -> free daily limit used up, wait until tomorrow
"HTTP 400"        -> something wrong in the request
"HTTP 404"        -> model name not available on your key
"finishReason: SAFETY" -> the model blocked the reply
"Network error"   -> Netlify timed out (took over 10 seconds)


TRY THIS FIRST
--------------
Scan with only ONE photo instead of four. If one photo works and
four fails, it is the 10 second timeout, and we will fix it by
sending fewer photos.

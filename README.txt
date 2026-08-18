NSSL WEDDING CURTAIN OPENING
===========================

Target Google Sites:
https://sites.google.com/view/bebesynyraitapo/accueil

WHAT THIS DOES
--------------
1. Visitor scans the QR code.
2. A gold/silver wedding curtain intro appears.
3. Text shows:
   WELCOME TO WEDDING
   NEHEMIA & FANOMEZANA
4. The curtains open.
5. After about 5.6 seconds, the browser automatically opens the existing Google Sites page.

FILES
-----
index.html  - Main page
style.css   - Curtain / wedding animation
script.js   - Automatic redirect and ENTER WEDDING button
README.txt  - This guide

QUICK LOCAL TEST
----------------
Extract the ZIP and open index.html in a browser.
Note: Local file testing will still redirect to the live Google Sites URL after the animation.

HOW TO CHANGE THE DESTINATION
-----------------------------
Open script.js and change:
const TARGET_URL = "https://sites.google.com/view/bebesynyraitapo/accueil";

HOW TO CHANGE THE DISPLAYED NAMES
---------------------------------
Open index.html and edit:
NEHEMIA & FANOMEZANA

IMPORTANT FOR THE QR CODE
-------------------------
For the intro to appear with ANY QR scanner, the QR code must point to the PUBLIC URL
where this intro page is hosted, not directly to the Google Sites URL.

Recommended simple hosting:
- GitHub Pages
- Any other static web hosting that accepts HTML/CSS/JS

After hosting, use the hosted intro URL as the QR destination.

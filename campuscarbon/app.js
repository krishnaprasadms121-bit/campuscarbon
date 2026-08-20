/* ============================================================
   CampusCarbon — single-file app logic (no framework, no build step)
   ============================================================ */

/* ---------------------------------------------------------------------- */
/* Content                                                                 */
/* ---------------------------------------------------------------------- */

const EXPLORE_TOPICS = [
  {
    q: "What exactly is a carbon credit?",
    a: "A carbon credit represents one tonne of carbon dioxide (or an equivalent greenhouse gas) that has been prevented from entering the atmosphere, or actively removed from it — for example, by planting trees, switching to solar power, or converting waste into biogas instead of letting it release methane. Each verified tonne becomes one tradable credit.",
  },
  {
    q: "What is India's Carbon Credit Trading Scheme (CCTS)?",
    a: "CCTS is India's official framework for carbon markets, notified under the Energy Conservation Act. It has two tracks: a compliance mechanism for large energy-intensive industries, and an offset mechanism open to voluntary participants — including universities and institutions — who can register projects, get them verified, and earn Carbon Credit Certificates (CCCs).",
  },
  {
    q: "Who verifies that a project's claims are real?",
    a: "An Accredited Carbon Verification Agency (ACVA) — an independent, government-recognised body — inspects the project, checks records and site evidence, and confirms the actual greenhouse gas reduction before any certificate is issued. No verification, no credits.",
  },
  {
    q: "Where do institutions actually register?",
    a: "Non-obligated entities (which includes universities and colleges) register and submit their Project Design Document through the Indian Carbon Market (ICM) portal, administered under the Bureau of Energy Efficiency (BEE). Tree-plantation-specific projects can alternatively go through the Green Credit Programme.",
  },
  {
    q: "How do credits get sold or traded?",
    a: "Once issued, Carbon Credit Certificates sit in a registry account and can be sold to companies or industries that need to offset their own emissions — either through direct buyer agreements or, eventually, registered carbon exchanges as the market matures.",
  },
  {
    q: "What can go wrong?",
    a: "The most common failure points: starting activity before registration is approved (which can disqualify a project), poor record-keeping that fails verification, and — increasingly — fraudulent brokers charging upfront 'registration fees.' Always verify an agency's accreditation on the official BEE website before paying anyone.",
  },
];

const BENEFITS = [
  { title: "New institutional revenue", desc: "Verified carbon credits can be sold, turning campus sustainability projects into an actual funding stream rather than a pure cost centre." },
  { title: "Stronger green credentials", desc: "Documented, verified carbon reduction strengthens NAAC green audits, sustainability rankings, and grant applications." },
  { title: "Real student involvement", desc: "Tracking, verifying, and reporting on live projects gives students in environmental science, engineering, and management programs a genuine research and field-data opportunity." },
  { title: "Lower campus emissions", desc: "Beyond the credits themselves, the underlying projects — trees, solar, biogas — genuinely reduce the institution's carbon footprint." },
];

const APPLY_STEPS = [
  { title: "Choose your project", desc: "Decide between tree plantation, solar installation, biogas/waste-to-energy, or land & soil conservation on campus." },
  { title: "Confirm land or site rights", desc: "Establish clear institutional ownership or long-term usage rights for the land or rooftop involved." },
  { title: "Get verified by an ACVA", desc: "An Accredited Carbon Verification Agency inspects your project plan and site before anything begins." },
  { title: "Register on the ICM Portal", desc: "Submit a Project Design Document (PDD) as a registered non-obligated entity on the Indian Carbon Market portal." },
  { title: "Begin implementation", desc: "Start only after registration is approved — early starts can disqualify the entire project." },
  { title: "Maintain detailed records", desc: "Log dates, quantities, and photographic evidence continuously — see the Track Growth section." },
  { title: "Undergo verification visits", desc: "The ACVA revisits periodically to confirm real-world results match what was claimed." },
  { title: "Receive your certificate", desc: "Once verified, Carbon Credit Certificates are issued directly to your institution's registry account." },
];

const MAINTAIN_POINTS = [
  { title: "Keep continuous records", desc: "Maintain dated logs and photographic evidence of every activity across the responsible team, not just at review time." },
  { title: "Don't stop early", desc: "Projects must run their full committed period — stopping early (e.g. removing trees, decommissioning a system) can trigger credit reversal." },
  { title: "Preserve documentation securely", desc: "Keep land papers, ACVA reports, and photo evidence in a secure, shared institutional drive — not on a single person's device." },
  { title: "Report changes promptly", desc: "Land-use changes, damage, or disruptions should be reported to your ACVA immediately, not discovered at the next visit." },
  { title: "Expect periodic re-verification", desc: "Verification isn't one-time — plan for repeat site visits over the life of the project." },
];

const CERT_POINTS = [
  { title: "Verification report is filed", desc: "The ACVA submits its findings to the scheme administrator once results are confirmed as genuine." },
  { title: "Certificate is issued", desc: "A digital Carbon Credit Certificate is created inside your institution's official registry account." },
  { title: "Each certificate is unique", desc: "Every CCC carries a unique ID and states the exact tonnes of CO2e it represents." },
  { title: "Secure registry access", desc: "Limit registry account access to authorised staff — treat it like a financial account, because it effectively is one." },
];

const SELL_POINTS = [
  { title: "Who buys them", desc: "Companies and industries that need to offset their own emissions purchase carbon credits directly." },
  { title: "Institutions can trade directly", desc: "Unlike individual smallholders, a registered institution can typically sell directly as a registered entity, without needing an aggregator." },
  { title: "Where trading happens", desc: "Direct buyer agreements today; registered carbon exchanges as India's compliance market matures further." },
  { title: "Watch for fraud", desc: "Never pay an upfront 'registration fee' to an unverified broker. Confirm any agency's accreditation on the official BEE website first.", warning: true },
];

const OFFICIAL_LINKS = [
  { label: "Indian Carbon Market (ICM) Portal", url: "https://indiancarbonmarket.gov.in" },
  { label: "Green Credit Programme", url: "https://moefcc-gcp.in" },
  { label: "Bureau of Energy Efficiency (BEE)", url: "https://beeindia.gov.in" },
];

const CARE = {
  trees: {
    cadence: { daily: "Daily", weekly: "Weekly", monthly: "Monthly", season: "Every few months" },
    items: [
      { c: "daily", t: "Water each young sapling if the soil feels dry — daily in hot weather, less after rain." },
      { c: "weekly", t: "Check for damage from animals, wind, or disease; fix or replace tree guards if broken." },
      { c: "monthly", t: "Clear weeds and grass around the base so the tree doesn't lose water and nutrients to them." },
      { c: "season", t: "Replace any saplings that have died, and mulch around the base to hold moisture." },
    ],
    note: "Needed: water source, tree guards or fencing, support stakes, and compost or manure.",
  },
  biogas: {
    cadence: { daily: "Daily", weekly: "Weekly", monthly: "Monthly", season: "Every few months" },
    items: [
      { c: "daily", t: "Feed the digester the same mix of organic waste and water at roughly the same time daily." },
      { c: "weekly", t: "Check the gas pipe and valve for leaks or blockages; confirm the gas holder is moving properly." },
      { c: "monthly", t: "Clean the inlet and outlet chambers; make sure no plastic or stones went in by mistake." },
      { c: "season", t: "Have a technician check the whole plant before monsoon; confirm the shed or cover is intact." },
    ],
    note: "Needed: a steady daily supply of organic waste, a nearby water source, and a safe, ventilated site away from flames.",
  },
  solar: {
    cadence: { daily: "Daily", weekly: "Weekly", monthly: "Monthly", season: "Every few months" },
    items: [
      { c: "daily", t: "Wipe dust off panels in the morning or evening so they keep producing full power." },
      { c: "weekly", t: "Check that no branches, leaves, or debris are shading the panels." },
      { c: "monthly", t: "Inspect wires and connections for wear, loose points, or rodent damage." },
      { c: "season", t: "Have a technician check the inverter/battery and confirm output matches expectations." },
    ],
    note: "Needed: a soft cloth or water for cleaning, a dry spot for the inverter, and protected wiring.",
  },
};

const PLAN = {
  unit: { trees: "tree", solar: "kW", biogas: "unit" },
  defaultCost: { trees: 150, solar: 45000, biogas: 200000 },
  sqmPerUnit: { trees: 9, solar: 10, biogas: 15 },
  materials: {
    trees: "For {qty} trees, you'll need approximately: {qty} saplings, {qty} tree guards, {qty} support stakes, a nearby water source, and organic compost.",
    solar: "You'll need MNRE-empanelled installer quotes, mounting structure, inverter(s), AC/DC wiring and safety gear, and DISCOM net-metering approval for a {qty} kW system.",
    biogas: "For {qty} biogas unit(s), you'll need a steady daily supply of organic waste, a nearby water source, gas piping to a kitchen or generator, and a safe, ventilated site away from flames.",
  },
  flow: {
    trees: [
      "Survey the site and mark spacing (roughly 2–3m apart) and pit locations.",
      "Procure saplings, tree guards, stakes, and compost from a supplier.",
      "Dig pits and prepare the soil with compost.",
      "Plant the saplings and install tree guards and stakes.",
      "Set up a watering schedule for the first dry season.",
      "Assign caretakers or student volunteers for ongoing care.",
      "Log each planting session in Track Growth, with photos.",
      "Do periodic health checks and replace any saplings that die.",
    ],
    solar: [
      "Get a site assessment — check available roof/ground space, shading, and structural strength.",
      "Collect quotes from MNRE-empanelled installers (required for subsidy eligibility).",
      "Apply for any applicable subsidy and DISCOM net-metering approval.",
      "Installation — mounting, wiring, inverter setup, and safety earthing.",
      "Commissioning, testing, and net-meter installation by the DISCOM.",
      "Set up a regular cleaning and monitoring routine.",
      "Log the system in Track Growth and note its baseline output.",
    ],
    biogas: [
      "Estimate the daily organic waste (mess/hostel/kitchen waste) available.",
      "Choose a plant size that matches that daily supply.",
      "Select a safe, ventilated site near water and away from flames.",
      "Get it built by a certified vendor.",
      "Start-up feeding — takes 2–4 weeks to reach full gas output.",
      "Connect the gas line to the kitchen or a generator.",
      "Set up a daily feeding and maintenance routine.",
      "Log it in Track Growth.",
    ],
  },
};

const CALC = {
  TREE_KG_PER_YEAR_MATURE: 22,
  TREE_MATURITY_YEARS: 5,
  BIOGAS_TCO2E_PER_UNIT: 2.5,
  GRID_EMISSION_FACTOR: 0.727,
  SOLAR_DAYS_PER_YEAR: 300,
};

const ACRE_SQM = 4046.86;

/* ---------------------------------------------------------------------- */
/* Helpers                                                                  */
/* ---------------------------------------------------------------------- */
function esc(s) {
  const d = document.createElement("div");
  d.textContent = s == null ? "" : String(s);
  return d.innerHTML;
}
function inr(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}
function activityLabel(a) {
  return a === "trees" ? "Trees" : a === "biogas" ? "Biogas" : a === "solar" ? "Solar" : "Other";
}
function activityIconSvg(a) {
  const icons = {
    trees: '<path d="M12 2 4 12h5l-3 8h12l-3-8h5z"/><path d="M12 20v2"/>',
    biogas: '<path d="M12 2s5 6 5 10a5 5 0 0 1-10 0c0-4 5-10 5-10Z"/>',
    solar: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
    other: '<circle cx="12" cy="12" r="9"/>',
  };
  return `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[a] || icons.other}</svg>`;
}

/* ---------------------------------------------------------------------- */
/* State                                                                    */
/* ---------------------------------------------------------------------- */
const state = {
  view: "landing", // landing | explore | app
  tab: "calc", // calc | track | apply | plan
  calc: { activity: "trees", numTrees: "", yearsPlanted: "", numBiogas: "", solarCapacity: "", sunHours: "", price: 500 },
  plan: { activity: "trees", numTrees: "", numBiogas: "", solarCapacity: "", costPerUnit: { ...PLAN.defaultCost } },
  trackEditingId: null,
  trackPendingPhoto: null,
  trackPhotoRemoved: false,
  chat: { messages: [] },
};

/* ---------------------------------------------------------------------- */
/* Track Growth storage                                                    */
/* ---------------------------------------------------------------------- */
const TRACK_KEY = "campuscarbon-track-entries";
function getEntries() {
  try {
    const raw = localStorage.getItem(TRACK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}
function saveEntries(entries) {
  try {
    localStorage.setItem(TRACK_KEY, JSON.stringify(entries));
  } catch (e) {}
}
function compressImageFile(file, cb) {
  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const maxW = 640;
      const scale = Math.min(1, maxW / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      cb(canvas.toDataURL("image/jpeg", 0.6));
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

/* ---------------------------------------------------------------------- */
/* Navigation / chrome                                                     */
/* ---------------------------------------------------------------------- */
function goTo(view, tab) {
  state.view = view;
  if (tab) state.tab = tab;
  // Arriving from a scanned QR tree tag: show that tree straight away.
  const tagged = typeof readTreeTagFromURL === "function" ? readTreeTagFromURL() : null;
  if (tagged) { state.passport = tagged; state.tab = "register"; }
  document.getElementById("nav-mobile").classList.remove("open");
  render();
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

function openModal() {
  document.getElementById("modal-backdrop").classList.add("open");
}
function closeModal() {
  document.getElementById("modal-backdrop").classList.remove("open");
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("footer-year").textContent = new Date().getFullYear();

  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      goTo(el.dataset.nav, el.dataset.tab);
    });
  });

  document.getElementById("nav-burger").addEventListener("click", () => {
    document.getElementById("nav-mobile").classList.toggle("open");
  });

  document.getElementById("btn-getstarted").addEventListener("click", () => goTo("app", "calc"));
  document.getElementById("btn-getstarted-mobile").addEventListener("click", (e) => { e.preventDefault(); goTo("app", "calc"); });
  document.getElementById("btn-login").addEventListener("click", openModal);
  document.getElementById("btn-login-mobile").addEventListener("click", (e) => { e.preventDefault(); openModal(); });
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-ok").addEventListener("click", closeModal);
  document.getElementById("modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "modal-backdrop") closeModal();
  });

  document.getElementById("view-modal-close").addEventListener("click", () => {
    document.getElementById("view-modal-backdrop").classList.remove("open");
  });
  document.getElementById("view-modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "view-modal-backdrop") e.currentTarget.classList.remove("open");
  });

  render();
});

/* ---------------------------------------------------------------------- */
/* Router                                                                    */
/* ---------------------------------------------------------------------- */
function render() {
  const root = document.getElementById("main-root");
  if (state.view === "landing") root.innerHTML = landingHTML();
  else if (state.view === "explore") { root.innerHTML = exploreHTML(); bindExploreEvents(); }
  else if (state.view === "app") { root.innerHTML = appShellHTML(); bindAppShellEvents(); }
}

/* ---------------------------------------------------------------------- */
/* Landing                                                                   */
/* ---------------------------------------------------------------------- */
function landingHTML() {
  const bars = [40, 65, 50, 80, 60, 90, 70, 100].map((h) => `<i style="height:${h}%"></i>`).join("");
  return `
    <section class="hero">
      <div class="hero-wrap">
        <div>
          <span class="hero-eyebrow">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/></svg>
            Built for universities &amp; institutions
          </span>
          <h1>Turn your campus into <em>verified carbon credits.</em></h1>
          <p class="lead">CampusCarbon helps your institution understand, apply for, plan, and track carbon credit projects under India's official Carbon Credit Trading Scheme — from first sapling to final certificate.</p>
          <div class="hero-ctas">
            <button class="btn-gradient" data-goto-explore>Explore Carbon Credits</button>
            <button class="btn-outline" id="hero-create-account">Create Account</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>9</b><span>Steps to a certificate</span></div>
            <div class="hero-stat"><b>3</b><span>Project types supported</span></div>
            <div class="hero-stat"><b>100%</b><span>Free to plan &amp; track</span></div>
          </div>
        </div>

        <div class="hero-panel">
          <div class="hero-panel-top">
            <span class="hero-panel-title"><span class="hero-panel-dot"></span> Total India Overview</span>
          </div>
          <div class="hero-panel-grid">
            <div class="hero-panel-card"><span>Trees planted (ARR projects)</span><b>~35M+</b></div>
            <div class="hero-panel-card"><span>Solar capacity installed</span><b>162 GW</b></div>
          </div>
          <div class="hero-bars">${bars}</div>
          <div class="hero-panel-footer">
            <span>Approx. CO2e avoided / year</span>
            <b>~194M tCO2e</b>
          </div>
          <p style="font-size:10px;color:rgba(255,255,255,0.45);margin-top:10px;line-height:1.5">Solar capacity: MNRE/CEA, mid-2026. Tree figures are an approximate industry estimate for active ARR carbon projects. CO2e avoided is calculated from the solar figure using this site's own formula.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-wrap">
        <span class="section-tag">Why it matters</span>
        <h2 class="section-title">Real impact, real institutional benefit</h2>
        <p class="section-lead">Carbon credit projects aren't just an environmental checkbox — done properly, they fund themselves and strengthen your institution's standing.</p>
        <div class="card-grid">
          ${BENEFITS.map(
            (b) => `
            <div class="info-card">
              <div class="icon-badge">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              </div>
              <h3>${esc(b.title)}</h3>
              <p>${esc(b.desc)}</p>
            </div>`
          ).join("")}
        </div>
      </div>
    </section>

    <section class="section tight">
      <div class="section-wrap">
        <div class="cta-band">
          <div>
            <h3>Ready to see how it works?</h3>
            <p>Walk through the full process, calculate potential credits, and plan your first project.</p>
          </div>
          <button class="btn-gradient" id="cta-getstarted">Get Started</button>
        </div>
      </div>
    </section>`;
}

document.addEventListener("click", (e) => {
  if (e.target.closest("[data-goto-explore]")) goTo("explore");
  if (e.target.closest("#cta-getstarted")) goTo("app", "calc");
  if (e.target.closest("#hero-create-account")) openModal();
});

/* ---------------------------------------------------------------------- */
/* Explore                                                                   */
/* ---------------------------------------------------------------------- */
function exploreHTML() {
  return `
    <section class="section" style="padding-top:56px">
      <div class="section-wrap">
        <span class="section-tag">Learn</span>
        <h2 class="section-title">Understanding carbon credits</h2>
        <p class="section-lead">The essentials — what a carbon credit actually is, how India's scheme works, and what to watch out for — before you commit your institution to a project.</p>

        <div id="explore-accordion">
          ${EXPLORE_TOPICS.map(
            (t, i) => `
            <div class="accordion-item${i === 0 ? " open" : ""}" data-idx="${i}">
              <button class="accordion-head">
                <h4>${esc(t.q)}</h4>
                <svg class="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div class="accordion-body"><div class="accordion-body-in">${esc(t.a)}</div></div>
            </div>`
          ).join("")}
        </div>

        <div class="cta-band" style="margin-top:44px">
          <div>
            <h3>Ready to apply?</h3>
            <p>See the exact step-by-step process for your institution.</p>
          </div>
          <button class="btn-gradient" id="explore-cta-app">Get Started</button>
        </div>
      </div>
    </section>`;
}
function bindExploreEvents() {
  document.querySelectorAll(".accordion-head").forEach((btn) => {
    btn.addEventListener("click", () => btn.closest(".accordion-item").classList.toggle("open"));
  });
  const cta = document.getElementById("explore-cta-app");
  if (cta) cta.addEventListener("click", () => goTo("app", "apply"));
}

/* ---------------------------------------------------------------------- */
/* App shell                                                                */
/* ===========================================================================
   QR CODE GENERATOR — written into this file on purpose.

   Deliberately NOT loaded from a CDN. This site is used walking around a
   campus where signal is poor, and a third-party script that fails to load
   would silently break the tree tags. Everything needed is here.

   Byte mode, error correction level L or M, versions 1-40, automatic mask
   selection. Tables taken from the QR specification.
   =========================================================================== */
var QR = (function () {
  // [version][0]=L blocks, [1]=M blocks; each [count,totalBytes,dataBytes,...]
  var RS_BLOCKS = [[[1,26,19],[1,26,16]],[[1,44,34],[1,44,28]],[[1,70,55],[1,70,44]],[[1,100,80],[2,50,32]],[[1,134,108],[2,67,43]],[[2,86,68],[4,43,27]],[[2,98,78],[4,49,31]],[[2,121,97],[2,60,38,2,61,39]],[[2,146,116],[3,58,36,2,59,37]],[[2,86,68,2,87,69],[4,69,43,1,70,44]],[[4,101,81],[1,80,50,4,81,51]],[[2,116,92,2,117,93],[6,58,36,2,59,37]],[[4,133,107],[8,59,37,1,60,38]],[[3,145,115,1,146,116],[4,64,40,5,65,41]],[[5,109,87,1,110,88],[5,65,41,5,66,42]],[[5,122,98,1,123,99],[7,73,45,3,74,46]],[[1,135,107,5,136,108],[10,74,46,1,75,47]],[[5,150,120,1,151,121],[9,69,43,4,70,44]],[[3,141,113,4,142,114],[3,70,44,11,71,45]],[[3,135,107,5,136,108],[3,67,41,13,68,42]],[[4,144,116,4,145,117],[17,68,42]],[[2,139,111,7,140,112],[17,74,46]],[[4,151,121,5,152,122],[4,75,47,14,76,48]],[[6,147,117,4,148,118],[6,73,45,14,74,46]],[[8,132,106,4,133,107],[8,75,47,13,76,48]],[[10,142,114,2,143,115],[19,74,46,4,75,47]],[[8,152,122,4,153,123],[22,73,45,3,74,46]],[[3,147,117,10,148,118],[3,73,45,23,74,46]],[[7,146,116,7,147,117],[21,73,45,7,74,46]],[[5,145,115,10,146,116],[19,75,47,10,76,48]],[[13,145,115,3,146,116],[2,74,46,29,75,47]],[[17,145,115],[10,74,46,23,75,47]],[[17,145,115,1,146,116],[14,74,46,21,75,47]],[[13,145,115,6,146,116],[14,74,46,23,75,47]],[[12,151,121,7,152,122],[12,75,47,26,76,48]],[[6,151,121,14,152,122],[6,75,47,34,76,48]],[[17,152,122,4,153,123],[29,74,46,14,75,47]],[[4,152,122,18,153,123],[13,74,46,32,75,47]],[[20,147,117,4,148,118],[40,75,47,7,76,48]],[[19,148,118,6,149,119],[18,75,47,31,76,48]]];
  var ALIGN = [[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];

  // --- Galois field GF(256) for Reed-Solomon ---
  var EXP = new Array(512), LOG = new Array(256);
  (function () {
    var x = 1;
    for (var i = 0; i < 255; i++) { EXP[i] = x; LOG[x] = i; x <<= 1; if (x & 0x100) x ^= 0x11d; }
    for (var i = 255; i < 512; i++) EXP[i] = EXP[i - 255];
  })();
  function gmul(a, b) { return (a === 0 || b === 0) ? 0 : EXP[LOG[a] + LOG[b]]; }

  function rsGenerator(n) {
    var poly = [1];
    for (var i = 0; i < n; i++) {
      var next = new Array(poly.length + 1).fill(0);
      for (var j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gmul(poly[j], EXP[i]);
      }
      poly = next;
    }
    return poly;
  }

  function rsEncode(data, ecLen) {
    var gen = rsGenerator(ecLen);
    var res = new Array(ecLen).fill(0);
    for (var i = 0; i < data.length; i++) {
      var factor = data[i] ^ res[0];
      res.shift(); res.push(0);
      for (var j = 0; j < ecLen; j++) res[j] ^= gmul(gen[j + 1], factor);
    }
    return res;
  }

  // --- bit buffer ---
  function Buf() { this.bytes = []; this.len = 0; }
  Buf.prototype.put = function (num, bits) {
    for (var i = bits - 1; i >= 0; i--) this.putBit(((num >>> i) & 1) === 1);
  };
  Buf.prototype.putBit = function (bit) {
    var idx = Math.floor(this.len / 8);
    if (this.bytes.length <= idx) this.bytes.push(0);
    if (bit) this.bytes[idx] |= 0x80 >>> (this.len % 8);
    this.len++;
  };

  function utf8Bytes(str) {
    var out = [], s = unescape(encodeURIComponent(str));
    for (var i = 0; i < s.length; i++) out.push(s.charCodeAt(i));
    return out;
  }

  function blocksFor(version, ecl) {
    var flat = RS_BLOCKS[version - 1][ecl === "M" ? 1 : 0], list = [];
    for (var i = 0; i < flat.length; i += 3) {
      for (var j = 0; j < flat[i]; j++) list.push({ total: flat[i + 1], data: flat[i + 2] });
    }
    return list;
  }

  function capacity(version, ecl) {
    var b = blocksFor(version, ecl), n = 0;
    for (var i = 0; i < b.length; i++) n += b[i].data;
    return n;
  }

  function createData(version, ecl, bytes) {
    var buf = new Buf();
    buf.put(4, 4);                                    // byte mode
    buf.put(bytes.length, version < 10 ? 8 : 16);     // character count
    for (var i = 0; i < bytes.length; i++) buf.put(bytes[i], 8);

    var totalBits = capacity(version, ecl) * 8;
    if (buf.len + 4 <= totalBits) buf.put(0, 4);      // terminator
    while (buf.len % 8 !== 0) buf.putBit(false);
    var pad = [0xEC, 0x11], p = 0;
    while (buf.bytes.length < capacity(version, ecl)) buf.bytes.push(pad[p++ % 2]);
    return buf.bytes;
  }

  function interleave(version, ecl, dataBytes) {
    var blocks = blocksFor(version, ecl), offset = 0, dparts = [], eparts = [], maxD = 0, maxE = 0;
    for (var i = 0; i < blocks.length; i++) {
      var dlen = blocks[i].data, elen = blocks[i].total - dlen;
      var d = dataBytes.slice(offset, offset + dlen); offset += dlen;
      dparts.push(d); eparts.push(rsEncode(d, elen));
      if (dlen > maxD) maxD = dlen;
      if (elen > maxE) maxE = elen;
    }
    var out = [];
    for (var i = 0; i < maxD; i++) for (var j = 0; j < dparts.length; j++) if (i < dparts[j].length) out.push(dparts[j][i]);
    for (var i = 0; i < maxE; i++) for (var j = 0; j < eparts.length; j++) if (i < eparts[j].length) out.push(eparts[j][i]);
    return out;
  }

  // --- module placement ---
  function makeMatrix(version) {
    var n = version * 4 + 17, m = [], r = [];
    for (var i = 0; i < n; i++) { m.push(new Array(n).fill(null)); r.push(new Array(n).fill(false)); }
    return { size: n, mods: m, reserved: r };
  }

  function setFinder(g, row, col) {
    for (var dr = -1; dr <= 7; dr++) {
      for (var dc = -1; dc <= 7; dc++) {
        var rr = row + dr, cc = col + dc;
        if (rr < 0 || cc < 0 || rr >= g.size || cc >= g.size) continue;
        var on = (dr >= 0 && dr <= 6 && (dc === 0 || dc === 6)) ||
                 (dc >= 0 && dc <= 6 && (dr === 0 || dr === 6)) ||
                 (dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4);
        g.mods[rr][cc] = on; g.reserved[rr][cc] = true;
      }
    }
  }

  function setFunctionPatterns(g, version) {
    setFinder(g, 0, 0); setFinder(g, 0, g.size - 7); setFinder(g, g.size - 7, 0);
    // timing
    for (var i = 8; i < g.size - 8; i++) {
      g.mods[6][i] = g.mods[i][6] = (i % 2 === 0);
      g.reserved[6][i] = g.reserved[i][6] = true;
    }
    // alignment
    var pos = ALIGN[version - 1] || [], last = pos.length - 1;
    for (var a = 0; a < pos.length; a++) {
      for (var b = 0; b < pos.length; b++) {
        // Skip only the three that collide with the finder patterns. The ones
        // sitting on the timing row/column ARE drawn — missing them is why
        // version 7 and above failed to scan.
        if ((a === 0 && b === 0) || (a === 0 && b === last) || (a === last && b === 0)) continue;
        var r = pos[a], c = pos[b];
        for (var dr = -2; dr <= 2; dr++) {
          for (var dc = -2; dc <= 2; dc++) {
            g.mods[r + dr][c + dc] = (Math.max(Math.abs(dr), Math.abs(dc)) !== 1);
            g.reserved[r + dr][c + dc] = true;
          }
        }
      }
    }
    // dark module + reserve format areas
    g.mods[g.size - 8][8] = true; g.reserved[g.size - 8][8] = true;
    for (var i = 0; i <= 8; i++) {
      if (!g.reserved[8][i]) { g.reserved[8][i] = true; g.mods[8][i] = false; }
      if (!g.reserved[i][8]) { g.reserved[i][8] = true; g.mods[i][8] = false; }
    }
    for (var i = 0; i < 8; i++) {
      if (!g.reserved[8][g.size - 1 - i]) { g.reserved[8][g.size - 1 - i] = true; g.mods[8][g.size - 1 - i] = false; }
      if (!g.reserved[g.size - 1 - i][8]) { g.reserved[g.size - 1 - i][8] = true; g.mods[g.size - 1 - i][8] = false; }
    }
    // version info blocks for version 7+
    if (version >= 7) {
      // 18 bits: 6 version bits + 12 BCH(18,6) bits, generator 0x1F25.
      var rem = version;
      for (var i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
      var bits = ((version << 12) | rem) & 0x3FFFF;
      for (var i = 0; i < 18; i++) {
        var bit = ((bits >>> i) & 1) === 1;
        var r = Math.floor(i / 3), c = g.size - 11 + (i % 3);
        g.mods[r][c] = bit; g.reserved[r][c] = true;
        g.mods[c][r] = bit; g.reserved[c][r] = true;
      }
    }
  }

  function placeData(g, bytes) {
    var bitIdx = 0, upward = true;
    for (var right = g.size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;   // skip vertical timing column
      for (var v = 0; v < g.size; v++) {
        var row = upward ? g.size - 1 - v : v;
        for (var k = 0; k < 2; k++) {
          var col = right - k;
          if (g.reserved[row][col]) continue;
          var bit = false;
          if (bitIdx < bytes.length * 8) bit = ((bytes[bitIdx >>> 3] >>> (7 - (bitIdx & 7))) & 1) === 1;
          g.mods[row][col] = bit;
          bitIdx++;
        }
      }
      upward = !upward;
    }
  }

  function maskFn(m, r, c) {
    switch (m) {
      case 0: return (r + c) % 2 === 0;
      case 1: return r % 2 === 0;
      case 2: return c % 3 === 0;
      case 3: return (r + c) % 3 === 0;
      case 4: return (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0;
      case 5: return ((r * c) % 2) + ((r * c) % 3) === 0;
      case 6: return (((r * c) % 2) + ((r * c) % 3)) % 2 === 0;
      default: return (((r + c) % 2) + ((r * c) % 3)) % 2 === 0;
    }
  }

  function setFormat(g, ecl, mask) {
    var eclBits = (ecl === "M") ? 0 : 1;                 // L=01, M=00
    var data = (eclBits << 3) | mask, rem = data;
    for (var i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
    var bits = ((data << 10) | rem) ^ 0x5412;
    for (var i = 0; i < 15; i++) {
      var bit = ((bits >>> i) & 1) === 1;
      if (i < 6) g.mods[i][8] = bit;
      else if (i < 8) g.mods[i + 1][8] = bit;
      else g.mods[g.size - 15 + i][8] = bit;
      if (i < 8) g.mods[8][g.size - 1 - i] = bit;
      else if (i < 9) g.mods[8][15 - i - 1 + 1] = bit;
      else g.mods[8][15 - i - 1] = bit;
    }
    g.mods[g.size - 8][8] = true;
  }

  function penalty(g) {
    var n = g.size, score = 0, i, j;
    // rule 1: runs of 5+
    for (i = 0; i < n; i++) {
      for (var dir = 0; dir < 2; dir++) {
        var run = 1, prev = null;
        for (j = 0; j < n; j++) {
          var v = dir === 0 ? g.mods[i][j] : g.mods[j][i];
          if (v === prev) { run++; if (run === 5) score += 3; else if (run > 5) score += 1; }
          else { run = 1; prev = v; }
        }
      }
    }
    // rule 2: 2x2 blocks
    for (i = 0; i < n - 1; i++) for (j = 0; j < n - 1; j++) {
      var a = g.mods[i][j];
      if (a === g.mods[i][j + 1] && a === g.mods[i + 1][j] && a === g.mods[i + 1][j + 1]) score += 3;
    }
    // rule 3: finder-like patterns
    var pat = [true, false, true, true, true, false, true];
    function match(get) {
      var c = 0;
      for (var s = 0; s + 7 <= n; s++) {
        var ok = true;
        for (var k = 0; k < 7; k++) if (get(s + k) !== pat[k]) { ok = false; break; }
        if (!ok) continue;
        var before = true, after = true;
        for (var k = 1; k <= 4; k++) { if (s - k >= 0 && get(s - k)) before = false; if (s + 6 + k < n && get(s + 6 + k)) after = false; }
        if (before || after) c++;
      }
      return c;
    }
    for (i = 0; i < n; i++) {
      score += 40 * match(function (k) { return g.mods[i][k]; });
      score += 40 * match(function (k) { return g.mods[k][i]; });
    }
    // rule 4: dark/light balance
    var dark = 0;
    for (i = 0; i < n; i++) for (j = 0; j < n; j++) if (g.mods[i][j]) dark++;
    score += Math.floor(Math.abs(dark * 100 / (n * n) - 50) / 5) * 10;
    return score;
  }

  /* Returns a 2D array of booleans. ecl is "L" or "M". */
  function encode(text, ecl) {
    ecl = ecl === "M" ? "M" : "L";
    var bytes = utf8Bytes(text), version = 0;
    for (var v = 1; v <= 40; v++) {
      var lenBits = v < 10 ? 8 : 16;
      if (capacity(v, ecl) * 8 >= 4 + lenBits + bytes.length * 8) { version = v; break; }
    }
    if (!version) throw new Error("Too much data for one QR code.");

    var payload = interleave(version, ecl, createData(version, ecl, bytes));
    var best = null, bestScore = Infinity;
    for (var mask = 0; mask < 8; mask++) {
      var g = makeMatrix(version);
      setFunctionPatterns(g, version);
      placeData(g, payload);
      for (var r = 0; r < g.size; r++) for (var c = 0; c < g.size; c++) {
        if (!g.reserved[r][c] && maskFn(mask, r, c)) g.mods[r][c] = !g.mods[r][c];
      }
      setFormat(g, ecl, mask);
      var sc = penalty(g);
      if (sc < bestScore) { bestScore = sc; best = g; }
    }
    return best.mods.map(function (row) { return row.map(function (v) { return !!v; }); });
  }

  return { encode: encode };
})();


/* ===========================================================================
   TREE REGISTER — every scan can be saved as a numbered, named tree, and each
   one gets a printable QR tag. Scanning that tag on ANY device shows the
   tree's details, because the details are encoded INTO the QR code itself.
   There is no database and no account: the QR code IS the record.

   HONEST LIMIT: a QR code holds at most about 2,900 characters. A photograph
   is tens of thousands. So the tag carries the tree's DETAILS but not its
   PICTURE. The photo is kept in this browser's own storage, so you see it in
   your own register; someone scanning the tag elsewhere sees everything
   except the photo.
   =========================================================================== */
const REGISTER_KEY = "campuscarbon-tree-register";
const REGISTER_THUMB_PX = 320;   // small enough that ~150 trees fit in storage
const TAG_PHOTO_PX = 48;         // the picture that fits INSIDE a QR code

function getRegister() {
  try { const raw = localStorage.getItem(REGISTER_KEY); return raw ? JSON.parse(raw) : []; }
  catch (e) { return []; }
}
function saveRegister(list) {
  try { localStorage.setItem(REGISTER_KEY, JSON.stringify(list)); return true; }
  catch (e) { return false; }   // quota exceeded
}

/* Shrink a scan photo down to a thumbnail. Full photos would fill the
   browser's ~5 MB of storage after about 30 trees. */
function makeThumb(dataUrl, cb) {
  try {
    const img = new Image();
    img.onload = function () {
      // Big thumbnail: shown on the card in this device's register.
      const scale = Math.min(1, REGISTER_THUMB_PX / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * scale);
      cv.height = Math.round(img.height * scale);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);

      // Tiny square: small enough to travel inside the QR code itself.
      const sq = document.createElement("canvas");
      sq.width = sq.height = TAG_PHOTO_PX;
      const side = Math.min(img.width, img.height);
      sq.getContext("2d").drawImage(
        img, (img.width - side) / 2, (img.height - side) / 2, side, side,
        0, 0, TAG_PHOTO_PX, TAG_PHOTO_PX
      );
      const tagPhoto = sq.toDataURL("image/jpeg", 0.3).replace(/^data:image\/jpeg;base64,/, "");

      cb(cv.toDataURL("image/jpeg", 0.6), tagPhoto);
    };
    img.onerror = function () { cb(null, null); };
    img.src = dataUrl;
  } catch (e) { cb(null, null); }
}

/* Compact record for the QR code.
   A pipe-delimited string, NOT JSON. JSON key names and quotes cost about
   130 characters here, which pushed the code to version 12 — dense enough
   that it failed to scan when printed small or held at an angle. Stripping
   that overhead brings it down to a version that reads easily in the field.
   Order matters and must never be rearranged; the leading "1" is a format
   version so older tags keep working if this ever changes. */
const HABIT_CODE = { Tree: "T", Palm: "P", Shrub: "S", Herb: "H", Climber: "C", Creeper: "R", Grass: "G", Bamboo: "B", Succulent: "U", "Aquatic plant": "A", Fern: "F", Plant: "O" };
const CODE_HABIT = (function () { const m = {}; for (const k in HABIT_CODE) m[HABIT_CODE[k]] = k; return m; })();
const SITE_CODE = { open: "o", normal: "n", shaded: "s", poor: "p", pot: "t" };
const CODE_SITE = (function () { const m = {}; for (const k in SITE_CODE) m[SITE_CODE[k]] = k; return m; })();

function cleanField(v) {
  return String(v == null ? "" : v).replace(/[|]/g, "/").replace(/\s+/g, " ").trim();
}

function treeToPayload(t, photo) {
  // "roughly 13 to 25 years" -> "13-25", saving 17 characters
  let age = cleanField(t.ageText).replace(/roughly\s*/i, "").replace(/about\s*/i, "")
    .replace(/\s*to\s*/i, "-").replace(/\s*years?/i, "");
  return [
    "1",
    cleanField(t.number),
    cleanField(t.name),
    cleanField(t.commonName),
    cleanField(t.botanicalName),
    cleanField(t.tamilName),
    HABIT_CODE[t.habit] || "",
    cleanField(t.date).replace(/-/g, "").slice(2),   // 2026-08-15 -> 260815
    t.girthCm ? String(Math.round(t.girthCm)) : "",
    t.heightM ? String(Math.round(t.heightM * 10) / 10) : "",
    age,
    t.co2Kg ? String(Math.round(t.co2Kg)) : "",
    t.o2Kg ? String(Math.round(t.o2Kg)) : "",
    SITE_CODE[t.site] || "",
    photo || "",          // field 14: a tiny JPEG, base64, no data: prefix
  ].join("|");
}

function payloadToTree(str) {
  const f = String(str).split("|");
  const d = f[7] || "";
  const num = function (x) { const n = Number(x); return isFinite(n) && n > 0 ? n : null; };
  return {
    number: f[1] || "",
    name: f[2] || "",
    commonName: f[3] || "",
    botanicalName: f[4] || "",
    tamilName: f[5] || "",
    habit: CODE_HABIT[f[6]] || "",
    date: d.length === 6 ? "20" + d.slice(0, 2) + "-" + d.slice(2, 4) + "-" + d.slice(4, 6) : "",
    girthCm: num(f[8]),
    heightM: num(f[9]),
    ageText: f[10] ? "roughly " + f[10].replace("-", " to ") + " years" : "",
    co2Kg: num(f[11]),
    o2Kg: num(f[12]),
    site: CODE_SITE[f[13]] || "",
    photo: f[14] ? "data:image/jpeg;base64," + f[14] : null,
  };
}

/* URL-safe base64 that survives UTF-8 (Tamil names) intact. */
function b64urlEncode(str) {
  const b = btoa(unescape(encodeURIComponent(str)));
  return b.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
function b64urlDecode(str) {
  let b = String(str).replace(/-/g, "+").replace(/_/g, "/");
  while (b.length % 4) b += "=";
  return decodeURIComponent(escape(atob(b)));
}

function treeTagURL(t, photo) {
  const base = location.origin + location.pathname;
  return base + "#tree=" + b64urlEncode(treeToPayload(t, photo));
}

/* A QR code holds about 2,900 characters, so a full photo can never fit — but
   a very small one can. A 48x48 thumbnail lands around version 20, which still
   decodes reliably. Anything denser than version 20 gets hard to scan in real
   life, so we shrink the picture until it fits, and drop it if it never does. */
const TAG_MAX_VERSION = 20;

function tagModulesFor(t, photo) {
  const url = treeTagURL(t, photo);
  const mods = QR.encode(url, "L");
  return { mods: mods, version: (mods.length - 17) / 4 };
}

function buildTagModules(t, wantPhoto) {
  if (wantPhoto && t.tagPhoto) {
    try {
      const r = tagModulesFor(t, t.tagPhoto);
      if (r.version <= TAG_MAX_VERSION) return { mods: r.mods, withPhoto: true, version: r.version };
    } catch (e) { /* too big — fall through to details only */ }
  }
  const r = tagModulesFor(t, null);
  return { mods: r.mods, withPhoto: false, version: r.version };
}

/* Draw the QR plus the tree number and name onto a canvas, so the printed
   tag is useful even before anyone scans it. */
function buildTagCanvas(t, wantPhoto) {
  let built;
  try { built = buildTagModules(t, wantPhoto); }
  catch (e) { return null; }
  const mods = built.mods;

  const n = mods.length, quiet = 4, cell = 8;
  const qrPx = (n + quiet * 2) * cell;
  const pad = 24, textH = 96;
  const cv = document.createElement("canvas");
  cv.width = qrPx + pad * 2;
  cv.height = qrPx + pad * 2 + textH;
  const g = cv.getContext("2d");
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, cv.width, cv.height);
  g.fillStyle = "#000000";
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (mods[r][c]) g.fillRect(pad + (c + quiet) * cell, pad + (r + quiet) * cell, cell, cell);
    }
  }
  g.fillStyle = "#0b3d2c";
  g.textAlign = "center";
  g.font = "bold 30px Inter, Arial, sans-serif";
  g.fillText(String(t.number || "").slice(0, 18), cv.width / 2, qrPx + pad + 34);
  g.font = "22px Inter, Arial, sans-serif";
  g.fillStyle = "#3f5c50";
  g.fillText(String(t.name || t.commonName || "").slice(0, 26), cv.width / 2, qrPx + pad + 66);
  g.font = "16px Inter, Arial, sans-serif";
  g.fillStyle = "#7a8f85";
  g.fillText("CampusCarbon" + (built.withPhoto ? " · photo tag" : ""), cv.width / 2, qrPx + pad + 90);
  cv.dataWithPhoto = built.withPhoto;
  return cv;
}

function downloadTag(id, wantPhoto) {
  const t = getRegister().find(function (x) { return x.id === id; });
  if (!t) return;
  const cv = buildTagCanvas(t, wantPhoto);
  if (!cv) { alert("Could not build the QR tag for this tree."); return; }
  if (wantPhoto && !cv.dataWithPhoto) {
    alert("This tree's details are too long to fit a photo in the QR code as well, so the tag was made without it.");
  }
  const a = document.createElement("a");
  a.href = cv.toDataURL("image/png");
  a.download = "tree-tag-" + String(t.number || t.id).replace(/[^\w-]/g, "") + (wantPhoto && cv.dataWithPhoto ? "-photo" : "") + ".png";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

/* ---- campus totals ---- */
function registerTotals(list) {
  let co2 = 0, o2 = 0, withCarbon = 0;
  const species = {};
  list.forEach(function (t) {
    if (t.co2Kg) { co2 += t.co2Kg; withCarbon++; }
    if (t.o2Kg) o2 += t.o2Kg;
    const key = t.commonName || t.botanicalName || "Unidentified";
    species[key] = (species[key] || 0) + 1;
  });
  return { count: list.length, co2Kg: co2, o2Kg: o2, withCarbon: withCarbon, species: species };
}


/* ---------------------------------------------------------------------- */
/* Tree Register — screens                                                 */
/* ---------------------------------------------------------------------- */
let registerState = { open: null, saving: false, msg: "" };

function fmtTotal(kg) {
  if (!isFinite(kg) || !kg) return "0 kg";
  if (kg >= 1000) return (kg / 1000).toFixed(2) + " t";
  return Math.round(kg) + " kg";
}

function registerHTML() {
  if (registerState.open) return registerDetailHTML(registerState.open);

  const list = getRegister();
  const tot = registerTotals(list);

  if (!list.length) {
    return `
      <div class="app-header">
        <h2>Tree Register</h2>
        <p>Every tree you scan can be saved here with a number and a name, and each one gets a printable QR tag. Anyone who scans that tag sees the tree's details — no app and no account needed.</p>
      </div>
      <div class="panel" style="text-align:center;padding:36px 20px">
        <h3 style="margin:0 0 8px;font-size:15px">No trees recorded yet</h3>
        <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.65;margin:0 0 18px">
          Go to <b>Scan Plant</b>, photograph a tree, and tap <b>Save to Tree Register</b> at the bottom of the result.
        </p>
        <button class="btn-gradient" data-goto-scan>Scan a tree</button>
      </div>`;
  }

  const speciesRows = Object.keys(tot.species)
    .sort(function (a, b) { return tot.species[b] - tot.species[a]; })
    .map(function (k) { return `<span class="scan-pill" style="margin:0 6px 6px 0;display:inline-block">${esc(k)} &times;${tot.species[k]}</span>`; })
    .join("");

  const cards = list.slice().reverse().map(function (t) {
    return `
      <button class="panel" data-open-tree="${esc(t.id)}" style="text-align:left;cursor:pointer;padding:0;overflow:hidden;border:1px solid var(--line)">
        ${t.thumb
          ? `<img src="${esc(t.thumb)}" alt="" style="width:100%;height:120px;object-fit:cover;display:block">`
          : `<div style="height:120px;background:#eef3f0;display:flex;align-items:center;justify-content:center;color:var(--ink-soft);font-size:12px">No photo</div>`}
        <div style="padding:12px 14px">
          <div style="font-size:12px;color:var(--ink-soft);letter-spacing:.04em">${esc(t.number || "—")}</div>
          <div style="font-weight:600;font-size:14px;margin:2px 0 4px">${esc(t.name || t.commonName || "Unnamed tree")}</div>
          <div style="font-size:12.5px;color:var(--ink-soft)">${esc(t.commonName || "")}${t.co2Kg ? " · " + fmtTotal(t.co2Kg) + " CO2" : ""}</div>
        </div>
      </button>`;
  }).join("");

  return `
    <div class="app-header">
      <h2>Tree Register</h2>
      <p>${list.length} tree${list.length === 1 ? "" : "s"} recorded on this device. Tap any card for its details and printable QR tag.</p>
    </div>

    <div class="panel">
      <h3 style="margin:0 0 14px;font-size:15px">Campus totals</h3>
      <div class="scan-row"><span>Trees recorded</span><b>${tot.count}</b></div>
      <div class="scan-row"><span>CO<sub>2</sub> stored</span><b>${fmtTotal(tot.co2Kg)}</b></div>
      <div class="scan-row"><span>Oxygen released</span><b>${fmtTotal(tot.o2Kg)}</b></div>
      <div style="margin-top:14px">${speciesRows}</div>
      <p style="font-size:12px;color:var(--ink-soft);line-height:1.6;margin:14px 0 0">
        Totals cover the ${tot.withCarbon} tree${tot.withCarbon === 1 ? "" : "s"} that had a carbon figure. Palms, shrubs, herbs and creepers are counted in the tree total but contribute no stored carbon — only long-lived woody growth is counted as sequestration.
      </p>
      <div style="margin-top:16px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn-solid" data-export-register>Download inventory (PDF)</button>
        <button class="btn-ghost-dark" data-goto-scan>Add another tree</button>
      </div>
    </div>

    <div class="reg-grid">${cards}</div>

    <p style="font-size:12px;color:var(--ink-soft);line-height:1.6;margin:18px 2px 0">
      This register is stored in this browser on this device only. Clearing your browser data will erase it, and it will not appear on another phone. Download the PDF to keep a permanent copy. The QR tags work anywhere, because each tag carries its own tree's details inside it.
    </p>`;
}

function registerDetailHTML(id) {
  const t = getRegister().find(function (x) { return x.id === id; });
  if (!t) { registerState.open = null; return registerHTML(); }

  const row = (label, val) => val
    ? `<div class="scan-row"><span>${label}</span><b>${esc(String(val))}</b></div>` : "";

  return `
    <div class="app-header">
      <button class="btn-ghost-dark" data-reg-back style="margin-bottom:14px">&larr; All trees</button>
      <h2>${esc(t.name || t.commonName || "Tree")}</h2>
      <p>${esc(t.number || "")}${t.date ? " · recorded " + esc(t.date) : ""}</p>
    </div>

    ${t.thumb ? `<div class="panel" style="padding:0;overflow:hidden"><img src="${esc(t.thumb)}" alt="" style="width:100%;display:block"></div>` : ""}

    <div class="panel">
      <h3 style="margin:0 0 12px;font-size:15px">Details</h3>
      ${row("Tree number", t.number)}
      ${row("Name", t.name)}
      ${row("Species", t.commonName)}
      ${row("Botanical name", t.botanicalName)}
      ${row("Tamil name", t.tamilName)}
      ${row("Growth habit", t.habit)}
      ${row("Trunk girth", t.girthCm ? Math.round(t.girthCm) + " cm" : "")}
      ${row("Height", t.heightM ? Number(t.heightM).toFixed(1) + " m" : "")}
      ${row("Estimated age", t.ageText)}
      ${row("CO2 stored", t.co2Kg ? fmtTotal(t.co2Kg) : "")}
      ${row("Oxygen released", t.o2Kg ? fmtTotal(t.o2Kg) : "")}
      ${row("Recorded", t.date)}
    </div>

    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">QR tag for this tree</h3>
      <p style="font-size:13px;color:var(--ink-soft);line-height:1.65;margin:0 0 16px">
        Print this, laminate it, and tie it to the trunk. Anyone can scan it with Google Lens or any QR reader and see this tree's details. The details are stored inside the code itself, so it works with no internet and no app.
      </p>
      <div id="reg-qr" style="text-align:center;padding:10px 0"></div>
      <div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn-solid" data-download-tag="${esc(t.id)}">Download tag</button>
        ${t.tagPhoto ? `<button class="btn-solid" data-download-tag-photo="${esc(t.id)}">Download tag with photo</button>` : ""}
        <button class="btn-ghost-dark" data-delete-tree="${esc(t.id)}">Remove this tree</button>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);line-height:1.6;margin:14px 0 0">
        The tag carries the tree's details but not its photograph — a QR code holds a few thousand characters and a photo is far larger. The photo stays on this device.
      </p>
    </div>`;
}

/* The view someone gets after scanning a tree tag.
   Deliberately read-only and standalone: no tabs, no calculator, nothing to
   click into. Somebody standing at a tree with their phone wants to see that
   tree, not be dropped into an app they did not ask for. */
function passportHTML(t) {
  const local = getRegister().find(function (x) {
    return x.number && t.number && x.number === t.number;
  });
  // Best picture available: the full one if this is the device that recorded
  // it, otherwise the tiny one carried inside the QR code itself.
  const photo = (local && local.thumb) || t.photo || null;
  const tiny = !(local && local.thumb) && !!t.photo;

  const row = (label, val) => val
    ? `<div class="scan-row"><span>${label}</span><b>${esc(String(val))}</b></div>` : "";

  return `
    <div class="passport">
      <div class="passport-head">
        <span class="passport-num">${esc(t.number || "Tree")}</span>
        <h1>${esc(t.name || t.commonName || "Tree")}</h1>
        ${t.commonName ? `<p>${esc(t.commonName)}${t.botanicalName ? " · <i>" + esc(t.botanicalName) + "</i>" : ""}</p>` : ""}
      </div>

      ${photo ? `<div class="passport-photo">
        <img src="${esc(photo)}" alt="${esc(t.name || "Tree")}"${tiny ? ' style="image-rendering:auto;filter:saturate(1.05)"' : ""}>
        ${tiny ? `<span class="passport-photo-note">Small photo carried inside the QR tag</span>` : ""}
      </div>` : ""}

      <div class="passport-card">
        ${row("Tamil name", t.tamilName)}
        ${row("Growth habit", t.habit)}
        ${row("Trunk girth", t.girthCm ? t.girthCm + " cm" : "")}
        ${row("Height", t.heightM ? t.heightM + " m" : "")}
        ${row("Estimated age", t.ageText)}
        ${row("CO2 stored", t.co2Kg ? fmtTotal(t.co2Kg) : "")}
        ${row("Oxygen released", t.o2Kg ? fmtTotal(t.o2Kg) : "")}
        ${row("Recorded", t.date)}
      </div>

      <p class="passport-note">
        Ages and carbon figures are approximate estimates, not measurements. Stored CO<sub>2</sub> is not a tradable carbon credit.
      </p>

      <div class="passport-foot">
        <span>CampusCarbon tree tag</span>
        <button class="btn-ghost-dark" data-passport-exit>Open the full site</button>
      </div>
    </div>`;
}

function bindRegisterEvents() {
  const q = function (sel) { return document.querySelector(sel); };

  document.querySelectorAll("[data-goto-scan]").forEach(function (b) {
    b.addEventListener("click", function () { registerState.open = null; goToTab("scan"); });
  });
  document.querySelectorAll("[data-open-tree]").forEach(function (b) {
    b.addEventListener("click", function () { registerState.open = b.dataset.openTree; renderAppContent(); });
  });
  const back = q("[data-reg-back]");
  if (back) back.addEventListener("click", function () { registerState.open = null; renderAppContent(); });

  const exit = q("[data-passport-exit]");
  if (exit) exit.addEventListener("click", function () {
    state.passport = null;
    if (location.hash) history.replaceState(null, "", location.pathname);
    renderAppContent();
  });

  const dl = q("[data-download-tag]");
  if (dl) dl.addEventListener("click", function () { downloadTag(dl.dataset.downloadTag, false); });
  const dlp = q("[data-download-tag-photo]");
  if (dlp) dlp.addEventListener("click", function () { downloadTag(dlp.dataset.downloadTagPhoto, true); });

  const del = q("[data-delete-tree]");
  if (del) del.addEventListener("click", function () {
    const id = del.dataset.deleteTree;
    const list = getRegister().filter(function (x) { return x.id !== id; });
    saveRegister(list);
    registerState.open = null;
    renderAppContent();
  });

  const exp = q("[data-export-register]");
  if (exp) exp.addEventListener("click", exportRegisterPDF);

  // Draw the QR into the detail view
  const holder = document.getElementById("reg-qr");
  if (holder && registerState.open) {
    const t = getRegister().find(function (x) { return x.id === registerState.open; });
    if (t) {
      const cv = buildTagCanvas(t, false);
      if (cv) {
        cv.style.maxWidth = "260px";
        cv.style.width = "100%";
        cv.style.height = "auto";
        cv.style.border = "1px solid var(--line)";
        cv.style.borderRadius = "10px";
        holder.appendChild(cv);
      } else {
        holder.innerHTML = '<p style="font-size:13px;color:#b3261e">This tree has too much detail to fit in one QR code.</p>';
      }
    }
  }
}

/* ---- Save a finished scan into the register ---- */
function saveScanToRegister(number, name) {
  const r = scanState.result || {};
  const id = r.identification || {};
  const meas = r.measured || {};
  const gf = lookupGrowthFactor(id);
  const wd = lookupWoodDensity(id);
  const site = siteInfo(meas.site);
  const habit = habitInfo(id.growthHabit);

  let ageText = "", co2 = null, o2 = null;
  const dims = id.dimensions || {};
  const girth = Number(meas.girthCm) || (Number(dims.trunkDiameterCm) > 0 ? Number(dims.trunkDiameterCm) * Math.PI : null);
  const height = Number(meas.heightM) || Number(dims.heightM) || Number(id.typicalHeightM) || null;

  if (habit && habit.carbon && girth && !girthLooksWrong(girth)) {
    const m = treeMetrics(girth, height, gf.low, gf.high, wd.rho);
    if (m) {
      let lo = m.ageLow, hi = m.ageHigh;
      if (lo && hi && site.mult !== 1) { lo *= site.mult; hi *= site.mult; }
      if (id.looksOlderThanGirth === true && hi) hi *= 1.5;
      ageText = ageRangeText(lo, hi) || "";
      if (m.carbon) { co2 = m.carbon.co2Kg; o2 = m.carbon.o2Kg; }
    }
  } else if (id.agingMethod === "palm" && height) {
    const p = palmMetrics(height, Number(meas.scarsPerMetre) || null, id.palmLeavesPerYear, id.palmPreTrunkYears);
    if (p) ageText = ageRangeText(p.ageLow, p.ageHigh) || "";
  }

  const record = {
    id: "t" + Date.now() + Math.floor(Math.random() * 1000),
    number: String(number || "").slice(0, 20),
    name: String(name || "").slice(0, 40),
    commonName: id.commonName || "",
    botanicalName: id.botanicalName || "",
    tamilName: id.tamilName || "",
    habit: habit ? habit.label : "",
    girthCm: girth || null,
    heightM: height || null,
    site: meas.site || "",
    ageText: ageText,
    co2Kg: co2,
    o2Kg: o2,
    date: new Date().toISOString().slice(0, 10),
    thumb: null,
    tagPhoto: null,
  };

  const first = SCAN_SLOTS.map(function (sl) { return scanState.photos[sl.key]; }).filter(Boolean)[0];
  const finish = function () {
    const list = getRegister();
    list.push(record);
    if (!saveRegister(list)) {
      // Storage full — keep the record but drop the big photo to make room.
      record.thumb = null;
      if (!saveRegister(list)) {
        alert("This device's storage is full. Download the inventory PDF, then remove some trees.");
        return;
      }
    }
    registerState.open = record.id;
    goToTab("register");
  };

  if (first && first.data) {
    makeThumb(first.data, function (th, tagPhoto) {
      record.thumb = th;
      record.tagPhoto = tagPhoto;
      finish();
    });
  } else finish();
}

/* ---- Inventory PDF ---- */
function exportRegisterPDF() {
  if (!window.jspdf) { alert("PDF library failed to load — check your internet connection."); return; }
  const list = getRegister();
  if (!list.length) return;
  const tot = registerTotals(list);
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18); doc.setTextColor(11, 61, 44);
  doc.text("Campus Carbon Inventory", 14, 20);
  doc.setFontSize(10); doc.setTextColor(90, 90, 90);
  doc.text("Generated by CampusCarbon on " + new Date().toISOString().slice(0, 10), 14, 27);

  doc.setFontSize(11); doc.setTextColor(20, 20, 20);
  let y = 40;
  doc.text("Trees recorded: " + tot.count, 14, y); y += 7;
  doc.text("CO2 stored: " + fmtTotal(tot.co2Kg), 14, y); y += 7;
  doc.text("Oxygen released: " + fmtTotal(tot.o2Kg), 14, y); y += 10;

  doc.setFontSize(9); doc.setTextColor(90, 90, 90);
  const wrap = doc.splitTextToSize(
    "Ages and carbon figures are approximate estimates calculated from trunk measurements using the Chave et al. 2014 pantropical allometric equation. They are not measurements, and stored CO2 is not a tradable carbon credit — credits under CCTS require verified, additional projects. Only woody trees contribute stored carbon; palms, shrubs, herbs and creepers are listed but contribute none.", 182);
  doc.text(wrap, 14, y); y += wrap.length * 4 + 6;

  doc.setFontSize(10); doc.setTextColor(20, 20, 20);
  doc.text("No.", 14, y); doc.text("Name", 34, y); doc.text("Species", 78, y);
  doc.text("Age", 130, y); doc.text("CO2", 168, y);
  y += 2; doc.setDrawColor(200); doc.line(14, y, 196, y); y += 6;

  doc.setFontSize(9);
  list.forEach(function (t) {
    if (y > 275) { doc.addPage(); y = 20; }
    doc.text(String(t.number || "-").slice(0, 10), 14, y);
    doc.text(String(t.name || "-").slice(0, 22), 34, y);
    doc.text(String(t.commonName || "-").slice(0, 26), 78, y);
    doc.text(String(t.ageText || "-").replace("roughly ", "").slice(0, 18), 130, y);
    doc.text(t.co2Kg ? fmtTotal(t.co2Kg) : "-", 168, y);
    y += 6;
  });

  doc.save("campus-carbon-inventory-" + new Date().toISOString().slice(0, 10) + ".pdf");
}

/* ---- A QR tag was scanned: #tree=... ---- */
function readTreeTagFromURL() {
  try {
    const m = (location.hash || "").match(/[#&]tree=([^&]+)/);
    if (!m) return null;
    return payloadToTree(b64urlDecode(m[1]));
  } catch (e) { return null; }
}

/* ---------------------------------------------------------------------- */
const APP_TABS = [
  { id: "calc", label: "Calculator", icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>' },
  { id: "track", label: "Track Growth", icon: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>' },
  { id: "apply", label: "Apply", icon: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>' },
  { id: "plan", label: "Plan a Project", icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
  { id: "help", label: "Help Assistant", icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' },
  { id: "scan", label: "Scan Plant", icon: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>' },
  { id: "register", label: "Tree Register", icon: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM18 18h3v3h-3z"/>' },
];

function appShellHTML() {
  return `
    <div class="app-shell">
      <div class="app-subnav">
        <div class="app-subnav-wrap">
          ${APP_TABS.map(
            (tb) => `
            <button class="app-tab-btn${state.tab === tb.id ? " active" : ""}" data-apptab="${tb.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${tb.icon}</svg>
              ${tb.label}
            </button>`
          ).join("")}
        </div>
      </div>
      <div class="app-content" id="app-content"></div>
    </div>`;
}

function bindAppShellEvents() {
  document.querySelectorAll("[data-apptab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.apptab;
      renderAppContent();
      document.querySelectorAll("[data-apptab]").forEach((b) => b.classList.toggle("active", b === btn));
    });
  });
  renderAppContent();
}

function renderAppContent() {
  const el = document.getElementById("app-content");
  // A scanned tree tag takes over the page completely — read-only, no tabs.
  const nav = document.querySelector(".app-subnav");
  if (state.passport) {
    if (nav) nav.style.display = "none";
    el.innerHTML = passportHTML(state.passport);
    bindRegisterEvents();
    if (window.scrollTo) window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }
  if (nav) nav.style.display = "";
  if (state.tab === "calc") { el.innerHTML = calcHTML(); bindCalcEvents(); updateCalcResults(); }
  else if (state.tab === "track") { el.innerHTML = trackHTML(); bindTrackEvents(); }
  else if (state.tab === "apply") { el.innerHTML = applyHTML(); }
  else if (state.tab === "plan") { el.innerHTML = planHTML(); bindPlanEvents(); updatePlanResults(); }
  else if (state.tab === "help") { el.innerHTML = helpHTML(); bindHelpEvents(); }
  else if (state.tab === "scan") { el.innerHTML = scanHTML(); bindScanEvents(); }
  else if (state.tab === "register") { el.innerHTML = registerHTML(); bindRegisterEvents(); }
  if (window.scrollTo) window.scrollTo({ top: document.querySelector(".app-subnav").offsetHeight, behavior: "auto" });
}

/* ============================================================
   CALCULATOR TAB
   ============================================================ */
function calcHTML() {
  const c = state.calc;
  return `
    <div class="app-header">
      <h2>Carbon Credit Calculator</h2>
      <p>Estimate approximate carbon credits (tCO2e/year) and their value, based on published emission factors.</p>
    </div>

    <div class="panel">
      <div class="field-grid">
        <div class="field">
          <label>Activity type</label>
          <select id="cc-activity">
            <option value="trees" ${c.activity === "trees" ? "selected" : ""}>Trees</option>
            <option value="biogas" ${c.activity === "biogas" ? "selected" : ""}>Biogas unit</option>
            <option value="solar" ${c.activity === "solar" ? "selected" : ""}>Solar panel</option>
          </select>
        </div>
        <div class="field">
          <label>Assumed price per credit (₹)</label>
          <input type="number" id="cc-price" value="${esc(c.price)}">
        </div>
      </div>
      <div class="field-grid mt-16" id="cc-fields">${calcFieldsHTML()}</div>

      <div class="result-strip">
        <div class="result-tile"><span>Approx. credits / year</span><b id="cc-credits">0.00 tCO2e</b></div>
        <div class="result-tile"><span>Approx. value / year</span><b id="cc-value">₹0</b></div>
      </div>

      <div class="formula-box" id="cc-formula"></div>

      <div class="note-banner">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span>This is only an estimate based on published emission factors. Actual credits depend on verification by an Accredited Carbon Verification Agency (ACVA).</span>
      </div>
    </div>`;
}

function calcFieldsHTML() {
  const c = state.calc;
  if (c.activity === "trees") {
    return `
      <div class="field"><label>Number of trees</label><input type="number" id="cc-numTrees" value="${esc(c.numTrees)}"></div>
      <div class="field"><label>Years since planting</label><input type="number" id="cc-yearsPlanted" value="${esc(c.yearsPlanted)}"></div>`;
  }
  if (c.activity === "biogas") {
    return `<div class="field"><label>Number of biogas units</label><input type="number" id="cc-numBiogas" value="${esc(c.numBiogas)}"></div>`;
  }
  return `
    <div class="field"><label>Solar capacity (kW)</label><input type="number" id="cc-solarCapacity" value="${esc(c.solarCapacity)}"></div>
    <div class="field"><label>Average sun hours per day</label><input type="number" id="cc-sunHours" value="${esc(c.sunHours)}"></div>`;
}

function computeCredits(activity, c) {
  const n = (v) => Number(v) || 0;
  if (activity === "trees") {
    const trees = n(c.numTrees), years = n(c.yearsPlanted);
    const maturity = Math.min(years / CALC.TREE_MATURITY_YEARS, 1);
    return (trees * CALC.TREE_KG_PER_YEAR_MATURE * maturity) / 1000;
  }
  if (activity === "biogas") return n(c.numBiogas) * CALC.BIOGAS_TCO2E_PER_UNIT;
  if (activity === "solar") {
    const cap = n(c.solarCapacity), hrs = n(c.sunHours);
    const kwh = cap * hrs * CALC.SOLAR_DAYS_PER_YEAR;
    return (kwh * CALC.GRID_EMISSION_FACTOR) / 1000;
  }
  return 0;
}

function bindCalcEvents() {
  document.getElementById("cc-activity").addEventListener("change", (e) => {
    state.calc.activity = e.target.value;
    document.getElementById("cc-fields").innerHTML = calcFieldsHTML();
    bindCalcFieldEvents();
    updateCalcResults();
  });
  document.getElementById("cc-price").addEventListener("input", (e) => {
    state.calc.price = Number(e.target.value) || 0;
    updateCalcResults();
  });
  bindCalcFieldEvents();
}
function bindCalcFieldEvents() {
  ["numTrees", "yearsPlanted", "numBiogas", "solarCapacity", "sunHours"].forEach((k) => {
    const el = document.getElementById("cc-" + k);
    if (el) el.addEventListener("input", (e) => { state.calc[k] = e.target.value; updateCalcResults(); });
  });
}
function updateCalcResults() {
  const c = state.calc;
  const credits = computeCredits(c.activity, c);
  const value = credits * c.price;
  document.getElementById("cc-credits").textContent = credits.toFixed(2) + " tCO2e";
  document.getElementById("cc-value").textContent = inr(value);
  document.getElementById("cc-formula").innerHTML = calcFormulaHTML(c.activity, c, credits, value);
}
function calcFormulaHTML(activity, c, credits, value) {
  const n = (v) => Number(v) || 0;
  let rows = [];
  if (activity === "trees") {
    const trees = n(c.numTrees), years = n(c.yearsPlanted);
    const maturity = Math.min(years / CALC.TREE_MATURITY_YEARS, 1);
    rows = [
      `Number of trees × ${CALC.TREE_KG_PER_YEAR_MATURE} kg CO2e/tree/yr`,
      `${trees} × ${CALC.TREE_KG_PER_YEAR_MATURE} = ${(trees * CALC.TREE_KG_PER_YEAR_MATURE).toFixed(0)} kg/yr`,
      `× maturity (${years}/${CALC.TREE_MATURITY_YEARS} yrs, capped at 1) = × ${maturity.toFixed(2)}`,
      `÷ 1000 (kg → tCO2e) = ${credits.toFixed(2)} tCO2e/yr`,
    ];
  } else if (activity === "biogas") {
    const units = n(c.numBiogas);
    rows = [
      `Number of units × ${CALC.BIOGAS_TCO2E_PER_UNIT} tCO2e/unit/yr (indicative)`,
      `${units} × ${CALC.BIOGAS_TCO2E_PER_UNIT} = ${credits.toFixed(2)} tCO2e/yr`,
    ];
  } else {
    const cap = n(c.solarCapacity), hrs = n(c.sunHours);
    const kwh = cap * hrs * CALC.SOLAR_DAYS_PER_YEAR;
    rows = [
      `Solar capacity × sun hours × ${CALC.SOLAR_DAYS_PER_YEAR} days`,
      `${cap} kW × ${hrs} hrs × ${CALC.SOLAR_DAYS_PER_YEAR} = ${kwh.toFixed(0)} kWh/yr`,
      `× ${CALC.GRID_EMISSION_FACTOR} kg CO2/kWh (CEA grid factor, FY2024-25)`,
      `÷ 1000 (kg → tCO2e) = ${credits.toFixed(2)} tCO2e/yr`,
    ];
  }
  return rows.map((r) => `<div>${esc(r)}</div>`).join("") + `<div class="final">${credits.toFixed(2)} tCO2e/yr × ₹${c.price}/credit = ${inr(value)}</div>`;
}

/* ============================================================
   TRACK GROWTH TAB
   ============================================================ */
function trackHTML() {
  const entries = getEntries();
  const editing = state.trackEditingId ? entries.find((e) => e.id === state.trackEditingId) : null;
  const formActivity = editing ? editing.activity : "trees";
  return `
    <div class="app-header">
      <h2>Track Growth</h2>
      <p>Log each activity as you go — dates, quantities, photos, and notes. This becomes your evidence trail for verification.</p>
    </div>

    ${reminderHTML(entries)}
    ${totalsHTML(entries)}

    <div class="panel">
      <div class="field-grid">
        <div class="field"><label>Date</label><input type="date" id="tf-date" value="${esc(editing ? editing.date : "")}"></div>
        <div class="field"><label>Activity</label>
          <select id="tf-activity">
            <option value="trees" ${formActivity === "trees" ? "selected" : ""}>Trees</option>
            <option value="biogas" ${formActivity === "biogas" ? "selected" : ""}>Biogas</option>
            <option value="solar" ${formActivity === "solar" ? "selected" : ""}>Solar</option>
            <option value="other" ${formActivity === "other" ? "selected" : ""}>Other</option>
          </select>
        </div>
      </div>
      <div class="field-grid mt-16">
        <div class="field"><label>Quantity / count</label><input type="number" id="tf-qty" value="${esc(editing ? editing.quantity : "")}"></div>
        <div class="field"><label>Photo (optional)</label><input type="file" id="tf-photo" accept="image/*" capture="environment"></div>
      </div>
      <div class="field mt-16"><label>Notes</label><textarea id="tf-notes" rows="2">${esc(editing ? editing.notes : "")}</textarea></div>
      <div id="tf-photo-preview">${photoPreviewHTML(editing ? editing.photo : null)}</div>
      <div class="note-banner hidden" id="tf-error" style="color:#B23B2E">Please add a date and quantity.</div>
      <div class="flex gap-10 mt-16">
        <button class="btn-solid" id="tf-save">${editing ? "Update entry" : "Save entry"}</button>
        ${editing ? `<button class="btn-ghost-dark" id="tf-cancel">Cancel</button>` : ""}
      </div>
    </div>

    <div id="care-guide">${careGuideHTML(formActivity)}</div>

    <div class="entry-list" id="entry-list">
      ${entries.length === 0 ? `<div class="empty-state">No entries yet. Add your first one above.</div>` : entries.map(entryRowHTML).join("")}
    </div>`;
}

function photoPreviewHTML(photo) {
  if (!photo) return "";
  return `<div style="margin-top:10px;position:relative;display:inline-block">
    <img src="${photo}" style="width:84px;height:84px;object-fit:cover;border-radius:10px;border:1px solid var(--line)">
    <button type="button" id="tf-photo-remove" class="icon-btn" style="position:absolute;top:-8px;right:-8px;background:#fff;border-radius:50%">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
    </button>
  </div>`;
}

function totalsHTML(entries) {
  if (entries.length === 0) return "";
  const sums = { trees: 0, biogas: 0, solar: 0, other: 0 };
  entries.forEach((e) => { sums[e.activity in sums ? e.activity : "other"] += Number(e.quantity) || 0; });
  const chips = Object.keys(sums).filter((a) => sums[a] > 0).map(
    (a) => `<div style="display:flex;align-items:center;gap:6px;background:var(--paper);border-radius:999px;padding:8px 14px;font-size:12.5px">${activityIconSvg(a)} ${activityLabel(a)}: <strong class="mono">${sums[a]}</strong></div>`
  ).join("");
  return `<div class="panel" style="display:flex;flex-wrap:wrap;gap:10px;padding:16px 22px">${chips}</div>`;
}

function careGuideHTML(activity) {
  const c = CARE[activity];
  if (!c) return "";
  const rows = c.items.map((it) => `
    <div style="display:flex;gap:10px;align-items:flex-start;font-size:13px;padding:9px 0;border-bottom:1px solid var(--line)">
      <span style="flex-shrink:0;background:var(--paper);color:var(--forest-800);font-weight:700;font-size:11px;border-radius:6px;padding:3px 8px;white-space:nowrap">${esc(c.cadence[it.c])}</span>
      <span style="color:var(--ink-soft)">${esc(it.t)}</span>
    </div>`).join("");
  return `<div class="panel"><h3 style="font-size:15px;margin-bottom:10px">Care guide — ${esc(activityLabel(activity))}</h3>${rows}<div class="note-banner">${esc(c.note)}</div></div>`;
}

function reminderHTML(entries) {
  if (entries.length === 0) return "";
  const ts = Number(String(entries[0].id).slice(1));
  if (!ts) return "";
  const days = Math.floor((Date.now() - ts) / 86400000);
  if (days < 14) return "";
  return `<div class="note-banner" style="background:#FBF0E8;color:#8C4A22;margin-bottom:16px">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/></svg>
    <span>It's been ${days} days since your last entry. Try to log regularly for the strongest verification record.</span>
  </div>`;
}

function entryRowHTML(e) {
  return `
    <div class="entry-card">
      ${e.photo ? `<img class="entry-thumb" src="${e.photo}">` : `<div class="entry-icon">${activityIconSvg(e.activity)}</div>`}
      <div class="entry-body">
        <div class="entry-top"><strong>${esc(activityLabel(e.activity))}</strong><span class="entry-date">${esc(e.date)}</span></div>
        <div class="entry-qty">${esc(e.quantity)}</div>
        ${e.notes ? `<div class="entry-notes">${esc(e.notes)}</div>` : ""}
      </div>
      <div class="entry-actions">
        <button class="icon-btn" data-view="${esc(e.id)}" title="View">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
        <button class="icon-btn" data-savepdf="${esc(e.id)}" title="Save as PDF">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
        </button>
        <button class="icon-btn" data-edit="${esc(e.id)}" title="Edit">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
        </button>
        <button class="icon-btn" data-del="${esc(e.id)}" title="Delete">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/></svg>
        </button>
      </div>
    </div>`;
}

/* View entry in a modal */
function viewEntry(entry) {
  const content = document.getElementById("view-modal-content");
  content.innerHTML = `
    <div class="modal-icon">${activityIconSvg(entry.activity)}</div>
    <h3>${esc(activityLabel(entry.activity))} — ${esc(entry.date)}</h3>
    <div style="display:flex;flex-direction:column;gap:10px;margin:16px 0">
      <div style="display:flex;justify-content:space-between;font-size:13.5px;border-bottom:1px solid var(--line);padding-bottom:8px">
        <span style="color:var(--ink-soft)">Quantity</span><strong>${esc(entry.quantity)}</strong>
      </div>
      <div style="font-size:13.5px">
        <span style="color:var(--ink-soft)">Notes</span>
        <p style="margin-top:4px">${esc(entry.notes || "—")}</p>
      </div>
      ${entry.photo ? `<img src="${entry.photo}" style="width:100%;border-radius:12px;margin-top:4px">` : ""}
    </div>
    <button class="btn-solid full" id="view-modal-savepdf">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:2px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>
      Save as PDF
    </button>`;
  document.getElementById("view-modal-savepdf").addEventListener("click", () => saveEntryPDF(entry));
  document.getElementById("view-modal-backdrop").classList.add("open");
}

/* Save entry as a real downloadable PDF file (jsPDF) — no print dialog needed */
function saveEntryPDF(entry) {
  if (!window.jspdf) {
    alert("PDF library failed to load — check your internet connection and try again.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(17);
  doc.setTextColor(7, 33, 28);
  doc.text("CampusCarbon — Activity Record", 14, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(130);
  doc.text("Generated " + new Date().toLocaleDateString("en-IN"), 14, 27);

  let y = 42;
  const rows = [
    ["Activity", activityLabel(entry.activity)],
    ["Date", entry.date],
    ["Quantity", String(entry.quantity)],
    ["Notes", entry.notes || "-"],
  ];
  rows.forEach(([k, v]) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(20, 20, 20);
    doc.text(k + ":", 14, y);
    doc.setFont("helvetica", "normal");
    doc.text(String(v), 55, y, { maxWidth: 140 });
    y += 9;
  });

  if (entry.photo) {
    try {
      const fmt = entry.photo.includes("image/png") ? "PNG" : "JPEG";
      doc.addImage(entry.photo, fmt, 14, y + 4, 70, 70);
    } catch (err) {
      /* image failed to embed — PDF still saves without it */
    }
  }

  doc.save(`campuscarbon-${entry.activity}-${entry.date}.pdf`);
}

function bindTrackEvents() {
  document.getElementById("tf-activity").addEventListener("change", (e) => {
    document.getElementById("care-guide").innerHTML = careGuideHTML(e.target.value);
  });

  const photoInput = document.getElementById("tf-photo");
  photoInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    compressImageFile(file, (dataUrl) => {
      state.trackPendingPhoto = dataUrl;
      document.getElementById("tf-photo-preview").innerHTML = photoPreviewHTML(dataUrl);
      bindPhotoRemove();
    });
  });
  bindPhotoRemove();
  function bindPhotoRemove() {
    const btn = document.getElementById("tf-photo-remove");
    if (btn) btn.addEventListener("click", () => {
      state.trackPendingPhoto = null;
      state.trackPhotoRemoved = true;
      document.getElementById("tf-photo-preview").innerHTML = "";
    });
  }

  document.getElementById("tf-save").addEventListener("click", () => {
    const date = document.getElementById("tf-date").value;
    const activity = document.getElementById("tf-activity").value;
    const quantity = document.getElementById("tf-qty").value;
    const notes = document.getElementById("tf-notes").value;
    const errorEl = document.getElementById("tf-error");
    if (!date || !quantity) { errorEl.classList.remove("hidden"); return; }
    errorEl.classList.add("hidden");
    const entries = getEntries();

    if (state.trackEditingId) {
      const idx = entries.findIndex((en) => en.id === state.trackEditingId);
      if (idx !== -1) {
        const existingPhoto = entries[idx].photo || null;
        let newPhoto = existingPhoto;
        if (state.trackPendingPhoto) newPhoto = state.trackPendingPhoto;
        else if (state.trackPhotoRemoved) newPhoto = null;
        entries[idx] = { ...entries[idx], date, activity, quantity, notes, photo: newPhoto };
      }
      state.trackEditingId = null;
    } else {
      entries.unshift({ id: "e" + Date.now(), date, activity, quantity, notes, photo: state.trackPendingPhoto || null });
    }
    state.trackPendingPhoto = null;
    state.trackPhotoRemoved = false;
    saveEntries(entries);
    renderAppContent();
  });

  const cancelBtn = document.getElementById("tf-cancel");
  if (cancelBtn) cancelBtn.addEventListener("click", () => {
    state.trackEditingId = null;
    state.trackPendingPhoto = null;
    state.trackPhotoRemoved = false;
    renderAppContent();
  });

  document.getElementById("entry-list").addEventListener("click", (e) => {
    const delBtn = e.target.closest("[data-del]");
    if (delBtn) {
      saveEntries(getEntries().filter((en) => en.id !== delBtn.dataset.del));
      renderAppContent();
      return;
    }
    const editBtn = e.target.closest("[data-edit]");
    if (editBtn) {
      state.trackEditingId = editBtn.dataset.edit;
      state.trackPendingPhoto = null;
      state.trackPhotoRemoved = false;
      renderAppContent();
      return;
    }
    const printBtn = e.target.closest("[data-view]");
    if (printBtn) {
      const entry = getEntries().find((en) => en.id === printBtn.dataset.view);
      if (entry) viewEntry(entry);
      return;
    }
    const savePdfBtn = e.target.closest("[data-savepdf]");
    if (savePdfBtn) {
      const entry = getEntries().find((en) => en.id === savePdfBtn.dataset.savepdf);
      if (entry) saveEntryPDF(entry);
    }
  });
}

/* ============================================================
   APPLY TAB
   ============================================================ */
function applyHTML() {
  return `
    <div class="app-header">
      <h2>Apply for Carbon Credits</h2>
      <p>The full process for a university or institution, from choosing a project to trading your certificates.</p>
    </div>

    <div class="panel">
      <h3 style="font-size:16px;margin-bottom:6px">Step-by-step process</h3>
      ${APPLY_STEPS.map((s, i) => `
        <div class="step-row">
          <div class="step-num">${i + 1}</div>
          <div><h4>${esc(s.title)}</h4><p>${esc(s.desc)}</p></div>
        </div>`).join("")}
    </div>

    <div class="panel">
      <h3 style="font-size:16px;margin-bottom:6px">How to maintain your project</h3>
      ${infoRows(MAINTAIN_POINTS)}
    </div>

    <div class="panel">
      <h3 style="font-size:16px;margin-bottom:6px">How to get your CCC certificate</h3>
      ${infoRows(CERT_POINTS)}
    </div>

    <div class="panel">
      <h3 style="font-size:16px;margin-bottom:6px">How to sell or trade your credits</h3>
      ${infoRows(SELL_POINTS)}
    </div>

    <div class="panel">
      <h3 style="font-size:16px;margin-bottom:14px">Official links</h3>
      <div style="display:flex;flex-direction:column;gap:10px">
        ${OFFICIAL_LINKS.map((l) => `
          <a href="${esc(l.url)}" target="_blank" rel="noopener noreferrer" style="display:flex;align-items:center;justify-content:space-between;border:1.5px solid var(--forest-900);border-radius:10px;padding:13px 16px;font-weight:700;font-size:13.5px;color:var(--forest-900)">
            ${esc(l.label)}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>
          </a>`).join("")}
      </div>
    </div>`;
}
function infoRows(points) {
  return points.map((p) => `
    <div style="display:flex;gap:12px;padding:12px 0;border-bottom:1px solid var(--line);${p.warning ? "background:#FBF0E8;border-radius:10px;padding:12px 14px;border-bottom:none;margin-top:8px" : ""}">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${p.warning ? "#B23B2E" : "#1D9E82"}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px">
        ${p.warning ? '<path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4M12 17h.01"/>' : '<path d="M20 6 9 17l-5-5"/>'}
      </svg>
      <div><h4 style="font-size:13.5px;margin-bottom:3px;color:var(--forest-900)">${esc(p.title)}</h4><p style="font-size:13px;color:var(--ink-soft);line-height:1.55">${esc(p.desc)}</p></div>
    </div>`).join("");
}

/* ============================================================
   PLAN TAB
   ============================================================ */
function planHTML() {
  const p = state.plan;
  return `
    <div class="app-header">
      <h2>Plan a Project</h2>
      <p>Choose an activity and a quantity to get an organised plan: how much land it needs, what to procure, how to run it, and roughly what it will cost.</p>
    </div>

    <div class="panel">
      <div class="field-grid">
        <div class="field"><label>Activity</label>
          <select id="pl-activity">
            <option value="trees" ${p.activity === "trees" ? "selected" : ""}>Trees</option>
            <option value="biogas" ${p.activity === "biogas" ? "selected" : ""}>Biogas</option>
            <option value="solar" ${p.activity === "solar" ? "selected" : ""}>Solar</option>
          </select>
        </div>
        <div class="field" id="pl-qty-field">${planQtyFieldHTML()}</div>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin-top:10px">Press Enter in the number field, or just start typing — the plan below updates automatically.</p>
    </div>

    <div id="plan-results">${planResultsHTML()}</div>`;
}

function planQtyFieldHTML() {
  const p = state.plan;
  const map = { trees: ["numTrees", "Number of trees"], biogas: ["numBiogas", "Number of biogas units"], solar: ["solarCapacity", "Solar capacity (kW)"] };
  const [key, label] = map[p.activity];
  return `<label>${label}</label><input type="number" id="pl-qty" value="${esc(p[key])}">`;
}

function planQty() {
  const p = state.plan;
  const n = (v) => Number(v) || 0;
  if (p.activity === "trees") return n(p.numTrees);
  if (p.activity === "biogas") return n(p.numBiogas);
  return n(p.solarCapacity);
}

function landInfo(activity, sqm) {
  const acres = sqm / ACRE_SQM;
  // Biogas footprints stay small at campus scale — acres never reads as
  // meaningful here, so always show it as a site footprint in m².
  if (activity === "biogas") {
    return { label: "Approx. site footprint", value: sqm.toFixed(0) + " m²" };
  }
  // Trees and solar: show m² while the area is small (more intuitive),
  // switch to acres once it crosses roughly a tenth of an acre.
  const label = activity === "solar" ? "Approx. site area" : "Approx. land required";
  if (acres < 0.1) return { label, value: sqm.toFixed(0) + " m²" };
  return { label, value: acres.toFixed(2) + " acres" };
}

function planResultsHTML() {
  const p = state.plan;
  const qty = planQty();
  const unit = PLAN.unit[p.activity];
  const costPerUnit = p.costPerUnit[p.activity];
  const total = qty * costPerUnit;
  const sqm = qty * PLAN.sqmPerUnit[p.activity];
  const land = landInfo(p.activity, sqm);
  const materials = PLAN.materials[p.activity].replace(/\{qty\}/g, String(qty || 0));
  const flow = PLAN.flow[p.activity];
  const care = CARE[p.activity];

  return `
    <div class="panel">
      <div class="result-strip">
        <div class="result-tile"><span>${esc(land.label)}</span><b>${land.value}</b></div>
        <div class="result-tile"><span>Approx. total setup cost</span><b>${inr(total)}</b></div>
      </div>

      <div class="field mt-16" style="max-width:280px">
        <label>Cost per ${esc(unit)} (₹) — edit if you have a real quote</label>
        <input type="number" id="pl-cost" value="${esc(costPerUnit)}">
      </div>

      <div class="note-banner">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span>Land and cost figures are rough 2026 India planning estimates — actual requirements vary by species/vendor/site. Get a site assessment before finalising.</span>
      </div>
    </div>

    <div class="panel">
      <h3 style="font-size:15px;margin-bottom:10px">What you'll need</h3>
      <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.6">${esc(materials)}</p>
    </div>

    <div class="panel">
      <h3 style="font-size:15px;margin-bottom:6px">How to organise it</h3>
      <div>${flow.map((s, i) => `<div class="step-row"><div class="step-num" style="width:26px;height:26px;font-size:11.5px">${i + 1}</div><p style="font-size:13.5px;color:var(--ink-soft);padding-top:2px">${esc(s)}</p></div>`).join("")}</div>
    </div>

    <div class="panel">
      <h3 style="font-size:15px;margin-bottom:10px">How to maintain &amp; check it</h3>
      ${care.items.map((it) => `
        <div style="display:flex;gap:10px;align-items:flex-start;font-size:13px;padding:9px 0;border-bottom:1px solid var(--line)">
          <span style="flex-shrink:0;background:var(--paper);color:var(--forest-800);font-weight:700;font-size:11px;border-radius:6px;padding:3px 8px;white-space:nowrap">${esc(care.cadence[it.c])}</span>
          <span style="color:var(--ink-soft)">${esc(it.t)}</span>
        </div>`).join("")}
      <div class="note-banner">${esc(care.note)}</div>
    </div>`;
}

function bindPlanEvents() {
  document.getElementById("pl-activity").addEventListener("change", (e) => {
    state.plan.activity = e.target.value;
    document.getElementById("pl-qty-field").innerHTML = planQtyFieldHTML();
    bindPlanQtyEvent();
    updatePlanResults();
  });
  bindPlanQtyEvent();
}
function bindPlanQtyEvent() {
  const el = document.getElementById("pl-qty");
  if (!el) return;
  const map = { trees: "numTrees", biogas: "numBiogas", solar: "solarCapacity" };
  el.addEventListener("input", (e) => {
    state.plan[map[state.plan.activity]] = e.target.value;
    updatePlanResults();
  });
  el.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); updatePlanResults(); } });
}
function updatePlanResults() {
  const el = document.getElementById("plan-results");
  if (!el) return;
  el.innerHTML = planResultsHTML();
  const costInput = document.getElementById("pl-cost");
  if (costInput) costInput.addEventListener("input", (e) => {
    state.plan.costPerUnit[state.plan.activity] = Number(e.target.value) || 0;
    updatePlanResults();
  });
}

/* ============================================================
   HELP ASSISTANT TAB
   A rule-based assistant grounded entirely in this site's own
   content (Explore topics, Apply steps, Care guides, Plan engine).
   No external AI call — every answer is built from real data
   already in this file, and plan requests reuse the exact same
   calculations as the Plan tab.
   ============================================================ */

const DEFAULT_PLAN_QTY = { trees: 500, biogas: 1, solar: 50 };

function bulletText(items, keyTitle, keyDesc) {
  return items.map((it, i) => `${i + 1}. ${it[keyTitle]} — ${it[keyDesc]}`).join("\n");
}

function buildKnowledgeBase() {
  return [
    {
      id: "what-is-credit",
      keywords: ["what", "carbon", "credit", "definition", "meaning", "mean", "tco2e"],
      title: "What is a carbon credit?",
      answer: EXPLORE_TOPICS[0].a,
    },
    {
      id: "ccts",
      keywords: ["ccts", "scheme", "trading", "framework", "compliance", "offset mechanism"],
      title: "What is India's Carbon Credit Trading Scheme (CCTS)?",
      answer: EXPLORE_TOPICS[1].a,
    },
    {
      id: "acva",
      keywords: ["verify", "verification", "verified", "acva", "agency", "inspect", "audit", "checked"],
      title: "Who verifies a project?",
      answer: EXPLORE_TOPICS[2].a,
    },
    {
      id: "register",
      keywords: ["register", "registration", "portal", "icm", "signup", "sign", "enroll", "where"],
      title: "Where do institutions register?",
      answer: EXPLORE_TOPICS[3].a,
    },
    {
      id: "sell",
      keywords: ["sell", "selling", "trade", "trading", "buyer", "buyers", "market", "price", "exchange"],
      title: "How do credits get sold or traded?",
      answer: EXPLORE_TOPICS[4].a + "\n\n" + bulletText(SELL_POINTS, "title", "desc"),
    },
    {
      id: "risks",
      keywords: ["wrong", "risk", "fraud", "scam", "fail", "mistake", "problem", "broker", "fee", "safe", "safety"],
      title: "What can go wrong?",
      answer: EXPLORE_TOPICS[5].a,
    },
    {
      id: "apply",
      keywords: ["apply", "application", "steps", "process", "start", "begin", "how", "get started"],
      title: "How do I apply, step by step?",
      answer: bulletText(APPLY_STEPS, "title", "desc"),
    },
    {
      id: "maintain",
      keywords: ["maintain", "maintenance", "upkeep", "records", "ongoing", "reversal", "keep"],
      title: "How do I maintain a project?",
      answer: bulletText(MAINTAIN_POINTS, "title", "desc"),
    },
    {
      id: "certificate",
      keywords: ["certificate", "ccc", "registry", "issued", "proof", "id"],
      title: "How do I get my CCC certificate?",
      answer: bulletText(CERT_POINTS, "title", "desc"),
    },
    {
      id: "links",
      keywords: ["link", "links", "website", "site", "url", "address"],
      title: "Official links",
      answer: OFFICIAL_LINKS.map((l) => `${l.label}: ${l.url}`).join("\n"),
    },
    {
      id: "care-trees",
      keywords: ["water", "watering", "sapling", "guard", "weed", "mulch"],
      title: "How do I take care of trees?",
      answer: CARE.trees.items.map((it) => `${CARE.trees.cadence[it.c]}: ${it.t}`).join("\n") + "\n\n" + CARE.trees.note,
    },
    {
      id: "care-biogas",
      keywords: ["feed", "digester", "slurry", "leak", "valve"],
      title: "How do I take care of a biogas unit?",
      answer: CARE.biogas.items.map((it) => `${CARE.biogas.cadence[it.c]}: ${it.t}`).join("\n") + "\n\n" + CARE.biogas.note,
    },
    {
      id: "care-solar",
      keywords: ["dust", "clean", "cleaning", "inverter", "shading", "wiring"],
      title: "How do I take care of solar panels?",
      answer: CARE.solar.items.map((it) => `${CARE.solar.cadence[it.c]}: ${it.t}`).join("\n") + "\n\n" + CARE.solar.note,
    },
    {
      id: "benefits",
      keywords: ["benefit", "benefits", "why", "advantage", "worth", "revenue", "naac", "point"],
      title: "Why should our institution do this?",
      answer: BENEFITS.map((b) => `${b.title} — ${b.desc}`).join("\n"),
    },
  ];
}

const KNOWLEDGE_BASE = buildKnowledgeBase();

const TREE_WORDS = ["tree", "trees", "sapling", "saplings", "afforestation", "afforest", "plantation", "planting", "plant", "forest", "neem", "mangrove"];
const BIOGAS_WORDS = ["biogas", "digester", "bio-gas", "gobar"];
const SOLAR_WORDS = ["solar", "pv", "panel", "panels", "rooftop", "photovoltaic"];
const PLAN_TRIGGER_REGEX = /\b(plan|plans|planning|planned|proposal|organi[sz]e|full plan|help me start|want to do|want to start|set ?up|project for)\b/;
/* Matches a quantity sitting directly next to a project word — "500 trees",
   "50kw solar", "10 m3 biogas". Deliberately strict: the old version treated
   ANY number anywhere as a plan request, so a general question like
   "how tall do neem trees grow in 10 years" was hijacked into a tree plan. */
const QTY_NEXT_TO_ACTIVITY_REGEX =
  /\b\d+(?:\.\d+)?\s*(?:kw|kwp|mw|kilowatts?|megawatts?|m3|cum|cubic\s*(?:metres?|meters?))?\s*(?:of\s+)?(?:tree|trees|sapling|saplings|afforestation|plantation|solar|panel|panels|pv|rooftop|biogas|digester)\b/;

function isPlanRequest(q, activity) {
  if (!activity) return false;
  // Either the visitor actually asked for a plan/proposal/project...
  if (PLAN_TRIGGER_REGEX.test(q)) return true;
  // ...or they named a quantity right next to the thing, e.g. "500 trees".
  if (QTY_NEXT_TO_ACTIVITY_REGEX.test(q.replace(/,/g, ""))) return true;
  return false;
}
const ON_TOPIC_WORDS = [
  ...TREE_WORDS, ...BIOGAS_WORDS, ...SOLAR_WORDS,
  "carbon", "credit", "credits", "ccts", "icm", "acva", "verify", "verification", "certificate", "ccc",
  "register", "registration", "apply", "application", "sell", "trade", "trading", "maintain", "maintenance",
  "green credit", "gcp", "bee", "offset", "emission", "emissions", "tco2e", "co2", "sustainability", "campus",
  "hello", "hi", "hey", "help", "thanks", "thank",
];

function extractActivity(q) {
  if (BIOGAS_WORDS.some((w) => q.includes(w))) return "biogas";
  if (SOLAR_WORDS.some((w) => q.includes(w))) return "solar";
  if (TREE_WORDS.some((w) => q.includes(w))) return "trees";
  return null;
}
function extractQuantity(q) {
  const cleaned = q.replace(/,/g, "");
  // Prefer the number sitting next to the project word, so "plan 500 trees
  // for our 2026 campus drive" gives 500, not 2026.
  const adjacent = cleaned.match(
    /(\d+(?:\.\d+)?)\s*(?:kw|kwp|mw|kilowatts?|megawatts?|m3|cum|cubic\s*(?:metres?|meters?))?\s*(?:of\s+)?(?:tree|trees|sapling|saplings|afforestation|plantation|solar|panel|panels|pv|rooftop|biogas|digester)\b/
  );
  if (adjacent) return Number(adjacent[1]);
  const m = cleaned.match(/(\d+(\.\d+)?)/);
  return m ? Number(m[1]) : null;
}
function isGreeting(q) {
  return /^(hi|hello|hey|hola|namaste)\b/.test(q.trim());
}
function isOnTopic(q) {
  return ON_TOPIC_WORDS.some((w) => q.includes(w));
}

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "do", "does", "did", "i", "im", "my", "me", "you", "your",
  "it", "its", "of", "to", "for", "in", "on", "at", "and", "or", "how", "what", "why", "when", "where", "who",
  "can", "could", "should", "would", "will", "about", "with", "this", "that", "there", "get", "got", "please",
]);

function tokenize(q) {
  return q
    .toLowerCase()
    .replace(/'s\b/g, "")
    .replace(/[?.,!;:'"()]/g, "")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function scoreKB(qWords, entry) {
  return entry.keywords.reduce((score, kw) => {
    const hit = qWords.some((w) => w === kw || (kw.length >= 4 && w.includes(kw)) || (w.length >= 4 && kw.includes(w)));
    return hit ? score + 1 : score;
  }, 0);
}

function matchKnowledgeBase(q) {
  const qWords = tokenize(q);
  let best = null, bestScore = 0;
  KNOWLEDGE_BASE.forEach((entry) => {
    const s = scoreKB(qWords, entry);
    if (s > bestScore) { bestScore = s; best = entry; }
  });
  return bestScore > 0 ? best : null;
}

/* ---------- Plan answer text (chat) + PDF, reusing the Plan tab's own data ---------- */
function planChatAnswer(activity, qty, usedDefault) {
  const unit = PLAN.unit[activity];
  const sqm = qty * PLAN.sqmPerUnit[activity];
  const land = landInfo(activity, sqm);
  const cost = qty * PLAN.defaultCost[activity];
  const materials = PLAN.materials[activity].replace(/\{qty\}/g, String(qty || 0));
  const flow = PLAN.flow[activity];
  const care = CARE[activity];

  let text = "";
  if (usedDefault) text += `I've used a default of ${qty} ${unit}${qty === 1 ? "" : "s"} since no number was mentioned — tell me the real number any time for a more accurate plan.\n\n`;
  text += `Here's a full plan for ${qty} ${activityLabel(activity).toLowerCase()} (${unit}${qty === 1 ? "" : "s"}):\n\n`;
  text += `${land.label}: ${land.value}\nApprox. total setup cost: ${inr(cost)}\n\n`;
  text += `What you'll need:\n${materials}\n\n`;
  text += `How to organise it:\n${flow.map((s, i) => `${i + 1}. ${s}`).join("\n")}\n\n`;
  text += `Ongoing care:\n${care.items.map((it) => `${care.cadence[it.c]}: ${it.t}`).join("\n")}\n\n`;
  text += `These are rough 2026 India planning estimates — get a real site assessment before finalising a budget. I've put the full version in a downloadable PDF below.`;
  return text;
}

function generatePlanPDF(activity, qty) {
  if (!window.jspdf) {
    alert("PDF library failed to load — check your internet connection and try again.");
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const marginX = 14;
  let y = 20;
  const pageBottom = 280;

  function ensureSpace(needed) {
    if (y + needed > pageBottom) { doc.addPage(); y = 20; }
  }
  function heading(text) {
    ensureSpace(12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(7, 33, 28);
    doc.text(text, marginX, y);
    y += 8;
  }
  function paragraph(text, opts) {
    doc.setFont("helvetica", (opts && opts.bold) ? "bold" : "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(50, 50, 50);
    const lines = doc.splitTextToSize(text, 180);
    lines.forEach((line) => {
      ensureSpace(6);
      doc.text(line, marginX, y);
      y += 6;
    });
  }

  const unit = PLAN.unit[activity];
  const sqm = qty * PLAN.sqmPerUnit[activity];
  const land = landInfo(activity, sqm);
  const cost = qty * PLAN.defaultCost[activity];
  const materials = PLAN.materials[activity].replace(/\{qty\}/g, String(qty || 0));
  const flow = PLAN.flow[activity];
  const care = CARE[activity];

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(7, 33, 28);
  doc.text("CampusCarbon — Project Plan", marginX, y);
  y += 7;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(130);
  doc.text(`Generated ${new Date().toLocaleDateString("en-IN")}`, marginX, y);
  y += 12;

  heading(`${activityLabel(activity)} — ${qty} ${unit}${qty === 1 ? "" : "s"}`);
  paragraph(`${land.label}: ${land.value}`, { bold: true });
  paragraph(`Approx. total setup cost: ${inr(cost)}`, { bold: true });
  y += 4;

  heading("What you'll need");
  paragraph(materials);
  y += 4;

  heading("How to organise it");
  flow.forEach((s, i) => paragraph(`${i + 1}. ${s}`));
  y += 4;

  heading("Ongoing care");
  care.items.forEach((it) => paragraph(`${care.cadence[it.c]}: ${it.t}`));
  paragraph(care.note, { bold: true });
  y += 4;

  heading("Disclaimer");
  paragraph("These are rough 2026 India planning estimates generated by CampusCarbon's built-in calculator — actual land, material, and cost requirements vary by vendor, species, and site. Get a real site assessment and vendor quotes before finalising a budget or submitting for verification.");

  doc.save(`campuscarbon-plan-${activity}-${qty}.pdf`);
}

/* ---------- Chat UI ---------- */
const HELP_SUGGESTIONS = [
  "What is a carbon credit?",
  "How do I apply, step by step?",
  "Plan an afforestation project for 500 trees",
  "Plan a 50kW solar project",
  "Explain photosynthesis simply",
];

function helpHTML() {
  return `
    <div class="app-header">
      <h2>Help Assistant</h2>
      <p>Ask me anything at all — I'm a general AI assistant, with extra depth on carbon credits and CCTS. Ask for a full plan (e.g. "plan an afforestation project for 500 trees") and I'll generate a downloadable PDF using this site's own calculations.</p>
      <p class="note-banner" style="margin-top:14px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span>I can be wrong. For medical, legal or financial questions, please confirm with a qualified professional before acting.</span>
      </p>
    </div>

    <div class="panel" style="padding:0;overflow:hidden;display:flex;flex-direction:column;height:min(640px,70vh)">
      <div id="chat-messages" style="flex:1;overflow-y:auto;padding:22px;display:flex;flex-direction:column;gap:14px"></div>
      <div style="padding:14px 18px;border-top:1px solid var(--line);background:#fff">
        <div id="chat-suggestions" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px"></div>
        <div style="display:flex;gap:8px">
          <input type="text" id="chat-input" placeholder="Ask me anything, or ask me to plan a project..." style="flex:1;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font-size:14px;font-family:'Inter',sans-serif">
          <button class="btn-solid" id="chat-send">Send</button>
        </div>
      </div>
    </div>`;
}

function chatBubbleHTML(msg) {
  const isUser = msg.role === "user";
  if (msg.pending) {
    return `
      <div style="display:flex;justify-content:flex-start">
        <div style="background:var(--paper);border-radius:14px;padding:12px 16px;font-size:13.5px;color:var(--ink-soft)">Thinking…</div>
      </div>`;
  }
  return `
    <div style="display:flex;${isUser ? "justify-content:flex-end" : "justify-content:flex-start"}">
      <div style="max-width:80%;${isUser ? "background:var(--forest-900);color:#fff" : "background:var(--paper);color:var(--ink)"};border-radius:14px;padding:12px 15px;font-size:13.5px;line-height:1.6;white-space:pre-wrap">${esc(msg.text)}${
    msg.pdf
      ? `<div style="margin-top:10px"><button class="btn-ghost-dark" data-download-plan="${esc(msg.pdf.activity)}" data-qty="${esc(msg.pdf.qty)}" style="background:#fff"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px;vertical-align:-2px"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>Download full plan (PDF)</button></div>`
      : ""
  }</div>
    </div>`;
}

function renderChatMessages() {
  const el = document.getElementById("chat-messages");
  if (!el) return;
  if (state.chat.messages.length === 0) {
    el.innerHTML = `
      <div style="display:flex;justify-content:flex-start">
        <div style="max-width:85%;background:var(--paper);border-radius:14px;padding:14px 16px;font-size:13.5px;line-height:1.6">
          Hi! I'm the CampusCarbon assistant. I can explain how carbon credits and CCTS work, or build you a full project plan — try one of the suggestions below, or just type your question.
        </div>
      </div>`;
  } else {
    el.innerHTML = state.chat.messages.map(chatBubbleHTML).join("");
  }
  el.scrollTop = el.scrollHeight;
  el.querySelectorAll("[data-download-plan]").forEach((btn) => {
    btn.addEventListener("click", () => generatePlanPDF(btn.dataset.downloadPlan, Number(btn.dataset.qty)));
  });
}

function respondTo(rawQuery) {
  const q = rawQuery.toLowerCase().trim();

  if (isGreeting(q) && q.length < 20) {
    return { text: "Hello! Ask me anything — I'm a general assistant. I'm especially good on carbon credits, and if you ask me to plan an afforestation, solar or biogas project I'll build you a full plan with a downloadable PDF." };
  }

  const activity = extractActivity(q);

  if (isPlanRequest(q, activity)) {
    let qty = extractQuantity(q);
    const usedDefault = qty === null;
    if (usedDefault) qty = DEFAULT_PLAN_QTY[activity];
    return {
      text: planChatAnswer(activity, qty, usedDefault),
      pdf: { activity, qty },
    };
  }

  const isCostQuestion = /\b(cost|costs|price|priced|expensive|budget|how much)\b/.test(q);
  if (activity && isCostQuestion) {
    const unit = PLAN.unit[activity];
    const perUnit = PLAN.defaultCost[activity];
    return {
      text: `Roughly ${inr(perUnit)} per ${unit} for ${activityLabel(activity).toLowerCase()}, as a 2026 India planning estimate (actual quotes vary by vendor, species, and site). Want a full plan with total cost for a specific number? Just tell me the quantity — e.g. "plan ${DEFAULT_PLAN_QTY[activity]} ${unit}s of ${activityLabel(activity).toLowerCase()}".`,
    };
  }

  if (/\b(thanks|thank you|thank u|thx)\b/.test(q)) {
    return { text: "You're welcome! Let me know if you'd like a plan for another project, or have more questions." };
  }

  const kb = matchKnowledgeBase(q);
  if (kb) return { text: kb.answer };

  // NOTE: these two only ever appear when BOTH AI providers are unreachable,
  // so the site has dropped to its built-in offline answers. Those only cover
  // carbon credits — hence the wording.
  if (!isOnTopic(q)) {
    return { text: "I can't reach my AI assistant at the moment, so I'm running on built-in answers — and those only cover carbon credits. Please try again in a minute, or ask me about applying, verification, trading, or planning a tree/solar/biogas project." };
  }

  return { text: "I can't reach my AI assistant right now, so I'm running on built-in answers. I can still help with applying for credits, verification, selling/trading, maintenance, or planning a tree/solar/biogas project — try one of those, or tap a suggestion below." };
}

async function callAIAssistant(history) {
  // Only send the last 8 messages, not the whole conversation. The AI still
  // remembers the recent thread perfectly well, but the token cost of each
  // message stops growing forever — which is what protects the free tier.
  const apiMessages = history
    .filter((m) => !m.pending)
    .slice(-8)
    .map((m) => ({ role: m.role, content: m.text }));
  const res = await fetch("/.netlify/functions/chat", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ messages: apiMessages }),
  });
  if (!res.ok) throw new Error("AI backend unavailable (status " + res.status + ")");
  const data = await res.json();
  if (!data.text) throw new Error("Empty AI response");
  return data.text;
}

async function sendChatMessage(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  state.chat.messages.push({ role: "user", text: trimmed });
  renderChatMessages();

  const q = trimmed.toLowerCase();
  const activity = extractActivity(q);

  // Plan requests and cost questions stay fully local — they use this site's
  // own calculator, so the numbers are exact rather than AI-estimated.
  if (isPlanRequest(q, activity)) {
    let qty = extractQuantity(q);
    const usedDefault = qty === null;
    if (usedDefault) qty = DEFAULT_PLAN_QTY[activity];
    state.chat.messages.push({ role: "assistant", text: planChatAnswer(activity, qty, usedDefault), pdf: { activity, qty } });
    renderChatMessages();
    return;
  }
  const isCostQuestion = /\b(cost|costs|price|priced|expensive|budget|how much)\b/.test(q);
  if (activity && isCostQuestion) {
    const unit = PLAN.unit[activity];
    const perUnit = PLAN.defaultCost[activity];
    state.chat.messages.push({
      role: "assistant",
      text: `Roughly ${inr(perUnit)} per ${unit} for ${activityLabel(activity).toLowerCase()}, as a 2026 India planning estimate (actual quotes vary by vendor, species, and site). Want a full plan with total cost for a specific number? Just tell me the quantity — e.g. "plan ${DEFAULT_PLAN_QTY[activity]} ${unit}s of ${activityLabel(activity).toLowerCase()}".`,
    });
    renderChatMessages();
    return;
  }

  // Everything else: try the real AI assistant first, fall back to the
  // built-in rule-based answers if the backend isn't configured yet.
  state.chat.messages.push({ role: "assistant", text: "", pending: true });
  renderChatMessages();

  let replyText, replyPdf = null;
  try {
    replyText = await callAIAssistant(state.chat.messages);
  } catch (err) {
    const fallback = respondTo(trimmed);
    replyText = fallback.text;
    replyPdf = fallback.pdf || null;
  }

  const idx = state.chat.messages.findIndex((m) => m.pending);
  if (idx !== -1) state.chat.messages[idx] = { role: "assistant", text: replyText, pdf: replyPdf };
  renderChatMessages();
}

function bindHelpEvents() {
  const suggestEl = document.getElementById("chat-suggestions");
  suggestEl.innerHTML = HELP_SUGGESTIONS.map((s) => `<button class="btn-ghost-dark" data-suggest style="font-size:12px;padding:8px 14px">${esc(s)}</button>`).join("");
  suggestEl.querySelectorAll("[data-suggest]").forEach((btn) => {
    btn.addEventListener("click", () => sendChatMessage(btn.textContent));
  });

  document.getElementById("chat-send").addEventListener("click", () => {
    const input = document.getElementById("chat-input");
    sendChatMessage(input.value);
    input.value = "";
  });
  document.getElementById("chat-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.target;
      sendChatMessage(input.value);
      input.value = "";
    }
  });

  renderChatMessages();
}/* ============================================================
   SCAN PLANT TAB
   ============================================================ */

const SCAN_SLOTS = [
  { key: "whole", label: "Whole plant", hint: "Step back, show the full shape" },
  { key: "leaftop", label: "Leaf — top", hint: "Close-up of an affected leaf" },
  { key: "leafunder", label: "Leaf — underside", hint: "Where pests and spores hide" },
  { key: "barkflower", label: "Bark or flower", hint: "Optional, helps identify" },
];

let scanState = {
  photos: {},
  location: null,
  locationStatus: "",
  duration: "",
  watering: "",
  spreading: "",
  notes: "",
  girth: "",
  height: "",
  scars: "",
  site: "",
  scaleRef: "",
  loading: false,
  result: null,
  error: "",
};

function scanOpts(field, pairs) {
  return pairs
    .map(function (p) {
      return `<option value="${esc(p[0])}"${scanState[field] === p[0] ? " selected" : ""}>${esc(p[1])}</option>`;
    })
    .join("");
}

function scanHTML() {
  return `
    <div class="app-header">
      <h2>Scan a Plant or Tree</h2>
      <p>Photograph a plant to identify it and check its health. More photos and more detail give a better answer — one blurry photo gives a weak one.</p>
      <p class="note-banner" style="margin-top:14px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span>This is guidance, not a lab test. Many plant diseases look identical in a photograph. Confirm with your agriculture extension officer or Krishi Vigyan Kendra before spending money on treatment.</span>
      </p>
    </div>

    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">1. Add photos</h3>
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 16px">Tap a box to take a photo or pick one from your gallery. The first is required; the rest are optional but make the answer noticeably better.</p>
      <div class="scan-slots">
        ${SCAN_SLOTS.map(function (s, i) {
          const has = scanState.photos[s.key];
          return `
          <div class="scan-slot${has ? " filled" : ""}">
            ${has ? `<img src="${has.preview}" alt="">` : ""}
            <b>${s.label}${i === 0 ? " *" : ""}</b>
            <span>${has ? "Change photo" : s.hint}</span>
            <div class="scan-actions">
              <label for="scan-cam-${s.key}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/></svg>
                Camera
              </label>
              <label for="scan-gal-${s.key}">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
                Gallery
              </label>
            </div>
            <input type="file" accept="image/*" capture="environment" id="scan-cam-${s.key}" data-scan-slot="${s.key}" hidden>
            <input type="file" accept="image/*" id="scan-gal-${s.key}" data-scan-slot="${s.key}" hidden>
          </div>`;
        }).join("")}
      </div>
    </div>

    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">2. Where are you?</h3>
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 14px">Location rules out most of the world's plants instantly. This is the single biggest accuracy gain.</p>
      <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
        <button class="scan-locbtn" id="scan-loc">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:-2px"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          Use my location
        </button>
        <span style="font-size:13px;color:var(--ink-soft)">${esc(scanState.locationStatus || "Optional — skip if you prefer")}</span>
      </div>
    </div>

    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">3. A few questions</h3>
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 16px">A photo cannot show any of this, and it changes the diagnosis completely.</p>
      <div class="field-grid">
        <div class="field">
          <label>How long has it looked like this?</label>
          <select id="scan-duration">
            ${scanOpts("duration", [["", "Not sure"], ["A few days", "A few days"], ["1-2 weeks", "1–2 weeks"], ["A month or more", "A month or more"]])}
          </select>
        </div>
        <div class="field">
          <label>How often is it watered?</label>
          <select id="scan-watering">
            ${scanOpts("watering", [["", "Not sure"], ["Daily", "Daily"], ["Every few days", "Every few days"], ["Weekly or less", "Weekly or less"], ["Rain only", "Rain only"]])}
          </select>
        </div>
        <div class="field">
          <label>Are nearby plants also affected?</label>
          <select id="scan-spreading">
            ${scanOpts("spreading", [["", "Not sure"], ["Yes, it is spreading", "Yes, spreading"], ["No, only this one", "No, only this one"]])}
          </select>
        </div>
        <div class="field">
          <label>Anything else? (optional)</label>
          <input type="text" id="scan-notes" placeholder="e.g. recently transplanted" value="${esc(scanState.notes)}">
        </div>
      </div>
    </div>

    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">4. Measure it <span style="font-weight:400;color:var(--ink-soft)">(optional — gives an approximate age)</span></h3>
      <p style="font-size:13px;color:var(--ink-soft);margin:0 0 16px">
        Fill in whatever you can and I will pick the right method. Leave it all blank for shrubs and potted plants. Any age I give is an <b>approximate range, not an exact figure</b>.
      </p>
      <div class="field-grid">
        <div class="field">
          <label>Trunk girth at chest height (cm)</label>
          <input type="number" inputmode="decimal" min="1" max="2000" id="scan-girth" placeholder="e.g. 95" value="${esc(scanState.girth)}">
          <span style="font-size:11.5px;color:var(--ink-soft)">Ordinary trees. Tape all the way <i>around</i> the trunk, about 1.4 m up.</span>
        </div>
        <div class="field">
          <label>Height (m)</label>
          <input type="number" inputmode="decimal" min="0.5" max="120" id="scan-height" placeholder="e.g. 9" value="${esc(scanState.height)}">
          <span style="font-size:11.5px;color:var(--ink-soft)">For a palm, measure the <b>trunk only</b> — ground up to where the leaves start.</span>
        </div>
        <div class="field">
          <label>Leaf scar rings in one metre <span style="font-weight:400;color:var(--ink-soft)">(palms only)</span></label>
          <input type="number" inputmode="numeric" min="1" max="200" id="scan-scars" placeholder="e.g. 30" value="${esc(scanState.scars)}">
          <span style="font-size:11.5px;color:var(--ink-soft)">Count the rings left by fallen fronds along any one measured metre of trunk.</span>
        </div>
        <div class="field">
          <label>Anything of known size in the photo?</label>
          <input type="text" id="scan-scale" placeholder="e.g. A4 sheet held on the trunk" value="${esc(scanState.scaleRef)}">
          <span style="font-size:11.5px;color:var(--ink-soft)">No tape? Put something of known size against the trunk and say what it is — an A4 sheet, a 30 cm ruler, a person's height. I can then read the size off the photo, less accurately than a tape.</span>
        </div>
        <div class="field">
          <label>Where is it growing?</label>
          <select id="scan-site">
            ${scanOpts("site", [["", "Not sure"], ["open", "Open ground, watered or good soil"], ["normal", "Ordinary conditions"], ["shaded", "Crowded or shaded by bigger trees"], ["poor", "Poor, rocky, sandy or dry soil"], ["pot", "In a pot or restricted space"]])}
          </select>
          <span style="font-size:11.5px;color:var(--ink-soft)">This matters a lot. A starved or shaded tree is far older than its thickness suggests.</span>
        </div>
      </div>
      <p style="font-size:12px;color:var(--ink-soft);margin:14px 0 0;line-height:1.6">
        Girth works for ordinary trees such as neem, mango, teak and tamarind. Palms need the trunk height and leaf scars instead — a palm trunk does not thicken with age, so a fat coconut is not an old coconut. Banana, bamboo, and old banyan or peepal with fused aerial roots cannot be aged at all, and I will say so rather than guess.
      </p>
      <div style="margin-top:18px">
        <button class="btn-gradient" id="scan-go"${scanState.loading ? " disabled" : ""}>
          ${scanState.loading ? "Analysing…" : "Scan plant"}
        </button>
      </div>
      ${scanState.error ? `<p style="margin:14px 0 0;font-size:13px;color:#b3261e">${esc(scanState.error)}</p>` : ""}
    </div>

    <div id="scan-result">${scanState.result ? scanResultHTML(scanState.result) : ""}</div>`;
}

/* ---------- Tree age + stored CO2, calculated from a tape measure ----------
   These numbers are worked out HERE in JavaScript, not by the AI, so they are
   exact and reproducible — the same approach the Plan tab uses. The AI only
   supplies the species-specific inputs it is actually qualified to give:
   the growth-factor range and, if the user didn't measure it, a typical
   height for a tree of that species and thickness.

   Age:  age = growth factor x diameter in inches   (standard arborist method)
   CO2:  green weight = 0.25 x D^2 x H  (or 0.15 above 11 inches diameter)
         x 1.2 for roots, x 0.725 for dry weight, x 0.5 for carbon,
         x 3.6663 to convert carbon to CO2.
   Source: University of New Mexico, "Calculating tree carbon".
   -------------------------------------------------------------------------- */
const LB_TO_KG = 0.45359237;

/* ============================================================================
   TREE AGE — three methods, chosen by what the plant actually is.
   Every number here is an APPROXIMATE RANGE. There is no way to get an exact
   age from outside a tree, and in the tropics even cutting it down is
   unreliable: with no cold winter, rings form around wet and dry spells, so a
   tree can lay down two in a year or none at all.

   METHOD 1 — GIRTH, for ordinary (dicot) trees: neem, mango, teak, tamarind.
     age = growth factor x trunk diameter in inches. These trees add a ring of
     wood every year, so thickness tracks age.

   METHOD 2 — LEAF SCARS, for palms: coconut, areca, palmyra.
     Girth tells you NOTHING about a palm — no cambium, no secondary
     thickening, so a fat palm is not an old palm. But a coconut drops 12-14
     fronds a year and each one leaves a scar ring, so the trunk is a calendar.
     Count the scars in one measured metre, multiply by trunk height, divide by
     leaves per year, add the sapling years before any trunk formed.

   METHOD 3 — REFUSE. Banana (a pseudostem that dies after fruiting), bamboo
     (a culm reaches full width in one season), old banyan and peepal (aerial
     roots fuse into what looks like one trunk), bonsai and pot-bound plants.
   ============================================================================ */

/* Growth factors for trees actually found on Indian campuses, matched on
   botanical name. Fixed here rather than left to the AI so the common cases
   answer the same way every time. Published arborist factors come from slow
   temperate trees and are far too high for India, so these are tropical
   values. Anything unlisted falls back to the AI's range. */
const GROWTH_FACTORS = [
  [/azadirachta|\bneem\b/i, 1.0, 2.0],
  [/delonix|gulmohar|flame tree/i, 1.0, 2.0],
  [/samanea|albizia saman|rain tree/i, 1.0, 2.0],
  [/eucalyptus/i, 0.8, 1.6],
  [/leucaena|subabul/i, 0.8, 1.6],
  [/casuarina/i, 1.0, 1.8],
  [/grevillea|silver oak/i, 1.2, 2.2],
  [/saraca|\bashoka\b/i, 1.2, 2.4],
  [/polyalthia/i, 1.2, 2.4],
  [/mangifera|\bmango\b/i, 2.0, 3.5],
  [/syzygium|jamun/i, 2.0, 3.5],
  [/tamarindus|tamarind/i, 2.5, 4.0],
  [/terminalia|arjuna/i, 2.0, 3.5],
  [/psidium|guava/i, 2.0, 3.5],
  [/pongamia|millettia/i, 2.0, 3.5],
  [/swietenia|mahogany/i, 2.0, 3.5],
  [/tectona|\bteak\b/i, 3.0, 5.0],
  [/santalum|sandalwood/i, 3.5, 5.5],
  [/dalbergia|rosewood/i, 3.0, 5.0],
];

function lookupGrowthFactor(id) {
  const name = String((id && id.botanicalName) || '') + ' ' + String((id && id.commonName) || '');
  for (const row of GROWTH_FACTORS) {
    if (row[0].test(name)) return { low: row[1], high: row[2], known: true };
  }
  return { low: id && id.growthFactorLow, high: id && id.growthFactorHigh, known: false };
}

/* Only the person standing in front of the tree knows this, and it matters
   more than anything else. A tree starved of light or water grows slowly, so
   for a given thickness it is OLDER than average — the factor goes up. A
   watered, fertilised campus tree grew fast, so it is YOUNGER than its size
   suggests — the factor goes down. This is what stops the tool calling a
   50-year-old suppressed tree a 12-year-old. */
const SITE_CONDITIONS = {
  "": { mult: 1, label: "" },
  open: { mult: 0.75, label: "open ground, watered or good soil — grows fast" },
  normal: { mult: 1, label: "ordinary conditions" },
  shaded: { mult: 1.4, label: "crowded or shaded — grows slowly" },
  poor: { mult: 1.6, label: "poor, rocky, sandy or dry soil — grows slowly" },
  pot: { mult: 2.5, label: "in a pot or restricted — growth deliberately limited" },
};

function siteInfo(key) {
  return SITE_CONDITIONS[key] || SITE_CONDITIONS[""];
}

/* Wood density (oven-dry mass / green volume, g/cm3) for common Indian trees,
   from the Global Wood Density Database. Chave's equation is very sensitive to
   this, so the common species are pinned here rather than left to the AI. */
const WOOD_DENSITY = [
  [/azadirachta|\bneem\b/i, 0.68],
  [/tectona|\bteak\b/i, 0.55],
  [/mangifera|\bmango\b/i, 0.52],
  [/tamarindus|tamarind/i, 0.80],
  [/samanea|albizia saman|rain tree/i, 0.48],
  [/delonix|gulmohar/i, 0.45],
  [/eucalyptus/i, 0.65],
  [/casuarina/i, 0.83],
  [/dalbergia|rosewood|sissoo/i, 0.75],
  [/santalum|sandalwood/i, 0.90],
  [/pongamia|millettia/i, 0.60],
  [/syzygium|jamun/i, 0.68],
  [/terminalia|arjuna/i, 0.74],
  [/psidium|guava/i, 0.66],
  [/swietenia|mahogany/i, 0.50],
  [/polyalthia/i, 0.50],
  [/saraca|\bashoka\b/i, 0.55],
  [/leucaena|subabul/i, 0.60],
  [/grevillea|silver oak/i, 0.57],
  [/ficus|banyan|peepal/i, 0.40],
];

const DEFAULT_WOOD_DENSITY = 0.60;   // tropical hardwood average

function lookupWoodDensity(id) {
  const name = String((id && id.botanicalName) || '') + ' ' + String((id && id.commonName) || '');
  for (const row of WOOD_DENSITY) {
    if (row[0].test(name)) return { rho: row[1], known: true };
  }
  const fromAI = Number(id && id.woodDensity);
  if (isFinite(fromAI) && fromAI > 0.1 && fromAI < 1.3) return { rho: fromAI, known: false };
  return { rho: DEFAULT_WOOD_DENSITY, known: false };
}

/* ---------------------------------------------------------------------------
   CARBON — Chave et al. 2014 pantropical Model 4, the standard equation for
   tropical trees. Replaces the older US green-weight method, which was built
   on temperate species.

     AGB  = 0.0673 x (rho x D^2 x H)^0.976     kg, oven-dry, above ground
            rho = wood density g/cm3, D = trunk diameter cm, H = height m
     BGB  = AGB x 0.24                          roots (IPCC root:shoot, tropical)
     C    = (AGB + BGB) x 0.47                  IPCC carbon fraction
     CO2  = C x 3.667                           44/12, carbon -> carbon dioxide
     O2   = CO2 x 0.727                         32/44, photosynthesis is 1:1 by
                                                mole, so this is the mass ratio
   --------------------------------------------------------------------------- */
const ROOT_SHOOT = 0.24;
const CARBON_FRACTION = 0.47;
const C_TO_CO2 = 3.667;
const CO2_TO_O2 = 0.727;

function carbonMetrics(diameterCm, heightM, rho) {
  const D = Number(diameterCm), H = Number(heightM), p = Number(rho);
  if (!(D > 0) || !(H > 0) || !(p > 0)) return null;
  // Refuse implausible inputs rather than print a spectacular wrong number.
  if (D * Math.PI > MAX_GIRTH_CM || H > MAX_HEIGHT_M) return null;

  const agb = 0.0673 * Math.pow(p * D * D * H, 0.976);
  const bgb = agb * ROOT_SHOOT;
  const total = agb + bgb;
  const carbonKg = total * CARBON_FRACTION;
  const co2Kg = carbonKg * C_TO_CO2;
  return {
    agbKg: agb,
    bgbKg: bgb,
    biomassKg: total,
    carbonKg: carbonKg,
    co2Kg: co2Kg,
    o2Kg: co2Kg * CO2_TO_O2,
  };
}

/* Plausible limits for a real tree. A typo — 99999 instead of 99.9 — used to
   sail through and print half a million tonnes of CO2. On a carbon site that
   is the worst possible place to print an absurd number, so anything outside
   these bounds is refused outright rather than calculated. */
const MIN_GIRTH_CM = 5, MAX_GIRTH_CM = 2500;      // 2500 cm ~ 8 m diameter
const MIN_HEIGHT_M = 0.5, MAX_HEIGHT_M = 120;     // tallest trees on earth

function girthLooksWrong(girthCm) {
  const g = Number(girthCm);
  if (!isFinite(g) || g <= 0) return "missing";
  if (g < MIN_GIRTH_CM) return "too small";
  if (g > MAX_GIRTH_CM) return "too big";
  return null;
}

function heightLooksWrong(heightM) {
  const h = Number(heightM);
  if (!isFinite(h) || h <= 0) return "missing";
  if (h < MIN_HEIGHT_M) return "too small";
  if (h > MAX_HEIGHT_M) return "too big";
  return null;
}

function treeMetrics(girthCm, heightM, gfLow, gfHigh, rho) {
  const girth = Number(girthCm);
  if (girthLooksWrong(girth)) return null;

  const diameterCm = girth / Math.PI;
  const diameterIn = diameterCm / 2.54;

  const lo = Number(gfLow), hi = Number(gfHigh);
  const ageLow = isFinite(lo) && lo > 0 ? lo * diameterIn : null;
  const ageHigh = isFinite(hi) && hi > 0 ? hi * diameterIn : null;

  const carbon = carbonMetrics(diameterCm, heightM, rho);
  return { diameterCm, ageLow, ageHigh, carbon };
}

/* Palms: the trunk is a stack of leaf scars, and leaves come at a steady rate.
   trunkHeightM is ground to where the fronds start, NOT the top of the leaves. */
function palmMetrics(trunkHeightM, scarsPerMetre, leavesPerYear, preTrunkYears) {
  const h = Number(trunkHeightM);
  if (!isFinite(h) || h <= 0) return null;

  const perYear = isFinite(Number(leavesPerYear)) && Number(leavesPerYear) > 0 ? Number(leavesPerYear) : 13;
  const pre = isFinite(Number(preTrunkYears)) && Number(preTrunkYears) > 0 ? Number(preTrunkYears) : 5;
  const scars = Number(scarsPerMetre);

  if (isFinite(scars) && scars > 0) {
    const total = scars * h;
    // Leaf production varies 12-14 a year, so this naturally gives a range.
    return {
      method: "scars",
      totalScars: Math.round(total),
      ageLow: total / (perYear + 1) + pre,
      ageHigh: total / (perYear - 1) + pre,
      preTrunkYears: pre,
    };
  }
  // No scar count — fall back to trunk height. Coconut trunks rise roughly
  // 30-45 cm a year, which is the same thing expressed less precisely.
  return {
    method: "height",
    ageLow: (h * 100) / 45 + pre,
    ageHigh: (h * 100) / 30 + pre,
    preTrunkYears: pre,
  };
}

function fmtKg(kg) {
  if (!isFinite(kg) || kg === null) return "—";
  if (kg >= 1000) return (kg / 1000).toFixed(2) + " tonnes";
  return Math.round(kg) + " kg";
}

function ageRangeText(low, high) {
  if (!isFinite(low) || !isFinite(high) || low <= 0) return null;
  const a = Math.max(1, Math.round(low)), b = Math.max(1, Math.round(high));
  if (b > 1200) return null;   // absurd input, not a discovery
  return a === b ? "about " + a + " years" : "roughly " + a + " to " + b + " years";
}

const APPROX_PILL =
  '<span class="scan-pill" style="background:#b8860b15;color:#b8860b;border-color:#b8860b40">Approximate only</span>';

function agePanel(title, rows, footnote) {
  return '<div class="panel" style="margin-top:16px">' +
    '<div class="scan-idhead"><h3 style="margin:0;font-size:15px">' + title + '</h3>' + APPROX_PILL + '</div>' +
    '<p style="font-size:12.5px;color:var(--ink-soft);margin:10px 0 4px;line-height:1.6">' +
    'This is an <b>estimate, not a measurement</b>. It assumes average growth for the species. ' +
    'Treat it as a rough range only.</p>' +
    rows +
    '<p style="font-size:12px;color:var(--ink-soft);margin:14px 0 0;line-height:1.6">' + footnote + '</p>' +
    '</div>';
}

/* ---------------------------------------------------------------------------
   GROWTH HABIT decides what this plant can honestly support.
   Only woody, long-lived biomass counts as sequestered carbon. A herb or a
   creeper builds its tissue in one season and releases it again when it dies
   back — that carbon is cycling, not stored. Printing a "CO2 stored" figure
   for one on a carbon-credit site would be actively misleading, so those
   plants get an explanation instead of a number.
   --------------------------------------------------------------------------- */
const HABITS = {
  tree: {
    label: "Tree", age: true, carbon: true,
    why: "",
  },
  palm: {
    label: "Palm", age: true, carbon: false,
    why: "Carbon is not shown for palms. The allometric equation used here is built for woody trees that add rings of wood each year; a palm trunk is built completely differently, so the equation would give a confidently wrong figure.",
  },
  shrub: {
    label: "Shrub", age: false, carbon: false,
    why: "A shrub has several stems from the base rather than one trunk, so trunk thickness cannot give an age. Carbon is not shown either: shrub biomass equations are highly species-specific and barely documented for Indian species, so any figure would be invented rather than calculated.",
  },
  herb: {
    label: "Herb", age: false, carbon: false,
    why: "Herbs are soft-stemmed and often live less than a year, so there is no age to find. Carbon is not shown because a herb builds its tissue in one season and releases it again when it dies back — that carbon is cycling, not stored. Only long-lived woody growth counts as sequestration.",
  },
  climber: {
    label: "Climber", age: false, carbon: false,
    why: "A climber's stems root wherever they touch, so there is often no single individual to age. Its carbon is also not counted as stored — soft growth returns to the atmosphere within a season or two.",
  },
  creeper: {
    label: "Creeper", age: false, carbon: false,
    why: "Creepers root as they spread, so what looks like one plant may be many, and there is no age to give. Their carbon is not sequestered either — it cycles back as the plant dies down.",
  },
  grass: {
    label: "Grass", age: false, carbon: false,
    why: "Grasses regrow from the base each season and hold no lasting woody tissue, so neither an age nor stored carbon can be given.",
  },
  bamboo: {
    label: "Bamboo", age: false, carbon: false,
    why: "Bamboo is a woody grass. A culm reaches its full diameter in a single season, so thickness says nothing about age. It does store carbon, but the equations used here are for trees and do not apply to it.",
  },
  succulent: {
    label: "Succulent", age: false, carbon: false,
    why: "Succulents store water rather than wood, so neither trunk thickness nor tree biomass equations mean anything for them.",
  },
  aquatic: { label: "Aquatic plant", age: false, carbon: false, why: "Aquatic plants hold no woody tissue and turn over quickly, so no age or stored-carbon figure can honestly be given." },
  fern: { label: "Fern", age: false, carbon: false, why: "Ferns have no annual growth rings and no woody trunk, so there is nothing to measure an age against." },
  other: { label: "Plant", age: false, carbon: false, why: "This plant does not fit the woody-tree pattern that the age and carbon calculations depend on." },
};

function habitInfo(key) {
  return HABITS[String(key || "").toLowerCase()] || null;
}

/* Dimensions and a plain explanation of what this plant type can and cannot
   support. Used for everything that is not a tree. */
function habitPanelHTML(id, measured) {
  const h = habitInfo(id.growthHabit);
  // Trees (carbon) and palms (age from leaf scars) have their own panel and
  // must fall through to it. Only habits that support neither land here.
  if (!h || h.carbon || h.age) return "";

  const d = id.dimensions || {};
  const src = String(d.source || "").toLowerCase();
  const word = src.indexOf("scale") !== -1 ? "estimated from the scale object in your photo"
    : src.indexOf("rough") !== -1 ? "rough visual estimate from the photo"
    : "estimated from the photo";
  const row = (label, val, note) => val
    ? '<div class="scan-row"><span>' + label + '</span><b>' + esc(val) +
      (note ? ' <span style="color:#b8860b;font-weight:400">(' + note + ')</span>' : "") + '</b></div>'
    : "";

  const height = Number(measured.heightM) || Number(d.heightM) || null;
  const rows =
    row("Growth habit", h.label) +
    (height ? row("Height", Number(height).toFixed(1) + " m", measured.heightM ? "measured" : word) : "") +
    (Number(d.canopyWidthM) > 0 ? row("Spread", Number(d.canopyWidthM).toFixed(1) + " m", word) : "");

  if (!rows) return "";

  return '<div class="panel" style="margin-top:16px">' +
    '<div class="scan-idhead"><h3 style="margin:0;font-size:15px">Size &amp; what can be estimated</h3>' + APPROX_PILL + '</div>' +
    '<p style="font-size:12.5px;color:var(--ink-soft);margin:10px 0 4px;line-height:1.6">Sizes are estimates, not measurements.</p>' +
    rows +
    (id.habitNote ? '<p style="font-size:13px;line-height:1.65;margin:14px 0 0">' + esc(id.habitNote) + '</p>' : "") +
    '<p class="note-banner" style="margin-top:14px">' +
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>' +
    '<span><b>No age or stored-CO<sub>2</sub> figure for this plant.</b> ' + h.why + '</span></p>' +
    '</div>';
}

function treeAgeHTML(id, measured, scene) {
  id = id || {};
  measured = measured || {};
  scene = scene || {};
  const girth = Number(measured.girthCm) || null;
  const heightM = Number(measured.heightM) || null;
  const scars = Number(measured.scarsPerMetre) || null;
  const site = siteInfo(measured.site);
  const method = id.agingMethod || (id.girthAgingValid === false ? "none" : "girth");

  // Show the panel if the user measured something OR the AI could read
  // dimensions off the photograph. Nothing at all means no panel.
  const photoDims = id.dimensions || {};
  const havePhotoSize = Number(photoDims.trunkDiameterCm) > 0 || Number(photoDims.heightM) > 0;
  if (!girth && !heightM && !havePhotoSize) return "";

  const row = (label, val) =>
    '<div class="scan-row"><span>' + label + '</span><b>' + esc(String(val)) + '</b></div>';

  /* ---- Method 3: this plant genuinely cannot be aged ---- */
  if (method === "none") {
    return '<div class="panel" style="margin-top:16px">' +
      '<div class="scan-idhead"><h3 style="margin:0;font-size:15px">Age</h3></div>' +
      '<p style="font-size:13px;color:var(--ink-soft);margin:10px 0 0;line-height:1.6">' +
      esc(id.girthAgingNote ||
        "This plant cannot be aged from outside. I would rather tell you that than give you a number that is wrong.") +
      '</p></div>';
  }

  /* ---- Method 2: palms ---- */
  if (method === "palm") {
    if (!heightM) {
      return '<div class="panel" style="margin-top:16px">' +
        '<div class="scan-idhead"><h3 style="margin:0;font-size:15px">Age</h3></div>' +
        '<p style="font-size:13px;color:var(--ink-soft);margin:10px 0 0;line-height:1.6">' +
        'This is a palm. Trunk girth cannot age a palm — palms have no annual rings and their trunks ' +
        'do not thicken with age, so a fat palm is not an old palm. Measure the <b>trunk height</b> ' +
        'instead (ground up to where the leaves start) and I can estimate it. Counting the leaf scar ' +
        'rings in one metre of trunk makes it more accurate still.</p></div>';
    }
    const p = palmMetrics(heightM, scars, id.palmLeavesPerYear, id.palmPreTrunkYears);
    const range = p && ageRangeText(p.ageLow, p.ageHigh);
    let rows =
      row("Trunk height measured", heightM.toFixed(1) + " m") +
      (p.method === "scars" ? row("Leaf scars counted", scars + " per metre (about " + p.totalScars + " in total)") : "") +
      row("Estimated age", range || "not enough information") +
      row("Method used", p.method === "scars" ? "leaf scar count" : "trunk height only");
    const foot = p.method === "scars"
      ? 'A coconut palm drops 12 to 14 fronds a year and each one leaves a scar ring, so the trunk records ' +
        'time. Total scars divided by leaves per year, plus about ' + p.preTrunkYears + ' years as a sapling before any ' +
        'trunk formed. Leaf production changes with rainfall and nutrition, which is why this is a range. ' +
        'CO<sub>2</sub> is not shown for palms — the tree biomass formula does not apply to them, and using it ' +
        'would give a wrong figure.'
      : 'Estimated from trunk height alone, assuming roughly 30 to 45 cm of trunk a year plus about ' +
        p.preTrunkYears + ' years as a sapling. <b>Counting the leaf scar rings in one metre of trunk would ' +
        'make this considerably more accurate</b> — go back and add that number. ' +
        'CO<sub>2</sub> is not shown for palms — the tree biomass formula does not apply to them.';
    return agePanel("Age of this palm", rows, foot);
  }

  /* ---- Method 1: ordinary trees, by girth ---- */
  const dims = id.dimensions || {};
  // A tape beats the photo every time. Fall back to what the AI read off the
  // image only when nothing was measured, and say clearly which was used.
  const girthUsed = girth || (Number(dims.trunkDiameterCm) > 0 ? Number(dims.trunkDiameterCm) * Math.PI : null);
  const heightUsed = heightM || Number(dims.heightM) || Number(id.typicalHeightM) || null;
  if (!girthUsed) return "";

  const girthProblem = girthLooksWrong(girthUsed);
  const heightProblem = heightUsed ? heightLooksWrong(heightUsed) : null;
  if (girthProblem === "too big" || girthProblem === "too small" ||
      heightProblem === "too big" || heightProblem === "too small") {
    const what = (girthProblem === "too big" || girthProblem === "too small") ? "girth" : "height";
    return '<div class="panel" style="margin-top:16px;border-left:4px solid #b3261e">' +
      '<div class="scan-idhead"><h3 style="margin:0;font-size:15px;color:#b3261e">That measurement does not look right</h3></div>' +
      '<p style="font-size:13.5px;line-height:1.65;margin:10px 0 0">The ' + what +
      ' you entered is outside anything a real tree reaches, so I have not calculated an age or a CO<sub>2</sub> figure from it. ' +
      'Girth should be between ' + MIN_GIRTH_CM + ' and ' + MAX_GIRTH_CM + ' cm, and height between ' +
      MIN_HEIGHT_M + ' and ' + MAX_HEIGHT_M + ' m. Check the decimal point — 99.5 cm and 9950 cm are easy to confuse.</p></div>';
  }

  const gf = lookupGrowthFactor(id);
  const wd = lookupWoodDensity(id);
  const m = treeMetrics(girthUsed, heightUsed, gf.low, gf.high, wd.rho);
  if (!m) return "";

  let lowAge = m.ageLow, highAge = m.ageHigh;
  if (lowAge && highAge && site.mult !== 1) { lowAge *= site.mult; highAge *= site.mult; }
  if (id.looksOlderThanGirth === true && highAge) highAge *= 1.5;
  const range = ageRangeText(lowAge, highAge);

  const measuredGirth = !!girth;
  const measuredHeight = !!heightM;
  const src = String(dims.source || "").toLowerCase();
  const photoSourceWord =
    src.indexOf("scale") !== -1 ? "estimated from the scale object in your photo"
    : src.indexOf("rough") !== -1 ? "rough visual estimate from the photo"
    : "estimated from the photo";
  const tag = (wasMeasured) => wasMeasured
    ? ' <span style="color:var(--ink-soft);font-weight:400">(measured)</span>'
    : ' <span style="color:#b8860b;font-weight:400">(' + photoSourceWord + ')</span>';

  const c = m.carbon;
  const midAge = (lowAge && highAge) ? (lowAge + highAge) / 2 : null;

  let rows =
    '<div class="scan-row"><span>Trunk diameter</span><b>' + m.diameterCm.toFixed(1) + " cm" + tag(measuredGirth) + '</b></div>' +
    (heightUsed ? '<div class="scan-row"><span>Height</span><b>' + Number(heightUsed).toFixed(1) + " m" + tag(measuredHeight) + '</b></div>' : "") +
    (Number(dims.canopyWidthM) > 0 ? '<div class="scan-row"><span>Canopy width</span><b>' + Number(dims.canopyWidthM).toFixed(1) + " m" + tag(false) + '</b></div>' : "") +
    (Number(dims.largestBranchCm) > 0 ? '<div class="scan-row"><span>Largest branch</span><b>' + Number(dims.largestBranchCm).toFixed(0) + " cm thick" + tag(false) + '</b></div>' : "") +
    '<div class="scan-row"><span>Estimated age</span><b>' + esc(range || "not enough species data") + '</b></div>' +
    (site.label ? '<div class="scan-row"><span>Growing conditions</span><b>' + esc(site.label) + '</b></div>' : "");

  if (c) {
    rows +=
      '<div style="height:14px"></div>' +
      '<div class="scan-row"><span>Wood density used</span><b>' + wd.rho.toFixed(2) + " g/cm<sup>3</sup>" +
        (wd.known ? "" : ' <span style="color:#b8860b;font-weight:400">(default)</span>') + '</b></div>' +
      '<div class="scan-row"><span>Biomass, above ground</span><b>' + fmtKg(c.agbKg) + '</b></div>' +
      '<div class="scan-row"><span>Biomass, roots</span><b>' + fmtKg(c.bgbKg) + '</b></div>' +
      '<div class="scan-row"><span>Carbon stored</span><b>' + fmtKg(c.carbonKg) + '</b></div>' +
      '<div class="scan-row"><span>CO<sub>2</sub> absorbed so far</span><b>' + fmtKg(c.co2Kg) + '</b></div>' +
      '<div class="scan-row"><span>Oxygen released while growing</span><b>' + fmtKg(c.o2Kg) + '</b></div>' +
      (midAge && midAge > 0
        ? '<div class="scan-row"><span>Average CO<sub>2</sub> per year</span><b>' + fmtKg(c.co2Kg / midAge) + " / year" + '</b></div>'
        : "");
  }

  let foot =
    '<b>How the age is worked out:</b> growth factor x trunk diameter in inches, the standard arborist method. ' +
    (gf.known ? 'A tropical growth factor for this species is built into the site. '
              : 'This species is not in the built-in table, so the factor came from the AI and is less reliable. ') +
    'Only counting the rings of a felled trunk gives a true age, and even that is unreliable in the tropics, where rings follow wet and dry spells rather than years.' +
    '<br><br><b>How the carbon is worked out:</b> Chave et al. 2014 pantropical equation, ' +
    'AGB = 0.0673 x (density x diameter&sup2; x height)<sup>0.976</sup>, plus 24% for roots, ' +
    'times 0.47 for carbon content, times 3.667 for CO<sub>2</sub>. Oxygen is CO<sub>2</sub> x 0.727, ' +
    'the mass ratio from photosynthesis releasing one molecule of O<sub>2</sub> per molecule of CO<sub>2</sub> fixed. ' +
    'These are totals accumulated over the tree&rsquo;s whole life, not a yearly rate — the per-year figure is simply the total divided by the estimated age, so it inherits the age&rsquo;s uncertainty.';

  if (!measuredGirth) {
    foot += ' <b>Nothing was measured with a tape</b>, so the trunk diameter came from the photograph. A photo has no built-in scale, so this is the weakest part of the estimate. Measuring the girth with a tape would improve every number above.';
  }
  if (scene.climberOnTrunk === true) {
    foot += ' <b>Warning:</b> a creeper is wrapped around this trunk, so the girth almost certainly includes the creeper as well as the tree. Every figure above is therefore too high. Measure again at a clear stretch of trunk.';
  }
  if (measured.site === "pot") {
    foot += ' <b>This plant is pot-restricted</b>, so its growth was deliberately limited. Age from thickness is very unreliable here and could be out by decades.';
  }
  if (!measured.site) {
    foot += ' You did not say what conditions it grows in. Answering that question noticeably improves the age, because a shaded or starved tree is much older than its thickness suggests.';
  }
  if (id.looksOlderThanGirth === true) {
    foot += ' <b>Note:</b> ' + esc(id.olderThanGirthNote ||
      'the bark and form look older than the trunk thickness suggests, so this tree may have been growing slowly. The upper end of the age range has been widened.');
  }
  foot += ' The CO<sub>2</sub> figure describes carbon already stored in this one tree. It is <b>not</b> a carbon credit and cannot be traded — credits require verified, additional projects under CCTS.';

  return agePanel("Size, age, carbon &amp; oxygen", rows, foot);
}

function confidencePill(level) {
  const map = { high: "#1a7f4b", medium: "#b8860b", low: "#b3261e" };
  const word = { high: "High confidence", medium: "Medium confidence", low: "Low confidence — treat as a guess" };
  const c = map[level] || "#6b7280";
  return `<span class="scan-pill" style="background:${c}15;color:${c};border-color:${c}40">${word[level] || "Confidence unknown"}</span>`;
}

function localNameRow(lang, val) {
  if (!val) return "";
  const none = /not commonly named/i.test(val);
  return `<div class="scan-row"><span>${lang} name</span><b${
    none ? ' style="font-weight:400;color:var(--ink-soft)"' : ""
  }>${esc(none ? "No established " + lang + " name" : val)}</b></div>`;
}

/* Artificial, dead, or a photo of a photo. Offices and malls are full of very
   convincing plastic plants, and identifying one as a real monstera and then
   advising how to water it would be an embarrassing failure. This banner runs
   above everything else, and care advice is suppressed when it fires. */
function livingStatusHTML(r) {
  const status = String(r.livingStatus || "living").toLowerCase();
  if (status === "living" || !status) return "";

  const conf = String(r.artificialConfidence || "").toLowerCase();
  const signs = r.artificialSigns || "";

  const copy = {
    artificial: {
      title: "This looks like an artificial plant",
      body: "Plastic, silk or fabric — not a living plant. Nothing here stores carbon, and it needs no care.",
      colour: "#b3261e",
    },
    "dead or dried": {
      title: "This looks like dead or dried plant material",
      body: "Real plant material, but no longer alive and no longer absorbing CO<sub>2</sub>. Care advice will not help it.",
      colour: "#8a6d3b",
    },
    "picture of a picture": {
      title: "This looks like a photo of a picture, not of a plant",
      body: "It appears to be a screen, poster, painting or printed image. Photograph the real plant for a proper result.",
      colour: "#8a6d3b",
    },
  };
  const c = copy[status] || copy.artificial;

  const certainty =
    conf === "high" ? "I am fairly confident of this."
    : conf === "low" ? "I am NOT confident — a good silk plant can be impossible to tell from a real one in a photo. Touch a leaf, or look closely at the stem base, to be sure."
    : "I am reasonably but not completely confident.";

  return '<div class="panel" style="border-left:4px solid ' + c.colour + '">' +
    '<div class="scan-idhead"><h3 style="margin:0;font-size:15px;color:' + c.colour + '">' + c.title + '</h3></div>' +
    '<p style="font-size:13.5px;line-height:1.65;margin:10px 0 0">' + c.body + '</p>' +
    (signs ? '<p style="font-size:13px;color:var(--ink-soft);line-height:1.65;margin:10px 0 0"><b>What I can see:</b> ' + esc(signs) + '</p>' : "") +
    '<p style="font-size:12.5px;color:var(--ink-soft);line-height:1.6;margin:10px 0 0">' + certainty + '</p>' +
    '<p style="font-size:12.5px;color:var(--ink-soft);line-height:1.6;margin:10px 0 0">' +
    'Identification below is of the species this <i>resembles</i>. Health and care advice has been left out, because it would not apply.</p>' +
    '</div>';
}

/* More than one plant tangled in the photo. A creeper on a neem, mistletoe in
   the canopy, two trunks grown together. Two separate problems: the AI may
   describe the wrong plant, and a tape measure around the trunk will have
   included any creeper wrapped around it — which inflates girth, age and CO2
   all at once. Both are called out rather than silently absorbed. */
function sceneHTML(r, measured) {
  const sc = r.scene || {};
  const list = Array.isArray(sc.plants) ? sc.plants.filter(function (p) { return p && p.name; }) : [];
  const girthTaken = measured && Number(measured.girthCm) > 0;
  const showGirthWarning = sc.climberOnTrunk === true && girthTaken;

  if (!sc.multiplePlants && !showGirthWarning) return "";

  const roleColour = {
    "main subject": "#1a7f4b",
    "climber on it": "#b8860b",
    "neighbouring plant": "#6b7280",
    epiphyte: "#6b7280",
    parasite: "#b3261e",
  };

  const items = list.map(function (p) {
    const c = roleColour[String(p.role || "").toLowerCase()] || "#6b7280";
    return '<div style="margin-bottom:10px">' +
      '<b style="font-size:13.5px">' + esc(p.name) + '</b> ' +
      '<span class="scan-pill" style="background:' + c + '15;color:' + c + ';border-color:' + c + '40">' +
      esc(p.role || "seen in photo") + '</span>' +
      (p.note ? '<p style="margin:3px 0 0;font-size:13px;color:var(--ink-soft);line-height:1.6">' + esc(p.note) + '</p>' : "") +
      '</div>';
  }).join("");

  const hasParasite = list.some(function (p) { return String(p.role || "").toLowerCase() === "parasite"; });

  return '<div class="panel" style="border-left:4px solid ' + (hasParasite ? "#b3261e" : "#b8860b") + '">' +
    '<div class="scan-idhead"><h3 style="margin:0;font-size:15px">More than one plant in this photo</h3></div>' +
    (sc.whichIsMain
      ? '<p style="font-size:13.5px;line-height:1.65;margin:10px 0 14px">' + esc(sc.whichIsMain) + '</p>'
      : '<p style="font-size:13.5px;line-height:1.65;margin:10px 0 14px">Several plants are growing together here. The description below is of the main one — check that it is the one you meant.</p>') +
    items +
    (showGirthWarning
      ? '<p class="note-banner" style="margin-top:14px;border-color:#b3261e60;background:#fff5f5">' +
        '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>' +
        '<span><b>Your girth measurement is probably too big.</b> ' +
        esc(sc.girthWarning || "A creeper is wrapped around the trunk, so the tape went around the tree and the creeper together. The age and stored CO2 below will both come out higher than they really are. Measure again at a clear stretch of trunk.") +
        '</span></p>'
      : "") +
    '<p style="font-size:12.5px;color:var(--ink-soft);line-height:1.6;margin:14px 0 0">' +
    'If I described the wrong plant, photograph just the one you mean — a single leaf held against a plain background works best.</p>' +
    '</div>';
}

function scanResultHTML(r) {
  if (r.isPlant === false) {
    return `<div class="panel"><h3 style="margin:0 0 8px;font-size:15px">That doesn't look like a plant</h3>
      <p style="font-size:13.5px;color:var(--ink-soft);margin:0">Try again with a clear photo of a leaf, branch, or the whole plant.</p></div>`;
  }

  const id = r.identification || {};
  const ab = r.about || {};
  const he = r.health || {};
  const problems = Array.isArray(he.problems) ? he.problems : [];
  const alts = Array.isArray(id.alternatives) ? id.alternatives : [];

  const row = (label, val) =>
    val ? `<div class="scan-row"><span>${label}</span><b>${esc(val)}</b></div>` : "";

  const statusColor =
    he.status === "healthy" ? "#1a7f4b" : he.status === "problem detected" ? "#b3261e" : "#6b7280";

  const notLiving = String(r.livingStatus || "living").toLowerCase() !== "living";

  return `
    ${livingStatusHTML(r)}
    ${notLiving ? "" : sceneHTML(r, r.measured || {})}
    <div class="panel">
      <div class="scan-idhead">
        <div>
          <h3 style="margin:0 0 4px;font-size:20px">${esc(id.commonName || "Not identified")}</h3>
          <p style="margin:0;font-size:14px;font-style:italic;color:var(--ink-soft)">${esc(id.botanicalName || "")}</p>
        </div>
        ${confidencePill(id.confidence)}
      </div>
      ${localNameRow("Tamil", id.tamilName)}
      ${localNameRow("Hindi", id.hindiName)}
      ${row("Other names", id.otherLocalNames)}
      ${row("Family", id.family)}
      ${habitInfo(id.growthHabit) ? row("Growth habit", habitInfo(id.growthHabit).label) : ""}
      ${ab.description ? `<p style="font-size:13.5px;line-height:1.65;margin:14px 0 0">${esc(ab.description)}</p>` : ""}
    </div>

    ${notLiving ? "" : (habitPanelHTML(id, r.measured || {}) || treeAgeHTML(id, r.measured || {}, r.scene || {}))}

    ${
      alts.length
        ? `<div class="panel">
      <h3 style="margin:0 0 10px;font-size:15px">Could also be</h3>
      ${alts
        .map(
          (a) =>
            `<div style="margin-bottom:12px"><b style="font-size:13.5px">${esc(a.name || "")}</b>
        <p style="margin:3px 0 0;font-size:13px;color:var(--ink-soft);line-height:1.6">${esc(a.howToTellApart || "")}</p></div>`
        )
        .join("")}
    </div>`
        : ""
    }

    <div class="panel">
      <h3 style="margin:0 0 12px;font-size:15px">Plant details</h3>
      ${row("Native to", ab.nativeRegion)}
      ${row("Mature size", ab.matureSize)}
      ${row("Lifespan", ab.lifespan)}
      ${row("Sunlight", ab.sunlight)}
      ${row("Water", ab.water)}
      ${row("Soil", ab.soil)}
      ${row("Uses", ab.uses)}
      ${
        ab.carbonNote
          ? `<p class="note-banner" style="margin-top:14px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>
        <span>${esc(ab.carbonNote)}</span></p>`
          : ""
      }
    </div>

    ${notLiving ? "" : `
    <div class="panel">
      <div class="scan-idhead">
        <h3 style="margin:0;font-size:15px">Health check</h3>
        <span class="scan-pill" style="background:${statusColor}15;color:${statusColor};border-color:${statusColor}40">${esc(
    he.status || "unknown"
  )}</span>
      </div>
      ${he.summary ? `<p style="font-size:13.5px;line-height:1.65;margin:12px 0 0">${esc(he.summary)}</p>` : ""}
    </div>

    ${problems
      .map(
        (p) => `
      <div class="panel">
        <div class="scan-idhead">
          <div>
            <h3 style="margin:0 0 3px;font-size:16px">${esc(p.name || "Problem")}</h3>
            <p style="margin:0;font-size:12.5px;color:var(--ink-soft);text-transform:capitalize">${esc(p.type || "")}</p>
          </div>
          ${confidencePill(p.confidence)}
        </div>
        ${p.visibleSigns ? `<div class="scan-block"><span>What I can see</span><p>${esc(p.visibleSigns)}</p></div>` : ""}
        ${p.organicTreatment ? `<div class="scan-block"><span>Organic / cultural fix</span><p>${esc(p.organicTreatment)}</p></div>` : ""}
        ${p.chemicalTreatment ? `<div class="scan-block"><span>Chemical option</span><p>${esc(p.chemicalTreatment)}</p></div>` : ""}
        ${p.prevention ? `<div class="scan-block"><span>Preventing it next time</span><p>${esc(p.prevention)}</p></div>` : ""}
      </div>`
      )
      .join("")}

    ${
      r.betterPhotoTip
        ? `<div class="panel"><h3 style="margin:0 0 8px;font-size:15px">Get a better answer</h3>
      <p style="font-size:13.5px;line-height:1.6;margin:0;color:var(--ink-soft)">${esc(r.betterPhotoTip)}</p></div>`
        : ""
    }

    ${
      r.caution
        ? `<div class="panel" style="border-color:#e0b34a60;background:#fffaf0">
      <h3 style="margin:0 0 8px;font-size:15px">Important limits</h3>
      <p style="font-size:13.5px;line-height:1.65;margin:0">${esc(r.caution)}</p>
      <p style="font-size:13px;line-height:1.6;margin:10px 0 0;color:var(--ink-soft)">Never spray anything based on a phone app alone. Confirm with your local agriculture extension officer or Krishi Vigyan Kendra first.</p>
    </div>`
        : ""
    }
    `}

    ${notLiving ? "" : `
    <div class="panel">
      <h3 style="margin:0 0 4px;font-size:15px">Save this tree</h3>
      <p style="font-size:13px;color:var(--ink-soft);line-height:1.65;margin:0 0 16px">
        Give it a number and a name and it joins your Tree Register, with a printable QR tag anyone can scan. This uses no extra AI credits — everything above is reused.
      </p>
      <div class="field-grid">
        <div class="field">
          <label>Tree number</label>
          <input type="text" id="save-number" placeholder="e.g. SCSVMV-012" maxlength="20">
        </div>
        <div class="field">
          <label>Name for this tree</label>
          <input type="text" id="save-name" placeholder="e.g. Neem by the library" maxlength="40">
        </div>
      </div>
      <div style="margin-top:16px">
        <button class="btn-gradient" id="save-to-register">Save to Tree Register</button>
      </div>
      <p id="save-msg" style="font-size:13px;color:#b3261e;margin:12px 0 0"></p>
    </div>`}`;
}

/* Shrink the photo before upload — keeps it fast and cheap */
function scanReadImage(file) {
  return new Promise(function (resolve, reject) {
    const reader = new FileReader();
    reader.onerror = function () {
      reject(new Error("Could not read that image."));
    };
    reader.onload = function () {
      const img = new Image();
      img.onerror = function () {
        reject(new Error("Could not open that image."));
      };
      img.onload = function () {
        const max = 800;
        let w = img.width;
        let h = img.height;
        if (w > max || h > max) {
          const scale = max / Math.max(w, h);
          w = Math.round(w * scale);
          h = Math.round(h * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.78);
        resolve({ preview: dataUrl, data: dataUrl.split(",")[1], mimeType: "image/jpeg" });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function bindScanEvents() {
  document.querySelectorAll("[data-scan-slot]").forEach(function (input) {
    input.addEventListener("change", function () {
      const file = input.files && input.files[0];
      if (!file) return;
      const key = input.dataset.scanSlot;
      scanReadImage(file)
        .then(function (img) {
          scanState.photos[key] = img;
          scanState.error = "";
          renderAppContent();
        })
        .catch(function (err) {
          scanState.error = err.message;
          renderAppContent();
        });
    });
  });

  const locBtn = document.getElementById("scan-loc");
  if (locBtn) {
    locBtn.addEventListener("click", function () {
      if (!navigator.geolocation) {
        scanState.locationStatus = "Your browser can't share location.";
        renderAppContent();
        return;
      }
      scanState.locationStatus = "Getting location…";
      renderAppContent();
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          scanState.location = {
            lat: pos.coords.latitude.toFixed(4),
            lng: pos.coords.longitude.toFixed(4),
          };
          scanState.locationStatus =
            "Location added \u2713  (" + scanState.location.lat + ", " + scanState.location.lng + ")";
          renderAppContent();
        },
        function (err) {
          if (err && err.code === 1) {
            scanState.locationStatus =
              "Location blocked. Tap the lock icon in the address bar to allow it, or skip \u2014 the scan still works.";
          } else if (err && err.code === 3) {
            scanState.locationStatus = "Location timed out. Tap again, or skip \u2014 the scan still works.";
          } else {
            scanState.locationStatus = "Couldn't get location. Skip it \u2014 the scan still works.";
          }
          renderAppContent();
        },
        { timeout: 20000, maximumAge: 300000, enableHighAccuracy: false }
      );
    });
  }

  ["duration", "watering", "spreading", "notes"].forEach(function (f) {
    const el = document.getElementById("scan-" + f);
    if (el) {
      el.addEventListener("change", function () {
        scanState[f] = el.value;
      });
    }
  });

  const goBtn = document.getElementById("scan-go");
  if (goBtn) goBtn.addEventListener("click", runScan);

  const saveBtn = document.getElementById("save-to-register");
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      const num = (document.getElementById("save-number") || {}).value || "";
      const nm = (document.getElementById("save-name") || {}).value || "";
      const msg = document.getElementById("save-msg");
      if (!num.trim()) {
        if (msg) msg.textContent = "Give the tree a number first — it is what the QR tag is labelled with.";
        return;
      }
      saveScanToRegister(num.trim(), nm.trim());
    });
  }
}

function runScan() {
  const notesEl = document.getElementById("scan-notes");
  if (notesEl) scanState.notes = notesEl.value;
  // Free-text fields are read at submit time rather than on every keystroke.
  const girthEl = document.getElementById("scan-girth");
  if (girthEl) scanState.girth = girthEl.value;
  const heightEl = document.getElementById("scan-height");
  if (heightEl) scanState.height = heightEl.value;
  const scarsEl = document.getElementById("scan-scars");
  if (scarsEl) scanState.scars = scarsEl.value;
  const scaleEl = document.getElementById("scan-scale");
  if (scaleEl) scanState.scaleRef = scaleEl.value;

  const images = SCAN_SLOTS.filter(function (s) {
    return scanState.photos[s.key];
  }).map(function (s) {
    return {
      label: s.label,
      data: scanState.photos[s.key].data,
      mimeType: scanState.photos[s.key].mimeType,
    };
  });

  if (images.length === 0) {
    scanState.error = "Add at least one photo first.";
    renderAppContent();
    return;
  }

  scanState.loading = true;
  scanState.error = "";
  scanState.result = null;
  renderAppContent();

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  fetch("/.netlify/functions/plant-scan", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      images: images,
      location: scanState.location,
      month: monthNames[new Date().getMonth()],
      duration: scanState.duration,
      watering: scanState.watering,
      spreading: scanState.spreading,
      notes: scanState.notes,
      girthCm: scanState.girth ? Number(scanState.girth) : null,
      heightM: scanState.height ? Number(scanState.height) : null,
      scarsPerMetre: scanState.scars ? Number(scanState.scars) : null,
      site: scanState.site,
      scaleRef: scanState.scaleRef,
    }),
  })
    .then(function (res) {
      return res.json().then(function (body) {
        return { ok: res.ok, body: body };
      });
    })
    .then(function (out) {
      scanState.loading = false;
      if (!out.ok) {
        const detail = out.body && out.body.detail ? String(out.body.detail) : "";
        const msg = out.body && out.body.error ? String(out.body.error) : "Scan failed";
        scanState.error = detail ? msg + " — " + detail : msg;
      } else {
        scanState.result = out.body;
        // Keep what the user actually measured alongside the AI's answer, so
        // the age and CO2 panel can be recalculated on any re-render.
        scanState.result.measured = {
          girthCm: scanState.girth ? Number(scanState.girth) : null,
          heightM: scanState.height ? Number(scanState.height) : null,
          scarsPerMetre: scanState.scars ? Number(scanState.scars) : null,
          site: scanState.site,
        };
      }
      renderAppContent();
      const el = document.getElementById("scan-result");
      if (el && scanState.result) el.scrollIntoView({ behavior: "smooth", block: "start" });
    })
    .catch(function () {
      scanState.loading = false;
      scanState.error = "Couldn't reach the server. Check your connection and try again.";
      renderAppContent();
    });
}

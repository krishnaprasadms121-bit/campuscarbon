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
/* ---------------------------------------------------------------------- */
const APP_TABS = [
  { id: "calc", label: "Calculator", icon: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>' },
  { id: "track", label: "Track Growth", icon: '<path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>' },
  { id: "apply", label: "Apply", icon: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/>' },
  { id: "plan", label: "Plan a Project", icon: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>' },
  { id: "help", label: "Help Assistant", icon: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' },
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
  if (state.tab === "calc") { el.innerHTML = calcHTML(); bindCalcEvents(); updateCalcResults(); }
  else if (state.tab === "track") { el.innerHTML = trackHTML(); bindTrackEvents(); }
  else if (state.tab === "apply") { el.innerHTML = applyHTML(); }
  else if (state.tab === "plan") { el.innerHTML = planHTML(); bindPlanEvents(); updatePlanResults(); }
  else if (state.tab === "help") { el.innerHTML = helpHTML(); bindHelpEvents(); }
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
function isPlanRequest(q, activity) {
  if (!activity) return false;
  if (PLAN_TRIGGER_REGEX.test(q)) return true;
  if (extractQuantity(q) !== null) return true;
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
  "How do I sell my credits?",
];

function helpHTML() {
  return `
    <div class="app-header">
      <h2>Help Assistant</h2>
      <p>Ask me anything about carbon credits — I'm AI-powered for open questions. Ask for a full plan (e.g. "plan an afforestation project for 500 trees") and I'll generate a downloadable PDF using this site's own calculations.</p>
      <p class="note-banner" style="margin-top:14px">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
        <span>If the AI backend isn't connected yet, I'll automatically use my built-in carbon-credit knowledge instead — so this always works.</span>
      </p>
    </div>

    <div class="panel" style="padding:0;overflow:hidden;display:flex;flex-direction:column;height:min(640px,70vh)">
      <div id="chat-messages" style="flex:1;overflow-y:auto;padding:22px;display:flex;flex-direction:column;gap:14px"></div>
      <div style="padding:14px 18px;border-top:1px solid var(--line);background:#fff">
        <div id="chat-suggestions" style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:10px"></div>
        <div style="display:flex;gap:8px">
          <input type="text" id="chat-input" placeholder="Ask about carbon credits, or ask me to plan a project..." style="flex:1;border:1.5px solid var(--line);border-radius:999px;padding:11px 16px;font-size:14px;font-family:'Inter',sans-serif">
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
    return { text: "Hello! Ask me about carbon credits, or ask me to plan an afforestation, solar, or biogas project — I'll build you a full plan with a downloadable PDF." };
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

  if (!isOnTopic(q)) {
    return { text: "I can only help with carbon credit topics — applying, verification, trading, maintenance, or planning a tree/solar/biogas project. Try rephrasing, or tap one of the suggestions below." };
  }

  return { text: "I don't have a specific answer for that yet, but I can help with applying for credits, verification, selling/trading, maintenance, or planning a tree/solar/biogas project — try asking one of those, or tap a suggestion below." };
}

async function callAIAssistant(history) {
  const apiMessages = history
    .filter((m) => !m.pending)
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
}
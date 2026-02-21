// ============================================================
// MODEL DATA OBJECT
// This giant object stores ALL model information used by the app.
// Each model has:
// - id, name, family
// - pricing info
// - speed + rating
// - offline support
// - best use cases
// - strengths + weaknesses
// - tags (used for UI badges)
// - niche scores (coding, writing, research)
// ============================================================

const MODELS = {
  "gpt-5.1": {
    id: "gpt-5.1",
    name: "GPT-5.1",
    family: "OpenAI",

    // Pricing info shown in the UI
    pricing: {
      inputPer1K: "$0.01",
      outputPer1K: "$0.03",
      bundlePerMonth: "$25 starter credits"
    },

    // priceIndex = numeric score used for comparing cost
    priceIndex: 2,

    // speedIndex = lower = faster
    speed: "Fast",
    speedIndex: 2,

    // Rating shown on the card
    rating: 9.4,

    // Whether the model can run offline (local/self-host)
    offlineSupport: false,

    // Lists shown in the card UI
    bestUseCases: [
      "General-purpose assistant",
      "Complex reasoning & planning",
      "Code + writing hybrids"
    ],
    strengths: [
      "Strong balance of reasoning, coding, and writing",
      "Great for production AI assistants and tools",
      "Handles long contexts and multi-step tasks well"
    ],
    weaknesses: [
      "Overkill for tiny, simple scripts",
      "Higher cost than budget/open-source models"
    ],

    // Tags displayed as badges
    tags: ["general", "coding", "writing", "research"],

    // Niche scores used for “Best For You”
    niches: { coding: 9, writing: 9, research: 9 }
  },

  // ============================================================
  // GPT‑4.1
  // ============================================================
  "gpt-4.1": {
    id: "gpt-4.1",
    name: "GPT-4.1",
    family: "OpenAI",

    pricing: {
      inputPer1K: "$0.005",
      outputPer1K: "$0.015",
      bundlePerMonth: "$15 light tier"
    },

    priceIndex: 1.7,
    speed: "Medium-fast",
    speedIndex: 3,
    rating: 9.0,
    offlineSupport: false,

    bestUseCases: [
      "High-quality writing and editing",
      "Chatbots & support tools",
      "Non-extreme coding & data analysis"
    ],
    strengths: [
      "Polished long-form responses",
      "Good trade-off between quality and cost",
      "Well supported across many tools"
    ],
    weaknesses: [
      "Not as fast as some newer models",
      "Can be pricier than open models for bulk usage"
    ],

    tags: ["general", "writing", "research", "coding"],
    niches: { coding: 8, writing: 9, research: 8.5 }
  },

  // ============================================================
  // DEEPSEEK R1
  // ============================================================
  "deepseek-r1": {
    id: "deepseek-r1",
    name: "DeepSeek",
    family: "DeepSeek",

    pricing: {
      inputPer1K: "$0.0006",
      outputPer1K: "$0.0006",
      bundlePerMonth: "$5 experimental tier"
    },

    priceIndex: 0.5,
    speed: "Fast",
    speedIndex: 2,
    rating: 8.7,
    offlineSupport: false,

    bestUseCases: [
      "Cheap large-scale experiments",
      "Side projects, scripts, and tooling",
      "People comfortable reading deliberate reasoning"
    ],
    strengths: [
      "Very low estimated cost",
      "Good at step-by-step reasoning samples",
      "Nice playground for tinkerers and builders"
    ],
    weaknesses: [
      "Reasoning style can be verbose",
      "Ecosystem still evolving; docs and tooling may be rough"
    ],

    tags: ["budget", "research", "hacking", "coding"],
    niches: { coding: 8, writing: 7, research: 8.5 }
  },

  // ============================================================
  // GROK‑3
  // ============================================================
  "grok-3": {
    id: "grok-3",
    name: "Grok",
    family: "xAI",

    pricing: {
      inputPer1K: "$0.004",
      outputPer1K: "$0.01",
      bundlePerMonth: "Included in premium tier (demo)"
    },

    priceIndex: 1.2,
    speed: "Very fast on short prompts",
    speedIndex: 1.5,
    rating: 8.9,
    offlineSupport: false,

    bestUseCases: [
      "Casual Q&A and chatting",
      "Real-time info when connected",
      "Playful creative prompts"
    ],
    strengths: [
      "Snappy for conversational use",
      "Strong for up-to-date style queries (when connected)",
      "Fun tone for creative play"
    ],
    weaknesses: [
      "Ecosystem is younger than some competitors",
      "Less focused on enterprise workflows in this demo"
    ],

    tags: ["general", "writing", "creative"],
    niches: { coding: 7.5, writing: 8.3, research: 7.8 }
  },

  // ============================================================
  // GEMINI 2.0
  // ============================================================
  "gemini-2.0": {
    id: "gemini-2.0",
    name: "Gemini 2.0",
    family: "Google",

    pricing: {
      inputPer1K: "$0.004",
      outputPer1K: "$0.012",
      bundlePerMonth: "$20 workspace-style bundle (demo)"
    },

    priceIndex: 1.3,
    speed: "Fast, good for multi-modal",
    speedIndex: 2.2,
    rating: 9.1,
    offlineSupport: false,

    bestUseCases: [
      "Docs, Slides, and productivity workflows",
      "Search-adjacent research and summaries",
      "Image + text multi-modal experiments"
    ],
    strengths: [
      "Nice fit with productivity suites and documents",
      "Good for summarizing and organizing information",
      "Solid at search-like question answering"
    ],
    weaknesses: [
      "Coding may feel behind coding-focused models",
      "Tied to specific ecosystem for best experience"
    ],

    tags: ["writing", "research", "productivity"],
    niches: { coding: 7.2, writing: 8.8, research: 8.7 }
  },

  // ============================================================
  // CLAUDE 3.5
  // ============================================================
  "claude-3.5": {
    id: "claude-3.5",
    name: "Claude 3.5",
    family: "Anthropic",

    pricing: {
      inputPer1K: "$0.005",
      outputPer1K: "$0.015",
      bundlePerMonth: "$25 pro demo"
    },

    priceIndex: 1.8,
    speed: "Medium-fast",
    speedIndex: 3,
    rating: 9.3,
    offlineSupport: false,

    bestUseCases: [
      "Long-form writing & editing",
      "Complex reasoning with long context",
      "Careful summarization of documents"
    ],
    strengths: [
      "Very natural writing tone",
      "Strong at reasoning over long text",
      "Great for writers, analysts, and planners"
    ],
    weaknesses: [
      "Not the absolute cheapest option",
      "Coding is strong but not always the main focus"
    ],

    tags: ["writing", "research", "general"],
    niches: { coding: 8.2, writing: 9.4, research: 9.0 }
  },

  // ============================================================
  // LLAMA 3 (Open-source)
  // ============================================================
  "llama-3": {
    id: "llama-3",
    name: "Llama 3",
    family: "Meta / Open-source",

    pricing: {
      inputPer1K: "$0.0003",
      outputPer1K: "$0.0006",
      bundlePerMonth: "Self-hostable • infra only"
    },

    priceIndex: 0.4,
    speed: "Fast when self-hosted",
    speedIndex: 2,
    rating: 8.5,
    offlineSupport: true, // Only model here that supports offline

    bestUseCases: [
      "Self-hosted, privacy-sensitive setups",
      "Apps where you control the infra",
      "Tuning, fine-tuning, and open-source hacking"
    ],
    strengths: [
      "Open-source and highly customizable",
      "Can run locally/offline if you have the hardware",
      "Very cheap per-token on your own infra"
    ],
    weaknesses: [
      "You manage hosting, scaling, and updates",
      "Quality may lag top frontier models on some tasks"
    ],

    tags: ["open-source", "coding", "research", "budget"],
    niches: { coding: 8.3, writing: 7.8, research: 8.0 }
  }
};

// ============================================================
// DEMO MODEL LISTS
// DEMO_MODEL_IDS = only the models shown in the dropdowns.
// MODEL_LIST = full list (used later for Pro mode).
// ============================================================

const DEMO_MODEL_IDS = [
  "gpt-5.1",
  "gpt-4.1",
  "claude-3.5",
  "gemini-2.0"
];

const MODEL_LIST = Object.values(MODELS);

// Grab the <select> elements from the DOM
const modelASelect = document.getElementById("modelA");
const modelBSelect = document.getElementById("modelB");


// ============================================================
// populateModelSelects()
// Fills both dropdowns with demo models.
// Adds placeholders, sorts models alphabetically,
// and sets default selections.
// ============================================================

function populateModelSelects() {
  // Clear existing options
  modelASelect.innerHTML = "";
  modelBSelect.innerHTML = "";

  // Create placeholder for Model A
  const placeholderA = document.createElement("option");
  placeholderA.value = "";
  placeholderA.textContent = "Select a model…";
  placeholderA.disabled = true;
  placeholderA.selected = true;

  // Create placeholder for Model B
  const placeholderB = document.createElement("option");
  placeholderB.value = "";
  placeholderB.textContent = "Select a model…";
  placeholderB.disabled = true;
  placeholderB.selected = true;

  // Add placeholders to dropdowns
  modelASelect.appendChild(placeholderA);
  modelBSelect.appendChild(placeholderB);

  // Convert demo IDs → model objects
  const demoModels = DEMO_MODEL_IDS
    .map((id) => MODELS[id])
    .filter(Boolean);

  // Sort alphabetically by model name
  const sorted = demoModels.sort((a, b) => a.name.localeCompare(b.name));

  // Add each model to both dropdowns
  sorted.forEach((model) => {
    const optA = document.createElement("option");
    optA.value = model.id;
    optA.textContent = `${model.name} (${model.family})`;

    const optB = document.createElement("option");
    optB.value = model.id;
    optB.textContent = `${model.name} (${model.family})`;

    modelASelect.appendChild(optA);
    modelBSelect.appendChild(optB);
  });

  // Default selections for demo mode
  if (DEMO_MODEL_IDS.includes("gpt-5.1")) {
    modelASelect.value = "gpt-5.1";
  }
  if (DEMO_MODEL_IDS.includes("claude-3.5")) {
    modelBSelect.value = "claude-3.5";
  }
}


// ============================================================
// renderList(list, asUl)
// Converts an array into either:
// - a <ul> list (default)
// - a comma-separated string
// Used for strengths, weaknesses, use cases.
// ============================================================

function renderList(list, asUl = true) {
  if (!list || !list.length) return "—";
  if (!asUl) return list.join(", ");
  return `<ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}


// ============================================================
// compareSpeed(m1, m2)
// Returns a human-readable speed comparison.
// Lower speedIndex = faster.
// ============================================================

function compareSpeed(m1, m2) {
  if (m1.speedIndex === m2.speedIndex) return "about the same speed";
  return m1.speedIndex < m2.speedIndex ? `${m1.name} is faster` : `${m2.name} is faster`;
}


// ============================================================
// comparePrice(m1, m2)
// Same idea as compareSpeed but for cost.
// Lower priceIndex = cheaper.
// ============================================================

function comparePrice(m1, m2) {
  if (m1.priceIndex === m2.priceIndex) return "roughly equal ballpark cost";
  return m1.priceIndex < m2.priceIndex ? `${m1.name} is cheaper` : `${m2.name} is cheaper`;
}


// ============================================================
// animateCard(cardElement)
// Quick CSS reflow trick to restart the fade-in animation.
// Removes .show → forces reflow → adds .show again.
// ============================================================

function animateCard(cardElement) {
  cardElement.classList.remove("show");
  void cardElement.offsetWidth; // forces browser reflow
  cardElement.classList.add("show");
}


// ============================================================
// renderModelCard(prefix, model)
// Fills in all UI fields for Model A or Model B.
// prefix = "modelA" or "modelB"
// ============================================================

function renderModelCard(cardIdPrefix, model) {
  // Basic info
  document.getElementById(cardIdPrefix + "Name").textContent = model.name;
  document.getElementById(cardIdPrefix + "Rating").textContent =
    model.rating.toFixed(1);

  // Tags
  const tagsContainer = document.getElementById(cardIdPrefix + "Tags");
  tagsContainer.innerHTML = "";
  model.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("tag");

    // Highlight important tags
    if (["coding", "writing", "research"].includes(tag)) {
      span.classList.add("highlight");
    }

    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  // Pricing
  document.getElementById(cardIdPrefix + "InPrice").textContent =
    model.pricing.inputPer1K;
  document.getElementById(cardIdPrefix + "OutPrice").textContent =
    model.pricing.outputPer1K;
  document.getElementById(cardIdPrefix + "Bundle").textContent =
    model.pricing.bundlePerMonth;

  // Speed + offline
  document.getElementById(cardIdPrefix + "Speed").textContent = model.speed;

  const offlineTextEl = document.getElementById(cardIdPrefix + "Offline");
  const offlineDotEl = document.getElementById(cardIdPrefix + "OfflineDot");

  if (model.offlineSupport) {
    offlineTextEl.textContent = "Yes (can self-host / local)";
    offlineDotEl.classList.remove("offline-no");
    offlineDotEl.classList.add("offline-yes");
  } else {
    offlineTextEl.textContent = "No (cloud-only in this demo)";
    offlineDotEl.classList.remove("offline-yes");
    offlineDotEl.classList.add("offline-no");
  }

  // Lists
  document.getElementById(cardIdPrefix + "UseCases").innerHTML =
    renderList(model.bestUseCases);
  document.getElementById(cardIdPrefix + "Strengths").innerHTML =
    renderList(model.strengths);
  document.getElementById(cardIdPrefix + "Weaknesses").innerHTML =
    renderList(model.weaknesses);

  // Animate card
  const cardElement =
    cardIdPrefix === "modelA"
      ? document.getElementById("cardA")
      : document.getElementById("cardB");

  animateCard(cardElement);
}


// ============================================================
// nicheWinner(modelA, modelB, nicheKey)
// Returns which model wins a niche (coding, writing, research).
// ============================================================

function nicheWinner(modelA, modelB, nicheKey) {
  const aScore = modelA.niches?.[nicheKey] ?? 0;
  const bScore = modelB.niches?.[nicheKey] ?? 0;

  if (aScore === bScore) return { label: "Tie", winner: null };

  return aScore > bScore
    ? { label: modelA.name, winner: modelA }
    : { label: modelB.name, winner: modelB };
}


// ============================================================
// renderBestForYou(modelA, modelB)
// Fills in the "Best For You" summary card.
// ============================================================

function renderBestForYou(modelA, modelB) {
  const cheapestEl = document.getElementById("bestCheapest");
  const cheapestNoteEl = document.getElementById("bestCheapestNote");
  const fastestEl = document.getElementById("bestFastest");
  const fastestNoteEl = document.getElementById("bestFastestNote");
  const codingEl = document.getElementById("bestCoding");
  const codingNoteEl = document.getElementById("bestCodingNote");
  const wrEl = document.getElementById("bestWritingResearch");
  const wrNoteEl = document.getElementById("bestWritingResearchNote");

  // Cheapest
  const cheaper = modelA.priceIndex < modelB.priceIndex ? modelA : modelB;
  cheapestEl.textContent = cheaper.name;
  cheapestNoteEl.textContent = comparePrice(modelA, modelB);

  // Fastest
  const faster = modelA.speedIndex < modelB.speedIndex ? modelA : modelB;
  fastestEl.textContent = faster.name;
  fastestNoteEl.textContent = compareSpeed(modelA, modelB);

  // Coding niche
  const coding = nicheWinner(modelA, modelB, "coding");
  codingEl.textContent = coding.label;
  codingNoteEl.textContent =
    coding.winner === null
      ? "Both are similar for coding in this demo."
      : "Higher coding-score between these two in this demo.";

  // Writing + research combined score
  const aWR =
    ((modelA.niches?.writing ?? 0) + (modelA.niches?.research ?? 0)) / 2;
  const bWR =
    ((modelB.niches?.writing ?? 0) + (modelB.niches?.research ?? 0)) / 2;

  if (aWR === bWR) {
    wrEl.textContent = "Tie";
    wrNoteEl.textContent =
      "Both are solid for writing & research in this simple demo.";
  } else if (aWR > bWR) {
    wrEl.textContent = modelA.name;
    wrNoteEl.textContent =
      "Slight edge for writing + research balance in this demo.";
  } else {
    wrEl.textContent = modelB.name;
    wrNoteEl.textContent =
      "Slight edge for writing + research balance in this demo.";
  }
}


// ============================================================
// buildShareSummary(modelA, modelB)
// Creates the text that gets copied to clipboard.
// ============================================================

function buildShareSummary(modelA, modelB) {
  const cheaper = modelA.priceIndex < modelB.priceIndex ? modelA : modelB;
  const faster = modelA.speedIndex < modelB.speedIndex ? modelA : modelB;
  const coding = nicheWinner(modelA, modelB, "coding");

  const aWR =
    ((modelA.niches?.writing ?? 0) + (modelA.niches?.research ?? 0)) / 2;
  const bWR =
    ((modelB.niches?.writing ?? 0) + (modelB.niches?.research ?? 0)) / 2;

  const wr = aWR === bWR ? null : aWR > bWR ? modelA : modelB;

  return [
    `AI Battleboard — ${modelA.name} vs ${modelB.name}`,
    "",
    `• Rating: ${modelA.name} ${modelA.rating.toFixed(
      1
    )}/10 vs ${modelB.name} ${modelB.rating.toFixed(1)}/10`,
    `• Cheapest (demo): ${cheaper.name}`,
    `• Fastest (demo): ${faster.name}`,
    `• Coding edge (demo): ${coding.winner ? coding.winner.name : "Tie"}`,
    `• Writing + research edge (demo): ${wr ? wr.name : "Tie"}`,
    "",
    `${modelA.name} use cases: ${modelA.bestUseCases.join(", ")}`,
    `${modelB.name} use cases: ${modelB.bestUseCases.join(", ")}`,
    "",
    "All prices, ratings, and scores here are placeholders for comparison only."
  ].join("\n");
}


// ============================================================
// showToast(message)
// Shows the “Copied to clipboard” popup.
// ============================================================

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}


// ============================================================
// Compare + Share Button Handlers
// ============================================================

const compareBtn = document.getElementById("compareBtn");
const shareBtn = document.getElementById("shareBtn");
const shareStatus = document.getElementById("shareStatus");


// Main compare function
function handleCompare() {
  const idA = modelASelect.value;
  const idB = modelBSelect.value;

  if (!idA || !idB || !MODELS[idA] || !MODELS[idB]) return;

  const modelA = MODELS[idA];
  const modelB = MODELS[idB];

  renderModelCard("modelA", modelA);
  renderModelCard("modelB", modelB);
  renderBestForYou(modelA, modelB);

  shareStatus.textContent = `Ready to share: ${modelA.name} vs ${modelB.name} summary.`;
}


// Copy summary to clipboard
function handleShare() {
  const idA = modelASelect.value;
  const idB = modelBSelect.value;

  if (!idA || !idB || !MODELS[idA] || !MODELS[idB]) {
    showToast("Pick two models first.");
    return;
  }

  const modelA = MODELS[idA];
  const modelB = MODELS[idB];

  const text = buildShareSummary(modelA, modelB);

  // Modern clipboard API
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Comparison summary copied."))
      .catch(() => window.prompt("Copy this comparison summary:", text));
  } else {
    // Fallback for older browsers
    window.prompt("Copy this comparison summary:", text);
  }
}


// ============================================================
// INITIALIZE APP
// ============================================================

populateModelSelects();  // Fill dropdowns
handleCompare();         // Render default comparison

// Attach event listeners
compareBtn.addEventListener("click", handleCompare);
shareBtn.addEventListener("click", handleShare);


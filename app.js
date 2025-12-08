// MODEL DATA
const MODELS = {
  "gpt-5.1": {
    id: "gpt-5.1",
    name: "GPT-5.1",
    family: "OpenAI",
    pricing: {
      inputPer1K: "$0.01",
      outputPer1K: "$0.03",
      bundlePerMonth: "$25 starter credits"
    },
    priceIndex: 2,
    speed: "Fast",
    speedIndex: 2,
    rating: 9.4,
    offlineSupport: false,
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
    tags: ["general", "coding", "writing", "research"],
    niches: { coding: 9, writing: 9, research: 9 }
  },
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
    offlineSupport: true,
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

// 🔹 DEMO MODE: only show a subset in the dropdowns
const DEMO_MODEL_IDS = [
  "gpt-5.1",
  "gpt-4.1",
  "claude-3.5",
  "gemini-2.0"
];

// Full list (we'll use this later for Pro mode)
const MODEL_LIST = Object.values(MODELS);

const modelASelect = document.getElementById("modelA");
const modelBSelect = document.getElementById("modelB");

function populateModelSelects() {
  modelASelect.innerHTML = "";
  modelBSelect.innerHTML = "";

  const placeholderA = document.createElement("option");
  placeholderA.value = "";
  placeholderA.textContent = "Select a model…";
  placeholderA.disabled = true;
  placeholderA.selected = true;

  const placeholderB = document.createElement("option");
  placeholderB.value = "";
  placeholderB.textContent = "Select a model…";
  placeholderB.disabled = true;
  placeholderB.selected = true;

  modelASelect.appendChild(placeholderA);
  modelBSelect.appendChild(placeholderB);

  // Use only demo models here
  const demoModels = DEMO_MODEL_IDS
    .map((id) => MODELS[id])
    .filter(Boolean);

  const sorted = demoModels.sort((a, b) => a.name.localeCompare(b.name));

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

  // Default selection inside demo set
  if (DEMO_MODEL_IDS.includes("gpt-5.1")) {
    modelASelect.value = "gpt-5.1";
  }
  if (DEMO_MODEL_IDS.includes("claude-3.5")) {
    modelBSelect.value = "claude-3.5";
  }
}

function renderList(list, asUl = true) {
  if (!list || !list.length) return "—";
  if (!asUl) return list.join(", ");
  return `<ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function compareSpeed(m1, m2) {
  if (m1.speedIndex === m2.speedIndex) return "about the same speed";
  return m1.speedIndex < m2.speedIndex ? `${m1.name} is faster` : `${m2.name} is faster`;
}

function comparePrice(m1, m2) {
  if (m1.priceIndex === m2.priceIndex) return "roughly equal ballpark cost";
  return m1.priceIndex < m2.priceIndex ? `${m1.name} is cheaper` : `${m2.name} is cheaper`;
}

function animateCard(cardElement) {
  cardElement.classList.remove("show");
  void cardElement.offsetWidth;
  cardElement.classList.add("show");
}

function renderModelCard(cardIdPrefix, model) {
  document.getElementById(cardIdPrefix + "Name").textContent = model.name;
  document.getElementById(cardIdPrefix + "Rating").textContent =
    model.rating.toFixed(1);

  const tagsContainer = document.getElementById(cardIdPrefix + "Tags");
  tagsContainer.innerHTML = "";
  model.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    if (["coding", "writing", "research"].includes(tag)) {
      span.classList.add("highlight");
    }
    span.textContent = tag;
    tagsContainer.appendChild(span);
  });

  document.getElementById(cardIdPrefix + "InPrice").textContent =
    model.pricing.inputPer1K;
  document.getElementById(cardIdPrefix + "OutPrice").textContent =
    model.pricing.outputPer1K;
  document.getElementById(cardIdPrefix + "Bundle").textContent =
    model.pricing.bundlePerMonth;

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

  document.getElementById(cardIdPrefix + "UseCases").innerHTML = renderList(
    model.bestUseCases
  );
  document.getElementById(cardIdPrefix + "Strengths").innerHTML =
    renderList(model.strengths);
  document.getElementById(cardIdPrefix + "Weaknesses").innerHTML =
    renderList(model.weaknesses);

  const cardElement =
    cardIdPrefix === "modelA"
      ? document.getElementById("cardA")
      : document.getElementById("cardB");
  animateCard(cardElement);
}

function nicheWinner(modelA, modelB, nicheKey) {
  const aScore = modelA.niches?.[nicheKey] ?? 0;
  const bScore = modelB.niches?.[nicheKey] ?? 0;
  if (aScore === bScore) return { label: "Tie", winner: null };
  return aScore > bScore
    ? { label: modelA.name, winner: modelA }
    : { label: modelB.name, winner: modelB };
}

function renderBestForYou(modelA, modelB) {
  const cheapestEl = document.getElementById("bestCheapest");
  const cheapestNoteEl = document.getElementById("bestCheapestNote");
  const fastestEl = document.getElementById("bestFastest");
  const fastestNoteEl = document.getElementById("bestFastestNote");
  const codingEl = document.getElementById("bestCoding");
  const codingNoteEl = document.getElementById("bestCodingNote");
  const wrEl = document.getElementById("bestWritingResearch");
  const wrNoteEl = document.getElementById("bestWritingResearchNote");

  const cheaper =
    modelA.priceIndex < modelB.priceIndex ? modelA : modelB;
  const priceSummary = comparePrice(modelA, modelB);
  cheapestEl.textContent = cheaper.name;
  cheapestNoteEl.textContent = priceSummary;

  const faster =
    modelA.speedIndex < modelB.speedIndex ? modelA : modelB;
  const speedSummary = compareSpeed(modelA, modelB);
  fastestEl.textContent = faster.name;
  fastestNoteEl.textContent = speedSummary;

  const coding = nicheWinner(modelA, modelB, "coding");
  codingEl.textContent = coding.label;
  codingNoteEl.textContent =
    coding.winner === null
      ? "Both are similar for coding in this demo."
      : "Higher coding-score between these two in this demo.";

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

function buildShareSummary(modelA, modelB) {
  const cheaper =
    modelA.priceIndex < modelB.priceIndex ? modelA : modelB;
  const faster =
    modelA.speedIndex < modelB.speedIndex ? modelA : modelB;
  const coding = nicheWinner(modelA, modelB, "coding");
  const aWR =
    ((modelA.niches?.writing ?? 0) + (modelA.niches?.research ?? 0)) / 2;
  const bWR =
    ((modelB.niches?.writing ?? 0) + (modelB.niches?.research ?? 0)) / 2;
  const wr =
    aWR === bWR
      ? null
      : aWR > bWR
      ? modelA
      : modelB;

  return [
    `AI Battleboard — ${modelA.name} vs ${modelB.name}`,
    "",
    `• Rating: ${modelA.name} ${modelA.rating.toFixed(
      1
    )}/10 vs ${modelB.name} ${modelB.rating.toFixed(1)}/10`,
    `• Cheapest (demo): ${cheaper.name}`,
    `• Fastest (demo): ${faster.name}`,
    `• Coding edge (demo): ${
      coding.winner ? coding.winner.name : "Tie"
    }`,
    `• Writing + research edge (demo): ${
      wr ? wr.name : "Tie"
    }`,
    "",
    `${modelA.name} use cases: ${modelA.bestUseCases.join(", ")}`,
    `${modelB.name} use cases: ${modelB.bestUseCases.join(", ")}`,
    "",
    "All prices, ratings, and scores here are placeholders for comparison only."
  ].join("\n");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

const compareBtn = document.getElementById("compareBtn");
const shareBtn = document.getElementById("shareBtn");
const shareStatus = document.getElementById("shareStatus");

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

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => showToast("Comparison summary copied."))
      .catch(() => window.prompt("Copy this comparison summary:", text));
  } else {
    window.prompt("Copy this comparison summary:", text);
  }
}

// init
populateModelSelects();
handleCompare();

compareBtn.addEventListener("click", handleCompare);
shareBtn.addEventListener("click", handleShare);

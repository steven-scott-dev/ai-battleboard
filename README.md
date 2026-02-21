# ⚡ AI Battleboard — Compare AI Models Instantly

A fast, client-side tool for comparing AI models head-to-head on price, speed, and use cases. No backend, no login, no tracking — just pick two models and go.

---

## 🔍 What It Does

- Select any two AI models from the dropdown
- See side-by-side cards with pricing, speed, ratings, strengths, and weaknesses
- Get a "Best For You" summary across 4 categories: cheapest, fastest, best for coding, best for writing & research
- Copy a plain-text comparison summary to share anywhere

---

## 🚀 Getting Started

No build tools or dependencies required. Just open the file.

```bash
git clone https://github.com/steven-scott-dev/ai-battleboard.git
cd ai-battleboard
open index.html
```

Or drag `index.html` into any browser. That's it.

---

## 📁 File Structure

```
ai-battleboard/
├── index.html      # App structure and layout
├── styles.css      # All styling — dark theme, cards, responsive layout
└── app.js          # Model data, comparison logic, DOM rendering
```

---

## 🤖 Models in the Free Demo

The free version includes 4 models in the dropdowns:

| Model | Family | Highlights |
|---|---|---|
| GPT-5.1 | OpenAI | Best all-rounder |
| GPT-4.1 | OpenAI | Quality + cost balance |
| Claude 3.5 | Anthropic | Writing & long context |
| Gemini 2.0 | Google | Productivity & research |

> All pricing, ratings, and scores are **demo placeholders** — not official figures.

---

## ➕ Adding Models to the Demo

All model data lives in the `MODELS` object at the top of `app.js`. To add a model:

**1. Add its data to the MODELS object:**
```js
"your-model-id": {
  id: "your-model-id",
  name: "Your Model",
  family: "Provider Name",
  pricing: {
    inputPer1K: "$0.00",
    outputPer1K: "$0.00",
    bundlePerMonth: "—"
  },
  priceIndex: 1.0,   // lower = cheaper
  speed: "Fast",
  speedIndex: 2,     // lower = faster
  rating: 8.5,
  offlineSupport: false,
  bestUseCases: ["Use case 1", "Use case 2"],
  strengths: ["Strength 1"],
  weaknesses: ["Weakness 1"],
  tags: ["general", "coding"],
  niches: { coding: 8, writing: 8, research: 8 }
}
```

**2. Add the ID to DEMO_MODEL_IDS:**
```js
const DEMO_MODEL_IDS = [
  "gpt-5.1",
  "claude-3.5",
  "your-model-id"   // add it here
];
```

---

## 🔒 Pro Version

The full Pro version is available on Gumroad and includes:

- ⭐ Full model library — GPT, Claude, Gemini, DeepSeek, Llama, Mistral & more
- ⚡ Animated speed bars + deep insight engine
- 💾 Favorites, offline mode, and PDF exports
- 🎨 Custom branding + premium UI themes

👉 **[Get Pro on Gumroad](https://scottify38.gumroad.com/l/kftsa)**

---

## 🛠 Built With

- Vanilla HTML, CSS, and JavaScript — zero dependencies
- Client-side only — nothing is sent to a server
- Responsive — works on mobile and desktop

---

## 📄 License

Free version is open for personal and demo use. Pro version is a separate paid product.

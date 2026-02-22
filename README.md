# Nordic Global Presentation

> Hiring presentation and landing page for [Nordic Global Solutions](https://www.nordicglobalsolutions.com)—seeking builders for the future of tech.

Static, mobile-friendly presentation showcasing **Ona**, **WorkFlowSpace**, **Affiliate Flow**, **BitNexus**, and **Mimir**.

---

## Quick Start

**Local (main site)**

```bash
git clone https://github.com/zerwiz/nordicglobalpresentation.git
cd nordicglobalpresentation/nordic-global-solutions-hiring
npm install
npm run dev
```

Open http://localhost:4321

**Local (dev preview — separate slide deck)**

```bash
cd dev-presentation
npm install
npm run dev
```

Open http://localhost:3000 — preview slides before deploying

**Deploy to Netlify**

1. Connect this repo to [Netlify](https://app.netlify.com)
2. Publish directory: `nordic-global-solutions-hiring/dist`
3. Build command: `cd nordic-global-solutions-hiring && npm install && npm run build`
4. Branch: `main` — every push deploys

Config is in [netlify.toml](netlify.toml).

---

## What's Inside

| Page | Purpose |
|------|---------|
| **Landing** (`/`) | Hero, platform overview, CTA to view presentation |
| **Slides** (`/slides`) | 12-slide deck: platforms, Ona, WorkFlowSpace, Affiliate Flow, BitNexus, Mimir, AI Dev Suite, stack, who we're looking for, CTA |
| **404** | Custom error page with links back |

**Interaction**

- **Desktop**: Arrow keys or on-screen buttons. Swipe on mobile.
- **Fullscreen**: F11
- **Back to landing**: Link in top-left of slides

---

## Platforms Covered

| Platform | One-liner |
|----------|-----------|
| **Ona** | AI operating system. Solin leads a squad of specialist agents. |
| **WorkFlowSpace** | Unified workspace. Google integration, split-view editor. |
| **Affiliate Flow** | Marketing automation. Landing pages, AI social, email/SMS. |
| **BitNexus** | Decentralized affiliate revenue. MEV bots, NXC token, MLM network. |
| **Mimir** | Knowledge & AI. Drive, Mind Map, RAG Chat, Mermaid diagrams. |
| **AI Dev Suite** | Local AI tooling. Debugger & Observer. Zed, Ollama, RAG. |

---

## Project Structure

```
.
├── nordic-global-solutions-hiring/   # Astro project (deployed to Netlify)
│   ├── src/
│   │   ├── pages/       # index.astro, slides.astro, 404.astro
│   │   ├── layouts/     # Base.astro
│   │   └── styles/      # global.css
│   ├── public/         # favicon, icon, og-image, robots, sitemap
│   ├── slides.md       # Content source
│   └── dist/            # Build output (gitignored)
├── dev-presentation/    # Local-only slide preview (not deployed)
│   ├── src/pages/index.astro
│   └── npm run dev → http://localhost:3000
├── docs/               # Documentation
│   ├── OVERVIEW.md
│   ├── COMPANY_PROFILE.md
│   ├── ONA_CAPABILITIES.md
│   ├── WORKFLOWSPACE.md
│   ├── AFFILIATE_FLOW.md
│   ├── BITNEXUS_PRODUCT.md
│   ├── TECH_STACK.md
│   └── INDEX.md
├── rules/
│   └── services/github/   # GitHub workflow rules
├── .github/
│   └── PULL_REQUEST_TEMPLATE.md
├── netlify.toml          # Netlify config
└── README.md
```

---

## Documentation

| Doc | Purpose |
|-----|---------|
| [OVERVIEW](docs/OVERVIEW.md) | Company, platforms, hiring summary |
| [COMPANY_PROFILE](docs/COMPANY_PROFILE.md) | Hidden Talent model, neurodiversity, services |
| [HIRING](docs/HIRING.md) | Hiring ad copy |
| [ONA_CAPABILITIES](docs/ONA_CAPABILITIES.md) | Ona features, agents, integrations |
| [WORKFLOWSPACE](docs/WORKFLOWSPACE.md) | WorkFlowSpace details |
| [AFFILIATE_FLOW](docs/AFFILIATE_FLOW.md) | Affiliate Flow details |
| [BITNEXUS_PRODUCT](docs/BITNEXUS_PRODUCT.md) | BitNexus product overview |
| [MIMIR](docs/MIMIR.md) | Mimir — quick overview |
| [MIMIR_CAPABILITIES](docs/MIMIR_CAPABILITIES.md) | Mimir — full product capabilities |
| [WHYNOT_PRODUCTIONS](docs/WHYNOT_PRODUCTIONS.md) | WhyNot Productions — Zerwiz, AI Dev Suite, courses |
| [TECH_STACK](docs/TECH_STACK.md) | Technology stack |
| [ALL_CONTENT](docs/ALL_CONTENT.md) | Master reference — all text, slides, modals, URLs |
| [INDEX](docs/INDEX.md) | Doc index |

---

## Contributing

1. Create a branch: `feature/name` or `fix/name`
2. Make changes, test locally
3. Open a Pull Request into `main`
4. Merge → Netlify auto-deploys

See [rules/services/github/rules.md](rules/services/github/rules.md) for full workflow.

---

## Tech

- [Astro](https://astro.build) 4 — static site generator
- [Syne](https://fonts.google.com/specimen/Syne) + [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- Mobile-first, touch-friendly, swipe navigation on slides
- Netlify for hosting

---

**Nordic Global Solutions** — [www.nordicglobalsolutions.com](https://www.nordicglobalsolutions.com)

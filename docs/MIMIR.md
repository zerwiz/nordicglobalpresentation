# Mimir — Knowledge & AI

**Repository**: [github.com/zerwiz/Mimir](https://github.com/zerwiz/Mimir)  
**Author**: Zerwiz · WhyNot Productions

**Full capabilities:** [MIMIR_CAPABILITIES.md](MIMIR_CAPABILITIES.md)

---

## Overview

Mimir is a multi-tenant Knowledge & AI app for file management, knowledge graphs, and RAG-powered chat. Drive, Mind Map, Chat, and Mermaid sequence diagrams.

**Tech**: React 18 · Vite 5 · Tailwind CSS 3 · Lucide React · Mermaid · Cytoscape (Mind Map)

---

## Environments

| Environment | URL | Notes |
|-------------|-----|-------|
| Production (web) | mimir-drive.fly.dev | Login required; real backend |
| Demo online | mimirdrive.netlify.app | No login; localStorage demo |
| API | mimir-backend.fly.dev/api/health | Backend health |

---

## Features

| Module | Description |
|--------|-------------|
| **Drive** | File upload, folders, grid/list view, move/delete, share, file preview. Electron: pick folder as Drive root, open with default app, sync to backend. Sync to Knowledge Base for AI. |
| **Mind Map** | Knowledge graph—documents, concepts, topics, entities. Search (Ctrl+K), focus subgraph, topics editable in Settings. Generate Mermaid from visible nodes. |
| **Chat** | AI Knowledge Agent with RAG, source citations, streaming. Occurrence queries ("How many times did X say Y?"), relation discovery ("What relates to X?"). |
| **Sequence Diagrams** | Mermaid.js editor with live preview. Zoom 25–500%, drag-to-pan, high-resolution PNG export. Mind Map can generate diagrams. |
| **Multi-tenant** | Users and companies; data isolated per tenant/session. |
| **User roles** | Super Admin, Admin, Editor, User, Viewer. Viewers are read-only. |

---

## AI Providers

- Mimir backend
- LM Studio
- Ollama
- Docker-hosted models

All support RAG when Knowledge Base is assigned. ngrok can expose local AI (Ollama, vLLM) for Fly.io web app.

---

## Deployment

| Platform | Notes |
|----------|-------|
| **Web** | Fly.io (mimir-drive.fly.dev), Netlify demo |
| **Electron** | Desktop app (Windows, Linux, macOS) |
| **Local** | Electron + dev backend; ngrok to expose server. Data in local/data/. |

---

## Quick Start

```bash
git clone https://github.com/zerwiz/Mimir.git
cd Mimir
npm run install:deps
npm run dev
```

Open http://localhost:5173. Backend required: `npm run backend` (dev) or use mimir-backend.fly.dev.

---

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| VITE_API_URL | http://localhost:30003 | Mimir backend |
| VITE_LMSTUDIO_URL | http://localhost:1234 | LM Studio |
| VITE_OLLAMA_URL | http://localhost:11434 | Ollama |
| VITE_OLLAMA_MODEL | llama3.2 | Ollama model |
| VITE_DOCKER_AI_URL | — | Docker-hosted model |

---

## Project Structure

- `src/` — React app (App, context, components, services, utils, hooks)
- `electron/` — Desktop app (main, preload, sqlite)
- `local/` — Local storage, SurrealDB, Ollama
- `dev-backend/` — Dev API (port 30003)
- `scripts/` — Install, deploy, check-backend
- `tests/` — Vitest
- `infra/` — SurrealDB (Docker + Fly.io)
- `docs/` — USER_GUIDE, LOCAL_DEPLOYMENT, PRODUCT, etc.

# Mimir — Product Capabilities

**Version:** 0.1.0  
**Last Updated:** February 2025  

---

## Executive Summary

**Mimir** is a Knowledge & AI application for file management, semantic graphs, and RAG-powered chat. Upload documents, visualize connections in a Mind Map, and ask AI questions with source citations. Multi-tenant with user roles. Deploy as web (Fly.io, Netlify), desktop (Electron), or fully local.

| Area | Capability |
|------|-------------|
| **Drive** | Upload, folders, preview, move, delete, metadata, sync to KB |
| **Knowledge Base** | Multiple KBs, sync from Drive, direct upload, RAG source |
| **Mind Map** | Graph of documents, concepts, topics, entities; Generate Mermaid |
| **Chat** | AI agent with RAG, occurrence/relation queries, source citations |
| **Sequence Diagrams** | Mermaid.js editor, zoom, pan, PNG export |
| **Auth** | Create account (Electron/Fly.io), Log in; Netlify: Try demo or Log in |
| **Deployment** | Fly.io, Netlify (demo), Electron (AppImage, Flatpak), local (`npm run local:electron`) |

**Live:** [mimir-drive.fly.dev](https://mimir-drive.fly.dev) (production) · [mimirdrive.netlify.app](https://mimirdrive.netlify.app) (demo) · [Download](https://mimir-drive.fly.dev/download) (desktop)

---

## What is Mimir?

**Mimir** is a Knowledge & AI application that combines **Drive** (file management), **Mind Map** (semantic graph), **Chat** (AI agent with source citations), and **Sequence Diagrams** (Mermaid.js editor). Multi-tenant. Deploy to **Fly.io** (web + backend) or run **locally** (Electron + dev backend, file persistence). Connect to production (`mimir-backend.fly.dev`) or run dev backend locally (`localhost:30003`). All AI providers support RAG when Knowledge Bases are assigned.

---

## Product Capabilities

### 1. Drive (File Management)

| Capability | Status | Notes |
|------------|--------|-------|
| File upload (drag & drop, browse) | ✅ | Max 100MB |
| File grid view | ✅ | Drive modal layout |
| Folder structure | ✅ | Nested folders, breadcrumbs |
| Download original files | ✅ | Binary download |
| Open with default app (local) | ✅ | Electron + local folder: opens PDF, images, etc. in system app |
| Show in folder (local) | ✅ | Electron + local folder: reveals file in Explorer/Finder |
| File preview (images, PDF, text) | ✅ | Click file or Preview in menu |
| Move files between folders | ✅ | Move modal, POST /api/drive/file/move |
| Delete files | ✅ | DELETE /api/drive/file/delete |
| Tag users for sharing | ✅ | Share modal: tag users for collaboration; visible in Details |
| Custom metadata on upload | ✅ | Settings → Metadata to track; Edit to add/edit fields (Project, Department, Status, etc.) |
| Dual storage (.ai.md for AI) | — | Binary + markdown copy |
| Personal vs Board Drive | — | User context vs Kanban context |

**Storage:** `systems/data/drive/users/{userId}/{sessionId}/` with `metadata.json`

---

### 2. Knowledge Base (KB)

| Capability | Status | Notes |
|------------|--------|-------|
| Multiple KBs per user | ✅ | kb_project table (SurrealDB) |
| Create KB flow | ✅ | From Drive "Add to KB" or Mind Map + button |
| KB settings modal | ✅ | Edit name, description, color, tags; delete KB |
| Create KB from Drive | ✅ | sync-drive-direct |
| Direct document upload | ✅ | Mind Map "Upload Documents", POST /api/kb/documents |
| List documents | ✅ | GET /api/kb/documents |
| Document count | ✅ | Displayed in KB selector |
| Assign KB to chat session | ✅ | Session settings, assignedKnowledgeBases |
| Semantic search | — | ChromaDB, vector embeddings |
| Permission-based access | — | User/company scoped |

**Storage:** SurrealDB `kb_project`, `kb_document`

**Supported formats:** PDF, DOCX, TXT, MD, JSON, CSV, HTML

---

### 3. Mind Map (Knowledge Graph)

| Capability | Status | Notes |
|------------|--------|-------|
| Visual graph of nodes & edges | ✅ | GET /api/graph/full |
| Node types: Document, Concept, Topic, Entity | ✅ | Topics (colors & labels) editable in Settings → Topics (Mind Map) |
| KB selector dropdown | ✅ | GET /api/kb/projects |
| Create KB / KB settings | ✅ | + button, gear icon → modal |
| Generate / Re-analyze | ✅ | POST /api/graph/reanalyze |
| Generate Mermaid from visible nodes | ✅ | Mermaid button → sequence diagram from filtered graph; opens in Sequence Diagrams tab |
| Topics (legend) editable | ✅ | Settings → Topics (Mind Map); labels and colors for Document, Concept, Topic, Entity |
| Infrastructure filter | ✅ | Hides infra terms (Redis, Docker, etc.) — focuses on domain knowledge |
| Semantic search in graph | — | GET /api/graph/search |
| Subgraph view | — | GET /api/graph/subgraph/:nodeId |
| Path finding | — | GET /api/graph/path |
| Circular layout (flower-of-life) | — | Frontend layout algorithm |

**Connection weights:** Shared Projects (15), People (10), Orgs (8), Keywords (3); score ≥ 15 creates edge

---

### 4. Ask AI with Sources (RAG)

| Capability | Status | Notes |
|------------|--------|-------|
| Ask question input | ✅ | Mind Map panel |
| AI answers with source citations | ✅ | All providers (Mimir, LM Studio, Ollama, Docker) |
| RAG for direct providers | ✅ | Frontend fetches KB context, prepends to prompt |
| Assign KB to session / Mind Map | ✅ | Session settings; Mind Map KB selector |
| Backend RAG | ✅ | Mimir backend injects KB content |
| Citation tracing | ✅ | Source badges on messages |
| Anti-hallucination | — | Only provided docs; "I don't see that" if missing |

**Flow:** Assign KB → Frontend (direct) or backend (Mimir) fetches docs → AI answers using only those docs → Cites sources

---

### 5. AI Knowledge Agent (Chat)

| Capability | Status | Notes |
|------------|--------|-------|
| Chat interface | ✅ | Message list, input, send |
| Source citations on responses | ✅ | Source badges |
| Session creation (New Session) | ✅ | createNewSession resets context |
| Real AI / streaming | ✅ | POST /api/chat/messages; stream when VITE_CHAT_STREAM=true |
| RAG context from KB | ✅ | assignedKnowledgeBases; RAG for direct providers (Ollama/LM Studio) |
| Trigger keywords | ✅ | "what did we talk about", "summarize", "tell me about X" |
| Occurrence queries | ✅ | "How many times did X say Y in this meeting?" — counts speaker-term in transcript |
| Relation discovery | ✅ | "What relates to X?" — finds connected subjects/topics |
| Per-session KB config | ✅ | Auto-search, retrieval limit (Settings2 icon) |

---

### 6. AI Provider Selection

| Capability | Status | Notes |
|------------|--------|-------|
| Choose AI backend | ✅ | Mimir backend (default), LM Studio, Ollama, Docker-hosted |
| Mimir backend | ✅ | Full RAG, streaming, multi-tenant |
| LM Studio (local) | ✅ | OpenAI-compatible, RAG via assigned KBs |
| Ollama (local) | ✅ | `localhost:11434`, RAG via assigned KBs |
| Docker-hosted model | ✅ | Configurable URL, vLLM/LlamaCPP-compatible, RAG |
| Persist provider choice | ✅ | localStorage |
| Docker setup & model upload | 🔄 Planned | Launch containers, upload models from UI |

**See:** [HOW_AI_PROVIDERS_WORKS](./HOW_AI_PROVIDERS_WORKS.md)

---

### 7. Login & Auth

| Capability | Status | Notes |
|------------|--------|-------|
| Login screen | ✅ | Create account + Login (Fly.io, Electron); Try demo or Log in (Netlify) |
| Create account | ✅ | Name, email, password; Electron and Fly.io; backend required |
| Netlify: Try demo | ✅ | No account; localStorage; mimics real system |
| Netlify: Log in | ✅ | Connect to backend (API URL override or VITE_API_URL) |
| Registration in Electron | ✅ | Create account for local use; Netlify has no registration |
| Login (existing) | ✅ | Email + password; same credentials on web and desktop |
| Log out | ✅ | Header logout button |

---

### 8. User Roles & Permissions

| Capability | Status | Notes |
|------------|--------|-------|
| Five roles | ✅ | Super Admin, Admin, Editor, User, Viewer |
| Role badge in Profile | ✅ | Profile shows actual role (not just "Full account") |
| Viewer read-only | ✅ | Drive, KB, Chat, Mind Map: view/download only; no create, edit, delete |
| Admin User Management | ✅ | Profile → User Management (Admin/Super Admin only); assign roles to users |
| `role` in API calls | ✅ | `getParams()`, `getBody()` include `role` for backend authorization |
| `useCanEdit` hook | ✅ | `true` for user+; gates edit UI for viewers |

**Helpers:** `src/utils/roles.js` — `getUserRole`, `hasRoleAtLeast`, `hasRole`, `ROLE_LABELS`

**Backend:** Auth responses may include `role`. Backend should enforce permissions. User management needs `GET /api/users`, `PATCH /api/users/:id/role` when connected.

---

### 9. Profile

| Capability | Status | Notes |
|------------|--------|-------|
| Profile page | ✅ | Avatar, name, email, role badge (Profile tab in nav) |
| Companies section | ✅ | Create companies (name, slug); list with remove; persisted; appear in tenant switcher |
| User Management (Admin) | ✅ | Assign roles to registered users; visible to Admin and Super Admin |
| Companies read-only for viewers | ✅ | Viewers see list but cannot create/remove |

---

### 10. Multi-Tenant

| Capability | Status | Notes |
|------------|--------|-------|
| User silos (personal) | ✅ | Tenant switcher, userId |
| Company silos (shared) | ✅ | Tenant switcher, companyId |
| Tenant switcher UI | ✅ | Header dropdown |
| Session per tenant | ✅ | sessionId, createNewSession |
| Data reset on tenant/session change | ✅ | useEffect clears files, messages |
| userId in API calls | ✅ | useTenantApi().getParams(), Tenant context passed to backend |

---

### 11. Search

| Capability | Status | Notes |
|------------|--------|-------|
| Unified search bar | ✅ | "Search files, concepts, or ask AI" (Ctrl+K) |
| Search implementation | ✅ | Drive file filter, debounced |
| Semantic search | — | Vector embeddings, ChromaDB (backend) |

---

### 12. Sequence Diagrams (Mermaid.js)

| Capability | Status | Notes |
|------------|--------|-------|
| Sequence diagram editor | ✅ | Split view: code left, preview right |
| Live preview | ✅ | Debounced (300ms), Mermaid.js render |
| Zoom 25–500% | ✅ | Zoom in/out buttons, step 25% |
| Drag-to-pan | ✅ | Click and drag to move around when zoomed |
| Reset view | ✅ | Resets zoom and pan to default |
| High-resolution PNG export | ✅ | 3× scale for crisp text; Save as image |
| Create/edit diagrams | ✅ | sequenceDiagram, participants, arrows |
| Theme-aware rendering | ✅ | Dark/light Mermaid themes |
| Mermaid theme setting | ✅ | Settings → Mermaid diagram theme (Auto, Default, Dark, Forest, Neutral) |
| Reset template / Save to browser | ✅ | localStorage persistence |
| Generate from Mind Map | ✅ | Mind Map → Mermaid button → diagram from visible nodes |
| Link to Mermaid docs | ✅ | sequenceDiagram syntax reference |

**Tab:** Diagrams (GitBranch icon). Supports full Mermaid sequence diagram syntax (participants, ->, -->, ->>, -->>, etc.).

---

### 13. Theme & UI

| Capability | Status | Notes |
|------------|--------|-------|
| Dark / light theme toggle | ✅ | Header (Sun/Moon icon) |
| Light theme (less bright) | ✅ | Softer slate palette for reduced glare |
| Settings modal | ✅ | AI Provider, API URL, model, Mermaid theme, Topics (Mind Map), Local Drive Root (Electron), Metadata to track |
| Metadata to track | ✅ | Custom fields; Edit button to add/edit (Project, Department, Status) |
| Theme persistence | ✅ | localStorage `mimir_theme` |

---

### 14. Deployment

| Capability | Status | Notes |
|------------|--------|-------|
| Fly.io (web) | ✅ | mimir-drive (frontend), mimir-backend (API); `npm run deploy:production` |
| Electron (desktop) | ✅ | macOS, Windows, Linux; AppImage & Flatpak; [Download page](/download) |
| **Local deployment** | ✅ | `npm run local:electron` — Electron + dev backend; file persistence in `dev-backend/data/`; no SurrealDB |
| ngrok / tunnel | ✅ | Dev Settings (Electron) — expose backend (30003) or dev server (5173) for mobile, demos, OAuth |
| start-electron.sh | ✅ | Production: connects to mimir-backend.fly.dev |
| start-electron-dev.sh | ✅ | Dev: local backend (localhost:30003), auto-starts if needed |
| Preload bridge for local APIs | ✅ | `window.mimirElectron` (file picker, fs, SQLite, ngrok) |
| Full production deploy | ✅ | `deploy-production.sh`: backend → verify → wire → frontend |

**See:** [LOCAL_DEPLOYMENT](./LOCAL_DEPLOYMENT.md), [DEPLOYMENT](./DEPLOYMENT.md), [FLYIO_ACCESS](./FLYIO_ACCESS.md), [DEV_TUNNEL](./DEV_TUNNEL.md)

---

### 15. Backend Capabilities

These are available when backend is connected:

| Feature | Relevant to Mimir |
|------------------|-------------------|
| Knowledge Base system | ✅ Core — KB projects, documents, RAG |
| Drive system | ✅ Core — File storage, sync to KB |
| Knowledge Intelligence (Mind Map) | ✅ Core — Graph, nodes, edges |
| ChromaDB vector search | Optional — Semantic search |
| Document processor | PDF/DOCX → Markdown extraction |
| Auto-update document counts | Every 3 seconds |
| 15 unified backend services | Port 30003 |
| SurrealDB storage | Unlimited sessions, messages, KB |
| Multi-tenant architecture | User + Company silos |
| Session management | Sessions, messages APIs |
| Drive-KB combined API | /api/drive-kb/ for upload, scan, analyze |

---

## Current State

| Area | Status | Notes |
|------|--------|-------|
| **Drive** | ✅ Full UI | Upload, folders, move, delete, custom metadata; real backend |
| **KB** | ✅ | List, create, edit, delete; sync from Drive; real backend |
| **Mind Map** | ✅ | Graph renderer, KB filter, upload docs, real graph APIs |
| **Chat** | ✅ | RAG citations, all AI providers; streaming when enabled |
| **Sequence Diagrams** | ✅ | Mermaid editor; standalone; no backend needed |
| **Multi-tenant** | ✅ | User + company silos; userId/companyId in API |
| **User roles** | ✅ | Five roles; viewer read-only; admin user management |
| **Search** | ✅ | Drive filter, KB search, graph search; debounced |
| **Auth** | ✅ | Create account (Electron, Fly.io); Netlify: Try demo or Log in; no registration on Netlify |
| **Deployment** | ✅ | Fly.io (production); Netlify (demo online); local (`npm run local:electron`); Electron (AppImage, Flatpak); [Download](https://mimir-drive.fly.dev/download) |

---

## Use Cases

1. **Research** — Upload papers → Mind Map shows connections → Ask AI with citations  
2. **Meetings** — Upload notes → See decisions, actions, participants → Chat Q&A  
3. **Company knowledge** — Policies, handbooks → RAG answers from official docs  
4. **Strategy** — Market research, strategy docs → Visual connections, AI synthesis  
5. **Multi-tenant** — Switch users/companies → Isolated Drive, KB, chat per tenant
6. **User roles** — Super Admin, Admin, Editor, User, Viewer. Viewers read-only; Admins assign roles in Profile
7. **Sequence diagrams** — Document API flows, call sequences, system interactions (Mermaid.js). Zoom 25–500%, pan, export high-res PNG.  
8. **Meetings & transcripts** — Upload notes; ask "How many times did David say notifications?" or "What relates to Revenue?" — occurrence and relation discovery.  
9. **Desktop app** — AppImage & Flatpak on Linux; [download page](https://mimir-drive.fly.dev/download). Run locally via Electron with full local file integration: pick a folder as Drive root, open files in system default app, show in folder (Explorer/Finder), sync to backend optional  

---

## Systems at a Glance

| System | Purpose | Backend | Frontend |
|--------|---------|---------|----------|
| **Drive** | Files, folders, upload, move, delete, share | `/api/drive/*` | DriveView |
| **Knowledge Base** | KB projects, documents, RAG source | `/api/kb/*` | Mind Map + Chat |
| **Mind Map** | Graph (documents, concepts, topics, entities) | `/api/graph/*` | MindMapView |
| **Chat** | AI agent, RAG, occurrence/relation queries | `/api/chat/*` + direct AI | ChatView |
| **Sequence Diagrams** | Mermaid editor, PNG export | None (local) | MermaidSequenceView |
| **Profile** | User/company, roles, user management | `/api/auth/*`, `/api/users/*` | ProfileView |

---

## Related Docs

- [ARCHITECTURE_REFERENCE](./ARCHITECTURE_REFERENCE.md)
- [HOW_DRIVE_SYSTEM_WORKS](./HOW_DRIVE_SYSTEM_WORKS.md)
- [HOW_KNOWLEDGE_BASE_SYSTEM_WORKS](./HOW_KNOWLEDGE_BASE_SYSTEM_WORKS.md)
- [HOW_MIND_MAP_SYSTEM_WORKS](./HOW_MIND_MAP_SYSTEM_WORKS.md)
- [HOW_AI_PROVIDERS_WORKS](./HOW_AI_PROVIDERS_WORKS.md)
- [LOCAL_DEPLOYMENT](./LOCAL_DEPLOYMENT.md) — Deploy Mimir locally; Electron + ngrok
- [DEPLOYMENT](./DEPLOYMENT.md) — Fly.io (web) and Electron (desktop)
- [FLYIO_ACCESS](./FLYIO_ACCESS.md) — Apps, URLs, deploy commands, troubleshooting
- [DEV_TUNNEL](./DEV_TUNNEL.md) — ngrok for mobile, demos, OAuth
- [RELEASES](./RELEASES.md) — Desktop downloads (AppImage, Flatpak), scripts
- [RELEASE_RULES](./RELEASE_RULES.md) — Release process, versioning, checklist
- [OCCURRENCE_TRACKING](./OCCURRENCE_TRACKING.md) — Occurrence & relation queries in Chat
- [MULTI_TENANT](./MULTI_TENANT.md)
- [INTEGRATION_GAPS](./INTEGRATION_GAPS.md)

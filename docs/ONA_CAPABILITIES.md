# Ona — Product Capabilities

**Ona** = system. **Solin** = your personal AI agent and squad lead. This doc describes what Ona and Solin can do.

## Overview

| Capability | Description |
|------------|-------------|
| **Multi-agent squad** | Solin orchestrates; spawns specialist agents per task (Writer, Researcher, Developer, etc.) |
| **Mission group chat** | All agents collaborate in one thread; you see the conversation |
| **Multi-channel** | Web, Telegram, WhatsApp, Signal, Discord — text and voice |
| **Memory & RAG** | Persistent memory, knowledge base, context-aware retrieval |
| **Secure** | Secrets filtered at process level; never reach the LLM |
| **Self-hosted** | Run locally or on VPS; Docker or bare binaries |

---

## Content & Copy

| Capability | How |
|------------|-----|
| Draft blogs, articles, copy | `writer "draft a blog post about X"` or via Solin |
| Social content (tweets, threads, posts) | `content-creator "draft 5 tweet threads for launch"` |
| Campaign content | `marketer "create email campaign for product launch"` |
| Outreach (cold emails, proposals) | `sales-agent "draft cold email sequence for B2B"` |
| Landing pages | Solin routes to Landing Page agent; can deploy to Vercel/Netlify |

## Research & Analysis

| Capability | How |
|------------|-----|
| Competitor research | `researcher "find top 5 competitors for product X"` |
| Synthesis, links, summaries | `researcher "summarize trends in AI agents"` |
| SEO (keywords, meta, structure) | `seo "optimize meta tags for landing page"` |

## Development & Code

| Capability | How |
|------------|-----|
| Implement features | `developer "implement user auth API"` |
| Build, run, test code | Developer agent: cargo build, npm run build, go build |
| Scripts, automation | Solin or developer agent |
| Produce artifacts | Builds, binaries, deliverables |

## Design & UI

| Capability | How |
|------------|-----|
| UI mockups, layouts | `designer "design a hero banner layout"` |
| Assets, visual specs | Designer agent |
| Landing page design | Landing Page agent (funnel, layout) |

## Project & Task Management

| Capability | How |
|------------|-----|
| Create / list / update projects | `agent "Project Agent" "add task to project X"` |
| Track tasks, status | Project Agent |
| Todos | `ona todo create "Review draft"` |
| Follow-ups | `ona followup schedule "2025-02-20" "Follow up on project X"` |

## Memory & Knowledge

| Capability | How |
|------------|-----|
| Persistent memory (MEMORY.md) | `ona memory read` / `ona memory write` |
| RAG (vector search, docs) | `ona rag ingest-path docs` then `ona rag search "query"` |
| Ingest Notion | `POST /api/rag/ingest/notion` |
| Learning agent | Persists preferences; personalizes over time |

## Integrations

| Capability | How |
|------------|-----|
| **Google Workspace** | OAuth; Gmail (send/read), Drive (list/read/upload/share/ingest), Docs, Sheets, Calendar |
| **Email** | Resend, SendGrid, SMTP — agents can send emails |
| **SMS** | Twilio, Vonage — agents can send SMS |
| **Social** | YouTube, Instagram, X, LinkedIn, TikTok — OAuth + content |
| **n8n** | Webhook → Ona jobs; automation triggers |
| **Notion** | Ingest pages into RAG; optional API |
| **A2A** | Agent-to-agent protocol; external agents can create jobs |

## Security & Operations

| Capability | How |
|------------|-----|
| Lockbox (encrypted secrets) | Add/list/remove API keys; human-in-the-loop |
| Certificate Manager | Renew SSL, rotate keys; cert expiry report |
| Observer (optional) | Watches squad; leak detection; on-task checks |
| Guardian (optional) | Security oversight; blocks high-risk actions |
| Approvals | Human-in-the-loop for sensitive actions |

## Scheduling & Automation

| Capability | How |
|------------|-----|
| Cron jobs | `operating_system/CRONS.json`; recurring missions |
| Follow-ups | Schedule "follow up on X" at date/time |
| Heartbeats | Daily briefing, proactive check-in (configurable) |

---

## How to Interact

| Method | Example |
|--------|---------|
| **Web** | Chat UI, Jobs, Memory, Settings, Squad, Projects |
| **CLI** | `ona job create "mission"`, `solin "mission"`, `writer "draft..."` |
| **API** | `POST /api/jobs`, `POST /api/message` |
| **Telegram** | Send message to bot → job created |
| **WhatsApp** | Twilio/Meta webhook → job created |
| **Signal** | signal-cli-rest-api → job created |
| **Discord** | Slash commands / webhook |
| **n8n** | Webhook node → mission → Ona |

**Command example**: `solin "research competitors for our project"`

---

## Agent Roles (Solin's Squad)

| Agent | Use case |
|-------|----------|
| **Solin** | Squad lead; you talk to Solin |
| Writer | Content, copy, drafts |
| Content Creator | Blogs, social, multimedia, campaigns |
| Researcher | Search, synthesis, links |
| Developer | Code, scripts, build, test |
| Marketer | Campaigns, ads, growth |
| Sales Agent | Outreach, proposals, follow-ups |
| Landing Page | Landing pages, funnels, deploy |
| Project Agent | Projects, tasks, status |
| SEO | Keywords, meta, structure |
| Designer | UI, assets, layout |
| Observer | Oversight; leak detection (optional) |
| Guardian | Security enforcement (optional) |
| Certificate Manager | Certs, keys, renew (optional) |
| Lockbox Agent | Secrets storage (optional) |

---

## Deployment

| Option | Description |
|--------|-------------|
| **Local** | Docker Compose or cargo run; your machine |
| **VPS** | Same stack on any VPS; see VPS_DEPLOYMENT.md |
| **LLM** | **Ollama** (local model, no API key), LM Studio, vLLM (local); OpenAI, Anthropic, Groq, Gemini (API) |

Ollama is a first-class model provider: set `OLLAMA_BASE_URL`, pull models with `ona models pull`, use with `ONA_DEFAULT_MODEL`.

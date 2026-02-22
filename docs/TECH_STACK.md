# Technology Stack — Nordic Global Solutions

## Overview (Company-Wide)

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React, React.js, TypeScript, Vite |
| **Styling** | Tailwind CSS |
| **Backend** | Elixir, Phoenix, Node.js, Python |
| **AI / ML** | OpenAI API, TensorFlow, PyTorch, Hugging Face, Scikit-learn |
| **LLM** | OpenAI, Claude, Gemini, Groq, Google AI Suite |
| **Self-hosted AI** | Ollama, LM Studio, vLLM |
| **Infrastructure** | AWS, Google Cloud, Docker, Kubernetes |
| **Data** | PostgreSQL, GraphQL |
| **Other** | Rust (systems), Cursor (AI-powered IDE), Google AI Suite, API integration |

## Per Platform

### Ona

- Elixir/Phoenix backend
- Rust (cargo) for performance-critical components
- Docker Compose, bare binaries for deployment
- LLM: Ollama (first-class), OpenAI, Anthropic, Groq, Gemini

### WorkFlowSpace

- React 18, TypeScript, Vite
- Tailwind CSS, date-fns, Lucide React, Recharts
- Supabase (PostgreSQL)
- Optional Elixir/Phoenix backend

### Mimir

- React 18, Vite 5, Tailwind CSS 3
- Cytoscape (Mind Map), Mermaid, Lucide React
- Electron (desktop)
- SurrealDB (backend)
- Fly.io, Netlify

### Affiliate Flow

- Vite, React, Tailwind CSS
- Astro for landing pages
- Phoenix/Elixir (Ecto, Guardian) for backend
- Netlify for hosting; AWS/Cloudflare for self-hosting

## AI Integration

- **Cloud APIs**: OpenAI (GPT-4), Anthropic (Claude), Google (Gemini), Groq
- **Self-hosted**: Ollama, LM Studio, vLLM
- Agents can call multiple providers depending on task type

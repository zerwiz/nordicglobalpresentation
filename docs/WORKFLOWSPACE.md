# WorkFlowSpace

WorkFlowSpace is a unified workspace for teams. One place for calendar, chat, tasks, and docs.

## Summary

All-in-one workspace management and collaboration platform that integrates productivity tools, AI assistance, and Google Workspace services into a single environment.

## Key Features

### Core

- Unified dashboard — single-page application, no context switching
- Real-time updates via WebSocket
- Responsive design (desktop, tablet, mobile)
- Dark mode default theme

### Google Workspace Integration

| Service | Integration |
|---------|-------------|
| Calendar | Bidirectional sync, event management, Google Meet links |
| Gmail | Email access, reply/forward/archive, search |
| Drive | File access, sync with WorkFlowSpace Drive |
| Meet | Video call scheduling |
| Chat | Team messaging |
| Docs/Sheets | Document collaboration |
| Tasks | Task synchronization |
| Contacts | Contact management |

### Editor — Chat and Code Together

- Split-view layout: chat on the left, editor on the right
- AI response insertion into editor at optimal locations
- Document mode (text/markdown) and Code mode
- File attachments for AI context
- Preview mode, export (PNG, PDF)
- Multiple models (GPT-4, Claude, Gemini, Ollama)

### AI Chat & Strategy Agent

- Multi-agent system with intelligent model routing
- Code tasks → code-specialized models
- Creative tasks → content models
- Analytical tasks → research models
- Strategy Agent: personalized onboarding, context-aware suggestions

### Task & Project Management

- Kanban boards, drag-and-drop
- Custom workflows (To Do, In Progress, Done, etc.)
- Rich task cards: descriptions, assignees, due dates, tags, priority
- Multiple boards, templates, task dependencies

### Calendar & Scheduling

- Day, week, month, agenda views
- Google Calendar bidirectional sync
- Deep Work Mode, Restoration Time
- Meeting policies (24-hour notice, camera-optional)

### Knowledge Base

- Company-wide and project-specific docs
- Semantic search, mind maps, entity extraction
- AI-powered queries with source citations

### Accessibility

- WCAG 2.1 AA compliant
- Deep Work Mode, Restoration Room
- Customizable sensory settings

## Tech Stack

- React 18, TypeScript, Vite
- Tailwind CSS, date-fns, Lucide React, Recharts
- Supabase (PostgreSQL) for production
- Elixir/Phoenix backend (optional)

## Repositories

- [zerwiz/WorkFlowSpace](https://github.com/zerwiz/WorkFlowSpace)

# Affiliate Flow

Affiliate Flow is a marketing automation platform for affiliate marketing, landing pages, communications, and AI-generated social content.

## Summary

Full-stack prototype for managing affiliate marketing, landing pages, communications, and AI-generated social content.

## What It Does

### Dashboard

- Overview: clicks, engagement, KPIs, real-time stream, system nodes
- Calendar: planned outreaches from Comms and AI Social
- Landings, Comms, AI Social, Contacts, Products, Affiliates, Settings

### Landing Pages

- Deploy and manage landing pages (Astro-based and static HTML)
- Optional Netlify deploy hook
- Auto-deploy options (see docs)

### Communications

- Email, SMS, WhatsApp with AI-generated messages
- Content type: Promotional, Follow-up, Reminder
- Tone options
- Contact groups
- Connected email accounts (POP/SMTP), phone numbers (via Settings)

### AI Social

- Multi-platform: LinkedIn, X, Facebook, Instagram, TikTok, YouTube
- Platform-specific prompts
- Push now or Schedule
- Scheduled posts appear in Calendar
- Format options: Post, Story, Video, Pictures (coming soon)

### Settings

- Email accounts (Gmail, Outlook, custom POP/SMTP)
- SMS/WhatsApp numbers
- System nodes (Cloudflare, VPS, OpenClaw)
- AI model (ChatGPT, Claude, Gemini, Grok)
- Social connections

## Tech Stack

| Layer | Stack |
|-------|-------|
| Frontend | Vite, React, Tailwind CSS |
| Landings | Astro (folder-per-landing), static HTML |
| Backend | Phoenix/Elixir (Ecto, Guardian) |
| Hosting | Netlify (frontend + landings); AWS/Cloudflare self-hosted |

## Repositories

- [zerwiz/AffliateFlow](https://github.com/zerwiz/AffliateFlow)

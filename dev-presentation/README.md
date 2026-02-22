# Dev Presentation

Standalone slide deck for previewing content before deploying to the main site.

## Purpose

- Preview slides locally before pushing to production
- Test new slide content without affecting nordic-global-solutions-hiring
- Copy slides here, edit, then move to the main project when ready

## Quick Start

```bash
cd dev-presentation
npm install
npm run dev
```

Opens at **http://localhost:3000**

## Structure

- `src/pages/index.astro` — Slide deck (edit this)
- `src/layouts/Base.astro` — Layout
- `src/styles/global.css` — Shared styles

## Adding Slides

Copy the slide structure from `nordic-global-solutions-hiring/src/pages/slides.astro`:

```html
<div class="slide" data-n="N">
  <p class="caps">Label</p>
  <h1>Title</h1>
  <p>Content...</p>
</div>
```

Update the `id="total"` span to match your slide count (or it auto-updates via JS).

## Not Deployed

This project is **not** part of the Netlify deploy. It's for local development only.

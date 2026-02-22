# GitHub Rules — Nordic Global Presentation

**Repository**: [github.com/zerwiz/nordicglobalpresentation](https://github.com/zerwiz/nordicglobalpresentation)  
**Deployment**: Netlify (main branch)

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| **main** | Production. Deploys to Netlify on every push. |
| **feature/*** | Feature branches. Merge into main via PR. |
| **fix/*** | Bug fixes. Merge into main via PR. |

- Do **not** push directly to `main` for non-trivial changes; use Pull Requests.
- For small fixes (typos, docs), direct push is acceptable.

---

## Deployment (Netlify)

- **Trigger**: Push or merge to `main`
- **Build**: No build step (static HTML)
- **Publish**: `nordic-global-solutions-hiring` folder
- **Config**: `netlify.toml` at repo root

Connect the repo in Netlify:
1. Site settings → Build & deploy → Continuous deployment
2. Branch to deploy: **main**
3. Build settings are read from `netlify.toml`

---

## Pull Request Workflow

1. Create branch: `feature/name` or `fix/name`
2. Make changes, commit with clear messages
3. Open PR into `main`
4. Fill in PR template
5. Review (if team policy requires)
6. Merge (squash or merge commit per preference)
7. Netlify auto-deploys from `main`

---

## Commit Messages

- Use present tense: "Add mobile styles" not "Added mobile styles"
- Reference issue if applicable: `Fix #3 — mobile nav overlap`
- Keep first line under 72 chars

---

## Protected Branches (Recommended)

In GitHub: Settings → Branches → Add rule for `main`:

- Require Pull Request before merging
- Require status checks (optional: Netlify deploy preview)
- Do not require review if solo maintainer

---

## Links

- **Repo**: https://github.com/zerwiz/nordicglobalpresentation
- **Netlify**: Configure in Netlify dashboard after connecting repo

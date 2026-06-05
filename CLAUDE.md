# CLAUDE.md — Project Instructions for Claude Code

## Project
**ip3.studio** — Studio website for IP3 Studio Ltd. Commercial-simple, single-page with anchor nav. Hosted at ip3.studio.

## Tech Stack
- **Framework**: Next.js 14+ (App Router, SSG)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 3.4+ with CSS-custom-property design tokens
- **Fonts**: Roboto (sans) + Roboto Mono (labels/numerals) via `next/font/google`
- **Deployment**: Vercel
- **Data**: Static TS in `src/data/` — `clients.ts`, `projects.ts`

## Design system

- **Theme**: light-only (no dark toggle). Commercial, generous whitespace.
- **Palette**: monochrome paper-and-ink + a single Pantone 280C accent (`#012169`, Union Jack blue) used sparingly for links, focus, and CTA hover.
- **Tokens** (light):
  - `--bg #ffffff`, `--bg-elev #fafaf8`, `--bg-paper #f4f3ee`
  - `--line #e7e6e1`, `--line-strong #b9b7af`
  - `--ink #0c0c0c`, `--ink-mute #5e5b52`, `--ink-faint #918d82`
  - `--accent #012169`
- **Typography**: Roboto 300–500 for hierarchy. Roboto Mono for labels, numerals, eyebrow text.
- **Spacing**: 120px vertical section padding desktop, 72px mobile.
- **Borders**: 1px lines, no shadows, no border-radius (except `rounded-full` only when explicit).
- **Buttons**: `.btn-primary` (filled ink → accent on hover), `.btn-secondary` (outlined).

## Architecture

- Single-page site (`src/app/page.tsx` composes section components) plus `/legal`.
- Section components live in `src/components/` and are anchor-targeted (`id="work"`, `id="studio"`, etc.).
- No client-side state, no fetching, no auth.
- All content is hand-edited in TS files or directly in the JSX (intentional — no CMS).

## File conventions

- Components: PascalCase (`Hero.tsx`).
- Data: camelCase (`clients.ts`, `projects.ts`).
- Path alias `@/*` → `src/*` (see `tsconfig.json`).

## Commands

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
```

## Content TODOs (pending user input)

- [ ] `src/data/clients.ts` — populate client list
- [ ] `src/components/Studio.tsx` — Technation endorsement story
- [ ] `src/components/Manifesto.tsx` — "Why UK" manifesto text
- [ ] `/public/clients/*.svg` — optional client logos (wordmark fallback works without)
- [ ] `/public/og.png` — replace generated OG if a custom one is preferred

## Non-goals

- No CMS, no admin panel
- No analytics or trackers
- No user accounts or auth
- No newsletter / forms (contact is via email)
- No dark mode toggle (light-only by design)

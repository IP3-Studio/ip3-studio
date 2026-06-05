# ip3.studio

The website of **IP3 Studio Ltd** — a small UK product studio.

Live at [ip3.studio](https://ip3.studio).

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS 3.4 with CSS-custom-property design tokens
- **Fonts**: Roboto + Roboto Mono via `next/font/google`
- **Hosting**: Vercel
- **Data**: Static TypeScript files in `src/data/` (clients, projects)

## Develop

```bash
npm install
npm run dev       # http://localhost:3000
npm run typecheck # tsc --noEmit
npm run lint
npm run build     # production build
```

Static export (alternative deploy target):

```bash
npm run build:static
npm run serve:static
```

## Structure

```
src/
  app/
    layout.tsx         # root metadata + JSON-LD
    page.tsx           # composes the single-page site
    globals.css        # design tokens + utilities
    legal/page.tsx     # /legal — UK GDPR / privacy / IP / terms
    robots.ts          # /robots.txt
    sitemap.ts         # /sitemap.xml
    icon.svg           # favicon
    apple-icon.tsx     # /apple-icon.png (180×180)
    opengraph-image.tsx # /opengraph-image.png (1200×630)
  components/
    Header.tsx Footer.tsx YearStamp.tsx
    Hero.tsx Work.tsx Clients.tsx Studio.tsx Manifesto.tsx Contact.tsx
  data/
    clients.ts   # past clients & collaborators
    projects.ts  # studio products (ukfunding.io etc.)
```

## Editing content

- **Clients** — edit `src/data/clients.ts`. Optional logo file in `/public/clients/<slug>.svg`.
- **Projects** — edit `src/data/projects.ts`.
- **About / Technation story** — in `src/components/Studio.tsx`.
- **Manifesto** — in `src/components/Manifesto.tsx`.
- **Contact channels** — in `src/components/Contact.tsx`.
- **Legal page** — in `src/app/legal/page.tsx`.

See `CLAUDE.md` for conventions.

## Deploy

See `DEPLOY.md`. TL;DR: push to `IP3-Studio/ip3-studio` on GitHub → import to Vercel → point `ip3.studio` at Vercel via GoDaddy DNS.

## License

Source code: see `LICENSE`. Content (text, design, layout) © IP3 Studio Ltd — all rights reserved.

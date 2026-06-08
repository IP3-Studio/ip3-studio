# Deploy

## Vercel (default)

1. Push to `github.com/IP3-Studio/ip3-studio`.
2. In Vercel: **Add New → Project → Import** the repo. Framework auto-detects as Next.js. No env vars needed.
3. First deploy runs `npm run build`. `vercel.json` adds security + caching headers.
4. **Custom domain**: Vercel dashboard → Project → Settings → Domains → add `ip3.studio` and `www.ip3.studio`. Vercel issues a certificate automatically.

### DNS at GoDaddy (apex + www → Vercel)

In GoDaddy → Domain Portfolio → `ip3.studio` → DNS:

| Type  | Name | Value                  | TTL  |
|-------|------|------------------------|------|
| A     | @    | `76.76.21.21`          | 1 hr |
| CNAME | www  | `cname.vercel-dns.com` | 1 hr |

Delete any default parking A/CNAME records pointing elsewhere before adding these.

### DNS at GoDaddy (Google Workspace email)

For `contact@ip3.studio` via Google Workspace. **First delete any default GoDaddy
MX records** (e.g. `*.secureserver.net`) or mail routing will be ambiguous.

| Type | Name              | Value                                            | Priority | TTL  |
|------|-------------------|--------------------------------------------------|----------|------|
| MX   | `@`               | `smtp.google.com`                                | 1        | 1 hr |
| TXT  | `@`               | `v=spf1 include:_spf.google.com ~all`            | —        | 1 hr |
| TXT  | `google._domainkey` | (DKIM value from Workspace admin → Apps → Gmail → Authenticate email) | — | 1 hr |
| TXT  | `_dmarc`          | `v=DMARC1; p=none; rua=mailto:contact@ip3.studio; adkim=s; aspf=s` | — | 1 hr |

- **MX**: `smtp.google.com` (priority 1) is Google's current single-record format. The legacy 5-record `ASPMX.L.GOOGLE.COM` set also works.
- **DKIM** is a **TXT** record (not CNAME — that's the Microsoft 365 pattern). Workspace admin generates the host (`google._domainkey`) and a long 2048-bit value; paste verbatim.
- **DMARC**: start at `p=none` (monitor only). After ~1 week of clean reports, tighten `p=none` → `p=quarantine` → `p=reject`.

See `EMAIL.md` for the full step-by-step.

## Static export (alternative)

```bash
npm run build:static
```

Produces `out/` for Cloudflare Pages, S3+CloudFront, GitHub Pages, or your own nginx. See ukfunding-io's `DEPLOY.md` for security-header config on those hosts.

## Verifying

After live:
- `/` — landing renders with all sections.
- `/legal` — privacy & terms page renders.
- `/robots.txt` — allows `*`, points to sitemap.
- `/sitemap.xml` — lists `/` and `/legal`.
- `/icon.svg`, `/apple-icon.png` — resolve.
- `/opengraph-image` — returns 1200×630 PNG.
- Lighthouse — 95+ across categories on cold load.
- `dig MX ip3.studio` — returns Google Workspace MX (`smtp.google.com`).
- Send a test email to `contact@ip3.studio` from outside; verify SPF/DKIM/DMARC all pass in the received headers.

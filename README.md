# VONE · Vibrational One

A premium, award-tier marketing site for **VONE — _Vibrational One_**, the **Official Void Acoustics Premium Partner for Spain & Portugal** (rental + installation of the Incubus, Arclite and Nexus systems, plus lighting, LED, scenography and power for events, clubs and venues).

Tagline: **Feel The Frequency.** Fully **bilingual (ES / EN)** with a live language toggle.

Built to feel like the work of a top-flight studio — cinematic, editorial, dark, and heavily animated — with its own identity (not a clone of any reference site).

> All copy and data is **real** and lives in `lib/site.ts` + `lib/i18n.ts`. Numbers are honest (no invented vanity metrics), and there are no fabricated testimonials — the "Our promise" section uses VONE's own marketing lines.

## Stack

- **Next.js 14** (App Router) · **React 18** · **TypeScript**
- **Tailwind CSS** — design tokens for the `#050505 / #111 / #1C1C1C / #FFF / #D9D9D9` palette + discreet magenta `signal` accent from the logo
- **Framer Motion** — reveals, staggered text, layout animations, scroll-linked parallax
- **GSAP + ScrollTrigger** — synced to the smooth-scroll loop
- **Lenis** — buttery smooth scrolling (respects `prefers-reduced-motion`)
- **Three.js** — a lightweight audio "soundfield" in the hero (on-brand, GPU-cheap)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run preview   # build + serve the static output locally
```

> Requires Node 18.17+.

## Deployment

The site is a **fully static export** (`output: "export"` in `next.config.mjs`) — every route is
prerendered, so it deploys to any static host with no server, no adapter and no edge functions.
`npm run build` emits the whole site into **`out/`** (~10 MB including the hero video).

### Cloudflare Pages (recommended — auto-deploys on every push)

Connect this GitHub repo in the Cloudflare dashboard with these settings:

| Setting | Value |
| --- | --- |
| Framework preset | **None** (or "Next.js (Static HTML Export)") |
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | `20` (env var `NODE_VERSION=20`) |

Or deploy straight from the CLI once `wrangler` is authenticated:

```bash
npm run deploy:cf
```

### Vercel

Also supported as-is (`vercel --prod`). Currently live at
<https://vone-sound-solutions.vercel.app>.

## Architecture

```
app/            Root layout (SEO, metadata, OG, JSON-LD), page, sitemap, robots, 404
components/     Reusable primitives — Navbar, CustomCursor, SmoothScroll,
                ScrollProgress, WaveField (Three.js), Marquee, Logo
components/ui/  MagneticButton, Reveal, TextReveal, SectionLabel
sections/       Hero, About, Services, Work, Stats, Technology,
                Clients, Process, Testimonials, CTA, Footer
hooks/          useMagnetic, useCounter
lib/            site.ts (all content/data), motion.ts (variants), utils.ts
styles/         globals.css (design system, cursor, grain, a11y)
public/         Static assets (see below)
```

Content is centralised in two files — edit without touching components:
- [`lib/site.ts`](lib/site.ts) — data (contact, services, projects, systems, stats, clients). Translatable fields are `{ es, en }` objects.
- [`lib/i18n.ts`](lib/i18n.ts) — static UI copy (`UI.es` / `UI.en`: section labels, headings, buttons).

Language state lives in [`components/LanguageProvider.tsx`](components/LanguageProvider.tsx) (defaults to Spanish, remembers the choice, infers from the browser once). The `ES / EN` toggle is in the navbar.

## Assets to add (`/public`)

These are referenced but not shipped (binary): drop yours in to complete the look.

| File | Purpose |
| --- | --- |
| `logo.png` | Your circular VONE / VOID badge (footer, favicon source) |
| `favicon.ico`, `apple-touch-icon.png` | Browser icons |
| `og.jpg` (1200×630) | Open Graph / social share image |
| `videos/hero.mp4` | Optional cinematic hero loop — uncomment the `<video>` in `sections/Hero.tsx` |
| `images/{manawa,fullnes,ameba,ppm,skizo-aniv,skizo-party}.jpg` | Project photos — see the commented `<Image>` in `sections/Work.tsx`; filenames match each project `id` in `lib/site.ts` |

### Images

Dark, cinematic **stock photos** (Unsplash / Pexels — free for commercial use, no attribution required) are already installed in `public/images/` so the site looks finished:

- `about.jpg` — editorial band in the "Who we are" section
- `manawa.jpg`, `fullnes.jpg`, `ameba.jpg`, `ppm.jpg`, `skizo-aniv.jpg`, `skizo-party.jpg` — the six project cards

To swap in **real event photos**, just replace these files (keep the same names). They're rendered with plain `<img loading="lazy">` inside `sections/Work.tsx` and `sections/About.tsx`.

### Still pending from the client
- **Definitive domain** (currently assumes `vibrationalone.com` in `lib/site.ts` → `SITE.domain`).
- **Real event photos** to replace the stock placeholders above.
- **Logo / favicon / og.jpg** (see the assets table).
- Optional: real **year / location / capacity** per project if you want to show them on the cards.

## Design & accessibility notes

- **Dark-first**, high-contrast, huge editorial type (Inter, tuned for tight display weights).
- **Custom cursor** only on fine pointers; native cursor restored on touch.
- **Reduced motion**: Lenis, Three.js and heavy animation disable automatically.
- Semantic landmarks, skip-link, focus-visible rings, `aria-label`s on decorative/interactive elements.
- SEO: metadata, Open Graph, Twitter card, JSON-LD Organization, sitemap & robots.

## Credit

🤖 Scaffolded with [Claude Code](https://claude.com/claude-code)

# Treasure Blue Homes & Shortlets Apartments

A premium, single-page demo website for **Treasure Blue Homes & Shortlets
Apartments**, a serviced-apartment / shortlet business in Alagbado, Lagos. A
boutique-hospitality presentation — cinematic photography, editorial typography
and an effortless enquiry journey — built to show the owner how their online
presence could look.

**Highlights**

- Boutique-hospitality identity: midnight navy + warm ivory with a restrained
  champagne accent, Cormorant Garamond + DM Sans, subtle scroll reveals that
  respect `prefers-reduced-motion`.
- Uses only the business's real photography in `src/assets/` (curated, not every
  file) — no stock or generated imagery; an accessible gallery lightbox
  (keyboard, prev/next, swipe, scroll-lock).
- Honest content only: the three genuine guest reviews, the Google 5.0 / 7
  listing figure (clearly labelled), verified address and `tel:` enquiry — **no
  invented rates, availability, unit/room counts, amenities, WhatsApp or email**.
  Power/Wi-Fi are attributed as guest-reported, not guaranteed.
- Content lives in `src/data/` ({site, reviews, gallery}.js) and contact details
  in `src/lib/contact.js`, structured so confirmed properties/rates can be added
  later without a rewrite.
- Fully responsive (320px → large desktop) with no horizontal overflow,
  accessible semantics/focus states, SEO + Open Graph, and a standard Vite build
  for zero-config Vercel deployment.

## Tech stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite 7](https://vite.dev/)** — build tool and dev server
- **JavaScript (JSX)** — no TypeScript
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling via the official Vite plugin
- **[Lucide React](https://lucide.dev/)** — lightweight icon set
- **ESLint** — linting

Deployed on **[Vercel](https://vercel.com/)** (zero-config: Vite is detected automatically).

## Project structure

```
treasure-blue/
├── public/              # Static assets served as-is (favicon, etc.)
├── src/
│   ├── assets/          # Images, photos, fonts, SVGs imported by components
│   ├── components/      # Reusable UI building blocks (Header, Footer, Button…)
│   ├── sections/        # Page sections composed from components (Hero…)
│   ├── data/            # site.js, reviews.js, gallery.js (content, separate from layout)
│   ├── lib/             # contact.js (verified contact details + maps link)
│   ├── App.jsx          # Root component / page layout
│   ├── main.jsx         # App entry point
│   └── index.css        # Tailwind import + global base styles
├── index.html           # HTML entry point
├── vite.config.js       # Vite + React + Tailwind config
└── eslint.config.js     # ESLint config
```

## Getting started

Requires **Node.js 20.19+ or 22.12+**.

### Installation

```bash
npm install
```

### Development

Start the dev server with hot-module reloading:

```bash
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

### Production build

Create an optimized build in `dist/`:

```bash
npm run build
```

### Production preview

Serve the built `dist/` locally to verify the production output:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Environment variables

Copy `.env.example` to `.env` (gitignored) and add any variables. Only names
prefixed with `VITE_` are exposed to the client bundle. **Never commit real
secrets** — no API keys, passwords, or credentials belong in this repository.

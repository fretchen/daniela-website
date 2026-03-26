# Website Plan – Spanish Teacher, Las Terrenas

> **Goal:** Minimal single-page website to gather client feedback. No localization yet (English only). i18n will be added in a later iteration.

## Decisions

| Key | Value |
|---|---|
| Framework | **Vike** (SSG via `prerender`) + React |
| Styling | **PandaCSS** (via PostCSS) |
| Language | English only (i18n deferred) |
| Design | Minimal – clean typography, whitespace, warm palette |
| Pricing | Not shown – "Contact me" CTA only |
| Contact | WhatsApp + Email |
| Deployment | GitHub Pages |
| Placeholders | Teacher name, photo, WhatsApp number, email |

---

## Project Structure

```
daniela-website/
├── vite.config.ts
├── panda.config.ts
├── postcss.config.cjs
├── package.json
├── tsconfig.json
├── .gitignore                        # includes styled-system/, dist/
├── public/
│   └── images/
│       └── teacher-placeholder.jpg
├── .github/
│   └── workflows/
│       └── deploy.yml
└── src/
    ├── styles/
    │   └── global.css                # @layer reset, base, tokens, recipes, utilities
    ├── layouts/
    │   └── Layout.tsx                # HTML shell: <head>, meta, global CSS
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Services.tsx
    │   ├── Testimonials.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    └── pages/
        └── index/
            ├── +Page.tsx             # single-page: all sections
            └── +config.ts            # prerender: true
```

---

## Page Sections (single page, top → bottom)

1. **Header** – Name/logo placeholder, anchor nav (About · Classes · Contact)
2. **Hero** – Photo placeholder, name, tagline (*"Spanish lessons in Las Terrenas"*), CTA → `#contact`
3. **About** – Short bio, experience, qualifications
4. **Services** – 3 cards: Private lessons, Group lessons, Online lessons; levels A1–C2
5. **Testimonials** – 3 placeholder student quotes
6. **Contact** – WhatsApp button (`https://wa.me/[NUMBER]`), email link, location text; *no prices*
7. **Footer** – Copyright, back-to-top

---

## Implementation Phases

### Phase 1 – Project Setup
1. Clean existing Astro files from repo (remove `astro.config.mjs`, `src/` Astro files, etc.)
2. Initialize Vike + React project:
   - Install `vike`, `vike-react`, `react`, `react-dom`, `vite`
   - Create `vite.config.ts` with `vike({ prerender: true })` plugin
   - Create `tsconfig.json` for React JSX
3. Set up PandaCSS:
   - Install `@pandacss/dev`, run `panda init`
   - Create `postcss.config.cjs` → `@pandacss/dev/postcss`
   - Create `panda.config.ts` with warm brand tokens (earthy/terracotta palette)
   - Add `styled-system/` to `.gitignore`
   - Add `"prepare": "panda codegen"` to `package.json` scripts
   - Create `src/styles/global.css` with PandaCSS layer imports

### Phase 2 – Layout & Components
4. `Layout.tsx` – HTML shell with `<head>`, meta tags, global CSS import, `<body>` wrapper
5. `Header.tsx` – Sticky header, name placeholder, anchor links
6. `Hero.tsx` – Full-width section, photo placeholder, headline, subtitle, CTA button
7. `About.tsx` – Two-column (photo + text) or single-column bio
8. `Services.tsx` – 3 simple cards with icon placeholders
9. `Testimonials.tsx` – 3 quote cards with name/origin placeholders
10. `Contact.tsx` – WhatsApp button, email link, "Las Terrenas, Dominican Republic" text
11. `Footer.tsx` – Minimal copyright line

### Phase 3 – Page Assembly
12. `pages/index/+Page.tsx` – Import and compose all sections
13. `pages/index/+config.ts` – `export default { prerender: true }`

### Phase 4 – Deployment
14. Create `.github/workflows/deploy.yml`:
    - Install deps → `panda codegen` → `vite build` → deploy `dist/client/` to GitHub Pages
15. Configure `base` in `vite.config.ts` for GitHub Pages (`/daniela-website/`)

---

## Key Files

| File | Purpose |
|---|---|
| `vite.config.ts` | Vike plugin + prerender + base path |
| `panda.config.ts` | Design tokens, brand colors, fonts |
| `postcss.config.cjs` | PostCSS → PandaCSS |
| `src/styles/global.css` | PandaCSS layer imports |
| `src/layouts/Layout.tsx` | HTML shell |
| `src/pages/index/+Page.tsx` | Single-page entry |
| `.github/workflows/deploy.yml` | CI/CD to GitHub Pages |

---

## Open Placeholders

- `[TEACHER_NAME]` – Full name
- `[TEACHER_PHOTO]` – Replace `teacher-placeholder.jpg`
- `[WHATSAPP_NUMBER]` – International format, e.g. `+18091234567`
- `[EMAIL_ADDRESS]` – Contact email
- `[GITHUB_REPO_NAME]` – For `base` in `vite.config.ts`

---

## Future Iterations

- **i18n** – Add French + English with Vike's `onBeforeRoute` and locale-based routing
- **SEO** – Structured data (LocalBusiness schema), OpenGraph images
- **Analytics** – Privacy-friendly (e.g. Plausible or Umami)
- **Booking** – Calendly or similar embed

---

## Verification Checklist

- [ ] `npm run build` completes without errors
- [ ] `npm run preview` → site visible at `localhost:3000/`
- [ ] All sections render correctly
- [ ] WhatsApp and email links are functional
- [ ] Smooth-scroll anchor navigation works
- [ ] GitHub Actions deploy → site live on GitHub Pages

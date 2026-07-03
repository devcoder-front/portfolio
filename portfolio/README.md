# Abhishek Sharma — Portfolio

Personal portfolio site for Abhishek Sharma, Senior Frontend Engineer & Angular Architect. Built with Angular 20 (standalone components, Signals, zoneless change detection) as a single-page, section-based site.

## Stack

- Angular 20 — standalone components, Signals, `@defer` for lazy-loaded sections, zoneless change detection (no `zone.js`)
- SCSS with a token-based design system (`src/styles/`) and light/dark theming via CSS custom properties
- No UI framework dependency — hand-built, accessible components

## Getting started

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

```bash
npm run build     # production build, output in dist/portfolio
npm test          # Karma/Jasmine unit tests
```

## Project structure

```
src/app/
  core/           # data model + résumé-derived content (single source of truth) + services
  shared/         # reusable components (icon, chip, section heading, stat counter) and directives
  layout/         # navbar, footer, back-to-top
  features/home/  # one component per page section (hero, experience, projects, skills, ...)
```

All résumé content lives in `src/app/core/data/resume-data.ts` — update that file to change any wording, dates, metrics, or links; the rest of the app reads from it.

## Before deploying

A few placeholders need real values — search the codebase for `your-domain.com`:

- `src/index.html` — canonical URL, Open Graph/Twitter tags, JSON-LD `url`
- `public/robots.txt` and `public/sitemap.xml` — sitemap URL
- `public/assets/images/og-cover.png` — social share preview image (1200×630) referenced by the OG/Twitter tags but not yet created

Also note: the résumé's phone number is intentionally omitted from the public site (available in the downloadable PDF only), and there's no GitHub link since none was provided.

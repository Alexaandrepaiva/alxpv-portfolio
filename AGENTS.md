# alxpv-portfolio — Agent Guide

This repo is a personal portfolio (Next.js App Router) to showcase story, experience, projects, and (later) a blog. Some sections are intentionally incomplete; prefer incremental improvements that keep the site stable.

## North Star
- Keep changes small, readable, and consistent with existing patterns.
- Prefer “boring” solutions over clever ones.
- Avoid new dependencies unless clearly justified (record an ADR).
- Don’t break navigation, theme, translations, or build/lint.

## Tech Stack (current)
- Next.js (App Router) under `src/app/`
- TypeScript (strict), React 18
- Tailwind CSS + shadcn/ui (Radix) components under `src/components/ui/`
- i18n: simple in-app translations via `src/translations/{en,es,pt}.ts` and `src/contexts/LanguageContext.tsx`
- Theme: `src/contexts/ThemeContext.tsx`
- Analytics: `src/lib/analytics.ts` + `src/components/AmplitudeProvider.tsx`, Vercel Analytics in `src/app/layout.tsx`

## Commands
- Dev: `npm run dev`
- Lint + typecheck: `npm run check`
- Lint: `npm run lint` / `npm run lint:fix`
- Typecheck only: `npm run typecheck`
- Build: `npm run build`
- Formatting: `npm run format:check` / `npm run format:write`

## Repository Structure (main)
- `src/app/`: routes (server components by default)
- `src/components/`: app components (layout/sections)
- `src/components/ui/`: shadcn/ui primitives (treat as vendor-like; edit minimally)
- `src/contexts/`: React contexts (theme/language)
- `src/lib/`: utilities and analytics wrapper
- `src/styles/`: global CSS (`globals.css`)
- `src/translations/`: translation dictionaries

## Coding Conventions
### TypeScript & exports
- Prefer TypeScript-first, strict-safe code.
- Prefer named exports for non-route modules.
- Next.js route files may use default export for pages/layouts.

### Imports
- Use the `~/*` alias for `src/*` imports (see `tsconfig.json`).

### Next.js (App Router) rules of thumb
- Server components by default; add `"use client"` only when using hooks/state/contexts or browser-only APIs.
- Keep client components lean (avoid heavy data work and large dependencies).
- Use route-level `layout.tsx`/`page.tsx` conventions.
- For metadata: prefer `export const metadata` for static cases; use `generateMetadata` only when needed.

### Styling
- Use Tailwind utilities; avoid adding new global CSS unless necessary.
- Use `cn()` from `src/lib/utils.ts` for class merging.
- Keep responsive behavior consistent with existing pages (container + max widths).

### i18n (translations)
- Translation keys must remain aligned across `en`, `es`, `pt`.
- Add keys in all languages in the same change.
- Avoid hard-coded user-facing strings in components unless explicitly non-translated.

### Analytics
- Track only meaningful user interactions.
- Prefer `Analytics.trackWithLabel(eventName, label, props?)`.
- Use consistent event naming (recommendation): `ui:<area>:<action>` (e.g., `ui:navbar:click`).

### Accessibility & UX
- Use semantic HTML; ensure keyboard/focus behavior for menus/dialogs.
- Provide `aria-label` for icon-only buttons.
- Prefer clear copy; avoid placeholders that look “broken”.

## Decision Style (ADR-lite)
Record non-trivial decisions in `plans/adr/` when any of these change:
- New dependency or removing one
- New content system (blog pipeline, CMS, MDX compiler)
- Major routing/layout rework
- Changes to i18n, theming, or analytics approach

Use `plans/templates/ADR.md`.

## Working Agreement (agent checklist)
Before finishing a change:
- Run `npm run check`
- If you touched styles or UI: sanity-check responsive layout in dev
- If you touched translations: verify all languages compile and keys exist
- If you added a dependency or changed architecture: add/update an ADR


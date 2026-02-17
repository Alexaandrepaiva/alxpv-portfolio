# ADR 0001: Current portfolio architecture baseline

## Status
Accepted

## Context
We need a stable baseline so future changes remain consistent and don’t re-litigate fundamentals.

## Decision
- Use Next.js App Router under `src/app/`.
- Use TypeScript strict mode; keep types correct over “any”.
- Use Tailwind for styling and shadcn/ui primitives under `src/components/ui/`.
- Use `~/*` alias for `src/*` imports.
- Use simple in-app i18n via `src/translations/{en,es,pt}.ts` + `LanguageContext`.
- Use theme via `ThemeContext` and a class on `<html>`.
- Use analytics wrapper `src/lib/analytics.ts` with Amplitude provider + dev local logging.

## Consequences
- Feature work should prefer existing patterns and avoid introducing new frameworks without an ADR.
- Translation updates require keeping key parity across languages.
- Client components should remain minimal; server components are the default.

## Alternatives considered
- Pages Router (rejected: already App Router)
- Full i18n framework (defer until necessary; would require ADR)
- CMS-backed blog (defer; current plan is local content first)


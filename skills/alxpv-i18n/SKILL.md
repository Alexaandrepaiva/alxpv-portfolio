---
name: alxpv-i18n
description: Maintain and extend the portfolio’s lightweight i18n system. Use when adding/changing translation keys, updating LanguageContext behavior, or ensuring en/es/pt parity across src/translations/*.ts and UI components.
---

# alxpv-i18n

## Quick start
1. Read `/Users/alexaandrepaiva/alxpv-portfolio/AGENTS.md` i18n section.
2. Identify the UI strings and the translation namespace they belong to.
3. Add/update keys in **all** of:
   - `src/translations/en.ts`
   - `src/translations/es.ts`
   - `src/translations/pt.ts`
4. Verify TypeScript still infers parity via `type Translations = typeof en`.

## Guardrails
- Never ship missing keys in any language.
- Avoid embedding user-facing strings directly in components; pull from `translations`.
- Keep key naming consistent with current structure.

## Done criteria
- `npm run check` passes.
- UI renders in all three languages without runtime errors.


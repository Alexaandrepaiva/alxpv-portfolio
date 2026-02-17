# Plans

This directory standardizes how we plan changes and record decisions.

## When to write a plan
Write a plan (feature plan) when work will take more than one focused edit session, spans multiple files/areas, or changes UX/IA (information architecture).

Use: `plans/templates/FEATURE.md`.

## When to write an ADR
Write an ADR when making a non-trivial decision that affects future work:
- adding/removing dependencies
- choosing an approach for blog/MDX rendering
- changing analytics/i18n/theme foundations
- reorganizing routing/layout patterns

Use: `plans/templates/ADR.md`.

## Naming conventions
- Feature plans: short descriptive name, e.g. `blog-mvp.md`
- ADRs: `plans/adr/NNNN-some-decision.md` (increment NNNN)
- Keep documents short; link to code paths instead of pasting code.


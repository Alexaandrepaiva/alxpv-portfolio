---
name: alxpv-context
description: Project-level context and agent orchestration for the alxpv-portfolio. Use as the entry point when starting work on new features, understanding project scope, or coordinating multi-step development tasks. Read this first before using other skills.
---

# alxpv-context

## Project Overview
Personal portfolio (Next.js App Router) showcasing story, experience, projects, and blog.
- **Routes:** `/`, `/about`, `/experience`, `/education`, `/projects`, `/blog` (planned)
- **i18n:** English, Spanish, Portuguese (all keys must stay in sync)
- **Theme:** Dark/light with CSS variables

## Roadmap Reference
See `plans/ROADMAP.md` for current phases:
- Phase 0: Maintain baseline (current routes stable)
- Phase 1: Content completeness
- Phase 2: Blog MVP (MDX)
- Phase 3: Polish & SEO
- Phase 4: Analytics iteration

## Skill Routing
Choose skills based on task type:

| Task | Primary Skill | Secondary |
|------|--------------|-----------|
| New page/route | `alxpv-frontend` | `alxpv-style` |
| New component | `alxpv-frontend` | `alxpv-style` |
| Visual polish/animation | `alxpv-style` | — |
| Data/API work | `alxpv-api` | — |
| Translations | `alxpv-i18n` (in `skills/`) | — |
| Blog features | `alxpv-mdx-blog` (in `skills/`) | — |

## Multi-Step Feature Pattern
1. Read this skill for context
2. Check if feature aligns with roadmap or needs ADR (`plans/adr/`)
3. Use domain skill(s) for implementation
4. Cross-reference `alxpv-style` for visual consistency
5. Run `npm run check` before completing

## Innovation Guidelines
**Encouraged (no ADR needed):**
- New animations using tailwindcss-animate or existing keyframes
- New color variants using CSS variable pattern
- Component composition using existing shadcn primitives
- Performance optimizations

**Requires ADR:**
- New dependencies
- New content systems (CMS, headless)
- Major routing/layout changes
- New state management patterns

## Working Agreement
Read `AGENTS.md` for coding conventions, commands, and done criteria.

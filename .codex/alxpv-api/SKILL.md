---
name: alxpv-api
description: Backend and data conventions for alxpv-portfolio. Use when working with API routes, environment variables, analytics integration, or data fetching patterns. Currently minimal but extensible for future backend features.
---

# alxpv-api

## Current Data Model
The portfolio is primarily static with these data sources:
- **Translations:** `src/translations/{en,es,pt}.ts` — typed dictionaries
- **Static assets:** `public/` — PDFs, images, favicon
- **Content:** Inline in components (experience, education, projects)

## Environment Variables
Use `@t3-oss/env-nextjs` for type-safe env handling:
```ts
// src/env.js - central env schema
import { createEnv } from "@t3-oss/env-nextjs";
```

Access via `env.VARIABLE_NAME` after importing from `~/env`.

## Analytics Integration
Wrapper in `src/lib/analytics.ts`:
```ts
// Track simple events
Analytics.track('event name');

// Track with label (preferred)
Analytics.trackWithLabel('event name', 'label', { optional: 'props' });
```

**Event naming convention:** `ui:<area>:<action>` (e.g., `ui:navbar:click`)

Track only meaningful interactions—avoid noise.

## Future API Routes
When adding API routes (`src/app/api/`):
- Use Route Handlers (App Router style)
- Validate input with Zod
- Return typed responses
- Handle errors gracefully with appropriate status codes

Example structure:
```
src/app/api/
└── contact/
    └── route.ts  # POST handler for contact form
```

## Data Fetching
- Prefer server components for data fetching
- Use `fetch` with appropriate caching strategies
- For client-side: keep minimal, use SWR pattern if needed

## When ADR Required
- Adding external APIs or services
- New database or CMS integration
- Authentication/authorization
- Any backend dependency

## Done Criteria
- `npm run check` passes
- Env variables documented in `.env.example` if new
- Analytics events follow naming convention

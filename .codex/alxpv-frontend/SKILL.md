---
name: alxpv-frontend
description: Build React components and pages in the alxpv-portfolio Next.js codebase. Use when creating routes under src/app/, components under src/components/, or working with shadcn/ui primitives. Covers server vs client component decisions and TypeScript patterns.
---

# alxpv-frontend

## Quick Start
1. Identify entrypoint: routes in `src/app/**/page.tsx`, components in `src/components/`
2. Default to server components; add `"use client"` only when required
3. Use `~/*` import alias for `src/*` paths

## Component Organization
```
src/components/
├── ui/           # shadcn/ui primitives (vendor-like, minimal edits)
├── *Section.tsx  # Page sections (HeroSection, AboutSection, etc.)
├── *.tsx         # App-level components (Navbar, Footer, Layout)
```

## Server vs Client Decision
Use `"use client"` only when:
- Using React hooks (useState, useEffect, useContext)
- Accessing browser APIs (localStorage, window)
- Using context providers (useLanguage, useTheme)
- Handling user interactions with state

Keep client components lean—avoid heavy data work.

## Hydration-Safe Pattern
For client components with browser-dependent rendering:
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return <FallbackUI />;
```

## shadcn/ui Usage
- Import from `~/components/ui/*`
- Use `cn()` from `~/lib/utils` for class merging
- Prefer existing primitives; add new ones via shadcn CLI if needed
- Document new primitives in commit message

## Props & TypeScript
- Use TypeScript interfaces for component props
- Prefer named exports for components (except route files)
- Route files (`page.tsx`, `layout.tsx`) use default exports

## Translations
- Never hardcode user-facing strings
- Use `const { translations } = useLanguage();`
- Add keys to all three languages (`en`, `es`, `pt`) in same change

## Done Criteria
- `npm run check` passes
- No console errors in dev
- Responsive layout verified (if UI changed)

---
name: alxpv-style
description: Visual consistency, design tokens, and animations for alxpv-portfolio. Use when styling components, adding animations, working with theme colors, or ensuring responsive design. Reference for maintaining design system coherence.
---

# alxpv-style

## Design Tokens
CSS variables defined in `src/styles/globals.css`:

**Core colors (HSL format):**
- `--background`, `--foreground` — page base
- `--card`, `--card-foreground` — card surfaces
- `--primary`, `--primary-foreground` — primary actions
- `--secondary`, `--secondary-foreground` — secondary elements
- `--muted`, `--muted-foreground` — subdued content
- `--accent`, `--accent-foreground` — highlights
- `--destructive` — error states
- `--border`, `--input`, `--ring` — form elements

**Usage in Tailwind:**
```tsx
className="bg-background text-foreground"
className="text-muted-foreground"
className="border-border"
```

## Theme System
- Dark mode default, toggle via `ThemeContext`
- Classes applied to `<html>`: `dark` or `light`
- All colors have dark/light variants in CSS variables

**Theme-aware styling:**
```tsx
// Automatic via CSS variables (preferred)
className="bg-background"

// Explicit when needed
className="dark:bg-slate-900 bg-white"
```

## Typography
- **Font:** Montserrat (loaded via Google Fonts)
- **Sizes:** Use Tailwind scale (`text-sm`, `text-base`, `text-xl`, etc.)
- **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Animations
**tailwindcss-animate plugin available:**
```tsx
className="animate-in fade-in slide-in-from-bottom-4"
className="animate-out fade-out"
```

**Existing keyframes in Tailwind config:**
- `accordion-down`, `accordion-up` — for collapsible content

**Custom transition patterns:**
```tsx
// Icon rotation (ThemeToggle pattern)
className="transition-all duration-500 rotate-0 opacity-100"

// Smooth hover states
className="transition-colors duration-200 hover:text-primary"
```

## Interaction States
```tsx
// Buttons
className="hover:bg-primary/90 active:scale-95"

// Links
className="underline decoration-1 hover:text-primary"

// Focus (accessibility)
className="focus:outline-none focus:ring-2 focus:ring-ring"
```

## Responsive Patterns
**Breakpoints:** `sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`

**Container pattern:**
```tsx
className="max-w-4xl mx-auto w-full"
className="px-4 md:px-6 lg:px-8"
```

**Text scaling:**
```tsx
className="text-3xl md:text-5xl"
className="text-xl md:text-2xl"
```

## Class Merging
Always use `cn()` for conditional/merged classes:
```tsx
import { cn } from "~/lib/utils";

className={cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)}
```

## Innovation Encouraged
- Subtle micro-animations (hover, focus, enter/exit)
- New color variants using CSS variable pattern
- Creative use of existing primitives
- Performance-conscious animations (prefer `transform`, `opacity`)

## Avoid
- Heavy animations that impact performance
- Colors outside the design token system
- Global CSS additions (use Tailwind utilities)
- Breaking responsive behavior

## Done Criteria
- Visual consistency with existing pages
- Dark/light themes both work
- Responsive at all breakpoints
- No layout shifts or jank

---
name: alxpv-mdx-blog
description: Plan and implement the portfolio blog using local MDX content. Use when adding blog routes, defining post frontmatter schema, choosing an MDX rendering approach, or creating blog post content and listing pages.
---

# alxpv-mdx-blog

## First rule: write an ADR before implementation
Before adding MDX tooling or a blog pipeline, create an ADR using `plans/templates/ADR.md` (e.g., “MDX rendering approach”).

## Default (recommended) content model
- Store posts locally (in-repo) as MDX.
- Keep a small, explicit frontmatter schema:
  - `title` (string)
  - `date` (YYYY-MM-DD)
  - `description` (string)
  - `tags` (string[])
  - `draft` (boolean, optional)

## Route expectations (when implemented)
- Blog index: `src/app/blog/page.tsx`
- Blog post: `src/app/blog/[slug]/page.tsx`

## Quality bar
- Add basic SEO metadata per post (title/description).
- Ensure build is stable and posts can be added without code changes beyond content.
- Keep i18n scope explicit (either “blog is English-only for MVP” or “translated posts” via ADR).


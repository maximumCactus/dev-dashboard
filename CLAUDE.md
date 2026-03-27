@AGENTS.md

# Dev Dashboard — MaximumCactus Portfolio

Personal portfolio site showcasing project ideas. No backend — all data is static and colocated with the code.

## Stack

- **Next.js 16.2.1** — App Router only. Do not use the Pages Router.
- **React 19.2.4**
- **TypeScript 5** — strict mode enabled
- **Tailwind CSS v4** — configured via `@tailwindcss/postcss` in `postcss.config.mjs`. There is no `tailwind.config.ts`. Theme customization goes in `app/globals.css` using `@theme`.
- **Package manager: pnpm**

## Commands

```bash
pnpm dev       # start dev server
pnpm build     # production build
pnpm lint      # run ESLint
```

## Project Structure

```
app/
  _data/
    projects.ts              # static project list — the only data source
  bio/
    page.tsx                 # /bio — Q&A bio page
  projects/
    page.tsx                 # /projects — server shell
    _components/
      ProjectsView.tsx       # 'use client' — sidebar + detail panel
  layout.tsx                 # root layout — fonts, metadata, global styles
  page.tsx                   # / — landing page
  globals.css                # Tailwind import + CSS theme vars
public/                      # static assets (screenshots, icons) served from /
```

- Prefix folders with `_` (e.g. `_components`, `_data`) to keep them non-routable.
- Colocate components near the route that uses them. Only move to `app/_components/` if truly shared across multiple routes.
- Use the `@/` path alias (maps to project root) for all imports.

Use the `@/` path alias (maps to project root) for all imports.

## Server vs Client Components

All components are **Server Components by default** — keep them that way unless you need:
- `useState`, `useEffect`, or other React hooks
- Browser-only APIs (`window`, `localStorage`, etc.)
- Event handlers (`onClick`, `onChange`, etc.)

Add `'use client'` only to the specific leaf component that needs it, not to parent wrappers.

## Routing

- Use `<Link href="...">` from `next/link` for all internal navigation. Never use `<a>` for internal links.
- Dynamic params are typed as `Promise<{ param: string }>` and must be `await`ed in Next.js 16.

```tsx
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
}
```

## Images

Always use `<Image>` from `next/image` instead of `<img>`. Always provide `width`, `height`, and `alt`. Use `priority` on above-the-fold images.

## Fonts

Three fonts are set up in `app/layout.tsx` via `next/font/google`:

| Font | CSS variable | Tailwind class | Use for |
|---|---|---|---|
| Geist Sans | `--font-geist-sans` | `font-sans` | Body / UI text |
| Geist Mono | `--font-geist-mono` | `font-mono` | Code, labels, badges |
| Caveat | `--font-caveat` | `font-handwriting` | Headings, decorative text |

Do not import additional fonts without updating `layout.tsx` and `globals.css`.

## Styling

- Use **Tailwind utility classes** for all styling.
- For component-specific styles that Tailwind can't cover, use CSS Modules (`.module.css`).
- Do not use inline `style={{}}` props.
- Tailwind v4 is imported with `@import 'tailwindcss'` in `globals.css` — not `@tailwind base/components/utilities`.

## Data

No backend. Project data is defined as TypeScript objects/arrays in source files (e.g. `app/_data/projects.ts`). No `fetch()` calls, no API routes needed.

## Metadata

Define page metadata using the `export const metadata` API from `next` in each `layout.tsx` or `page.tsx` — never with `<head>` tags directly.

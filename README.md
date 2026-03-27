# Dev Dashboard — MaximumCactus

Personal portfolio site by MaximumCactus. A dashboard that tracks the status of personal project ideas — some finished, most delightfully unfinished.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4**
- **pnpm**

## Pages

| Route | Description |
|---|---|
| `/` | Landing page with name, cactus illustration, and nav buttons |
| `/bio` | Q&A-style bio |
| `/projects` | Sidebar + detail view of all project ideas |

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  _data/
    projects.ts          # static project list — edit this to add/update projects
  _components/           # shared UI components (if needed)
  bio/
    page.tsx
  projects/
    page.tsx
    _components/
      ProjectsView.tsx   # client component: sidebar + detail panel
  layout.tsx             # root layout, fonts, metadata
  page.tsx               # home / landing page
  globals.css            # Tailwind import + CSS theme vars
public/                  # static assets (screenshots, icons)
```

## Adding a Project

Open [app/_data/projects.ts](app/_data/projects.ts) and add an entry to the `projects` array:

```ts
{
  id: "my-project",          // used as sidebar key
  name: "My Project",
  tagline: "One-liner shown in the header.",
  description: "Longer description shown in the detail panel.",
  stack: ["Next.js", "TypeScript"],
  status: "idea",            // "idea" | "in-progress" | "paused" | "done"
  repoUrl: "https://github.com/...",  // optional
}
```

## Deployment

This is a static-friendly Next.js app with no backend. It deploys cleanly to [Vercel](https://vercel.com) with zero configuration.

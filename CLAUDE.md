# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **TanStack Start** project - a React SSR framework with file-based routing. It is connected to **Lovable** - avoid rewriting published git history (force pushing, amending, or squashing pushed commits) as this breaks the project history on Lovable's side.

## Development Commands

```bash
# Start development server
bun dev

# Build for production
bun build

# Preview production build
bun preview

# Lint code
bun lint

# Format code
bun format
```

## Architecture

### Framework: TanStack Start
- **File-based routing** in `src/routes/` - every `.tsx` file is a route
- Root layout is `src/routes/__root.tsx` - wraps every page with `<QueryClientProvider>` and renders child routes via `<Outlet />`
- Route conventions:
  - `index.tsx` → `/`
  - `about.tsx` → `/about`
  - `users/$id.tsx` → `/users/:id` (dynamic params use `$`, not `:`)
  - `_layout.tsx` → layout route
  - `__root.tsx` → app shell

**Important:** Do not use Next.js conventions like `src/pages/`, `app/layout.tsx`, or curly braces for dynamic params.

### Server Entry
- `src/server.ts` is the custom SSR entry point
- Wraps TanStack Start's server-entry to normalize catastrophic SSR errors
- Imports `@tanstack/react-start/server-entry` dynamically

### Styling
- **Tailwind CSS v4** with `@source` directive for automatic component scanning
- Custom CSS variables defined in `src/styles.css` for the Qtechx luxury dark palette
- Uses `oklch()` color space for theme colors
- shadcn/ui components in `src/components/ui/` (new-york style, slate base)
- Utility function `cn()` in `src/lib/utils.ts` for merging Tailwind classes

### Component Structure
- Custom components in `src/components/`
- shadcn/ui components in `src/components/ui/`
- Path aliases configured: `@/*` → `./src/*`

### Error Handling
- Error capture in `src/lib/error-capture.ts`
- Error page rendering in `src/lib/error-page.ts`
- Lovable error reporting integration in `src/lib/lovable-error-reporting.ts`
- Root error boundary in `src/routes/__root.tsx`

### State Management
- **TanStack Query** (`@tanstack/react-query`) for server state
- QueryClient provided at root via route context

## Key Dependencies
- TanStack Start/Router for routing and SSR
- TanStack Query for data fetching
- Radix UI primitives for accessible components
- Framer Motion for animations
- React Hook Form + Zod for form validation
- Lucide React for icons

## Vite Configuration
Uses `@lovable.dev/vite-tanstack-config` which includes:
- TanStack Start plugin
- React plugin
- Tailwind CSS v4 plugin
- TypeScript path aliases
- Nitro (build-only, Cloudflare target)
Do NOT manually add these plugins to `vite.config.ts`.

## TypeScript
- Path alias: `@/*` → `./src/*`
- Strict mode enabled
- JSX: `react-jsx`
- Target: ES2022

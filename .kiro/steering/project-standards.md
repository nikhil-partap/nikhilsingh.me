---
inclusion: always
---

# Project Standards

## Tech Stack

- React 19.1.1 with JSX
- Vite 7.1.0 for build tooling
- Tailwind CSS 4.1.11 for styling
- React Router DOM 7.8.0 for routing
- Radix UI components for accessible UI primitives
- Lucide React for icons

## Project Structure

- `/src/components` - React components (flat structure for single-file components)
- `/src/components/Header` - Header components (MobileHeader, DesktopHeader, ResponsiveHeader)
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and helpers
- `/public/images` - Static image assets
- `/public/videos` - Static video assets
- `/public/images` - Static image assets
- `/public/videos` - Static video assets

## Code Style Guidelines

### React Components

- Use functional components with hooks
- Use `.jsx` extension for React components
- Keep components focused and single-responsibility
- Extract reusable logic into custom hooks in `/src/hooks`

### Imports

- Use `@/` alias for imports from `src` directory (configured in vite.config.js)
- Example: `import { Button } from "@/components/ui/button"`

### Styling

- Use Tailwind CSS utility classes
- Use `clsx` or `tailwind-merge` for conditional classes
- Follow mobile-first responsive design approach

### File Naming

- Components: PascalCase (e.g., `Header.jsx`, `ProjectCard.jsx`)
- Hooks: camelCase with `use` prefix (e.g., `useGoogleAnalytics.jsx`)
- Utilities: camelCase (e.g., `utils.js`)

## Build & Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
- `npm run deploy` - Build and deploy to GitHub Pages

### API Proxy

- GitHub API requests are proxied through `/api/github` to avoid CORS issues
- Configured in `vite.config.js` server.proxy

## Best Practices

- Keep bundle size minimal - avoid unnecessary dependencies
- Optimize images and assets for web
- Use lazy loading for routes and heavy components
- Follow accessibility best practices with Radix UI components
- Test responsive design across breakpoints

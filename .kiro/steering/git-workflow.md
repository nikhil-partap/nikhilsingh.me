---
inclusion: manual
---

# Git Workflow

## Commit Messages

- Use conventional commits format
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat: add contact form validation`
- Example: `fix: resolve mobile navigation overflow`

## Branch Strategy

- `main` - production-ready code
- Feature branches: `feature/description`
- Bug fixes: `fix/description`
- Keep branches short-lived

## Deployment

- Deploys to GitHub Pages via `npm run deploy`
- Build output goes to `dist` directory
- Ensure all assets use relative paths for GitHub Pages

---
inclusion: fileMatch
fileMatchPattern: "src/**/*.{jsx,css}"
---

# Styling Guide

## Tailwind CSS Usage

### Utility-First Approach

- Prefer Tailwind utilities over custom CSS
- Use `@apply` sparingly in CSS files
- Compose utilities with `clsx` or `cn()` helper

### Responsive Design

- Mobile-first: base styles are for mobile
- Use breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Example: `className="text-sm md:text-base lg:text-lg"`

### Color Palette

- Use semantic color names from Tailwind
- Maintain consistent color usage across components
- Use opacity modifiers: `bg-blue-500/50`

### Spacing & Layout

- Use consistent spacing scale (4, 8, 12, 16, 24, 32, etc.)
- Prefer flexbox and grid for layouts
- Use `gap` for spacing in flex/grid containers

### Dark Mode (if applicable)

- Use `dark:` prefix for dark mode variants
- Example: `className="bg-white dark:bg-gray-900"`

## Custom Utilities

- Define custom utilities in `src/lib/utils.js`
- Use `tailwind-merge` to handle conflicting classes
- Example `cn()` helper for conditional classes

## Animation

- Use Tailwind animation utilities
- Consider `tw-animate-css` for complex animations
- Keep animations subtle and purposeful

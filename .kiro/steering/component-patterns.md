---
inclusion: fileMatch
fileMatchPattern: "src/components/**/*.jsx"
---

# Component Development Patterns

## Component Structure

```jsx
import React from "react";
import {cn} from "@/lib/utils";

export function ComponentName({className, ...props}) {
  return (
    <div className={cn("base-classes", className)} {...props}>
      {/* component content */}
    </div>
  );
}
```

## Props Patterns

- Destructure props in function signature
- Use `className` prop for style customization
- Spread remaining props with `{...props}` for flexibility
- Provide sensible defaults

## State Management

- Use `useState` for local component state
- Use `useEffect` for side effects
- Extract complex state logic into custom hooks
- Keep state as close to where it's used as possible

## Radix UI Integration

- Import Radix primitives from `@radix-ui/react-*`
- Wrap with custom styling using Tailwind
- Maintain accessibility features provided by Radix
- Use compound components pattern for complex UI

## Performance

- Memoize expensive calculations with `useMemo`
- Memoize callbacks with `useCallback` when passing to child components
- Use React.lazy() for code splitting large components
- Avoid inline function definitions in JSX when possible

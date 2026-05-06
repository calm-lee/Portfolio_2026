# Portfolio 2026 — Project Guide

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS v4** (utility classes + CSS custom properties)
- **React Router v7** (client-side routing)
- **Framer Motion** (`motion/react`) for animations
- **shadcn/ui** component primitives (via Radix UI)

Do not introduce MUI (`@mui/material`) — it is installed as a transitive dependency but not used in this project.

---

## Folder Structure

```
src/
├── app/
│   ├── App.tsx                  # Route definitions only
│   ├── components/
│   │   ├── sections/            # Page sections (Hero, About, Experience, …)
│   │   ├── common/              # Reusable non-UI components (RadiantText, ImageWithFallback)
│   │   └── ui/                  # shadcn primitives — only keep what is used
│   └── context/
│       └── LanguageContext.tsx
├── content/                     # ← Content data lives here, not inside components
│   ├── en.ts
│   └── ko.ts
├── styles/
│   ├── index.css                # Entry: imports fonts, tailwind, theme
│   ├── theme.css                # CSS custom properties + @theme inline
│   ├── fonts.css
│   └── tailwind.css
└── main.tsx
```

When adding a new section, create the component in `src/app/components/sections/` and add its content data to `src/content/en.ts` and `src/content/ko.ts`.

---

## Routing

Two routes, no shared layout component needed:

| URL  | Language |
|------|----------|
| `/`  | English  |
| `/ko` | Korean  |

`LanguageToggle` uses `<Link>` from `react-router` and reads `useLocation()` to determine the active language. Do not use `LanguageContext` toggle — language is driven by URL only.

---

## Content Management

Content data (strings, arrays) must not be hardcoded inside component files. Put it in `src/content/`:

```ts
// src/content/en.ts
export const about = {
  heading1: "Focusing on",
  heading2: "Improving UI/UX",
  p1: "...",
  p2: "...",
}
```

Sections import from content:
```ts
import { about } from "@/content/en"; // wrong — don't do this
```

Instead, sections receive their content via `useLanguage()` which looks up the correct file based on route.

---

## Naming Conventions

| Thing | Convention | Example |
|---|---|---|
| Component files | PascalCase | `RadiantText.tsx` |
| Non-component files | camelCase | `languageContext.ts` |
| CSS files | kebab-case | `theme.css` |
| Component exports | `default export` | `export default function Hero()` |
| Hooks | `use` prefix | `useLanguage` |
| Types/interfaces | PascalCase | `type Lang = "en" \| "ko"` |

All components use `default export`. Named exports are only for non-component utilities (e.g., `export function cn()`).

---

## Styling Rules

**Use CSS variables for brand colors, not inline styles.**

```tsx
// ❌ Don't
<section style={{ backgroundColor: "#F5F1E8" }}>

// ✅ Do — add to theme.css
// --color-sand: #F5F1E8;
<section className="bg-sand">
```

Brand colors in `theme.css`:
- `--background`: page background (white)
- `--foreground`: primary text
- `#F5F1E8` ("sand") — used for alternating section backgrounds. Add as `--color-sand`.

Typography is set globally in `theme.css` (`h1–h3` use `font-serif: Cardo`, body uses `font-sans: Figtree/Pretendard`). Don't override font families inline.

---

## Animation

Use `motion/react` (Framer Motion v12). Standard scroll-reveal pattern:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
```

`prefers-reduced-motion` is handled globally in `index.css` — no need to handle it per-component.

---

## TypeScript

- All props must be typed. No `any`.
- Use `type` over `interface` for props.
- Keep types co-located with the component unless shared across 3+ files, in which case move to `src/types/`.

```ts
// ✅
type Props = {
  children: string;
  as?: "p" | "span";
};
```

---

## What to Avoid

- **Inline hardcoded colors** — use CSS variables
- **Content strings in component files** — belongs in `src/content/`
- **Adding shadcn components you don't use** — `src/app/components/ui/` is already bloated; only add what the page needs
- **Mixing MUI and shadcn** — pick shadcn exclusively
- **`toggle()` in LanguageContext** — language switching is navigation, not state
- **Named exports for components** — use `default export`

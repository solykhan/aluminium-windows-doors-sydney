# Aluminium Windows and Doors Sydney

React + Vite + TypeScript + Tailwind CSS website for CWD Commercial Windows and Doors Sydney.

Live site: https://aluminiumwindowsanddoorssydney.com

## Stack

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 3.4 + shadcn/ui components
- React Router v7

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Structure

- `src/pages/` — route pages (Home, ProductPage, AreaPage, ArticlePage, etc.)
- `src/data/` — content data (products, suburbs, articles, site constants)
- `src/components/` — shared components (Header, Footer, SEO, Shared)
- `public/images/` — all imagery
- `public/sitemap.xml`, `public/robots.txt`, `public/.htaccess` — SEO + Apache config

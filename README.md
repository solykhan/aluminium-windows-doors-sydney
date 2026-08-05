# Aluminium Windows and Doors Sydney

Website for CWD Commercial Windows and Doors Sydney — https://aluminiumwindowsanddoorssydney.com

## Repo layout

- **Root** = the built website (what Hostinger deploys to `public_html`). Do not edit these files by hand.
- **`source/`** = the React + TypeScript + Vite + Tailwind source code (for backup/reference).

## Update workflow

1. Changes are made and built from `source/`
2. The built files are pushed to the repo root
3. Hostinger hPanel → Advanced → GIT → **Redeploy** → site updates in seconds

## Local development

```bash
cd source
npm install
npm run dev      # local preview
npm run build    # outputs to source/dist — copy contents to repo root to publish
```

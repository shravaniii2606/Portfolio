# Shravani Chaudhari — Portfolio

React + Vite + Tailwind. Dark, terminal/scan-line aesthetic.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel (same flow as your other projects)

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output dir `dist` (Vercel usually auto-detects these).
4. Deploy.

## Editing content

Everything lives in `src/App.jsx` as plain arrays at the top of the file:

- `PROJECTS` — main project cards
- `SIDE_PROJECTS` — smaller shipped projects
- `TIMELINE` — hackathon timeline entries
- `STACK` — tech stack groups
- `SEMESTERS` — SFIT CGPA per semester

Colors and fonts are in `tailwind.config.js` under `theme.extend`.

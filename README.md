# buntnails.ch

Website for **Bunt Nails** — professionelle Maniküre, Pediküre und Gel-Nageldesign in Zürich-Oerlikon.

- **Adresse:** 175A Regensbergstrasse, 8050 Zürich
- **E-Mail:** kontakt@buntnails.ch
- **Domain:** buntnails.ch

## Stack

- Vite
- React + TypeScript
- Tailwind CSS
- Google Fonts: Cormorant Garamond + Plus Jakarta Sans
- Local image assets from `./images`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys to the `gh-pages` branch. GitHub Pages serves the site at `buntnails.ch`.

The Setmore booking link is configured in `src/App.tsx` as:

```ts
const bookingUrl = "https://buntnails.setmore.com/buntnails";
```

Update this constant if the Setmore URL changes.

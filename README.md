# buntnails.ch

Website for **Bunt Nails** — professionelle Maniküre, Pediküre, Gel-Nägel und Beauty in Zürich-Oerlikon.

- **Adresse:** 175 Regensbergstrasse, 8050 Zürich
- **Telefon:** +41 76 298 09 41
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

## Preisliste

Die vollständige Preisliste ist im Abschnitt „Leistungen & Preise“ eingebunden. Die Druckversion liegt unter `data/preisliste/` und wird mit `node data/preisliste/build.js` neu erzeugt.

## Online-Buchung

Die Setmore-Buchung ist derzeit deaktiviert; die Website verweist stattdessen auf Telefon und E-Mail. Zum Reaktivieren in `src/App.tsx` `ONLINE_BOOKING_ENABLED` auf `true` setzen. Header-CTA, Hero, Buchungsbereich und Modal werden dann automatisch wieder aktiviert. Der Buchungslink bleibt in `bookingUrl` konfiguriert:

```ts
const bookingUrl = "https://buntnails.setmore.com/buntnails";
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the site and deploys to the `gh-pages` branch. GitHub Pages serves the site at `buntnails.ch`.

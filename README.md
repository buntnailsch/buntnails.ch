# buntnails.ch

Modern, minimalist website for **Bunt Nails** in German.

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

## Deployment notes

The production build is configured with `base: "/"`, suitable for the root domain `buntnails.ch` on Vercel or GitHub Pages. Setmore booking opens at `https://buntnails.setmore.com/buntnails`; replace the `bookingUrl` constant in `src/App.tsx` if the final Setmore URL differs.

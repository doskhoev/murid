This is a [Next.js](https://nextjs.org) project for murid.ru (Markdown articles in Git).

## Getting Started

Install dependencies and run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

Articles will live under `content/articles/*.md` (see app and `lib/articles.ts`).

## Scripts

- `yarn dev` — development server
- `yarn build` — production build
- `yarn start` — run production server
- `yarn lint` — ESLint

Use [Corepack](https://nodejs.org/api/corepack.html) (`corepack enable`) to pick up the Yarn version from `package.json` (`packageManager` field).

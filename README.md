# Cybersecurity Portfolio

A modern, responsive personal portfolio built with React, Vite and Tailwind CSS showcasing cybersecurity projects, skills and contact information.

## Features

- Clean, responsive UI using Tailwind CSS
- Page transitions with Framer Motion
- SPA routing with React Router (nested layout + Outlet)
- Project gallery with image assets bundled by Vite
- Dark mode support and accessible layout

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- Lucide Icons

## Getting Started (local)

1. Install dependencies:

```cmd (command prompt)
npm install
```

2. Start the dev server:

```command prompt
npm run dev
```

3. Open the app in your browser at the URL Vite prints (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start the Vite dev server
- `npm run build` — build production assets
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project Structure (important files)

- `src/main.jsx` — app entry, wraps `<App />` with `BrowserRouter`
- `src/App.jsx` — route configuration (uses `MainLayout` as a parent route)
- `src/layouts/MainLayout.jsx` — navbar, footer, and `<Outlet />` for pages
- `src/pages/*` — page components like `Home`, `Projects`, `About`, `Contact`
- `src/components/*` — reusable UI components (Navbar, Footer, ProjectCard, etc.)
- `src/assets/*` — static images imported in code so Vite bundles them
- `src/data/projects.js` — project data (images should be imported, not plain strings)

## Notes & Troubleshooting

- Image assets: Import images inside JS/JSX files (e.g. `import avatar from '../assets/avatar.jpg'` and then use `src={avatar}`) so Vite resolves and fingerprints the file. Avoid relative string URLs in JSX like `src="../assets/avatar.jpg"` because the browser resolves those relative to the current route and they often 404 in nested routes or production builds.
- Routing layout: `MainLayout` uses an `<Outlet />`. Ensure `App.jsx` defines `MainLayout` as a parent route (example code in this repo) so pages render inside the layout. If pages show only the navbar/footer it usually means the Outlet had no child routes configured.
- If you see `[object Object]` as an image `src`, that means an object was assigned instead of a string URL. Make sure `projects.js` sets `image` to the imported URL (not `{passwordStrengthChecker}`).

## Deployment

- Build the app: `npm run build`
- Deploy the contents of `dist` to any static host (Vercel, Netlify, GitHub Pages, etc.). Vercel works particularly well with Vite projects.

## Contributing

- Feel free to open issues or PRs for fixes and improvements. Focus areas: accessibility, additional projects, better image/asset organization, and unit tests.

## Contact

- Owner: Cyb3r_Cure (see the `Contact` page in the app)


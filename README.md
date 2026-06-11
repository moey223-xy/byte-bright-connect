# BigByte Tech — www.bigbytetech.com.au

Marketing site for BigByte Tech, built with [Astro](https://astro.build) for fully
prerendered, SEO-friendly HTML. The only client-side JavaScript is the contact form,
which is a small React island that posts to a Supabase edge function.

> Note: this project was migrated from a Lovable-generated Vite + React SPA to Astro.
> It can no longer be edited through the Lovable visual editor.

## Tech stack

- Astro 5 (static output)
- Tailwind CSS 3
- React (contact form island only)
- Supabase edge function (`supabase/functions/send-contact-email`) + Resend for contact emails

## Development

```sh
npm install
npm run dev       # dev server on http://localhost:8080
npm run build     # builds the static site into docs/
npm run preview   # serves the production build locally
```

## Deployment

GitHub Pages serves the site from the `docs/` folder on `main`
(custom domain configured via `public/CNAME`). To deploy:

```sh
npm run build
git add docs && git commit && git push
```

The build also emits `sitemap-index.xml`, `robots.txt`, and a `.nojekyll` marker
(required so GitHub Pages serves the `_astro/` asset folder).

## Environment variables

`.env` (inlined into the static build at build time — these are public anon values):

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_PUBLISHABLE_KEY`

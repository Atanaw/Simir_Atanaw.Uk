# Dr. Simir Atanaw — Hydrologist Website

Static, framework-free personal research website prepared for GitHub and Cloudflare Pages.

## Repository structure

- `index.html` — semantic website markup
- `style.css` — responsive design and academic visual system
- `script.js` — mobile navigation, scroll progress, active navigation and reveal effects
- `assets/simir.png` — original portrait
- `assets/simir.webp` — optimized portrait used when supported
- `documents/` — CV(s)
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest` — SEO/PWA support
- `_redirects`, `_headers` — Cloudflare Pages routing and security/cache headers
- `favicon-*`, `favicon.ico`, `og-image.jpg` — branding and social sharing

## Domain

Primary domain: **simir.uk** (see `CNAME`).

## Cloudflare Pages deployment

- Framework preset: **None**
- Build command: **leave blank**
- Build output directory: **/** (repository root)
- Production branch: **main**

## GitHub Pages

This site is also compatible with GitHub Pages because it is entirely static. Set the custom domain via repository Settings → Pages, which will (re)write `CNAME` to `simir.uk`.

## Google Search Console

After deployment:
1. Verify the `simir.uk` domain property.
2. Submit `https://simir.uk/sitemap.xml`.
3. Inspect `https://simir.uk/` and request indexing after major updates.

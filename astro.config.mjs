// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

import { SITE } from "./src/config.ts";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  // /url/index.html com trailing slash — bom para canonical estável.
  trailingSlash: "always",
  build: { format: "directory" },
  // Estático por defeito. As rotas de servidor (admin, API) usam
  // `export const prerender = false`; o adaptador Vercel trata das funções.
  output: "static",
  adapter: vercel(),
  // O cookie de sessão do admin é SameSite=lax (impede CSRF nos POSTs).
  security: { checkOrigin: false },
  integrations: [
    react(),
    // Tailwind v3 via PostCSS (postcss.config.js) — processa as @tailwind
    // directives do src/index.css. tailwind.config.ts faz o content scanning.
    sitemap({ changefreq: "weekly", priority: 0.7 }),
  ],
});

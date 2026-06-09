import type { APIRoute } from "astro";
import { getPublishedCmsArticles } from "@/lib/articles";
import { SITE } from "@/config";

export const prerender = false;

/** Sitemap dinâmico dos artigos do blog (que são server-rendered e não entram no sitemap do build). */
export const GET: APIRoute = async () => {
  const articles = await getPublishedCmsArticles();
  const urls = articles
    .map((a) => {
      const lastmod = a.updated_date ?? a.pub_date;
      const lm = lastmod ? `<lastmod>${new Date(lastmod).toISOString().slice(0, 10)}</lastmod>` : "";
      return `  <url><loc>${SITE.url}/blog/${a.slug}/</loc>${lm}</url>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE.url}/blog/</loc></url>
${urls}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=600" },
  });
};

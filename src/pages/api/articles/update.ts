import type { APIRoute } from "astro";
import { query } from "@/lib/db";

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

const arr = (v: unknown) => (Array.isArray(v) ? v : []);
const str = (v: unknown) => (v == null ? "" : String(v)).trim();
const dateOrNull = (v: unknown) => {
  const s = str(v);
  return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : null;
};

export const POST: APIRoute = async ({ request }) => {
  let b: Record<string, unknown>;
  try {
    b = await request.json();
  } catch {
    return json({ ok: false, error: "JSON inválido" }, 400);
  }

  const slug = str(b.slug);
  if (!slug) return json({ ok: false, error: "slug obrigatório" }, 400);

  const title = str(b.title);
  const description = str(b.description);
  const seoTitle = str(b.seo_title) || title;
  const metaDescription = str(b.meta_description) || description;
  const coverAlt = str(b.cover_alt) || null;

  try {
    const r = await query(
      `UPDATE articles SET
         title=$2, description=$3, pilar=$4, tema_clinico=$5, resposta_direta=$6, content=$7,
         image=$8, cover_alt=$9, image_alt=$9, cover_caption=$10, cta=$11,
         seo_title=$12, meta_description=$13,
         pub_date=$14, updated_date=COALESCE($15, CURRENT_DATE), noindex=$16,
         faq=$17::jsonb, referencias=$18::jsonb, related=$19::jsonb, updated_at=now()
       WHERE slug=$1`,
      [
        slug,
        title,
        description,
        str(b.pilar) || null,
        str(b.tema_clinico) || null,
        str(b.resposta_direta) || null,
        str(b.content),
        str(b.image) || null,
        coverAlt,
        str(b.cover_caption) || null,
        str(b.cta) || null,
        seoTitle,
        metaDescription,
        dateOrNull(b.pub_date),
        dateOrNull(b.updated_date),
        Boolean(b.noindex),
        JSON.stringify(arr(b.faq)),
        JSON.stringify(arr(b.referencias)),
        JSON.stringify(arr(b.related)),
      ]
    );
    if ((r.rowCount ?? 0) === 0) return json({ ok: false, error: "Artigo não encontrado." }, 404);
    return json({ ok: true });
  } catch (e) {
    return json({ ok: false, error: (e as Error).message }, 500);
  }
};

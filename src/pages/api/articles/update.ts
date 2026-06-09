import type { APIRoute } from "astro";
import { query } from "@/lib/db";
import { getArticleBySlug } from "@/lib/articles";
import { triggerRebuild } from "@/lib/rebuild";

export const prerender = false;

const parseJsonField = (v: FormDataEntryValue | null, fallback: unknown): string => {
  const raw = String(v ?? "").trim();
  if (!raw) return JSON.stringify(fallback);
  try {
    return JSON.stringify(JSON.parse(raw));
  } catch {
    return JSON.stringify(fallback);
  }
};

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const slug = String(form.get("slug") ?? "");
  if (!slug) return redirect("/admin/");

  const title = String(form.get("title") ?? "").trim();
  const pilar = String(form.get("pilar") ?? "").trim();
  const tema = String(form.get("tema_clinico") ?? "").trim() || null;
  const resumo = String(form.get("resumo") ?? "").trim();
  const respostaDireta = String(form.get("resposta_direta") ?? "").trim() || null;
  const content = String(form.get("content") ?? "");
  const image = String(form.get("image") ?? "").trim() || null;
  const coverAlt = String(form.get("cover_alt") ?? "").trim() || null;
  const cta = String(form.get("cta") ?? "").trim() || null;
  const metaDescription = String(form.get("meta_description") ?? "").trim() || resumo;
  const seoTitle = String(form.get("seo_title") ?? "").trim() || title;
  const noindex = form.get("noindex") === "on";
  const faq = parseJsonField(form.get("faq"), []);
  const referencias = parseJsonField(form.get("referencias"), []);
  const related = parseJsonField(form.get("related"), []);

  await query(
    `UPDATE articles SET
       title=$2, pilar=$3, tema_clinico=$4, description=$5, resposta_direta=$6, content=$7,
       image=$8, cover_alt=$9, image_alt=$9, cta=$10, meta_description=$11, seo_title=$12,
       noindex=$13, faq=$14::jsonb, referencias=$15::jsonb, related=$16::jsonb,
       updated_date=CURRENT_DATE, updated_at=now()
     WHERE slug=$1`,
    [
      slug, title, pilar, tema, resumo, respostaDireta, content, image, coverAlt, cta,
      metaDescription, seoTitle, noindex, faq, referencias, related,
    ]
  );

  const art = await getArticleBySlug(slug);
  if (art && art.draft === false) await triggerRebuild();

  return redirect(`/admin/edit/${slug}/?saved=1`);
};

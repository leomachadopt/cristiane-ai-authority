import { query } from "../db";
import { SITE } from "../../config";
import { validateArticleModel, type ArticleModel } from "./validate";

export interface MetaPreview {
  title: string;
  description: string;
  canonical: string;
  robots: string;
}
export interface ImportResult {
  ok: boolean;
  errors: string[];
  warnings: string[];
  slug?: string;
  meta?: MetaPreview;
  updated?: boolean;
  conflict?: boolean;
  existingTitle?: string;
  published?: boolean;
}

export type OnConflict = "update" | "new" | undefined;

const slugify = (s: string): string =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

async function uniqueSlug(base: string): Promise<{ slug: string; collided: boolean }> {
  let slug = base;
  let n = 1;
  let collided = false;
  while (n < 50) {
    const inDb = await query(`SELECT 1 FROM articles WHERE slug = $1 LIMIT 1`, [slug]);
    if (inDb.rows.length === 0) break;
    collided = true;
    n += 1;
    slug = `${base}-${n}`;
  }
  return { slug, collided };
}

function modelValues(model: ArticleModel) {
  const metaTitle = model.seo?.meta_titulo?.trim() || model.title;
  const metaDescription = model.seo?.meta_descricao?.trim() || model.resumo;
  const tema = model.tema_clinico?.trim().toLowerCase() || null;
  return {
    title: model.title,
    description: model.resumo,
    content: model.corpo_markdown,
    pilar: model.pilar,
    tema_clinico: tema,
    pergunta_alvo: model.pergunta_alvo?.trim() || null,
    resposta_direta: model.resposta_direta?.trim() || null,
    author: model.autor || "Dra. Cristiane Martins",
    cover_alt: model.imagem_capa?.alt?.trim() || null,
    cover_caption: model.imagem_capa?.legenda?.trim() || null,
    faq: JSON.stringify(model.faq ?? []),
    referencias: JSON.stringify(model.referencias ?? []),
    related: JSON.stringify(model.related ?? []),
    cta: model.cta || null,
    mercado: model.mercado || "pt-PT",
    seo_title: metaTitle,
    meta_description: metaDescription,
    focus_keyword: tema,
    image_alt: model.imagem_capa?.alt?.trim() || null,
    pub_date: model.data_publicacao?.trim() || null,
    updated_date: model.data_atualizacao?.trim() || null,
    noindex: model.noindex ?? false,
    metaTitle,
    metaDescription,
  };
}

/**
 * Valida o JSON e:
 *  - se o slug NÃO existe → cria rascunho novo;
 *  - se EXISTE e onConflict='update' → ATUALIZA por cima (preserva slug/capa/estado);
 *  - se EXISTE e onConflict='new' → cria com sufixo (-2);
 *  - se EXISTE e sem escolha → devolve conflict:true para o admin perguntar.
 */
export async function importArticleModel(
  input: unknown,
  onConflict: OnConflict = undefined
): Promise<ImportResult> {
  const result = validateArticleModel(input);
  if (!result.valid || !result.data) {
    return { ok: false, errors: result.errors, warnings: result.warnings };
  }
  const model: ArticleModel = result.data;
  const warnings = [...result.warnings];
  const v = modelValues(model);
  const base = model.slug?.trim() ? slugify(model.slug) : slugify(model.title);

  const exist = await query<{ title: string; draft: boolean }>(
    `SELECT title, draft FROM articles WHERE slug=$1 LIMIT 1`,
    [base]
  );
  const existsInDb = exist.rows.length > 0;

  const meta = (slug: string): MetaPreview => ({
    title: v.metaTitle === SITE.name ? v.metaTitle : `${v.metaTitle} | ${SITE.shortName}`,
    description: v.metaDescription,
    canonical: `${SITE.url}/blog/${slug}/`,
    robots: model.noindex ? "noindex, follow" : "index, follow",
  });

  // --- Slug já existe ---
  if (existsInDb && onConflict !== "new") {
    if (onConflict !== "update") {
      return {
        ok: false,
        conflict: true,
        slug: base,
        existingTitle: exist.rows[0].title,
        errors: [],
        warnings: [`Já existe um artigo com o slug "${base}".`],
      };
    }
    // ATUALIZAR por cima — preserva slug, capa (image) e estado (draft); pub_date original.
    await query(
      `UPDATE articles SET
         title=$2, description=$3, content=$4, pilar=$5, tema_clinico=$6, pergunta_alvo=$7,
         resposta_direta=$8, author=$9, cover_alt=$10, cover_caption=$11, faq=$12::jsonb,
         referencias=$13::jsonb, related=$14::jsonb, cta=$15, mercado=$16, seo_title=$17,
         meta_description=$18, focus_keyword=$19, image_alt=$20,
         pub_date=COALESCE($21, pub_date), updated_date=COALESCE($22, CURRENT_DATE),
         noindex=$23, updated_at=now()
       WHERE slug=$1`,
      [
        base, v.title, v.description, v.content, v.pilar, v.tema_clinico, v.pergunta_alvo,
        v.resposta_direta, v.author, v.cover_alt, v.cover_caption, v.faq, v.referencias,
        v.related, v.cta, v.mercado, v.seo_title, v.meta_description, v.focus_keyword,
        v.image_alt, v.pub_date, v.updated_date, v.noindex,
      ]
    );
    return {
      ok: true, updated: true, slug: base, errors: [], warnings,
      published: exist.rows[0].draft === false, meta: meta(base),
    };
  }

  // --- Criar novo (slug livre ou onConflict='new') ---
  const { slug, collided } = await uniqueSlug(base);
  if (collided) warnings.push(`Slug "${base}" já existe — criado como "${slug}".`);
  await query(
    `INSERT INTO articles
      (slug, title, description, content, pilar, tema_clinico, pergunta_alvo, resposta_direta,
       author, cover_alt, cover_caption, faq, referencias, related, cta, mercado,
       seo_title, meta_description, focus_keyword, image_alt, pub_date, updated_date,
       noindex, draft, source, imported_at, updated_at)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12::jsonb,$13::jsonb,$14::jsonb,$15,$16,
       $17,$18,$19,$20,$21,$22,$23,true,'cms', now(), now())`,
    [
      slug, v.title, v.description, v.content, v.pilar, v.tema_clinico, v.pergunta_alvo,
      v.resposta_direta, v.author, v.cover_alt, v.cover_caption, v.faq, v.referencias,
      v.related, v.cta, v.mercado, v.seo_title, v.meta_description, v.focus_keyword,
      v.image_alt, v.pub_date, v.updated_date, v.noindex,
    ]
  );
  return { ok: true, slug, errors: [], warnings, meta: meta(slug) };
}

import { query, hasDb } from "./db";

export interface DbArticle {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  content: string | null;
  pub_date: string | null;
  updated_date: string | null;
  seo_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  image: string | null;
  image_alt: string | null;
  pilar: string | null;
  tema_clinico: string | null;
  pergunta_alvo: string | null;
  resposta_direta: string | null;
  author: string | null;
  cover_alt: string | null;
  cover_caption: string | null;
  faq: { pergunta: string; resposta: string }[] | null;
  referencias: { citacao: string; pmid?: string; doi?: string; url?: string; estado_verificacao: string }[] | null;
  related: string[] | null;
  cta: string | null;
  mercado: string | null;
  noindex: boolean | null;
  draft: boolean | null;
  source: string | null;
  imported_at: string | null;
  updated_at: string | null;
}

/** Artigos publicados (para o build estático). Devolve [] se não houver BD — não quebra o build. */
export async function getPublishedCmsArticles(): Promise<DbArticle[]> {
  if (!hasDb()) return [];
  try {
    const r = await query<DbArticle>(
      `SELECT * FROM articles
       WHERE draft = false
       ORDER BY COALESCE(pub_date, imported_at) DESC`
    );
    return r.rows;
  } catch (e) {
    console.warn("[articles] BD indisponível — blog gerado sem artigos:", (e as Error).message);
    return [];
  }
}

/** Todos os artigos (rascunhos + publicados) para o dashboard do admin. */
export async function getAllArticlesAdmin(): Promise<DbArticle[]> {
  if (!hasDb()) return [];
  const r = await query<DbArticle>(
    `SELECT * FROM articles ORDER BY updated_at DESC NULLS LAST, id DESC`
  );
  return r.rows;
}

export async function getArticleBySlug(slug: string): Promise<DbArticle | null> {
  if (!hasDb()) return null;
  const r = await query<DbArticle>(`SELECT * FROM articles WHERE slug = $1 LIMIT 1`, [slug]);
  return r.rows[0] ?? null;
}

/** Publica (ou despublica) um artigo. Devolve a linha atualizada. */
export async function setArticleDraft(slug: string, draft: boolean): Promise<DbArticle | null> {
  const r = await query<DbArticle>(
    `UPDATE articles
       SET draft = $2,
           pub_date = CASE WHEN $2 = false AND pub_date IS NULL THEN CURRENT_DATE ELSE pub_date END,
           updated_at = now()
     WHERE slug = $1
     RETURNING *`,
    [slug, draft]
  );
  return r.rows[0] ?? null;
}

export async function deleteArticle(slug: string): Promise<boolean> {
  const r = await query(`DELETE FROM articles WHERE slug = $1`, [slug]);
  return (r.rowCount ?? 0) > 0;
}

/** Páginas conhecidas do site (para resolver os títulos dos links `related`). */
const KNOWN_PAGES: Record<string, string> = {
  "/": "Início",
  "/sobre/": "Sobre a Dra. Cristiane Martins",
  "/metodologia/": "Metodologia Respira e Cresce 360",
  "/familias/": "Sinais a Observar",
  "/podcast/": "Podcast Família 360",
  "/contacto/": "Marcar Consulta",
  "/blog/": "Blog",
};

const humanize = (slug: string): string =>
  slug
    .replace(/^\/|\/$/g, "")
    .split("/")
    .pop()!
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());

/** Resolve um caminho `related` para { href, label }. */
export async function resolveRelated(paths: string[]): Promise<{ href: string; label: string }[]> {
  const out: { href: string; label: string }[] = [];
  for (const raw of paths ?? []) {
    const href = raw.endsWith("/") ? raw : `${raw}/`;
    if (KNOWN_PAGES[href]) {
      out.push({ href, label: KNOWN_PAGES[href] });
      continue;
    }
    // Tenta resolver como artigo de blog.
    const slug = href.replace(/^\/(blog\/)?/, "").replace(/\/$/, "");
    const art = hasDb() ? await getArticleBySlug(slug) : null;
    out.push({ href: art ? `/blog/${slug}/` : href, label: art?.title ?? humanize(href) });
  }
  return out;
}

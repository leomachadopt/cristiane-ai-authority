import type { APIRoute } from "astro";
import { importArticleModel, type OnConflict } from "@/lib/import/importArticle";

export const prerender = false;

const json = (data: unknown, status: number) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

/**
 * Importação de artigo por JSON (mesmo padrão do leomachadofisio / INOS / Kids & Family).
 * Valida contra o contrato e cria SEMPRE como rascunho. Conflito de slug → 409.
 * ?on_conflict=update  → atualiza o existente
 * ?on_conflict=new     → cria com sufixo (-2)
 */
export const POST: APIRoute = async ({ request, url }) => {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return json({ ok: false, errors: ["Corpo não é JSON válido."], warnings: [] }, 400);
  }

  const oc = url.searchParams.get("on_conflict");
  const onConflict: OnConflict = oc === "update" ? "update" : oc === "new" ? "new" : undefined;

  const result = await importArticleModel(input, onConflict);
  const status = result.ok ? 200 : result.conflict ? 409 : 400;
  return json(result, status);
};

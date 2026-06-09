import type { APIRoute } from "astro";
import { setArticleDraft } from "@/lib/articles";
import { triggerRebuild } from "@/lib/rebuild";

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

export const POST: APIRoute = async ({ request, redirect }) => {
  const ct = request.headers.get("content-type") ?? "";

  // Editor (fetch JSON): { slug, action: 'publish' | 'unpublish' } → resposta JSON.
  if (ct.includes("application/json")) {
    let b: { slug?: string; action?: string };
    try {
      b = await request.json();
    } catch {
      return json({ ok: false, error: "JSON inválido" }, 400);
    }
    const slug = String(b.slug ?? "");
    if (!slug) return json({ ok: false, error: "slug obrigatório" }, 400);
    const draft = b.action === "unpublish";
    const row = await setArticleDraft(slug, draft);
    if (!row) return json({ ok: false, error: "Artigo não encontrado." }, 404);
    const rebuilt = await triggerRebuild();
    return json({ ok: true, draft, rebuilt });
  }

  // Dashboard (form POST): { slug, draft } → redirect.
  const form = await request.formData();
  const slug = String(form.get("slug") ?? "");
  const draft = String(form.get("draft") ?? "true") === "true";
  if (!slug) return redirect("/admin/");
  await setArticleDraft(slug, draft);
  await triggerRebuild();
  return redirect("/admin/");
};

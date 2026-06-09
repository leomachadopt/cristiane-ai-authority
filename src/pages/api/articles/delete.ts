import type { APIRoute } from "astro";
import { deleteArticle, getArticleBySlug } from "@/lib/articles";
import { triggerRebuild } from "@/lib/rebuild";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const slug = String(form.get("slug") ?? "");
  if (!slug) return redirect("/admin/");

  const existing = await getArticleBySlug(slug);
  await deleteArticle(slug);
  // Se estava publicado, o site estático tem de ser reconstruído sem ele.
  if (existing && existing.draft === false) await triggerRebuild();

  return redirect("/admin/");
};

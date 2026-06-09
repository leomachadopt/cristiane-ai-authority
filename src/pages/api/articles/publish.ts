import type { APIRoute } from "astro";
import { setArticleDraft } from "@/lib/articles";
import { triggerRebuild } from "@/lib/rebuild";

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const slug = String(form.get("slug") ?? "");
  const draft = String(form.get("draft") ?? "true") === "true";
  if (!slug) return redirect("/admin/");

  await setArticleDraft(slug, draft);
  // Publicar ou despublicar muda o site estático → dispara rebuild.
  await triggerRebuild();

  return redirect("/admin/");
};

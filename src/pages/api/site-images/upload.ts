import type { APIRoute } from "astro";
import { put } from "@vercel/blob";
import { query } from "@/lib/db";
import { triggerRebuild } from "@/lib/rebuild";
import { IMAGE_SLOTS } from "@/lib/siteImages";

export const prerender = false;

const validSlot = (s: string) => IMAGE_SLOTS.some((x) => x.key === s);

/**
 * Upload de uma foto do site para o Vercel Blob e gravação do URL no slot.
 * Credenciais: nos deploys Vercel o token OIDC é injetado automaticamente
 * (novo formato — usa BLOB_STORE_ID). Suporta também o token legado
 * BLOB_READ_WRITE_TOKEN se estiver definido.
 */
export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const slot = String(form.get("slot") ?? "");
  const alt = String(form.get("alt") ?? "").trim();
  const file = form.get("file");

  if (!validSlot(slot)) return redirect("/admin/fotos/?error=slot");
  if (!(file instanceof File) || file.size === 0) return redirect("/admin/fotos/?error=ficheiro");
  if (!file.type.startsWith("image/")) return redirect("/admin/fotos/?error=tipo");
  if (file.size > 8 * 1024 * 1024) return redirect("/admin/fotos/?error=tamanho");

  try {
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
    const opts: Record<string, unknown> = {
      access: "public",
      addRandomSuffix: true, // URL único por upload → cache-busting
      contentType: file.type,
    };
    // Credenciais do Blob:
    //  - Token legado BLOB_READ_WRITE_TOKEN (se existir), OU
    //  - Novo formato OIDC: storeId (BLOB_STORE_ID) + token OIDC (auto-injetado
    //    na Vercel como VERCEL_OIDC_TOKEN; passamos explícito por robustez).
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      opts.token = process.env.BLOB_READ_WRITE_TOKEN;
    } else {
      if (process.env.BLOB_STORE_ID) opts.storeId = process.env.BLOB_STORE_ID;
      if (process.env.VERCEL_OIDC_TOKEN) opts.oidcToken = process.env.VERCEL_OIDC_TOKEN;
    }

    const blob = await put(`site/${slot}.${ext}`, file, opts as never);

    await query(
      `INSERT INTO site_images (slot, url, alt, updated_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT (slot) DO UPDATE SET url = EXCLUDED.url, alt = EXCLUDED.alt, updated_at = now()`,
      [slot, blob.url, alt || null]
    );

    await triggerRebuild();
    return redirect("/admin/fotos/?saved=1");
  } catch (e) {
    console.error("[site-images/upload]", (e as Error).message);
    return redirect("/admin/fotos/?error=upload");
  }
};

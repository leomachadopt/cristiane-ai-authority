export const prerender = false;

import type { APIRoute } from "astro";
import { put } from "@vercel/blob";
import { query } from "@/lib/db";

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

const slugify = (s: string): string =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-zA-Z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase() || "imagem";

export const POST: APIRoute = async ({ request }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "Esperado multipart/form-data." }, 400);
  }
  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return json({ ok: false, error: "Ficheiro em falta." }, 400);
  }
  if (!file.type.startsWith("image/")) {
    return json({ ok: false, error: "Só são aceites imagens." }, 400);
  }
  if (file.size > 8 * 1024 * 1024) {
    return json({ ok: false, error: "Imagem demasiado grande (máx. 8 MB)." }, 400);
  }

  const alt = String(form.get("alt") ?? "").trim() || null;
  const caption = String(form.get("caption") ?? "").trim() || null;
  const customSlug = String(form.get("slug") ?? "").trim();

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  const base = customSlug ? slugify(customSlug) : slugify(file.name);
  const pathname = `media/${base}.${ext}`;

  let blob;
  try {
    // Sem token explícito → usa OIDC nas funções Vercel; localmente usa BLOB_READ_WRITE_TOKEN.
    blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: file.type,
    });
  } catch (e) {
    return json({ ok: false, error: "Falha no upload para o Blob: " + (e as Error).message }, 500);
  }

  const r = await query<{ id: number }>(
    `INSERT INTO media (url, pathname, filename, alt, caption, mime, size)
     VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`,
    [blob.url, blob.pathname, file.name, alt, caption, file.type, file.size]
  );

  return json({ ok: true, id: r.rows[0].id, url: blob.url, pathname: blob.pathname, alt, caption });
};

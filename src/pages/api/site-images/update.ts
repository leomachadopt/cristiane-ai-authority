import type { APIRoute } from "astro";
import { query } from "@/lib/db";
import { triggerRebuild } from "@/lib/rebuild";
import { IMAGE_SLOTS } from "@/lib/siteImages";

export const prerender = false;

const validSlot = (s: string) => IMAGE_SLOTS.some((x) => x.key === s);

export const POST: APIRoute = async ({ request, redirect }) => {
  const form = await request.formData();
  const slot = String(form.get("slot") ?? "");
  const action = String(form.get("action") ?? "save");
  const url = String(form.get("url") ?? "").trim();
  const alt = String(form.get("alt") ?? "").trim();

  if (!validSlot(slot)) return redirect("/admin/fotos/?error=slot");

  if (action === "remove" || !url) {
    await query(`DELETE FROM site_images WHERE slot = $1`, [slot]);
  } else {
    await query(
      `INSERT INTO site_images (slot, url, alt, updated_at)
       VALUES ($1, $2, $3, now())
       ON CONFLICT (slot) DO UPDATE SET url = EXCLUDED.url, alt = EXCLUDED.alt, updated_at = now()`,
      [slot, url, alt || null]
    );
  }

  // As páginas são estáticas → dispara rebuild para a nova imagem ficar online.
  await triggerRebuild();
  return redirect("/admin/fotos/?saved=1");
};

export const prerender = false;

import type { APIRoute } from "astro";
import { del } from "@vercel/blob";
import { query } from "@/lib/db";

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

export const POST: APIRoute = async ({ request }) => {
  let b: { id?: number };
  try {
    b = await request.json();
  } catch {
    return json({ ok: false, error: "JSON inválido" }, 400);
  }
  const id = Number(b.id);
  if (!id) return json({ ok: false, error: "id obrigatório" }, 400);

  const r = await query<{ url: string }>(`SELECT url FROM media WHERE id=$1`, [id]);
  const url = r.rows[0]?.url;
  if (url) {
    try {
      await del(url);
    } catch {
      /* se já não existir no Blob, segue para apagar a linha */
    }
  }
  await query(`DELETE FROM media WHERE id=$1`, [id]);
  return json({ ok: true });
};

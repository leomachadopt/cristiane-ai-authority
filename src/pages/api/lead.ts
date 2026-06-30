import type { APIRoute } from "astro";
import { query, hasDb } from "@/lib/db";

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });

/** Recebe o lead do checklist gratuito (/familias): nome, email e respostas assinaladas. */
export const POST: APIRoute = async ({ request }) => {
  let b: { nome?: string; email?: string; respostas?: unknown };
  try {
    b = await request.json();
  } catch {
    return json({ ok: false, error: "JSON inválido" }, 400);
  }

  const email = String(b.email ?? "").trim();
  const nome = String(b.nome ?? "").trim();
  const respostas = Array.isArray(b.respostas) ? b.respostas.map(String) : [];

  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ ok: false, error: "Email inválido." }, 400);
  }

  if (hasDb()) {
    try {
      await query(
        `INSERT INTO leads (nome, email, respostas, origem) VALUES ($1, $2, $3::jsonb, $4)`,
        [nome || null, email, JSON.stringify(respostas), "checklist-familias"]
      );
    } catch (e) {
      return json({ ok: false, error: (e as Error).message }, 500);
    }
  }

  // Nota: o envio do email (com o guia + as respostas) liga-se aqui quando houver
  // serviço de email configurado (ex.: Resend). Por agora o lead fica guardado no Neon.
  return json({ ok: true });
};

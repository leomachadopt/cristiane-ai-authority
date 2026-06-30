import type { APIRoute } from "astro";
import { getLeads } from "@/lib/leads";

export const prerender = false;

const csvCell = (v: unknown): string => {
  const s = v == null ? "" : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export const GET: APIRoute = async () => {
  const leads = await getLeads();
  const header = ["Data", "Nome", "Email", "Sinais assinalados", "Origem"];
  const rows = leads.map((l) => [
    new Date(l.created_at).toISOString(),
    l.nome ?? "",
    l.email,
    (l.respostas ?? []).join(" | "),
    l.origem ?? "",
  ]);

  // BOM para o Excel abrir UTF-8 corretamente (acentos).
  const csv = "﻿" + [header, ...rows].map((r) => r.map(csvCell).join(",")).join("\r\n");

  return new Response(csv, {
    status: 200,
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="leads-cristiane.csv"`,
    },
  });
};

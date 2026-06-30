import { query, hasDb } from "./db";

export interface Lead {
  id: number;
  nome: string | null;
  email: string;
  respostas: string[] | null;
  origem: string | null;
  created_at: string;
}

export async function getLeads(): Promise<Lead[]> {
  if (!hasDb()) return [];
  try {
    const r = await query<Lead>(`SELECT * FROM leads ORDER BY created_at DESC`);
    return r.rows;
  } catch {
    return [];
  }
}

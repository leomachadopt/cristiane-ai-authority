import { query, hasDb } from "./db";

export interface ImageSlot {
  key: string;
  label: string;
  area: string;
  description: string;
  aspect: string; // ex.: "4/5", "3/4" — proporção recomendada
}

/**
 * Registo das imagens substituíveis do site (placeholders).
 * Para acrescentar um slot novo: adiciona aqui + lê `images[key]` na página/componente.
 */
export const IMAGE_SLOTS: ImageSlot[] = [
  {
    key: "hero",
    label: "Hero — página inicial",
    area: "Início",
    description: "Foto profissional da Dra. Cristiane no topo da página inicial (clínica ou podcast).",
    aspect: "4/5",
  },
  {
    key: "sobre_home",
    label: "Quem sou — página inicial",
    area: "Início",
    description: "Retrato no bloco 'Quem sou' da página inicial.",
    aspect: "3/4",
  },
  {
    key: "sobre",
    label: "Bio — página Sobre",
    area: "Sobre",
    description: "Retrato profissional na página Sobre.",
    aspect: "3/4",
  },
];

export interface SiteImage {
  url: string;
  alt: string;
}
export type SiteImages = Record<string, SiteImage>;

/** Lê todas as imagens do site definidas no admin. Vazio se não houver BD. */
export async function getSiteImages(): Promise<SiteImages> {
  if (!hasDb()) return {};
  try {
    const r = await query<{ slot: string; url: string; alt: string | null }>(
      `SELECT slot, url, alt FROM site_images`
    );
    const out: SiteImages = {};
    for (const row of r.rows) {
      if (row.url) out[row.slot] = { url: row.url, alt: row.alt ?? "" };
    }
    return out;
  } catch {
    return {};
  }
}

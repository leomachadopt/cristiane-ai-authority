import { query, hasDb } from "./db";

export interface MediaItem {
  id: number;
  url: string;
  pathname: string;
  filename: string | null;
  alt: string | null;
  caption: string | null;
  title: string | null;
  mime: string | null;
  size: number | null;
  created_at: string;
}

export async function getAllMedia(): Promise<MediaItem[]> {
  if (!hasDb()) return [];
  try {
    const r = await query<MediaItem>(`SELECT * FROM media ORDER BY created_at DESC`);
    return r.rows;
  } catch {
    return [];
  }
}

export async function recordMedia(item: {
  url: string;
  pathname: string;
  filename?: string;
  mime?: string;
  size?: number;
  alt?: string;
}): Promise<MediaItem> {
  const r = await query<MediaItem>(
    `INSERT INTO media (url, pathname, filename, mime, size, alt)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [item.url, item.pathname, item.filename ?? null, item.mime ?? null, item.size ?? null, item.alt ?? null]
  );
  return r.rows[0];
}

export async function updateMediaMeta(
  id: number,
  fields: { alt?: string; caption?: string; title?: string }
): Promise<void> {
  await query(`UPDATE media SET alt=$2, caption=$3, title=$4 WHERE id=$1`, [
    id,
    fields.alt ?? null,
    fields.caption ?? null,
    fields.title ?? null,
  ]);
}

export async function deleteMediaRecord(id: number): Promise<string | null> {
  const r = await query<{ url: string }>(`DELETE FROM media WHERE id=$1 RETURNING url`, [id]);
  return r.rows[0]?.url ?? null;
}

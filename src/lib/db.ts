import pg from "pg";

const { Pool } = pg;
let pool: pg.Pool | null = null;

const connectionString = () =>
  import.meta.env.DATABASE_URL ?? process.env.DATABASE_URL ?? "";

/** True se há DATABASE_URL configurado (Neon). Usado para falhar com graça no build. */
export function hasDb(): boolean {
  return Boolean(connectionString());
}

/** Pool partilhado para o Neon. Lê a connection string de DATABASE_URL. */
export function getPool(): pg.Pool {
  if (!pool) {
    const cs = connectionString();
    if (!cs) {
      throw new Error("DATABASE_URL não está definido (ver .env / variáveis da Vercel).");
    }
    pool = new Pool({ connectionString: cs, ssl: { rejectUnauthorized: false }, max: 3 });
  }
  return pool;
}

export async function query<T extends pg.QueryResultRow = pg.QueryResultRow>(
  text: string,
  params?: unknown[]
): Promise<pg.QueryResult<T>> {
  return getPool().query<T>(text, params as never[]);
}

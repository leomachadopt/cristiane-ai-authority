// Corre o scripts/schema.sql contra o Neon. Uso: DATABASE_URL=... node scripts/migrate.mjs
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sql = readFileSync(join(__dirname, "schema.sql"), "utf8");

const cs = process.env.DATABASE_URL;
if (!cs) {
  console.error("DATABASE_URL em falta.");
  process.exit(1);
}

const client = new pg.Client({ connectionString: cs, ssl: { rejectUnauthorized: false } });
await client.connect();
await client.query(sql);
const { rows } = await client.query(
  `select table_name from information_schema.tables where table_schema='public' order by table_name`
);
console.log("Tabelas criadas:", rows.map((r) => r.table_name).join(", "));
const cols = await client.query(
  `select column_name from information_schema.columns where table_name='articles' order by ordinal_position`
);
console.log("Colunas de 'articles':", cols.rows.length);
await client.end();
console.log("OK — esquema aplicado.");

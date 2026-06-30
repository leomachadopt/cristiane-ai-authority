-- Esquema da base de dados (Neon Postgres) — Dra. Cristiane Martins · RC360
-- Correr uma vez no Neon (SQL Editor) para criar as tabelas do CMS.

create table if not exists articles (
  id              bigserial primary key,
  slug            text unique not null,
  title           text not null,
  description     text,
  content         text,                       -- corpo_markdown
  pilar           text,
  tema_clinico    text,
  pergunta_alvo   text,
  resposta_direta text,                        -- bloco GEO
  author          text default 'Dra. Cristiane Martins',
  cover_alt       text,
  cover_caption   text,
  image           text,                        -- URL da capa (Vercel Blob)
  image_alt       text,
  faq             jsonb default '[]'::jsonb,
  referencias     jsonb default '[]'::jsonb,
  related         jsonb default '[]'::jsonb,
  cta             text,
  mercado         text default 'pt-PT',
  seo_title       text,
  meta_description text,
  focus_keyword   text,
  pub_date        date,
  updated_date    date,
  noindex         boolean default false,
  draft           boolean default true,        -- importa SEMPRE como rascunho
  source          text default 'cms',
  imported_at     timestamptz default now(),
  updated_at      timestamptz default now()
);

create index if not exists articles_draft_idx on articles (draft);
create index if not exists articles_pilar_idx on articles (pilar);

create table if not exists media (
  id          bigserial primary key,
  url         text not null,                   -- URL público (Vercel Blob)
  pathname    text not null,
  filename    text,
  alt         text,
  caption     text,
  title       text,
  mime        text,
  size        bigint,
  created_at  timestamptz default now()
);

create index if not exists media_created_idx on media (created_at desc);

-- Leads do checklist gratuito (/familias). Guarda nome, email e as respostas marcadas.
create table if not exists leads (
  id          bigserial primary key,
  nome        text,
  email       text not null,
  respostas   jsonb default '[]'::jsonb,   -- perguntas do checklist assinaladas
  origem      text default 'checklist-familias',
  created_at  timestamptz default now()
);

create index if not exists leads_created_idx on leads (created_at desc);

-- Imagens substituíveis do site (geridas em /admin/fotos). Uma linha por slot.
create table if not exists site_images (
  slot        text primary key,
  url         text not null,
  alt         text,
  updated_at  timestamptz default now()
);

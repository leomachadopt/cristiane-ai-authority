/**
 * Configuração central do site — Dra. Cristiane Martins · Metodologia RC360
 * Usada pelas páginas Astro (SEO, navegação, schema). Os componentes React
 * continuam a importar os contactos de `@/lib/site`.
 */
import {
  WHATSAPP_LINK,
  PHONE_DISPLAY,
  PHONE_LINK,
  LOCATION,
  SCHEDULE,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "./lib/site";

export const SITE = {
  url: "https://www.cristianemartins.pt",
  name: "Dra. Cristiane Martins",
  shortName: "Cristiane Martins · RC360",
  lang: "pt",
  locale: "pt_PT",
  title: "Dra. Cristiane Martins | Odontopediatria Integrativa · Metodologia RC360",
  description:
    "Dra. Cristiane Martins — Odontopediatria Integrativa, Ortopedia Funcional dos Maxilares e Metodologia Respira e Cresce 360. Perceba o que está a acontecer com o desenvolvimento do seu filho.",
  ogImage:
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d5e67181-ae26-4ca6-9e39-97af5fb6563a/id-preview-2a4141ed--eb72b994-53ca-4c0a-803d-871c94fe2ce4.lovable.app-1772449719203.png",
} as const;

/** Navegação principal (header + footer). */
export const NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre/", label: "Sobre" },
  { href: "/familias/", label: "Sinais a Observar" },
  { href: "/metodologia/", label: "Metodologia" },
  { href: "/blog/", label: "Blog" },
  { href: "/podcast/", label: "Podcast" },
  { href: "/contacto/", label: "Contacto" },
] as const;

/** Dados de negócio para schema LocalBusiness / contactos. */
export const BUSINESS = {
  name: "Dra. Cristiane Martins — Odontopediatria Integrativa",
  whatsapp: WHATSAPP_LINK,
  phoneDisplay: PHONE_DISPLAY,
  phoneLink: PHONE_LINK,
  location: LOCATION,
  schedule: SCHEDULE,
  instagram: INSTAGRAM_URL,
  instagramHandle: INSTAGRAM_HANDLE,
} as const;

/** Measurement ID do Google Analytics 4 (gtag.js — rastreio de visitas). Público. */
export const GA_ID = import.meta.env.PUBLIC_GA_ID ?? "G-SSFYWMC11M";

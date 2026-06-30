import { defineMiddleware } from "astro:middleware";

/** Protege /admin e /api (exceto /api/login e /api/logout) com uma password (cookie de sessão). */
export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;

  // Páginas/endpoints públicos de autenticação.
  if (path === "/login" || path === "/login/") return next();
  if (path.startsWith("/api/login") || path.startsWith("/api/logout")) return next();
  // Submissão pública do checklist gratuito (/familias) — apenas o endpoint exato.
  // (NÃO usar startsWith: /api/leads/export é admin e tem de continuar protegido.)
  if (path === "/api/lead" || path === "/api/lead/") return next();

  const isAdmin = path.startsWith("/admin");
  const isApi = path.startsWith("/api/");
  if (!isAdmin && !isApi) return next();

  const pass = import.meta.env.ADMIN_PASSWORD ?? process.env.ADMIN_PASSWORD;
  const session = context.cookies.get("admin_session")?.value;
  if (pass && session && session === pass) return next();

  if (isApi) {
    return new Response(
      JSON.stringify({ ok: false, errors: ["Não autorizado — inicie sessão em /login."], warnings: [] }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
  return context.redirect("/login/");
});

import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const password = String(form.get("password") ?? "");
  const pass = import.meta.env.ADMIN_PASSWORD ?? process.env.ADMIN_PASSWORD;

  if (pass && password === pass) {
    cookies.set("admin_session", pass, {
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });
    return redirect("/admin/");
  }
  return redirect("/login/?error=1");
};

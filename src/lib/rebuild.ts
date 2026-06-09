/** Dispara um rebuild estático na Vercel via Deploy Hook. Devolve true se disparou. */
export async function triggerRebuild(): Promise<boolean> {
  const hook = import.meta.env.VERCEL_DEPLOY_HOOK ?? process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) return false;
  try {
    await fetch(hook, { method: "POST" });
    return true;
  } catch {
    return false;
  }
}

import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { OAuth2Client } from "google-auth-library";

/**
 * Leitura do Google Analytics 4 (Data API) para o painel /admin/analytics.
 * Auth (qualquer um): conta de serviço (GA_SERVICE_ACCOUNT, JSON cru ou base64)
 * OU OAuth (GA_OAUTH_CLIENT_ID/SECRET/REFRESH_TOKEN). Sempre: GA_PROPERTY_ID (numérico).
 */
const env = (k: string) => import.meta.env[k] ?? process.env[k];
const PROPERTY_ID = env("GA_PROPERTY_ID") || "";

type SA = { client_email: string; private_key: string; project_id?: string };

function parseServiceAccount(): SA | null {
  const raw = env("GA_SERVICE_ACCOUNT");
  if (!raw) return null;
  try {
    const jsonStr = raw.trim().startsWith("{") ? raw : Buffer.from(raw, "base64").toString("utf8");
    const sa = JSON.parse(jsonStr) as SA;
    if (!sa.client_email || !sa.private_key) return null;
    sa.private_key = sa.private_key.replace(/\\n/g, "\n");
    return sa;
  } catch {
    return null;
  }
}

function buildOAuth(): OAuth2Client | null {
  const id = env("GA_OAUTH_CLIENT_ID");
  const secret = env("GA_OAUTH_CLIENT_SECRET");
  const refresh = env("GA_OAUTH_REFRESH_TOKEN");
  if (!id || !secret || !refresh) return null;
  const o = new OAuth2Client({ clientId: id, clientSecret: secret });
  o.setCredentials({ refresh_token: refresh });
  return o;
}

export function isGaConfigured(): boolean {
  return Boolean(PROPERTY_ID && (buildOAuth() || parseServiceAccount()));
}

let client: BetaAnalyticsDataClient | null = null;
function getClient(): BetaAnalyticsDataClient | null {
  if (client) return client;
  const oauth = buildOAuth();
  if (oauth) return (client = new BetaAnalyticsDataClient({ authClient: oauth as never }));
  const sa = parseServiceAccount();
  if (!sa) return null;
  return (client = new BetaAnalyticsDataClient({
    credentials: { client_email: sa.client_email, private_key: sa.private_key },
    projectId: sa.project_id,
  }));
}

export interface GaDashboard {
  configured: boolean;
  error?: string;
  days: number;
  summary?: { users: number; sessions: number; pageViews: number; avgDuration: number };
  trend?: { date: string; users: number }[];
  topPages?: { path: string; views: number }[];
  topEvents?: { name: string; count: number }[];
  sources?: { source: string; users: number }[];
}

const n = (v: unknown) => Number(v ?? 0);

export async function getDashboard(days = 28): Promise<GaDashboard> {
  if (!isGaConfigured()) return { configured: false, days };
  const c = getClient();
  if (!c) return { configured: false, days };
  const property = `properties/${PROPERTY_ID}`;
  const range = [{ startDate: `${days}daysAgo`, endDate: "today" }];
  try {
    const [summaryR, trendR, pagesR, eventsR, sourcesR] = await Promise.all([
      c.runReport({ property, dateRanges: range, metrics: [{ name: "activeUsers" }, { name: "sessions" }, { name: "screenPageViews" }, { name: "averageSessionDuration" }] }),
      c.runReport({ property, dateRanges: range, dimensions: [{ name: "date" }], metrics: [{ name: "activeUsers" }], orderBys: [{ dimension: { dimensionName: "date" } }] }),
      c.runReport({ property, dateRanges: range, dimensions: [{ name: "pagePath" }], metrics: [{ name: "screenPageViews" }], orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }], limit: 10 }),
      c.runReport({ property, dateRanges: range, dimensions: [{ name: "eventName" }], metrics: [{ name: "eventCount" }], orderBys: [{ metric: { metricName: "eventCount" }, desc: true }], limit: 12 }),
      c.runReport({ property, dateRanges: range, dimensions: [{ name: "sessionDefaultChannelGroup" }], metrics: [{ name: "activeUsers" }], orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }], limit: 8 }),
    ]);
    const s = summaryR[0].rows?.[0]?.metricValues ?? [];
    return {
      configured: true,
      days,
      summary: { users: n(s[0]?.value), sessions: n(s[1]?.value), pageViews: n(s[2]?.value), avgDuration: n(s[3]?.value) },
      trend: (trendR[0].rows ?? []).map((r) => ({ date: r.dimensionValues?.[0]?.value ?? "", users: n(r.metricValues?.[0]?.value) })),
      topPages: (pagesR[0].rows ?? []).map((r) => ({ path: r.dimensionValues?.[0]?.value ?? "", views: n(r.metricValues?.[0]?.value) })),
      topEvents: (eventsR[0].rows ?? []).map((r) => ({ name: r.dimensionValues?.[0]?.value ?? "", count: n(r.metricValues?.[0]?.value) })),
      sources: (sourcesR[0].rows ?? []).map((r) => ({ source: r.dimensionValues?.[0]?.value ?? "", users: n(r.metricValues?.[0]?.value) })),
    };
  } catch (e) {
    return { configured: true, days, error: (e as Error).message };
  }
}

const FALLBACK_SITE = "http://localhost:3000";

export const SITE_NAME = "murid.ru";

export const SITE_DESCRIPTION =
  "Статьи и справочные материалы в формате Markdown.";

/** Базовый URL продакшена; для корректных canonical и OG задайте NEXT_PUBLIC_SITE_URL. */
export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_SITE;
  const withProtocol = raw.startsWith("http") ? raw : `https://${raw}`;
  return new URL(withProtocol.replace(/\/$/, ""));
}

/** Абсолютный URL пути на сайте (например `/articles/foo`). */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, base).toString();
}

/** Дата для sitemap / lastModified из строки frontmatter. */
export function parseArticleDate(date?: string): Date {
  if (!date) {
    return new Date();
  }
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? new Date() : parsed;
}

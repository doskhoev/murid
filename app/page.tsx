import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { getAllArticleSummaries } from "@/lib/articles";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Главная",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `${SITE_NAME} — справочник`,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const articles = getAllArticleSummaries();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Справочник
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Статьи в формате Markdown из репозитория{" "}
          <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
            content/articles
          </code>
          .
        </p>

        {articles.length === 0 ? (
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Пока нет ни одной статьи. Добавьте файлы{" "}
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              *.md
            </code>{" "}
            в каталог{" "}
            <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              content/articles/
            </code>{" "}
            с frontmatter (title, date, description).
          </p>
        ) : (
          <ul className="mt-10 flex flex-col gap-3 sm:gap-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-accent/30"
                >
                  <span className="font-medium group-hover:underline">
                    {article.title}
                  </span>
                  {article.date ? (
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {article.date}
                    </span>
                  ) : null}
                  {article.description ? (
                    <span className="mt-2 block text-sm text-muted-foreground">
                      {article.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 text-sm text-muted-foreground">
          <Link
            href="/settings"
            className="text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Настройки оформления
          </Link>
        </p>
      </main>
    </div>
  );
}

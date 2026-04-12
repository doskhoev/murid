import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { getAllArticleSummaries } from "@/lib/articles";

export default function ArticlesPage() {
  const articles = getAllArticleSummaries();

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Статьи
        </h1>

        {articles.length === 0 ? (
          <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Пока нет ни одной статьи. Добавьте файлы{" "}
            <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              *.md
            </code>{" "}
            в каталог{" "}
            <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              content/articles/
            </code>{" "}
            с frontmatter (title, date, description).
          </p>
        ) : (
          <ul className="mt-8 flex flex-col gap-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="group block rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                >
                  <span className="font-medium text-zinc-900 group-hover:underline dark:text-zinc-50">
                    {article.title}
                  </span>
                  {article.date ? (
                    <span className="mt-1 block text-sm text-zinc-500">
                      {article.date}
                    </span>
                  ) : null}
                  {article.description ? (
                    <span className="mt-2 block text-sm text-zinc-600 dark:text-zinc-400">
                      {article.description}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-10 text-sm text-zinc-500">
          <Link href="/" className="underline underline-offset-4">
            На главную
          </Link>
        </p>
      </main>
    </div>
  );
}

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Справочник
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Здесь будет публичная часть сайта: статьи в формате Markdown из репозитория{" "}
          <code className="rounded bg-zinc-200/80 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
            content/articles
          </code>
          . Сейчас контента нет — это первая заготовка.
        </p>
        <p className="mt-6">
          <Link
            href="/articles"
            className="text-sm font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
          >
            Перейти к списку статей
          </Link>
        </p>
      </main>
    </div>
  );
}

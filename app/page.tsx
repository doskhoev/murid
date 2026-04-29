import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-12">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Справочник
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Здесь будет публичная часть сайта: статьи в формате Markdown из репозитория{" "}
          <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
            content/articles
          </code>
          . Сейчас контента нет — это первая заготовка.
        </p>
        <p className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/articles"
            className="text-sm font-medium text-primary underline underline-offset-4 hover:opacity-90"
          >
            Перейти к списку статей
          </Link>
          <Link
            href="/settings"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
          >
            Настройки оформления
          </Link>
        </p>
      </main>
    </div>
  );
}

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-12 sm:px-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          Страница не найдена
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Такой страницы нет или статья ещё не добавлена.
        </p>
        <p className="mt-8 text-sm">
          <Link
            href="/"
            className="font-medium text-zinc-900 underline underline-offset-4 dark:text-zinc-100"
          >
            На главную
          </Link>
        </p>
      </main>
    </div>
  );
}

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-10 sm:px-6 sm:py-12">
        <h1 className="text-2xl font-semibold text-foreground">
          Страница не найдена
        </h1>
        <p className="mt-4 text-muted-foreground">
          Такой страницы нет или статья ещё не добавлена.
        </p>
        <p className="mt-8 text-sm">
          <Link
            href="/"
            className="font-medium text-primary underline underline-offset-4 hover:opacity-90"
          >
            На главную
          </Link>
        </p>
      </main>
    </div>
  );
}

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          murid.ru
        </Link>
        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-zinc-100">
            Главная
          </Link>
          <Link
            href="/articles"
            className="hover:text-zinc-900 dark:hover:text-zinc-100"
          >
            Статьи
          </Link>
        </nav>
      </div>
    </header>
  );
}

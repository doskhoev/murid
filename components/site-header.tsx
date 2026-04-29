import Link from "next/link";
import { Settings } from "lucide-react";
import { MobileMenu } from "@/components/mobile-menu";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <MobileMenu />
          <Link
            href="/"
            className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2 sm:gap-3"
          >
            <SiteLogo />
            <span className="sr-only">murid.ru</span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <Link
            href="/"
            className="transition-colors hover:text-foreground"
          >
            Главная
          </Link>
          <Link
            href="/articles"
            className="transition-colors hover:text-foreground"
          >
            Статьи
          </Link>
          <Link
            href="/settings"
            className="inline-flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Настройки"
          >
            <Settings className="h-5 w-5 shrink-0" aria-hidden />
          </Link>
        </nav>
      </div>
    </header>
  );
}

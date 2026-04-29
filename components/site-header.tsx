import Link from "next/link";
import { Settings } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/"
          className="flex min-w-0 max-w-[min(100%,18rem)] items-center gap-2 sm:gap-3"
        >
          <SiteLogo />
          <span className="sr-only">murid.ru</span>
        </Link>
        <Link
          href="/settings"
          className="inline-flex shrink-0 items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          aria-label="Настройки"
        >
          <Settings className="h-5 w-5" aria-hidden />
        </Link>
      </div>
    </header>
  );
}

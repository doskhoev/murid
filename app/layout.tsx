import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  icons: {
    icon: [{ url: "/icon", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('murid-theme') || 'dark';
                const accent = localStorage.getItem('murid-accent') || 'green';
                const root = document.documentElement;
                document.cookie = 'murid-theme=' + theme + '; path=/; max-age=31536000';
                document.cookie = 'murid-accent=' + accent + '; path=/; max-age=31536000';
                root.setAttribute('data-accent', accent);
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.cookie = 'murid-theme-resolved=' + systemTheme + '; path=/; max-age=31536000';
                  if (systemTheme === 'dark') {
                    root.classList.add('dark');
                  }
                } else if (theme === 'dark') {
                  document.cookie = 'murid-theme-resolved=dark; path=/; max-age=31536000';
                  root.classList.add('dark');
                } else {
                  document.cookie = 'murid-theme-resolved=light; path=/; max-age=31536000';
                }
                var t = Date.now();
                var link = document.querySelector('link[rel="icon"]');
                if (link) {
                  link.setAttribute('href', '/icon?t=' + t);
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-dvh antialiased`}
      >
        <Providers>
          <div className="min-h-dvh bg-background text-foreground">{children}</div>
        </Providers>
      </body>
    </html>
  );
}

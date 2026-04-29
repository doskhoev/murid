import type { Metadata } from "next";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Настройки",
  description:
    "Тема оформления и цвет акцента интерфейса (сохраняются в браузере).",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Настройки",
    description: SITE_DESCRIPTION,
    url: "/settings",
  },
  alternates: {
    canonical: "/settings",
  },
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

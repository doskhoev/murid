"use client";

import { useTheme, type AccentColor } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Moon, Monitor, Palette, Sun } from "lucide-react";

const accentColors = [
  { id: "default", name: "По умолчанию", color: "oklch(0.5 0 0)" },
  { id: "red", name: "Красный", color: "oklch(0.55 0.2 20)" },
  { id: "orange", name: "Оранжевый", color: "oklch(0.6 0.2 50)" },
  { id: "yellow", name: "Желтый", color: "oklch(0.9 0.2 100)" },
  { id: "green", name: "Зеленый", color: "oklch(0.5 0.2 150)" },
  { id: "lightBlue", name: "Голубой", color: "oklch(0.6 0.2 220)" },
  { id: "blue", name: "Синий", color: "oklch(0.5 0.2 250)" },
  { id: "purple", name: "Фиолетовый", color: "oklch(0.5 0.2 300)" },
  { id: "pink", name: "Розовый", color: "oklch(0.6 0.2 340)" },
] as const;

export default function SettingsPage() {
  const { theme, accentColor, updateTheme, updateAccentColor } = useTheme();

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <div className="space-y-6">
          <header className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Настройки</h1>
            <p className="text-sm text-muted-foreground">
              Тема оформления и цвет акцента сохраняются в этом браузере.
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sun className="h-5 w-5" aria-hidden />
                Тема
              </CardTitle>
              <CardDescription>Выберите тему оформления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <Button
                  variant={theme === "light" ? "default" : "outline"}
                  onClick={() => updateTheme("light")}
                  className="flex-1 min-w-[8rem]"
                >
                  <Sun className="h-4 w-4 sm:mr-2" />
                  Светлая
                </Button>
                <Button
                  variant={theme === "dark" ? "default" : "outline"}
                  onClick={() => updateTheme("dark")}
                  className="flex-1 min-w-[8rem]"
                >
                  <Moon className="h-4 w-4 sm:mr-2" />
                  Тёмная
                </Button>
                <Button
                  variant={theme === "system" ? "default" : "outline"}
                  onClick={() => updateTheme("system")}
                  className="flex-1 min-w-[8rem]"
                >
                  <Monitor className="h-4 w-4 sm:mr-2" />
                  Системная
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" aria-hidden />
                Цвет акцента
              </CardTitle>
              <CardDescription>
                Ссылки, кнопки и акцентные элементы
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {accentColors.map((accent) => (
                  <button
                    key={accent.id}
                    type="button"
                    onClick={() => updateAccentColor(accent.id as AccentColor)}
                    className={`relative h-14 w-14 shrink-0 rounded-full border-2 transition-all sm:h-16 sm:w-16 ${
                      accentColor === accent.id
                        ? "border-foreground scale-110"
                        : "border-border hover:border-foreground/50"
                    } ${accent.id === "default" ? "bg-black dark:bg-white" : ""}`}
                    style={
                      accent.id !== "default"
                        ? { backgroundColor: accent.color }
                        : undefined
                    }
                    title={accent.name}
                  >
                    {accentColor === accent.id ? (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span
                          className={`h-4 w-4 rounded-full ${
                            accent.id === "default"
                              ? "bg-background"
                              : "bg-foreground"
                          }`}
                        />
                      </span>
                    ) : null}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                {accentColors.find((a) => a.id === accentColor)?.name}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

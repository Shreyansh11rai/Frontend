"use client";

import { useTheme } from "next-themes";
import { themeTokenSamples } from "@/data/theme-review";
import { isThemeName, themeNames, type ThemeName } from "@/lib/theme";

export function ThemeReviewView() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = isThemeName(resolvedTheme) ? resolvedTheme : "light";

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">Design system</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">Theme review</h1>
        <p className="mt-5 text-lg leading-8 text-muted">Choose a theme and inspect the semantic color tokens used across the interface.</p>
      </div>

      <section className="mt-10 rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_50px_-30px_rgb(var(--theme-shadow))] sm:p-8" aria-labelledby="theme-selector-title">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="theme-selector-title" className="text-lg font-semibold text-foreground">Appearance</h2>
            <p className="mt-1 text-sm text-muted">Your selection is saved on this device.</p>
          </div>
          <div className="inline-flex rounded-lg bg-surface-muted p-1" role="group" aria-label="Select color theme">
            {themeNames.map((theme) => <ThemeSelectionButton key={theme} theme={theme} currentTheme={currentTheme} onSelect={setTheme} />)}
          </div>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="tokens-title">
        <h2 id="tokens-title" className="text-xl font-semibold text-foreground">Semantic tokens</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {themeTokenSamples.map((sample) => (
            <article key={sample.label} className="overflow-hidden rounded-xl border border-border bg-surface">
              <div className={`h-24 ${sample.utilityClass}`} />
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">{sample.label}</p>
                <p className="mt-1 text-sm text-muted">{sample.utilityClass.replace("bg-", "--color-")}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

interface ThemeSelectionButtonProps {
  currentTheme: ThemeName;
  onSelect: (theme: string) => void;
  theme: ThemeName;
}

function ThemeSelectionButton({ currentTheme, onSelect, theme }: ThemeSelectionButtonProps) {
  const isSelected = currentTheme === theme;

  return <button type="button" onClick={() => onSelect(theme)} aria-pressed={isSelected} className={`rounded-md px-4 py-2 text-sm font-semibold capitalize transition-colors ${isSelected ? "bg-surface text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}>{theme}</button>;
}

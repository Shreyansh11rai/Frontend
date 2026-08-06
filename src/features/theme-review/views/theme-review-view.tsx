"use client";

import { useTheme } from "next-themes";
import { themeTokenSamples } from "@/data/theme-review";
import { isThemeName, themeNames, type ThemeName } from "@/lib/theme";

export function ThemeReviewView() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = isThemeName(resolvedTheme) ? resolvedTheme : "light";
  let glassTokens: string[] = ["ui-surface", "ui-modal", "ui-card"];

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          Design system
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Theme review
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          Choose a theme and inspect the semantic colour tokens used across the
          interface.
        </p>
      </div>

      <section
        className="mt-10 rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_50px_-30px_rgb(var(--theme-shadow))] sm:p-8"
        aria-labelledby="theme-selector-title"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2
              id="theme-selector-title"
              className="text-lg font-semibold text-foreground"
            >
              Appearance
            </h2>
            <p className="mt-1 text-sm text-muted">
              Your selection is saved on this device.
            </p>
          </div>
          <div
            className="inline-flex rounded-lg bg-surface-muted p-1"
            role="group"
            aria-label="Select color theme"
          >
            {themeNames.map((theme) => (
              <ThemeSelectionButton
                key={theme}
                theme={theme}
                currentTheme={currentTheme}
                onSelect={setTheme}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8" aria-labelledby="tokens-title">
        <div className="flex items-center justify-between gap-4">
          <h2
            id="tokens-title"
            className="text-xl font-semibold text-foreground"
          >
            Semantic tokens
          </h2>
          <p className="text-sm text-muted">
            {themeTokenSamples.length} Variable classes available for review
          </p>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {themeTokenSamples.map((sample) => (
            <article
              key={sample.label}
              className={`overflow-hidden rounded-xl border border-border ${sample.utilityClass.startsWith("text-") && "bg-surface px-3 py-5"}`}
            >
              <div
                className={`flex h-24 items-center justify-center border-b border-border ${sample.utilityClass.startsWith("text-") ? "bg-surface px-3 py-5" : sample.utilityClass}`}
              >
                {sample.utilityClass.startsWith("text-") && (
                  <div className="flex flex-col gap-1">
                    <span
                      className={`${sample.utilityClass} text-3xl font-extrabold `}
                    >
                      {sample.label}
                    </span>
                    <span className={`${sample.utilityClass} text lowercase`}>
                      This is sample text to visualize the text
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold text-foreground">
                  {sample.label}
                </p>
                <p className="mt-1 text-xs font-medium tracking-[0.12em] text-subtle uppercase">
                  {sample.cssVariable}
                </p>
                <p className="mt-2 text-sm text-muted">{sample.utilityClass}</p>
              </div>
            </article>
          ))}
          {glassTokens.map((t) => (
            <div>
              <div className="relative w-50 bg-surface p-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis dolorem, doloremque fuga voluptate incidunt eum! Vel
                veritatis modi dolore dolores.
                <div
                  className={`h-full w-full z-10 absolute top-0 left-0 ${t}`}
                ></div>
              </div>
              <h1>{t}</h1>
              <button
                className={`px-3 py-1 border-border border rounded-full ${t}`}
              >
                Demo buttons
              </button>
            </div>
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

function ThemeSelectionButton({
  currentTheme,
  onSelect,
  theme,
}: ThemeSelectionButtonProps) {
  const isSelected = currentTheme === theme;

  return (
    <button
      type="button"
      onClick={() => onSelect(theme)}
      aria-pressed={isSelected}
      className={`rounded-md px-4 py-2 text-sm font-semibold capitalize transition-colors ${isSelected ? "bg-surface text-foreground shadow-sm" : "text-muted hover:text-foreground"}`}
    >
      {theme}
    </button>
  );
}

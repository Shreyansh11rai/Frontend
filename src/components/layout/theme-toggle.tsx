"use client";

import { useTheme } from "next-themes";
import { isThemeName } from "@/lib/theme";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = isThemeName(resolvedTheme) ? resolvedTheme : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  return (
    <button type="button" onClick={() => setTheme(nextTheme)} className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted" aria-label={`Switch to ${nextTheme} theme`} title={`Switch to ${nextTheme} theme`}>
      <span aria-hidden="true" className="text-lg leading-none">{currentTheme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}

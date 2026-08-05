"use client";

import { useTheme } from "next-themes";
import { isThemeName } from "@/lib/theme";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const currentTheme = isThemeName(resolvedTheme) ? resolvedTheme : "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="ui-button ui-button-secondary h-10 w-10 rounded-lg px-0"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
    >
      <span aria-hidden="true" className="text-lg leading-none">
        {currentTheme === "dark" ? "☀" : "☾"}
      </span>
    </button>
  );
}

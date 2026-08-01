export const themeNames = ["light", "dark"] as const;

export type ThemeName = (typeof themeNames)[number];

export function isThemeName(theme: string | undefined): theme is ThemeName {
  return themeNames.some((themeName) => themeName === theme);
}

export interface ThemeTokenSample {
  label: string;
  utilityClass: "bg-primary" | "bg-surface" | "bg-surface-muted" | "bg-success";
}

/** Locally maintained preview data until design tokens are supplied by an API. */
export const themeTokenSamples: readonly ThemeTokenSample[] = [
  { label: "Primary", utilityClass: "bg-primary" },
  { label: "Surface", utilityClass: "bg-surface" },
  { label: "Muted surface", utilityClass: "bg-surface-muted" },
  { label: "Success", utilityClass: "bg-success" },
];

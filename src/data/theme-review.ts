export interface ThemeTokenSample {
  label: string;
  utilityClass: string;
  cssVariable: string;
}

/** Locally maintained preview data until design tokens are supplied by an API. */
export const themeTokenSamples: readonly ThemeTokenSample[] = [
  { label: "Canvas", utilityClass: "bg-canvas", cssVariable: "--color-canvas" },
  {
    label: "Surface",
    utilityClass: "bg-surface",
    cssVariable: "--color-surface",
  },
  {
    label: "Muted surface",
    utilityClass: "bg-surface-muted",
    cssVariable: "--color-surface-muted",
  },
  {
    label: "Foreground",
    utilityClass: "bg-foreground",
    cssVariable: "--color-foreground",
  },
  {
    label: "Muted text",
    utilityClass: "text-muted",
    cssVariable: "--color-muted",
  },
  {
    label: "Subtle text",
    utilityClass: "text-subtle",
    cssVariable: "--color-subtle",
  },
  {
    label: "Primary",
    utilityClass: "bg-primary",
    cssVariable: "--color-primary",
  },
  {
    label: "Primary hover",
    utilityClass: "bg-primary hover:bg-primary-hover",
    cssVariable: "--color-primary-hover",
  },
  {
    label: "Primary foreground",
    utilityClass: "bg-primary-foreground",
    cssVariable: "--color-primary-foreground",
  },
  {
    label: "Success",
    utilityClass: "bg-success",
    cssVariable: "--color-success",
  },
  {
    label: "Warning",
    utilityClass: "bg-warning",
    cssVariable: "--color-warning",
  },
  { label: "Focus", utilityClass: "bg-focus", cssVariable: "--color-focus" },
  {
    label: "Primary text",
    utilityClass: "text-primary",
    cssVariable: "--color-primary",
  },
  {
    label: "Success text",
    utilityClass: "text-success",
    cssVariable: "--color-success",
  },
  {
    label: "Warning text",
    utilityClass: "text-warning",
    cssVariable: "--color-warning",
  },
];

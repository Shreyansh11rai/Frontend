/** Central source of truth for brand copy shared by views and metadata. */
export const brand = {
  name: "XYZ Agency",
  shortName: "XYZ",
  description: "Digital services designed to move ambitious businesses forward.",
  navigation: [{ label: "Theme review", href: "/theme-review" }] as const,
} as const;

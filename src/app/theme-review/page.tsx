import type { Metadata } from "next";
import { ThemeReviewView } from "@/features/theme-review/views/theme-review-view";

export const metadata: Metadata = {
  title: "Theme review",
  description: "Preview and select the DoomSphere Agency interface theme.",
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function ThemeReviewPage() {
  return <ThemeReviewView />;
}

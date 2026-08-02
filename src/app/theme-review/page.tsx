import type { Metadata } from "next";
import { ThemeReviewView } from "@/features/theme-review/views/theme-review-view";

export const metadata: Metadata = {
  title: "Theme review",
  description: "Preview and select the XYZ Agency interface theme.",
  alternates: { canonical: "/theme-review" },
};

export default function ThemeReviewPage() {
  return <ThemeReviewView />;
}

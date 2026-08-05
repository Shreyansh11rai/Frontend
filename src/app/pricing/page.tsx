import type { Metadata } from "next";
import { PricingPageView } from "@/components/pricing/pricing-page-view";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent starting prices for websites, WhatsApp automation, and business support services.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingPageView />;
}

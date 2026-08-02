import type { Metadata } from "next";
import { InformationalPageView } from "@/components/pages/informational-page-view";
import { PAGES_DATA } from "@/data/pages_data";

export const metadata: Metadata = { title: "Frequently asked questions", description: PAGES_DATA.faq.description, alternates: { canonical: "/faq" } };

export default function FaqPage() { return <InformationalPageView page={PAGES_DATA.faq} />; }

import type { Metadata } from "next";
import { InformationalPageView } from "@/components/pages/informational-page-view";
import { PAGES_DATA } from "@/data/pages_data";

export const metadata: Metadata = { title: "Contact us", description: PAGES_DATA["contact-us"].description, alternates: { canonical: "/contact-us" } };

export default function ContactUsPage() { return <InformationalPageView page={PAGES_DATA["contact-us"]} />; }

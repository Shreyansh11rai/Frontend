import Link from "next/link";
import { brand } from "@/config/brand";
import type { InformationalPageData } from "@/data/pages_data";

interface InformationalPageViewProps {
  page: InformationalPageData;
}

export function InformationalPageView({ page }: InformationalPageViewProps) {
  return <main><section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8"><p className="text-sm font-bold tracking-[.18em] text-primary uppercase">{page.eyebrow}</p><h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{page.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{page.description}</p>{page.eyebrow === "Contact us" && <a className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5" href={`mailto:${brand.contactEmail}?subject=Enquiry%20for%20XYZ%20Agency`}>Email {brand.contactEmail}</a>}</section><section className="border-y border-border bg-surface-muted"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-8"><div className="grid gap-4 md:grid-cols-3">{page.sections.map((section, index) => <article key={section.title} className="rounded-xl border border-border bg-surface p-6"><p className="text-sm font-semibold text-primary">0{index + 1}</p><h2 className="mt-4 text-lg font-semibold text-foreground">{section.title}</h2><p className="mt-3 text-sm leading-6 text-muted">{section.description}</p></article>)}</div></div></section><section className="mx-auto max-w-7xl px-6 py-16 lg:px-8"><Link href="/#services" className="font-semibold text-primary hover:text-primary-hover">Explore all services <span aria-hidden="true">→</span></Link></section></main>;
}

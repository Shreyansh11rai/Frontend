import Link from "next/link";
import { brand } from "@/config/brand";
import { IconComp } from "@/components/widgets/icon-comp";
import type { InformationalPageData } from "@/data/pages_data";

interface InformationalPageViewProps {
  page: InformationalPageData;
}

export function InformationalPageView({ page }: InformationalPageViewProps) {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <IconComp name={page.icon ?? "service"} className="h-5 w-5" />
          </span>
          <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">
            {page.eyebrow}
          </p>
        </div>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {page.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {page.description}
        </p>

        {page.ctas && page.ctas.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {page.ctas.map((cta) => (
              <a
                key={cta.label}
                href={cta.href}
                className={`rounded-lg px-5 py-3 font-semibold transition-transform hover:-translate-y-0.5 ${cta.kind === "primary" ? "bg-primary text-primary-foreground" : "border border-border bg-surface text-foreground hover:bg-surface-muted"}`}
              >
                {cta.label}
              </a>
            ))}
          </div>
        )}
      </section>

      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {page.sections.map((section, index) => (
              <article
                key={section.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
                <div className="relative flex items-start gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <IconComp name={section.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      0{index + 1}
                    </p>
                    <h2 className="mt-4 text-lg font-semibold text-foreground">
                      {section.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {section.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#services"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            Explore all services <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/pricing"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            View pricing <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

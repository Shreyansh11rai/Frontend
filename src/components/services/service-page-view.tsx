import Link from "next/link";
import { brand } from "@/config/brand";
import type { ServiceData } from "@/data/services_data";

interface ServicePageViewProps {
  service: ServiceData;
}

/** Renders a fully static, reusable service detail page from the local catalogue. */
export function ServicePageView({ service }: ServicePageViewProps) {
  const formattedPrice = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(service.basePrice);

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_22rem] lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">{service.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">{service.headline}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{service.description}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5" href={`mailto:${brand.contactEmail}?subject=Service%20enquiry`}>
              Discuss this service
            </a>
            <Link className="rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-foreground hover:bg-surface-muted" href="/#services">
              View all services
            </Link>
          </div>
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_50px_-30px_rgb(var(--theme-shadow))]">
          <p className="text-sm font-semibold text-primary">Starting from</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">₹{formattedPrice}</p>
          <p className="mt-3 text-sm leading-6 text-muted">{service.stat}. We will recommend the scope that best fits your next goal.</p>
        </aside>
      </section>
      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">What we focus on</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.features.map((feature, index) => <article key={feature} className="rounded-xl border border-border bg-surface p-6"><p className="text-sm font-semibold text-primary">0{index + 1}</p><h3 className="mt-4 text-lg font-semibold text-foreground">{feature}</h3><p className="mt-2 text-sm leading-6 text-muted">Designed around the decisions and actions your customers need to take.</p></article>)}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">Common questions</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">{service.faq.map((item) => <article key={item.question} className="rounded-xl border border-border bg-surface p-6"><h3 className="font-semibold text-foreground">{item.question}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p></article>)}</div>
      </section>
    </main>
  );
}

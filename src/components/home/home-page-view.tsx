import Link from "next/link";
import { SERVICES_DATA } from "@/data/services_data";

/** Static marketing homepage assembled from the service catalogue. */
export function HomePageView() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">Digital services that move work forward</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">Make every customer step feel easier.</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">From the first enquiry to the next purchase, we create practical digital experiences that help people choose you with confidence.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/custom-websites" className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Explore websites</Link>
          <Link href="/whatsapp-automation" className="rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-foreground hover:bg-surface-muted">Explore automation</Link>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-3">{[["8", "services built around real customer moments"], ["24/7", "ways to stay ready when customers are"], ["1", "clear next step on every page"]].map(([number, label]) => <div key={number} className="rounded-xl border border-border bg-surface p-5"><p className="text-3xl font-semibold text-primary">{number}</p><p className="mt-2 text-sm leading-6 text-muted">{label}</p></div>)}</div>
      </section>
      <section id="services" className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">Choose what needs attention now</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">Services that solve the next bottleneck.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{SERVICES_DATA.map((service) => <Link href={`/${service.slug}`} key={service.slug} className="group rounded-xl border border-border bg-surface p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"><p className="text-sm font-semibold text-primary">{service.eyebrow}</p><h3 className="mt-3 text-lg font-semibold text-foreground">{service.name}</h3><p className="mt-2 text-sm leading-6 text-muted">{service.description}</p><p className="mt-5 text-sm font-semibold text-foreground group-hover:text-primary">Explore service <span aria-hidden="true">→</span></p></Link>)}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8"><div className="rounded-2xl bg-foreground px-7 py-12 text-primary-foreground sm:px-12"><p className="text-sm font-bold tracking-[.18em] text-primary uppercase">Not sure where to begin?</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold">Start with the customer friction you want gone this month.</h2><Link href="/business-automation" className="mt-7 inline-flex rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground">Explore automation</Link></div></section>
    </main>
  );
}

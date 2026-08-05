"use client";

import Link from "next/link";
import { brand } from "@/config/brand";
import { IconComp } from "@/components/widgets/icon-comp";
import { SERVICES_DATA, type ServiceData } from "@/data/services_data";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServicePageViewProps {
  service: ServiceData;
}

/** Renders a fully static, reusable service detail page from the local catalogue. */
export function ServicePageView({ service }: ServicePageViewProps) {
  useScrollReveal();
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(service.basePrice);

  return (
    <main>
      <div className="md:hidden">
        <nav className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[calc(100%-2rem)] max-w-3xl items-center gap-2 overflow-x-auto rounded-full border border-border bg-surface/90 px-2 py-2 shadow-lg backdrop-blur-xl">
          {SERVICES_DATA.map((item) => (
            <Link
              key={item.slug}
              href={`/${item.slug}`}
              className={`shrink-0 rounded-full px-3 py-2 text-sm font-semibold ${item.slug === service.slug ? "bg-primary text-primary-foreground" : "text-muted hover:bg-surface-muted hover:text-foreground"}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-24 lg:grid-cols-[16rem_minmax(0,1fr)_22rem] lg:px-8">
        <aside className="hidden md:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-surface p-4 shadow-[0_18px_50px_-30px_rgb(var(--theme-shadow))]">
            <p className="text-sm font-bold tracking-[.14em] text-primary uppercase">
              Explore services
            </p>
            <div className="mt-4 space-y-2">
              {SERVICES_DATA.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${item.slug === service.slug ? "bg-primary text-primary-foreground" : "text-muted hover:bg-surface-muted hover:text-foreground"}`}
                >
                  <IconComp name={item.icon} className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-4 sm:p-6"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconComp name={service.icon} className="h-5 w-5" />
            </span>
            <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">
              {service.eyebrow}
            </p>
          </div>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            {service.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
            {service.description}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              href={`mailto:${brand.contactEmail}?subject=Service%20enquiry`}
            >
              Discuss this service
            </a>
            <Link
              className="rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-foreground hover:bg-surface-muted"
              href="/#services"
            >
              View all services
            </Link>
            <Link
              className="rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-foreground hover:bg-surface-muted"
              href="/pricing"
            >
              View pricing
            </Link>
          </div>
        </div>
        <aside
          data-reveal
          className="rounded-2xl border border-border bg-surface p-6 shadow-[0_18px_50px_-30px_rgb(var(--theme-shadow))]"
        >
          <p className="text-sm font-semibold text-primary">Starting from</p>
          <p className="mt-2 text-3xl font-semibold text-foreground">
            ₹{formattedPrice}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            {service.stat}. We will recommend the scope that best fits your next
            goal.
          </p>
          <div className="mt-5 rounded-xl bg-surface-muted p-4 text-sm leading-6 text-muted">
            <p className="font-semibold text-foreground">Best for</p>
            <p className="mt-2">{service.idealFor[0]}</p>
          </div>
        </aside>
      </section>

      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            What we focus on
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.features.map((feature, index) => (
              <article
                key={feature}
                className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconComp
                    name={
                      index % 2 === 0
                        ? "spark"
                        : index % 3 === 0
                          ? "target"
                          : "check"
                    }
                    className="h-5 w-5"
                  />
                </span>
                <p className="mt-4 text-sm font-semibold text-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Designed around the decisions and actions your customers need
                  to take.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconComp name="shield" className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold tracking-[.14em] text-primary uppercase">
                Why choose this
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              A practical service built to reduce friction.
            </h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
              {service.whyChooseUs.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span
                    className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
            <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconComp name="pricing" className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold tracking-[.14em] text-primary uppercase">
                Time and money
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">
              Benefits that show up quickly.
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.timeAndMoneyBenefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl bg-surface-muted p-4"
                >
                  <p className="text-sm font-semibold text-primary">
                    {benefit.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {benefit.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-border bg-surface-muted">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconComp name="target" className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold tracking-[.14em] text-primary uppercase">
                  What problem we solve
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                The customer or team friction behind the request.
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {service.problemSolved.map((problem) => (
                  <li key={problem} className="rounded-lg bg-surface-muted p-4">
                    {problem}
                  </li>
                ))}
              </ul>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-6">
              <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <IconComp name="book" className="h-5 w-5" />
                </span>
                <p className="text-sm font-bold tracking-[.14em] text-primary uppercase">
                  Customers
                </p>
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">
                Who this service is usually built for.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {service.idealFor.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-2xl bg-foreground px-7 py-12 text-primary-foreground sm:px-12">
          <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">
            Need help deciding?
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
            Tell us what you want to fix, and we will recommend the cleanest
            next step.
          </h2>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${brand.contactEmail}?subject=${encodeURIComponent(service.name + " enquiry")}`}
              className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground"
            >
              {service.ctaLabel}
            </a>
            <Link
              href="/pricing"
              className="rounded-lg border border-border/40 bg-surface/10 px-5 py-3 font-semibold text-primary-foreground hover:bg-surface/20"
            >
              See pricing
            </Link>
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Common questions
        </h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {service.faq.map((item) => (
            <article
              key={item.question}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <h3 className="font-semibold text-foreground">{item.question}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

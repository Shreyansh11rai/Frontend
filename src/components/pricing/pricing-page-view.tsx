"use client";

import { useMemo, useState } from "react";
import { IconComp } from "@/components/widgets/icon-comp";
import { SERVICES_DATA, type ServiceData } from "@/data/services_data";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { submitPricingInterest } from "@/services/enquiryService";

export function PricingPageView() {
  useScrollReveal();
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState<string>("");

  const selectedServiceId =
    selectedService?.slug ?? SERVICES_DATA[0]?.slug ?? "";

  const cardCtas = useMemo(
    () =>
      SERVICES_DATA.map((service) => ({
        ...service,
        href: `/${service.slug}`,
      })),
    [],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      contact: String(form.get("contact") ?? ""),
      serviceId: selectedServiceId,
      source: "pricing-page",
    };

    await submitPricingInterest(payload);
    setMessage("Thanks! Your pricing request has been prepared for follow-up.");
    setIsOpen(false);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <section className="mx-auto max-w-4xl text-center" data-reveal>
        <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">
          Pricing
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Clear starting price points for practical digital work.
        </h1>
        <p className="mt-4 text-lg leading-8 text-muted">
          Choose a service and open the card to request a tailored scope.
        </p>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cardCtas.map((service, index) => (
          <article
            key={service.slug}
            data-reveal
            className=" group relative overflow-hidden rounded-3xl border border-border bg-surface p-5"
          >
            <div
              className="absolute inset-x-0 top-0 h-1 bg-primary"
              aria-hidden="true"
            />
            <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <IconComp name={service.icon} className="h-5 w-5" />
              </span>
              <p className="text-sm font-semibold text-primary">
                {service.eyebrow}
              </p>
            </div>
            <h2 className="mt-4 text-lg font-semibold text-foreground">
              {service.name}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              {service.summary}
            </p>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-2xl font-semibold text-foreground">
                ₹{service.basePrice.toLocaleString("en-IN")}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedService(service);
                  setIsOpen(true);
                }}
                className=" invisible rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100"
              >
                Request quote
              </button>
            </div>
            <p className="mt-4 text-xs font-semibold tracking-[.14em] text-subtle uppercase">
              0{index + 1}
            </p>
          </article>
        ))}
      </section>

      {isOpen && selectedService && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/40 px-4 backdrop-blur-sm">
          <div className=" w-full max-w-md rounded-3xl p-6 backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">
                  {selectedService.eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  {selectedService.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full border border-border px-3 py-1 text-sm text-muted"
              >
                Close
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-sm text-muted">
                <span className="mb-2 block font-semibold text-foreground">
                  Name
                </span>
                <input
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
                />
              </label>
              <label className="block text-sm text-muted">
                <span className="mb-2 block font-semibold text-foreground">
                  Company
                </span>
                <input
                  name="company"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
                />
              </label>
              <label className="block text-sm text-muted">
                <span className="mb-2 block font-semibold text-foreground">
                  Contact
                </span>
                <input
                  name="contact"
                  required
                  className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground"
              >
                Request pricing
              </button>
            </form>
          </div>
        </div>
      )}

      {message && (
        <p className="mt-8 text-sm font-semibold text-success">{message}</p>
      )}
    </main>
  );
}

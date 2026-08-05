"use client";

import { useState } from "react";
import { IconComp } from "@/components/widgets/icon-comp";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { submitBookingRequest } from "@/services/enquiryService";

export function ContactPageView() {
  useScrollReveal();
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      companyName: String(form.get("companyName") ?? ""),
      contactNumber: String(form.get("contactNumber") ?? ""),
      scheduleDate: String(form.get("scheduleDate") ?? ""),
      scheduleTime: String(form.get("scheduleTime") ?? ""),
      serviceId: String(form.get("serviceId") ?? "custom-websites"),
    };

    const result = await submitBookingRequest(payload);
    setStatusMessage(result.message);
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6"
        >
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <IconComp name="contact" className="h-5 w-5" />
            </span>
            <p className="text-sm font-bold tracking-[.18em] text-primary uppercase">
              Contact us
            </p>
          </div>
          <h1 className="mt-4 text-4xl font-semibold text-foreground sm:text-5xl">
            Request a call and choose a convenient schedule.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Share your business need and the best time to speak. We will help
            you understand the right next step.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 backdrop-blur-xl"
          data-reveal
        >
          <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Name
              </span>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              />
            </label>
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Company
              </span>
              <input
                name="companyName"
                required
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              />
            </label>
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Mobile
              </span>
              <input
                name="contactNumber"
                required
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              />
            </label>
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Service
              </span>
              <select
                name="serviceId"
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              >
                <option value="custom-websites">Custom website</option>
                <option value="whatsapp-automation">WhatsApp automation</option>
                <option value="business-automation">Business automation</option>
              </select>
            </label>
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Choose a date
              </span>
              <input
                type="date"
                name="scheduleDate"
                required
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              />
            </label>
            <label className="text-sm text-muted">
              <span className="mb-2 block font-semibold text-foreground">
                Choose a time
              </span>
              <input
                type="time"
                name="scheduleTime"
                required
                className="w-full rounded-xl border border-border bg-surface px-3 py-2 outline-none"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground"
          >
            Request a call
          </button>
          {statusMessage && (
            <p className="mt-4 text-sm font-semibold text-success">
              {statusMessage}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}

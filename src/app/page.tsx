import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: "Digital services with clarity",
};

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
      <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-primary uppercase">{brand.name}</p>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
        Digital work that feels as good as it performs.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
        A focused foundation for clear, accessible, and adaptable client experiences.
      </p>
      <div className="mt-10">
        <Link className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover" href="/theme-review">
          Review the theme
        </Link>
      </div>
    </main>
  );
}

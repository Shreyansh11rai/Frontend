import { brand } from "@/config/brand";

export function Footer() {
  return <footer className="border-t border-border bg-surface"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8"><p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p><a className="font-medium text-foreground hover:text-primary" href={`mailto:${brand.contactEmail}`}>{brand.contactEmail}</a></div></footer>;
}

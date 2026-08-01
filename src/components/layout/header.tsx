import Link from "next/link";
import { brand } from "@/config/brand";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <Link className="text-lg font-semibold tracking-tight text-foreground" href="/" aria-label={`${brand.name} home`}>
          {brand.shortName}<span className="text-primary">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label="Primary navigation">
            {brand.navigation.map((item) => (
              <Link key={item.href} className="text-sm font-medium text-muted transition-colors hover:text-foreground" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

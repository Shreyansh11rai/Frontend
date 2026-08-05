import { brand } from "@/config/brand";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-border pb-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-base font-bold tracking-tight text-primary-foreground shadow-sm"
            >
              {brand.shortName}
            </span>
            <div>
              <p className="text-base font-bold tracking-tight text-foreground">
                {brand.name}
              </p>
              <p className="mt-0.5 text-sm text-muted">
                Digital solutions with measurable momentum.
              </p>
            </div>
          </div>

          <a
            className="group inline-flex w-fit items-center gap-3 rounded-xl border border-border bg-canvas px-4 py-3 text-left transition-colors hover:border-primary hover:bg-surface-muted"
            href={`mailto:${brand.contactEmail}`}
            aria-label={`Email ${brand.name} at ${brand.contactEmail}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <EmailIcon />
            </span>
            <span>
              <span className="block text-xs font-semibold tracking-[0.12em] text-subtle uppercase">
                Start a conversation
              </span>
              <span className="mt-0.5 block text-sm font-semibold text-foreground group-hover:text-primary">
                {brand.contactEmail}
              </span>
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          {/* <a
            className="w-fit font-medium text-muted transition-colors hover:text-primary"
            href={`tel:${brand.contactNumber}`}
          >
            {brand.contactNumber}
          </a> */}
        </div>
      </div>
    </footer>
  );
}

function EmailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

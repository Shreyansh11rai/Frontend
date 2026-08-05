import type { ReactNode } from "react";

export type IconName =
  | "about"
  | "book"
  | "calendar"
  | "chat"
  | "check"
  | "chevron"
  | "compass"
  | "contact"
  | "faq"
  | "home"
  | "lock"
  | "message"
  | "palette"
  | "phone"
  | "pricing"
  | "search"
  | "service"
  | "shield"
  | "spark"
  | "target"
  | "window";

export const ICON_LIBRARY: Readonly<Record<IconName, ReactNode>> = {
  about: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21c.8-4 3.1-6 7-6s6.2 2 7 6" />
    </>
  ),
  book: (
    <>
      <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v18H7.5A2.5 2.5 0 0 0 5 23.5Z" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </>
  ),
  chat: (
    <>
      <path d="M21 11.5a8.2 8.2 0 0 1-8.5 8A9.5 9.5 0 0 1 8.3 18L3 20l1.8-4.7A7.8 7.8 0 0 1 4 11.5a8.2 8.2 0 0 1 8.5-8A8.2 8.2 0 0 1 21 11.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  check: <path d="m5 12 4 4L19 2" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.1 5.1-5 2.1 2.1-5.1Z" />
    </>
  ),
  contact: (
    <>
      <path d="M21 15a4 4 0 0 1-4 4H9l-4 3v-7a4 4 0 0 1-2-3.5V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  faq: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.8 9a2.3 2.3 0 1 1 3.5 2c-.9.5-1.3 1-1.3 2M12 17h.01" />
    </>
  ),
  home: (
    <>
      <path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </>
  ),
  message: (
    <>
      <path d="M21 11.5a8.2 8.2 0 0 1-8.5 8A9.5 9.5 0 0 1 8.3 18L3 20l1.8-4.7A7.8 7.8 0 0 1 4 11.5a8.2 8.2 0 0 1 8.5-8A8.2 8.2 0 0 1 21 11.5Z" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3a9 9 0 1 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h2a7 7 0 0 0 7-7 4 4 0 0 0-4-4Z" />
      <path d="M7.5 10h.01M9 6.5h.01M15 6.5h.01" />
    </>
  ),
  phone: (
    <>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.3a2 2 0 0 1-.5 1.8l-1.4 1.4a16 16 0 0 0 6.2 6.2l1.4-1.4a2 2 0 0 1 1.8-.5l2.3.4A2 2 0 0 1 22 16.9Z" />
    </>
  ),
  pricing: (
    <>
      <path d="M12 3v18" />
      <path d="M17 8.5c0-1.9-1.8-3.5-5-3.5S7 6.6 7 8.5 8.8 12 12 12s5 1.6 5 3.5-1.8 3.5-5 3.5-5-1.6-5-3.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  service: (
    <>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5Z" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 6 5.5v5c0 4.1 2.5 6.6 6 8.5 3.5-1.9 6-4.4 6-8.5v-5Z" />
      <path d="m9.5 11.8 1.7 1.7 3.4-3.8" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
      <path d="M19 3v3M21 5h-3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 4V2M20 12h2M12 20v2M4 12H2" />
    </>
  ),
  window: (
    <>
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M8 9h8M8 13h5" />
    </>
  ),
};

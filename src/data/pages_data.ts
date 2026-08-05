import type { IconName } from "@/data/icons_data";

export interface InformationalPageData {
  description: string;
  eyebrow: string;
  title: string;
  icon?: IconName;
  ctas?: readonly {
    href: string;
    kind: "primary" | "secondary";
    label: string;
  }[];
  sections: readonly {
    title: string;
    description: string;
    icon: IconName;
  }[];
}

export const PAGES_DATA = {
  about: {
    eyebrow: "About XYZ",
    title:
      "Digital work should feel clear, useful, and genuinely helpful for growing businesses.",
    description:
      "We create marketing and customer-facing digital solutions that make it easier for businesses to present themselves professionally, respond faster, and convert more confidently.",
    icon: "about",
    ctas: [
      { label: "Book a discovery call", href: "/contact-us", kind: "primary" },
      { label: "Explore services", href: "/#services", kind: "secondary" },
    ],
    sections: [
      {
        title: "Who we are",
        description:
          "We are a digital agency focused on practical outcomes for real businesses. Our job is to turn uncertainty into a clear next step.",
        icon: "about",
      },
      {
        title: "Why businesses choose us",
        description:
          "People pick us because we explain the problem clearly, keep the process simple, and recommend only the work that matters most.",
        icon: "shield",
      },
      {
        title: "How we work",
        description:
          "We start with your customer journey, understand the friction in the current experience, and build solutions around that need.",
        icon: "compass",
      },
      {
        title: "What makes us dependable",
        description:
          "We keep communication easy, make service scope practical, and focus on long-term usefulness instead of flashy complexity.",
        icon: "check",
      },
      {
        title: "What you can expect",
        description:
          "A calm, professional process with helpful recommendations, a clear structure, and a modern final experience your customers can trust.",
        icon: "book",
      },
      {
        title: "Our promise",
        description:
          "We aim for work that looks polished, feels easy to use, and helps your business stay ready for more enquiries and growth.",
        icon: "spark",
      },
    ],
  },
  "contact-us": {
    eyebrow: "Contact us",
    title: "Tell us what is getting in the way of your next customer win.",
    description:
      "Share the opportunity you want to unlock, and we will help you identify a useful way forward.",
    icon: "contact",
    ctas: [
      {
        label: "Email us",
        href: "mailto:hello@doomsphere.com?subject=Enquiry%20for%20XYZ%20Agency",
        kind: "primary",
      },
      { label: "Call us", href: "tel:+918858191942", kind: "secondary" },
    ],
    sections: [
      {
        title: "Discovery conversation",
        description:
          "Start with a focused discussion about your customers, team, and near-term goal.",
        icon: "chat",
      },
      {
        title: "Clear recommendation",
        description:
          "Receive a practical scope that explains what to prioritise and why.",
        icon: "target",
      },
      {
        title: "Confident next steps",
        description: "Decide how to move forward with the context you need.",
        icon: "check",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple starting prices for useful digital support.",
    description:
      "We keep pricing transparent and practical so you can quickly understand where to begin and what to expect.",
    icon: "pricing",
    ctas: [
      {
        label: "Email for a custom scope",
        href: "mailto:hello@doomsphere.com?subject=Pricing%20enquiry",
        kind: "primary",
      },
      { label: "Talk to our team", href: "/contact-us", kind: "secondary" },
    ],
    sections: [
      {
        title: "Website services",
        description:
          "Starting from ₹9,000 for focused landing pages and ₹25,000 for a complete custom website experience.",
        icon: "window",
      },
      {
        title: "WhatsApp services",
        description:
          "Starting from ₹6,000 for setup, ₹15,000 for automation journeys, and ₹30,000 for Cloud API integration support.",
        icon: "message",
      },
      {
        title: "Automation support",
        description:
          "Starting from ₹20,000 for practical workflow automation designed around repetitive business tasks.",
        icon: "spark",
      },
      {
        title: "How pricing works",
        description:
          "The starting price shows the entry level. Final scope depends on your goals, feature depth, and the complexity of your business process.",
        icon: "pricing",
      },
      {
        title: "What you receive",
        description:
          "A recommended scope, a straightforward proposal, and a clear plan for what will be delivered and what success looks like.",
        icon: "book",
      },
      {
        title: "Need a different scope?",
        description:
          "We can tailor the work around your exact business requirement, existing systems, and customer journey needs.",
        icon: "compass",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Useful answers before we start working together.",
    description:
      "A short overview of how we shape the right digital service around your immediate business need.",
    icon: "faq",
    sections: [
      {
        title: "How do we choose a service?",
        description:
          "We start with the outcome you need, then recommend the smallest useful scope.",
        icon: "target",
      },
      {
        title: "Can services work together?",
        description:
          "Yes. A website, customer conversations, and operational workflows are designed to connect.",
        icon: "compass",
      },
      {
        title: "What do we need to provide?",
        description:
          "Your goals, current process, customer context, and the people who will own the work.",
        icon: "book",
      },
    ],
  },
} as const satisfies Record<string, InformationalPageData>;

import type { IconName } from "@/data/icons_data";

/** Local service catalogue. Replace this module with an API adapter when the CMS is introduced. */
export interface ServiceData {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon: IconName;
  summary: string;
  eyebrow: string;
  headline: string;
  description: string;
  basePrice: number;
  stat: string;
  features: readonly string[];
  whyChooseUs: readonly string[];
  timeAndMoneyBenefits: readonly { title: string; detail: string }[];
  problemSolved: readonly string[];
  idealFor: readonly string[];
  ctaLabel: string;
  faq: readonly { question: string; answer: string }[];
}

export const SERVICE_CATEGORIES = [
  "Enquiry",
  "WhatsApp Services",
  "Websites",
  "Automations",
] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

const createService = (
  slug: string,
  name: string,
  category: ServiceCategory,
  icon: IconName,
  summary: string,
  eyebrow: string,
  headline: string,
  description: string,
  basePrice: number,
  stat: string,
  features: readonly string[],
  whyChooseUs: readonly string[],
  timeAndMoneyBenefits: readonly { title: string; detail: string }[],
  problemSolved: readonly string[],
  idealFor: readonly string[],
  ctaLabel: string,
): ServiceData => ({
  slug,
  name,
  category,
  icon,
  summary,
  eyebrow,
  headline,
  description,
  basePrice,
  stat,
  features,
  whyChooseUs,
  timeAndMoneyBenefits,
  problemSolved,
  idealFor,
  ctaLabel,
  faq: [
    {
      question: "Is this tailored to our business?",
      answer:
        "Yes. Every engagement starts by understanding your customers, operations, and next commercial goal.",
    },
    {
      question: "What happens after we get in touch?",
      answer:
        "We will arrange a short discovery conversation, define the right scope, and share a clear proposal before work begins.",
    },
  ],
});

export const SERVICES_DATA: readonly ServiceData[] = [
  createService(
    "booking-solutions",
    "Booking solutions",
    "Enquiry",
    "calendar",
    "Turn booking enquiries into confirmed appointments.",
    "Appointments",
    "Make it simple for customers to book time with you.",
    "A clear booking journey that keeps your team organised and customers moving.",
    12000,
    "Fewer scheduling gaps",
    [
      "Booking journey design",
      "Calendar-ready setup",
      "Customer confirmations",
    ],
    [
      "A direct path from enquiry to appointment",
      "A cleaner first impression for your business",
    ],
    [
      {
        title: "Save time",
        detail: "Customers can book without waiting for back-and-forth calls.",
      },
      {
        title: "Save money",
        detail:
          "Less manual coordination means fewer missed appointments and slower handoffs.",
      },
    ],
    [
      "Appointments are missed because the booking step feels confusing or delayed.",
      "Your team spends time answering the same scheduling questions repeatedly.",
    ],
    [
      "Doctors, clinics, coaches, consultants, and service businesses with regular bookings",
    ],
    "Book a booking call",
  ),
  createService(
    "online-store",
    "Online stores",
    "Websites",
    "window",
    "Help customers browse, buy, and return with ease.",
    "Commerce",
    "Give customers an easier way to buy online.",
    "Focused storefronts that make browsing, buying, and returning feel straightforward.",
    18000,
    "Built for conversion",
    ["Storefront strategy", "Product page design", "Checkout-ready experience"],
    [
      "Built around the real buying decision",
      "A more trustworthy look for your brand",
    ],
    [
      {
        title: "Save time",
        detail:
          "Visitors find products faster and need fewer follow-up questions.",
      },
      {
        title: "Save money",
        detail:
          "A clearer store reduces wasted marketing spend from low-interest traffic.",
      },
    ],
    [
      "Customers leave without buying because the browsing and purchase path feels unclear.",
      "Your current online presence does not make the next step obvious enough.",
    ],
    ["Retailers, local brands, and businesses selling products online"],
    "Plan your online store",
  ),
  createService(
    "whatsapp-automation",
    "WhatsApp automation",
    "WhatsApp Services",
    "message",
    "Answer common questions and qualify leads automatically.",
    "Conversations",
    "Keep helpful conversations moving, even after hours.",
    "Automated WhatsApp journeys that answer common questions and bring qualified enquiries to your team.",
    15000,
    "Always-on replies",
    ["Journey mapping", "Response automation", "Lead handoff design"],
    [
      "Faster first response to every visitor",
      "A smoother lead qualification process",
    ],
    [
      {
        title: "Save time",
        detail:
          "Common questions are handled automatically instead of waiting for manual replies.",
      },
      {
        title: "Save money",
        detail:
          "Your team can focus on valuable conversations instead of repetitive follow-ups.",
      },
    ],
    [
      "Leads are lost because customer questions are not answered quickly enough.",
      "Your team is spending too much time on repeated WhatsApp follow-ups.",
    ],
    [
      "Growing businesses, service teams, and companies that get regular customer enquiries",
    ],
    "Start WhatsApp automation",
  ),
  createService(
    "landing-pages",
    "Landing pages",
    "Websites",
    "target",
    "Create focused campaigns that drive one clear action.",
    "Campaigns",
    "Turn attention into a clear next step.",
    "Campaign pages with a focused story, fast paths to action, and the right information at the right moment.",
    9000,
    "One focused action",
    ["Message hierarchy", "Responsive page design", "Conversion-focused CTAs"],
    [
      "A focused message for one clear goal",
      "Higher clarity for ad traffic and campaign landing",
    ],
    [
      {
        title: "Save time",
        detail:
          "Visitors understand your offer faster and move to the right action without confusion.",
      },
      {
        title: "Save money",
        detail:
          "Campaigns spend less on weak visitor journeys that do not convert.",
      },
    ],
    [
      "Your campaign traffic is coming in, but the page is not making the next step obvious.",
      "You need a page that supports one specific business action without distractions.",
    ],
    ["Brands running ads, promotions, and lead generation campaigns"],
    "Create your landing page",
  ),
  createService(
    "custom-websites",
    "Custom websites",
    "Websites",
    "compass",
    "Explain your value and guide visitors to act.",
    "Web presence",
    "Build a website that makes choosing you feel easy.",
    "Thoughtful, responsive websites that explain your value clearly and guide visitors towards the next step.",
    25000,
    "Built around your customer",
    [
      "Website strategy",
      "Responsive interface design",
      "SEO-ready page structure",
    ],
    [
      "Professional credibility for the first impression",
      "A clearer customer journey from the homepage to the enquiry",
    ],
    [
      {
        title: "Save time",
        detail:
          "Customers get answers faster, which reduces repeated calls and chats.",
      },
      {
        title: "Save money",
        detail:
          "A sharper website helps your marketing spend produce stronger results over time.",
      },
    ],
    [
      "Your current website does not reflect your quality or make your strongest offer stand out.",
      "You need a digital presence that supports trust, clarity, and enquiry growth.",
    ],
    [
      "Businesses that need a professional online home and stronger first impressions",
    ],
    "Build your website",
  ),
  createService(
    "whatsapp-business-setup",
    "WhatsApp Business setup",
    "WhatsApp Services",
    "message",
    "Set up professional conversations customers can trust.",
    "Foundations",
    "Set your customer conversations up properly from day one.",
    "A professional WhatsApp Business foundation that helps people find answers and reach the right team faster.",
    6000,
    "Ready to respond",
    ["Profile optimisation", "Message templates", "Team workflow guidance"],
    [
      "A more trustworthy WhatsApp profile",
      "A smoother customer experience from first message onward",
    ],
    [
      {
        title: "Save time",
        detail:
          "Your team spends less time explaining basic details again and again.",
      },
      {
        title: "Save money",
        detail:
          "Better conversation setup helps prevent missed customer opportunities.",
      },
    ],
    [
      "You are not getting the right tone or clarity from your business WhatsApp presence.",
      "Your brand message needs to feel reliable and organised from the first message.",
    ],
    [
      "Businesses that want their WhatsApp presence to look established and easy to trust",
    ],
    "Set up WhatsApp business",
  ),
  createService(
    "whatsapp-cloud-api",
    "WhatsApp Cloud API",
    "WhatsApp Services",
    "chat",
    "Connect WhatsApp to the tools your team uses.",
    "Integration",
    "Connect WhatsApp to the systems your business already uses.",
    "A practical Cloud API foundation for reliable messages, customer updates, and scalable workflows.",
    30000,
    "Connected workflows",
    [
      "API implementation plan",
      "Template message setup",
      "Integration guidance",
    ],
    [
      "A more reliable business response flow",
      "Better connection between customer conversations and your internal tools",
    ],
    [
      {
        title: "Save time",
        detail:
          "Messages and updates can move automatically across the tools your team already uses.",
      },
      {
        title: "Save money",
        detail:
          "Reliable workflows reduce manual effort and prevent avoidable coordination delays.",
      },
    ],
    [
      "Your business needs a more connected WhatsApp workflow but lacks a clean technical foundation.",
      "Manual handoffs are creating delays and inconsistent customer communication.",
    ],
    [
      "Teams that need better message flow, notification handling, or connected customer operations",
    ],
    "Connect WhatsApp to your workflow",
  ),
  createService(
    "business-automation",
    "Business automation",
    "Automations",
    "spark",
    "Connect repetitive tasks and give your team time back.",
    "Operations",
    "Remove the repeated work that slows your team down.",
    "Useful automations that connect routine tasks, reduce manual follow-ups, and give people time back for meaningful work.",
    20000,
    "Less repetitive work",
    ["Process mapping", "Automation design", "Operational handover"],
    ["A more dependable business flow", "Less time lost in repetitive tasks"],
    [
      {
        title: "Save time",
        detail:
          "Manual status updates, reminders, and follow-ups can be handled with less effort.",
      },
      {
        title: "Save money",
        detail:
          "A better workflow reduces wasted hours and keeps your operations more efficient.",
      },
    ],
    [
      "Your team is stuck doing the same routine work every day.",
      "You want smoother customer follow-up without adding more team pressure.",
    ],
    [
      "Operations-focused teams, fast-moving service companies, and growing businesses",
    ],
    "Explore automation",
  ),
];

export const SERVICE_SLUGS = SERVICES_DATA.map(({ slug }) => slug);

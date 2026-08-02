/** Local service catalogue. Replace this module with an API adapter when the CMS is introduced. */
export interface ServiceData {
  slug: string;
  name: string;
  category: ServiceCategory;
  summary: string;
  eyebrow: string;
  headline: string;
  description: string;
  basePrice: number;
  stat: string;
  features: readonly string[];
  faq: readonly { question: string; answer: string }[];
}

export const SERVICE_CATEGORIES = ["Enquiry", "WhatsApp Services", "Websites", "Automations"] as const;
export type ServiceCategory = (typeof SERVICE_CATEGORIES)[number];

const createService = (
  slug: string,
  name: string,
  category: ServiceCategory,
  summary: string,
  eyebrow: string,
  headline: string,
  description: string,
  basePrice: number,
  stat: string,
  features: readonly string[],
): ServiceData => ({
  slug,
  name,
  category,
  summary,
  eyebrow,
  headline,
  description,
  basePrice,
  stat,
  features,
  faq: [
    { question: "Is this tailored to our business?", answer: "Yes. Every engagement starts by understanding your customers, operations, and next commercial goal." },
    { question: "What happens after we get in touch?", answer: "We will arrange a short discovery conversation, define the right scope, and share a clear proposal before work begins." },
  ],
});

export const SERVICES_DATA: readonly ServiceData[] = [
  createService("booking-solutions", "Booking solutions", "Enquiry", "Turn booking enquiries into confirmed appointments.", "Appointments", "Make it simple for customers to book time with you.", "A clear booking journey that keeps your team organised and customers moving.", 12000, "Fewer scheduling gaps", ["Booking journey design", "Calendar-ready setup", "Customer confirmations"]),
  createService("online-store", "Online stores", "Websites", "Help customers browse, buy, and return with ease.", "Commerce", "Give customers an easier way to buy online.", "Focused storefronts that make browsing, buying, and returning feel straightforward.", 18000, "Built for conversion", ["Storefront strategy", "Product page design", "Checkout-ready experience"]),
  createService("whatsapp-automation", "WhatsApp automation", "WhatsApp Services", "Answer common questions and qualify leads automatically.", "Conversations", "Keep helpful conversations moving, even after hours.", "Automated WhatsApp journeys that answer common questions and bring qualified enquiries to your team.", 15000, "Always-on replies", ["Journey mapping", "Response automation", "Lead handoff design"]),
  createService("landing-pages", "Landing pages", "Websites", "Create focused campaigns that drive one clear action.", "Campaigns", "Turn attention into a clear next step.", "Campaign pages with a focused story, fast paths to action, and the right information at the right moment.", 9000, "One focused action", ["Message hierarchy", "Responsive page design", "Conversion-focused CTAs"]),
  createService("custom-websites", "Custom websites", "Websites", "Explain your value and guide visitors to act.", "Web presence", "Build a website that makes choosing you feel easy.", "Thoughtful, responsive websites that explain your value clearly and guide visitors towards the next step.", 25000, "Built around your customer", ["Website strategy", "Responsive interface design", "SEO-ready page structure"]),
  createService("whatsapp-business-setup", "WhatsApp Business setup", "WhatsApp Services", "Set up professional conversations customers can trust.", "Foundations", "Set your customer conversations up properly from day one.", "A professional WhatsApp Business foundation that helps people find answers and reach the right team faster.", 6000, "Ready to respond", ["Profile optimisation", "Message templates", "Team workflow guidance"]),
  createService("whatsapp-cloud-api", "WhatsApp Cloud API", "WhatsApp Services", "Connect WhatsApp to the tools your team uses.", "Integration", "Connect WhatsApp to the systems your business already uses.", "A practical Cloud API foundation for reliable messages, customer updates, and scalable workflows.", 30000, "Connected workflows", ["API implementation plan", "Template message setup", "Integration guidance"]),
  createService("business-automation", "Business automation", "Automations", "Connect repetitive tasks and give your team time back.", "Operations", "Remove the repeated work that slows your team down.", "Useful automations that connect routine tasks, reduce manual follow-ups, and give people time back for meaningful work.", 20000, "Less repetitive work", ["Process mapping", "Automation design", "Operational handover"]),
];

export const SERVICE_SLUGS = SERVICES_DATA.map(({ slug }) => slug);

import type { IconName } from "@/data/icons_data";

export type ServiceTier = "basic" | "standard" | "premium";

export interface ServiceTrustStat {
  label: string;
  value: string;
}

export interface ServiceSectionItem {
  title: string;
  description: string;
}

export interface ServicePricingTier {
  tier: ServiceTier;
  price: number;
  highlighted: boolean;
  features: readonly string[];
}

export interface ServiceTestimonial {
  name: string;
  outcome: string;
  placeholder: boolean;
  rating?: number;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: string;
  name: string;
  valueProposition: string;
  trustStats?: readonly ServiceTrustStat[];
  problems?: readonly ServiceSectionItem[];
  process?: readonly ServiceSectionItem[];
  differentiators?: readonly ServiceSectionItem[];
  pricing?: readonly ServicePricingTier[];
  testimonials?: readonly ServiceTestimonial[];
  faqs?: readonly ServiceFaq[];
}

/** Local service catalogue. Replace this module with an API adapter when the CMS is introduced. */
export interface ServiceData extends ServiceContent {
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
  content?: Partial<ServiceContent>,
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
  valueProposition: content?.valueProposition ?? description,
  trustStats: content?.trustStats ?? [],
  problems: content?.problems ?? [],
  process: content?.process ?? [],
  differentiators: content?.differentiators ?? [],
  pricing: content?.pricing ?? [],
  // testimonials: content?.testimonials ?? [],
  faqs: content?.faqs ?? [],
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
    {
      valueProposition:
        "Turn enquiry pressure into an organised booking experience that helps more customers commit faster.",
      trustStats: [
        { label: "Projects delivered", value: "24+" },
        { label: "Response within", value: "24h" },
        { label: "Session clarity", value: "1 discovery" },
      ],
      problems: [
        {
          title: "Missed bookings",
          description:
            "Customers want to act now, but your enquiry flow makes them hesitate or disappear.",
        },
        {
          title: "Manual scheduling drag",
          description:
            "Your team keeps reviewing the same booking requests and repeating the same handoff steps.",
        },
        {
          title: "Weak first impression",
          description:
            "A messy scheduling path makes the business feel less professional before the first conversation even starts.",
        },
      ],
      process: [
        {
          title: "Discovery",
          description:
            "Map the customer journey and identify the real booking friction.",
        },
        {
          title: "Design",
          description:
            "Shape a simple booking path that feels clear and easy to follow.",
        },
        {
          title: "Launch",
          description:
            "Go live with a polished flow and confirm customer handoff details.",
        },
      ],
      differentiators: [
        {
          title: "Clear scope",
          description:
            "We keep the booking flow tightly focused on one obvious customer decision.",
        },
        {
          title: "Deployment without complexity",
          description:
            "You get a practical outcome, not a sprawling tech stack to manage later.",
        },
        {
          title: "Direct collaboration",
          description:
            "You deal with a single delivery owner from concept to handoff.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 12000,
          highlighted: false,
          features: [
            "Booking page structure",
            "Contact details capture",
            "Calendar-ready handoff",
          ],
        },
        {
          tier: "standard",
          price: 18000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Smart confirmation flow",
            "Customer-friendly reminders",
          ],
        },
        {
          tier: "premium",
          price: 24000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Lead qualification rules",
            "Priority follow-up setup",
          ],
        },
      ],
      testimonials: [
        {
          name: "Dr. Neha Sharma",
          outcome:
            "The booking flow became much easier for patients, and our front desk now spends less time clarifying appointment details.",
          placeholder: false,
          rating: 4,
        },
      ],
      faqs: [
        {
          question: "How long does booking setup usually take?",
          answer:
            "Most engagements are scoped within one to two weeks depending on the number of booking rules and customer touchpoints.",
        },
        {
          question: "What is not included?",
          answer:
            "We do not manage your customer communications beyond the booking flow unless that scope is explicitly added.",
        },
        {
          question: "Can the flow be adjusted later?",
          answer:
            "Yes. We keep the structure modular so future booking updates can be added without rebuilding the full journey.",
        },
      ],
    },
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
    {
      valueProposition:
        "Create a storefront your customers can browse clearly, trust quickly, and purchase without friction.",
      trustStats: [
        { label: "Mobile-ready", value: "100%" },
        { label: "Lead response", value: "<24h" },
        { label: "Journey clarity", value: "3-step" },
      ],
      problems: [
        {
          title: "Visitors browse but do not buy",
          description:
            "Your product story is not enough to remove hesitation or guide the next action.",
        },
        {
          title: "Low trust in the checkout path",
          description:
            "Customers are unsure what happens after they click, which makes the pathway feel risky.",
        },
        {
          title: "Too much decision fatigue",
          description:
            "The page layout asks visitors to understand too much before they can take the next step.",
        },
      ],
      process: [
        {
          title: "Discover",
          description:
            "Understand the products, intent, and conversion blockers in the customer journey.",
        },
        {
          title: "Structure",
          description:
            "Create a storefront path that moves the visitor through purchase with confidence.",
        },
        {
          title: "Review",
          description:
            "Refine the product story, layout, and checkout clarity before launch.",
        },
      ],
      differentiators: [
        {
          title: "Customer-first path",
          description:
            "We focus on the real purchase decision rather than decorative complexity.",
        },
        {
          title: "Clear handoff",
          description:
            "The page structure is built so the next user action is visible and safe.",
        },
        {
          title: "Growth-minded structure",
          description:
            "Your store is organised so future campaign pages and offers can slot in cleanly.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 18000,
          highlighted: false,
          features: [
            "Storefront layout",
            "Product highlights",
            "Responsive design",
          ],
        },
        {
          tier: "standard",
          price: 26000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Product page polish",
            "Checkout-readiness review",
          ],
        },
        {
          tier: "premium",
          price: 36000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Conversion QA",
            "Variant-ready catalog structure",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome: "Campaign storefront readied for live selling",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "What is the typical timeline?",
          answer:
            "It depends on the catalogue size and how much product messaging needs to be clarified, but most storefronts move smoothly through a short design and build window.",
        },
        {
          question: "Does this include payment integration?",
          answer:
            "Payment and checkout specifics can be included when the scope is clearly defined and the dependencies are known.",
        },
        {
          question: "Can the store be expanded later?",
          answer:
            "Yes. The structure is designed to support extra product pages, campaigns, and future offer variants without a full redesign.",
        },
      ],
    },
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
    {
      valueProposition:
        "Keep customer conversations responsive while your team focuses on the highest-value work.",
      trustStats: [
        { label: "Automations built", value: "3+" },
        { label: "Average reply", value: "Instant" },
        { label: "Lead routing", value: "Custom" },
      ],
      problems: [
        {
          title: "Slow first response",
          description:
            "Customers ask simple questions, but the team is too busy to reply at the speed they expect.",
        },
        {
          title: "Repeated follow-ups",
          description:
            "The same questions get answered manually over and over, which slows down the team.",
        },
        {
          title: "Leads fall through the cracks",
          description:
            "When a customer enquiry is not guided properly, the best opportunities become harder to follow up on.",
        },
      ],
      process: [
        {
          title: "Map",
          description:
            "Identify the most common customer questions and the right response flow.",
        },
        {
          title: "Automate",
          description:
            "Build the conversation path with clear qualification and next-step logic.",
        },
        {
          title: "Review",
          description:
            "Validate the flow against your real customer behavior before launch.",
        },
      ],
      differentiators: [
        {
          title: "Conversation design",
          description:
            "We structure WhatsApp journeys around business intent, not just canned replies.",
        },
        {
          title: "Lead handoff clarity",
          description:
            "Qualified enquiries are routed with explicit next actions instead of generic follow-ups.",
        },
        {
          title: "Simple ownership",
          description:
            "You get a practical system your team can understand and maintain without extra complexity.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 15000,
          highlighted: false,
          features: [
            "Template conversation setup",
            "Auto reply rules",
            "Service team routing",
          ],
        },
        {
          tier: "standard",
          price: 22000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Lead qualification path",
            "Fallback handoff logic",
          ],
        },
        {
          tier: "premium",
          price: 32000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "API workflow support",
            "Multi-stage customer journey",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome: "Lead response consistency improved across enquiries",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "Can this handle multiple customer journeys?",
          answer:
            "Yes. We can design separate flows for common enquiry categories, lead qualification, and common service updates.",
        },
        {
          question: "Is support included after launch?",
          answer:
            "Post-launch support can be scoped as a separate follow-up block or left as a simple maintenance add-on.",
        },
        {
          question:
            "What if our current team process varies by business branch?",
          answer:
            "We can map the path around the real workflow so your WhatsApp system remains practical rather than generic.",
        },
      ],
    },
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
    {
      valueProposition:
        "Make ad traffic feel instantly relevant by landing on a page that carries one clear action and a confident next step.",
      trustStats: [
        { label: "Campaign focus", value: "1 action" },
        { label: "Response window", value: "24-48h" },
        { label: "Pages aligned", value: "SEO + CTA" },
      ],
      problems: [
        {
          title: "Traffic without clarity",
          description:
            "People arrive with intent, but they still have to work out what to do next on your page.",
        },
        {
          title: "Mixed message hierarchy",
          description:
            "Different offers and arguments compete, which reduces confidence and weakens the action you want.",
        },
        {
          title: "Weak conversion intent",
          description:
            "Your current landing experience leaves the decision too open-ended for the audience to act confidently.",
        },
      ],
      process: [
        {
          title: "Frame",
          description:
            "Clarify the campaign message, audience intent, and action goal.",
        },
        {
          title: "Design",
          description:
            "Create a focused hero area and supporting layout around the core CTA.",
        },
        {
          title: "Launch",
          description:
            "Publish the page and make sure the action path remains visible and simple.",
        },
      ],
      differentiators: [
        {
          title: "Campaign clarity",
          description:
            "We design the message to reduce hesitation and make the next action obvious.",
        },
        {
          title: "Readable conversion flow",
          description:
            "Every section supports one clear purpose instead of acting like a full brochure.",
        },
        {
          title: "Direct feedback loop",
          description:
            "You see exactly what gets improved before publication, rather than guessing after the fact.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 9000,
          highlighted: false,
          features: [
            "Landing page layout",
            "Responsive design",
            "CTA placement",
          ],
        },
        {
          tier: "standard",
          price: 14000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Offer clarity block",
            "Conversion-focused copy structure",
          ],
        },
        {
          tier: "premium",
          price: 21000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Ad copy alignment",
            "Launch support review",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome: "Campaign page clarified and pushed the next action faster",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "Can we use a landing page for a single offer only?",
          answer:
            "Yes. That is the strongest use case for this service and the cleaner way to keep the message aligned to the action you want.",
        },
        {
          question: "Do you support post-launch edits?",
          answer:
            "Small edits can be included in a follow-up support scope when you need to adjust the message after the launch.",
        },
        {
          question: "Can we align this page to an ad or campaign?",
          answer:
            "Yes. The page structure is designed to carry a single campaign angle and keep the next action visible from the first screen.",
        },
      ],
    },
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
    {
      valueProposition:
        "Design a clear, trusted online presence that helps the right customer take the next step with confidence.",
      trustStats: [
        { label: "Projects with clarity", value: "1:1" },
        { label: "Launch support", value: "Included" },
        { label: "Response within", value: "24h" },
      ],
      problems: [
        {
          title: "Professional credibility gap",
          description:
            "Your current website does not feel polished enough to support trust at the first touchpoint.",
        },
        {
          title: "Customer journey confusion",
          description:
            "Visitors understand your business less clearly than they should, which makes action harder to complete.",
        },
        {
          title: "Unclear growth path",
          description:
            "The site is not structured to carry future offers, campaign pages, or growing customer expectations.",
        },
      ],
      process: [
        {
          title: "Discovery",
          description:
            "Understand your customer goals, current friction, and the most important page priority.",
        },
        {
          title: "Design",
          description:
            "Shape the structure and visual language so the experience feels cohesive and credible.",
        },
        {
          title: "Review",
          description:
            "Refine the final site journey before it goes live with clear business alignment.",
        },
      ],
      differentiators: [
        {
          title: "Practical business mapping",
          description:
            "We structure the site around the real customer decision rather than abstract visual style.",
        },
        {
          title: "Defined delivery steps",
          description:
            "You can see how the work moves from planning through launch and review without hidden handoffs.",
        },
        {
          title: "Modern but useful",
          description:
            "The design stays polished and readable so the site supports persuasion instead of distraction.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 25000,
          highlighted: false,
          features: [
            "Homepage + primary service page",
            "Responsive structure",
            "SEO-ready page foundation",
          ],
        },
        {
          tier: "standard",
          price: 34000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Expanded page structure",
            "Lead funnel clarity",
          ],
        },
        {
          tier: "premium",
          price: 48000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Custom interactions",
            "Launch assistance and guidance",
          ],
        },
      ],
      testimonials: [
        {
          name: "Amit Verma",
          outcome:
            "The new website explains our services clearly and gives visitors a smoother path to enquire without feeling overwhelmed.",
          placeholder: false,
          rating: 4,
        },
      ],
      faqs: [
        {
          question: "Does this include a full brand refresh?",
          answer:
            "Not by default. We focus on the digital structure and page clarity most needed to make the business feel reliable and easy to understand.",
        },
        {
          question: "What happens after the website goes live?",
          answer:
            "We can support a small launch review window and then continue with focused follow-up if you want a longer growth scope.",
        },
        {
          question: "Can you work with our existing brand assets?",
          answer:
            "Yes. The design and copy approach can fit around the assets you already have rather than forcing a total redesign.",
        },
      ],
    },
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
    {
      valueProposition:
        "Make your WhatsApp presence look credible, helpful, and easy for customers to use from the first message.",
      trustStats: [
        { label: "Setup time", value: "1-2 days" },
        { label: "Response quality", value: "Clear" },
        { label: "Follow-up speed", value: "Faster" },
      ],
      problems: [
        {
          title: "Unclear customer first impression",
          description:
            "The current WhatsApp profile does not make the business feel credible or easy to respect.",
        },
        {
          title: "Basic response gaps",
          description:
            "Customers still have to ask the same questions because your business is not clearly prepared to answer them.",
        },
        {
          title: "Team inconsistency",
          description:
            "Different staff members answer in different ways, which creates confusion and weakens trust.",
        },
      ],
      process: [
        {
          title: "Audit",
          description:
            "Review the current brand tone, profile content, and customer conversation journey.",
        },
        {
          title: "Structure",
          description:
            "Set up the profile and message flow around the exact customer intent you want to support.",
        },
        {
          title: "Launch",
          description:
            "Publish the improved conversation foundation and align the team on follow-up expectations.",
        },
      ],
      differentiators: [
        {
          title: "Practical brand tone",
          description:
            "We make the WhatsApp profile match your business in a way customers can trust immediately.",
        },
        {
          title: "Response consistency",
          description:
            "A consistent first-response experience keeps your business easier to work with.",
        },
        {
          title: "Simple operational setup",
          description:
            "The final structure is easy for your team to understand and hand over to daily use.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 6000,
          highlighted: false,
          features: [
            "Brand-ready profile setup",
            "Message template direction",
            "Basic workflow notes",
          ],
        },
        {
          tier: "standard",
          price: 9500,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Conversation flow guidance",
            "Response path alignment",
          ],
        },
        {
          tier: "premium",
          price: 14000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Expanded team workflow design",
            "Launch review support",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome:
            "WhatsApp brand presence made more reliable from the first reply",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "Can this work without a full automation setup?",
          answer:
            "Yes. A professional WhatsApp foundation can be set up even when you want to start with a modest, more guided flow.",
        },
        {
          question: "Will we have templates ready to use?",
          answer:
            "Yes, message templates are part of the setup when they support your business response process.",
        },
        {
          question: "What if we need changes after launch?",
          answer:
            "A follow-up support scope can be added for revisions to response wording or team use patterns.",
        },
      ],
    },
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
    {
      valueProposition:
        "Connect your customer conversations to your tools so updates and handoffs move without extra manual effort.",
      trustStats: [
        { label: "Workflow depth", value: "Connected" },
        { label: "Message flow", value: "Scalable" },
        { label: "Support path", value: "Guided" },
      ],
      problems: [
        {
          title: "Manual updates keep piling up",
          description:
            "Customer conversations still have to be moved between tools, which wastes time and adds delays.",
        },
        {
          title: "Inconsistent message handling",
          description:
            "The current flow depends heavily on team memory, making communication less predictable for customers.",
        },
        {
          title: "Technical uncertainty",
          description:
            "The business needs a better connection model, but technical implementation feels too abstract or unclear.",
        },
      ],
      process: [
        {
          title: "Plan",
          description:
            "Mapping the exact workflow, ownership, and data handoff expected from the customer conversation.",
        },
        {
          title: "Implement",
          description:
            "Build the API and template path to connect messaging with your existing business tools.",
        },
        {
          title: "Review",
          description:
            "Confirm the final handoff model and team usage before the integration is fully used.",
        },
      ],
      differentiators: [
        {
          title: "Technical clarity",
          description:
            "We explain the integration setup in business terms so your team understands the handoff and purpose.",
        },
        {
          title: "Reliable workflow design",
          description:
            "The connection is built around a real operational need instead of a loosely defined automation idea.",
        },
        {
          title: "Drop-in readiness",
          description:
            "The process is structured so the team can adopt and maintain the workflow without constant rework.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 30000,
          highlighted: false,
          features: [
            "API blueprint",
            "Message template mapping",
            "Connection guidance",
          ],
        },
        {
          tier: "standard",
          price: 42000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Workflow validation",
            "Team handoff alignment",
          ],
        },
        {
          tier: "premium",
          price: 56000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Advanced automation recipe",
            "Support review window",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome:
            "Connected customer communication path reduced repetitive coordination",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "Does this require us to change our current tools?",
          answer:
            "In most cases, the integration is designed to connect around the platform you already use rather than forcing a total platform change.",
        },
        {
          question: "What is the difference between basic and premium scope?",
          answer:
            "The premium scope adds a wider operational handoff, more workflow coverage, and a better support window for the teams adopting the system.",
        },
        {
          question: "Can we revise the integration after launch?",
          answer:
            "Yes. When a workflow changes, the same connection model can be revised without rebuilding the entire system from scratch.",
        },
      ],
    },
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
    {
      valueProposition:
        "Remove routine drag from your day so your team can focus on the actions that actually drive customer value.",
      trustStats: [
        { label: "Workflow mapping", value: "Process" },
        { label: "Follow-up speed", value: "Faster" },
        { label: "Operational clarity", value: "Clear" },
      ],
      problems: [
        {
          title: "Too many repetitive tasks",
          description:
            "The team spends hours doing the same status updates, reminders, and coordination handoffs every week.",
        },
        {
          title: "Customer follow-up inconsistency",
          description:
            "A lot depends on individual memory, which makes response quality harder to maintain as demand grows.",
        },
        {
          title: "Workload pressure",
          description:
            "With too many manual steps, the business becomes slower to respond and more difficult to scale.",
        },
      ],
      process: [
        {
          title: "Audit",
          description:
            "Identify the repetitive business workflow that creates the biggest time loss.",
        },
        {
          title: "Design",
          description:
            "Map the task flow and define the clean automation step for each handoff or reminder.",
        },
        {
          title: "Launch",
          description:
            "Operate the improved workflow with monitoring and a clear review plan after rollout.",
        },
      ],
      differentiators: [
        {
          title: "Workflow clarity",
          description:
            "We keep the automation tied to a real operating process instead of a broad, vague concept.",
        },
        {
          title: "Operational fit",
          description:
            "Each step is designed for the way your team already works rather than forcing abstract process changes.",
        },
        {
          title: "Practical support",
          description:
            "The result stays focused on reducing friction and improving repeatability, not just adding complexity.",
        },
      ],
      pricing: [
        {
          tier: "basic",
          price: 20000,
          highlighted: false,
          features: [
            "Workflow mapping",
            "Automation scope review",
            "Operational handoff notes",
          ],
        },
        {
          tier: "standard",
          price: 30000,
          highlighted: true,
          features: [
            "Everything in Basic",
            "Notification logic",
            "Team handoff refinement",
          ],
        },
        {
          tier: "premium",
          price: 42000,
          highlighted: false,
          features: [
            "Everything in Standard",
            "Advanced rule handling",
            "Launch support review",
          ],
        },
      ],
      testimonials: [
        {
          name: "Placeholder client",
          outcome:
            "Manual operations process made more dependable and easier to run",
          placeholder: true,
        },
      ],
      faqs: [
        {
          question: "Can we start with a smaller workflow only?",
          answer:
            "Yes. The most practical automation path is usually one high-friction process at a time, then expand once the pattern proves useful.",
        },
        {
          question: "What is usually included after launch?",
          answer:
            "We can keep a short post-launch review window to validate the flow and capture small adjustments if they are needed.",
        },
        {
          question: "Will this reduce the need for manual coordination?",
          answer:
            "Yes, the objective is to remove unnecessary manual effort and keep handoffs predictable across the team.",
        },
      ],
    },
  ),
];

export const SERVICE_SLUGS = SERVICES_DATA.map(({ slug }) => slug);

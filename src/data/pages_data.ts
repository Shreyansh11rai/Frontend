export interface InformationalPageData {
  description: string;
  eyebrow: string;
  title: string;
  sections: readonly { title: string; description: string }[];
}

export const PAGES_DATA = {
  about: {
    eyebrow: "About XYZ",
    title: "Digital work should feel clear, useful, and ready to grow.",
    description: "We help ambitious businesses remove friction from the moments that matter most to their customers and teams.",
    sections: [
      { title: "Start with the real problem", description: "We identify the customer decision or operational bottleneck worth improving first." },
      { title: "Make the next step obvious", description: "Every journey is shaped around helpful information and clear actions." },
      { title: "Build for ongoing use", description: "We leave teams with practical foundations they can confidently use and extend." },
    ],
  },
  "contact-us": {
    eyebrow: "Contact us",
    title: "Tell us what is getting in the way of your next customer win.",
    description: "Share the opportunity you want to unlock, and we will help you identify a useful way forward.",
    sections: [
      { title: "Discovery conversation", description: "Start with a focused discussion about your customers, team, and near-term goal." },
      { title: "Clear recommendation", description: "Receive a practical scope that explains what to prioritise and why." },
      { title: "Confident next steps", description: "Decide how to move forward with the context you need." },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Useful answers before we start working together.",
    description: "A short overview of how we shape the right digital service around your immediate business need.",
    sections: [
      { title: "How do we choose a service?", description: "We start with the outcome you need, then recommend the smallest useful scope." },
      { title: "Can services work together?", description: "Yes. A website, customer conversations, and operational workflows are designed to connect." },
      { title: "What do we need to provide?", description: "Your goals, current process, customer context, and the people who will own the work." },
    ],
  },
} as const satisfies Record<string, InformationalPageData>;

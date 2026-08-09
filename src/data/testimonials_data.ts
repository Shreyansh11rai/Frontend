export interface HomeTestimonialData {
  name: string;
  businessType: string;
  rating: 4 | 5;
  quote: string;
  image?: {
    src: string;
    alt: string;
  };
}

export const HOME_TESTIMONIALS: readonly HomeTestimonialData[] = [
  {
    name: "Shivam Rai",
    businessType: "Restaurant owner",
    rating: 5,
    quote:
      "The website made our restaurant feel more dependable online. Customers now understand the menu, timing, and enquiry path much faster.",
  },
  {
    name: "Gopesh Singh",
    businessType: "Automotive agency",
    rating: 4,
    quote:
      "The service pages helped us explain our automotive work clearly and brought better qualified enquiries from local customers.",
    image: {
      src: "/testimonials/gopesh-singh-test-image.png",
      alt: "Gopesh Singh",
    },
  },
] as const;

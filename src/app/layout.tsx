import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { GlobalEnquiryWidget } from "@/components/widgets/global-enquiry-widget";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  keywords: [
    "digital services",
    "web design",
    "business automation",
    "WhatsApp automation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
  },
  twitter: {
    card: "summary",
    title: brand.name,
    description: brand.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  category: "digital services",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-h-screen relative bg-canvas font-sans text-foreground">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

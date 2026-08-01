import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { brand } from "@/config/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  applicationName: brand.name,
  robots: { index: true, follow: true },
  category: "digital services",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} min-h-screen bg-canvas font-sans text-foreground`}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Khushi Enterprises | Solar O&M & Asset Management",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Engineering Services",
  keywords: [
    "solar O&M company Madhya Pradesh",
    "solar asset management",
    "solar plant maintenance",
    "solar O&M Indore",
    "solar plant monitoring",
    "preventive maintenance solar plant",
    "solar installation Madhya Pradesh",
    "solar O&M services Pithampur",
    "industrial electrical work",
    "industrial fabrication work",
  ],
  robots: {
    index: true,
    follow: true,
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0f1c2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${barlow.variable}`}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 focus:rounded-[3px] focus:bg-navy-900 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>

        <Header />

        <main id="content" className="flex-1">
          {children}
        </main>

        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}


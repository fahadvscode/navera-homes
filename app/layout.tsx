import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { Nav } from "@/components/Nav";
import { Tracking } from "@/components/Tracking";
import { SITE_URL } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Navera at Mayfield Village Brampton | VIP Access", template: "%s" },
  description:
    "Navera at Mayfield Village: 38' and 41' detached homes by Digreen Homes at Countryside Dr & Torbram Rd, Brampton. From $999,999 per builder. Register free.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Navera at Mayfield Village — Independent Information",
    locale: "en_CA",
    url: SITE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  verification: {
    google: "[GSC_VERIFICATION]",
    other: { "msvalidate.01": "[BING_VERIFICATION]" },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-CA" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-surface font-sans text-text-primary antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Tracking />
        <CookieNotice />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/section/nav";
import Footer from "@/components/craft/section/footer";
import "./globals.css";
import fjord from "@/fjord.config";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: fjord.site_title,
  description: fjord.site_description,
  applicationName: fjord.site_name,
  referrer: "origin-when-cross-origin",
  keywords: fjord.keywords,
  metadataBase: new URL(fjord.site_domain),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: fjord.site_title,
    description: fjord.site_description,
    url: fjord.site_domain,
    siteName: fjord.site_name,
    images: [
      {
        url: `${fjord.site_domain}/opengraph-image.jpg`, // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: fjord.site_description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // manifest: `${fjord.site_domain}/manifest.json`, // Must be an absolute URL
  twitter: {
    card: "summary_large_image",
    title: fjord.site_title,
    description: fjord.site_description,
    images: [`${fjord.site_domain}/opengraph-image.jpg`], // Must be an absolute URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={`${manrope.variable}`}>
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}

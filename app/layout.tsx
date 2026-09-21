import type { Metadata } from "next";
import { siteConfig } from "@/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Enrique Samz | Digital Marketing Specialist & Content Creator",
    template: "%s | Enrique Samz",
  },
  description:
    "Enrique Samz is a digital marketing specialist and content creator in Trivandrum, Kerala, India, focused on SEO, content and personal branding.",
  authors: [{ name: "Enrique Samz" }],
  creator: "Enrique Samz",
  openGraph: {
    type: "website",
    siteName: "Enrique Samz",
    title: "Enrique Samz | Digital Marketing Specialist & Content Creator",
    description:
      "Digital marketing specialist and content creator based in Trivandrum, Kerala, India.",
    locale: "en_IN",
    images: [
      {
        url: siteConfig.image,
        alt: "Enrique Samz, digital marketing specialist and content creator",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Enrique Samz | Digital Marketing Specialist & Content Creator",
    description:
      "Digital marketing specialist and content creator based in Trivandrum, Kerala, India.",
    images: [siteConfig.image],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
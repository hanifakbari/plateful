import type { Metadata } from "next";
import "../assets/styles/globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: {
    default: "Plateful — Exclusive Dining Deals in Indonesia",
    template: "%s | Plateful",
  },
  description:
    "Discover and book exclusive dining deals at 1,000+ premium restaurants across Jakarta, Bali & Bandung. All You Can Eat, Set Menu, and Exclusive packages at unbeatable prices.",
  keywords: [
    "dining deals Indonesia",
    "restaurant deals Jakarta",
    "promo makan Jakarta",
    "all you can eat Jakarta",
    "set menu Jakarta",
    "exclusive dining Indonesia",
    "restaurant booking Indonesia",
    "food deals Bali",
    "Plateful app",
  ],
  authors: [{ name: "Plateful" }],
  creator: "Plateful",
  openGraph: {
    type: "website",
    locale: "en_ID",
    url: "",
    siteName: "Plateful",
    title: "Plateful — Exclusive Dining Deals in Indonesia",
    description:
      "Discover and book exclusive dining deals at 1,000+ premium restaurants across Jakarta, Bali & Bandung.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Plateful — Exclusive Dining Deals in Indonesia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

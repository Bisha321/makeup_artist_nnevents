import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Devika Mahakumara | Professional Makeup & Costume Artist",
  description:
    "Professional Makeup & Costume Artistry for bridal, party, fashion, and special events. Elevating natural beauty with a touch of quiet luxury.",
  keywords: [
    "makeup artist",
    "bridal makeup",
    "costume artist",
    "fashion makeup",
    "party makeup",
    "Sri Lanka",
    "Devika Mahakumara",
  ],
  authors: [{ name: "Devika Mahakumara" }],
  openGraph: {
    title: "Devika Mahakumara | Professional Makeup & Costume Artist",
    description:
      "Professional Makeup & Costume Artistry for bridal, party, fashion, and special events.",
    type: "website",
    locale: "en_US",
    url: "https://devikamahakumara.com",
    siteName: "Devika Mahakumara",
    images: [
      {
        url: "https://devikamahakumara.com/images/portfolio/OG_IMG.webp",
        width: 1536,
        height: 1024,
        alt: "Devika Mahakumara - Professional Makeup & Costume Artist",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devika Mahakumara | Professional Makeup & Costume Artist",
    description:
      "Professional Makeup & Costume Artistry for bridal, party, fashion, and special events.",
    images: ["https://devikamahakumara.com/images/portfolio/OG_IMG.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Devika Mahakumara",
    description:
      "Professional Makeup & Costume Artistry for bridal, party, fashion, and special events.",
    url: "https://devikamahakumara.com",
    telephone: "0764154407",
    email: "dewikamahakumara29@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Colombo",
      addressCountry: "LK",
    },
    sameAs: [
      "https://www.facebook.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
      "https://www.tiktok.com",
    ],
    priceRange: "$$",
    openingHours: "Mo-Sa 09:00-18:00",
  };

  return (
    <html lang="en" className={`${playfairDisplay.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

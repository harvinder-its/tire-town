import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
  description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications. Fast quotes, expert support, Canadian shipping.",
  keywords: ["CEAT tires", "semi-truck tires", "trailer tires", "commercial tires", "truck tires Canada", "long haul tires", "CEAT dealer"],
  authors: [{ name: "Tire Town Distributors Ltd." }],
  openGraph: {
    title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
    description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
    url: "https://tiretown.ca/",
    siteName: "Tire Town Distributors",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tire Town Distributors Ltd. — Authorized CEAT Semi-Truck & Trailer Tires",
    description: "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
  },
  alternates: {
    canonical: "https://tiretown.ca/",
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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Tire Town Distributors Ltd.",
              "image": "https://tiretown.ca/images/logo.png",
              "description": "Sole authorized CEAT dealer in Canada. Premium semi-truck & trailer tires for long haul, drive & all-wheel applications.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CA"
              },
              "telephone": "+1-403-969-3600",
              "email": "info@tiretown.ca",
              "url": "https://tiretown.ca/",
              "priceRange": "$$",
              "openingHours": "Mo-Fr 08:00-17:00",
              "areaServed": {
                "@type": "Country",
                "name": "Canada"
              }
            })
          }}
        />
      </head>
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

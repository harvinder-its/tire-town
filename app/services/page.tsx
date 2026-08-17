import type { Metadata } from "next";
import ServicesHero from "../components/ServicesHero";
import ServicesList from "../components/ServicesList";
import ServicesFeatures from "../components/ServicesFeatures";
import ServicesFAQ from "../components/ServicesFAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Truck Repair Services — PM, General & Engine/Transmission Repair | Tire Town Distributors",
  description:
    "Semi-truck & trailer repair in Canada: Truck PM (preventive maintenance), general repair, and engine, transmission & electrical diagnostics. Certified technicians, fast turnaround, fleet accounts.",
  keywords: [
    "truck repair Canada",
    "truck PM maintenance",
    "semi-truck general repair",
    "diesel engine repair",
    "transmission repair",
    "truck electrical repair",
    "fleet truck maintenance",
    "trailer repair",
    "DOT inspection Canada",
    "CVSA inspection",
  ],
  authors: [{ name: "Tire Town Distributors Ltd." }],
  openGraph: {
    title: "Truck Repair Services — PM, General & Engine/Transmission Repair",
    description:
      "Semi-truck & trailer repair in Canada: Truck PM (preventive maintenance), general repair, and engine, transmission & electrical diagnostics.",
    url: "https://tiretown.ca/services",
    siteName: "Tire Town Distributors",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Truck Repair Services — PM, General & Engine/Transmission Repair",
    description:
      "Semi-truck & trailer repair in Canada: Truck PM (preventive maintenance), general repair, and engine, transmission & electrical diagnostics.",
  },
  alternates: {
    canonical: "https://tiretown.ca/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Truck Repair & Maintenance",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Tire Town Distributors Ltd.",
    "telephone": "+1-403-969-3600",
    "email": "info@tiretown.ca",
    "url": "https://tiretown.ca/",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "CA",
    },
  },
  "areaServed": {
    "@type": "Country",
    "name": "Canada",
  },
  "url": "https://tiretown.ca/services",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Truck Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Truck PM Repairs",
          "description": "CVSA/DOT-aligned preventive maintenance for semi-trucks and trailers, including inspections, fluids, brakes, and compliance checks.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "General Repair",
          "description": "Full-service repair for semi-trucks and trailers, including brakes, suspension, exhaust, cooling systems, and DOT inspections.",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Engine, Transmission & Electrical Repair",
          "description": "Diagnostics and repair for diesel engines, transmissions, and electrical systems, including ECM/ECU fault codes and wiring.",
        },
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://tiretown.ca/",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Truck Repair Services",
      "item": "https://tiretown.ca/services",
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServicesHero />
      <ServicesList />
      <ServicesFeatures />
      <ServicesFAQ />
      <Contact />
      <Footer />
    </main>
  );
}

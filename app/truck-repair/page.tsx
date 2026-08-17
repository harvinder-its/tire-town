import type { Metadata } from 'next';
import TruckRepairHero from '../components/truck-repair/TruckRepairHero';
import EmergencyCtaStrip from '../components/truck-repair/EmergencyCtaStrip';
import TruckServices from '../components/truck-repair/TruckServices';
import TruckDownProblems from '../components/truck-repair/TruckDownProblems';
import WhyTireTown from '../components/truck-repair/WhyTireTown';
import AlbertaCoverage from '../components/truck-repair/AlbertaCoverage';
import TireSupport from '../components/truck-repair/TireSupport';
import ServiceProcess from '../components/truck-repair/ServiceProcess';
import FleetSection from '../components/truck-repair/FleetSection';
import TruckFAQ from '../components/truck-repair/TruckFAQ';
import { truckFaqs } from '../components/truck-repair/truckFaqData';
import FinalCta from '../components/truck-repair/FinalCta';
import LeadForm from '../components/truck-repair/LeadForm';
import MobileStickyCta from '../components/truck-repair/MobileStickyCta';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Truck Repair & Roadside Assistance Alberta | Tire Town',
  description:
    'Truck repair, roadside assistance, diagnostics, DEF/DPF service, engine repair, welding and tires across Calgary, Edmonton and Grande Prairie, Alberta.',
  keywords: [
    'truck repair Alberta',
    'mobile truck repair',
    'truck roadside assistance',
    'semi truck repair Calgary',
    'truck repair Edmonton',
    'truck repair Grande Prairie',
    'DEF DPF service',
    'truck derate diagnostics',
    'commercial truck tires',
  ],
  alternates: {
    canonical: 'https://tiretown.ca/truck-repair',
  },
  openGraph: {
    title: 'Truck Repair & Roadside Assistance Alberta | Tire Town',
    description:
      'Truck repair, roadside assistance, diagnostics, DEF/DPF service, engine repair, welding and tires across Calgary, Edmonton and Grande Prairie, Alberta.',
    url: 'https://tiretown.ca/truck-repair',
    siteName: 'Tire Town Distributors',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Truck Repair & Roadside Assistance Alberta | Tire Town',
    description:
      'Truck repair, roadside assistance, diagnostics, DEF/DPF service, engine repair, welding and tires across Calgary, Edmonton and Grande Prairie, Alberta.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Truck Repair & Roadside Assistance',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Tire Town Distributors Ltd.',
    telephone: '+1-403-969-3600',
    email: 'info@tiretown.ca',
    url: 'https://tiretown.ca/',
  },
  areaServed: [
    { '@type': 'City', name: 'Calgary' },
    { '@type': 'City', name: 'Edmonton' },
    { '@type': 'City', name: 'Grande Prairie' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
  ],
  description:
    'Truck repair, roadside assistance, diagnostics, DEF/DPF service, engine repair, belt and shaft repair, derate diagnostics, welding, and commercial truck tire service.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: truckFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function TruckRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen pb-16 md:pb-0">
        <TruckRepairHero />
        <EmergencyCtaStrip />
        <TruckServices />
        <TruckDownProblems />
        <WhyTireTown />
        <AlbertaCoverage />
        <TireSupport />
        <ServiceProcess />
        <FleetSection />
        <TruckFAQ />
        <LeadForm />
        <FinalCta />
        <Footer />
      </main>
      <MobileStickyCta />
    </>
  );
}

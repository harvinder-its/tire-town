import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Thank You | Tire Town Distributors',
  description: 'Thanks for contacting Tire Town Distributors. We received your request and will respond within one business day.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Image
              src="/images/final-logo.png"
              alt="Tire Town Distributors"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <span className="hidden h-10 w-px bg-gray-700 sm:block" aria-hidden="true" />
            <Image
              src="/images/logo_ceat.png"
              alt="CEAT Specialty"
              width={140}
              height={50}
              className="h-10 w-auto"
            />
          </div>

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Request Received</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Thanks for reaching out. We&apos;ve received your request and will respond
            within one business day. For anything urgent, call us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14039693600"
              className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Call +1 (403) 969-3600
            </a>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

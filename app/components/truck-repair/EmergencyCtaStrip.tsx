'use client';

import { trackEvent } from '@/lib/analytics';

export default function EmergencyCtaStrip() {
  return (
    <section className="bg-yellow-500 px-6 py-6 sm:py-7">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="text-center sm:text-left">
          <p className="text-black font-bold text-xl sm:text-2xl">
            Truck Down? Get the Right Repair Help.
          </p>
          <p className="text-black/80 text-sm sm:text-base mt-1">
            Tell us what&apos;s happening and where your truck is — we&apos;ll help you
            figure out the right next step.
          </p>
        </div>
        <a
          href="tel:+14039693600"
          onClick={() => trackEvent('truck_repair_phone_click', { location: 'emergency_strip' })}
          className="shrink-0 px-8 py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
        >
          Call Now
        </a>
      </div>
    </section>
  );
}

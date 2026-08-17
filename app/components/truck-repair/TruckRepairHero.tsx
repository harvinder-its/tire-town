'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

export default function TruckRepairHero() {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black px-6 pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/60 text-sm text-gray-300"
        >
          <span className="h-2 w-2 rounded-full bg-yellow-500" />
          Serving Calgary, Edmonton &amp; Grande Prairie, Alberta
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Truck Repair &amp; Roadside Assistance{' '}
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            in Alberta
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          From roadside repair and diagnostics to DEF/DPF service, engine work,
          welding and tires — Tire Town helps get commercial trucks back in
          service across Alberta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <a
            href="tel:+14039693600"
            onClick={() => trackEvent('truck_repair_phone_click', { location: 'hero' })}
            className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Call Now — +1 (403) 969-3600
          </a>
          <a
            href="#request-service"
            onClick={() => trackEvent('truck_repair_cta_click', { label: 'request_service', location: 'hero' })}
            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Request Service
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-400"
        >
          <span className="flex items-center gap-2">
            <CheckIcon /> Commercial &amp; heavy truck focus
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> Diagnostics through to repair
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> Alberta-based
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-yellow-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

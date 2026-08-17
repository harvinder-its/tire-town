'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

export default function FinalCta() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black border-t border-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Need Truck Repair or Roadside Assistance?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-gray-400 mb-4"
        >
          When your truck needs attention, contact Tire Town for service
          support across Calgary, Edmonton, Grande Prairie and the surrounding
          areas of Alberta.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm text-gray-500 mb-8"
        >
          Lines open Monday–Friday, 8am–5pm.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+14039693600"
            onClick={() => trackEvent('truck_repair_phone_click', { location: 'final_cta' })}
            className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Call Tire Town
          </a>
          <a
            href="#request-service"
            onClick={() => trackEvent('truck_repair_cta_click', { label: 'request_service', location: 'final_cta' })}
            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Request Truck Service
          </a>
        </motion.div>
      </div>
    </section>
  );
}

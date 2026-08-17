'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

const audiences = [
  'Fleet operators',
  'Trucking companies',
  'Contractors',
  'Construction businesses',
  'Delivery companies',
  'Commercial vehicle operators',
];

export default function FleetSection() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-black">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Truck Repair Support for Alberta Businesses
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Downtime affects schedules, deliveries, jobs and operating costs.
            Tire Town works as a practical service partner for businesses that
            depend on their trucks staying on the road.
          </p>
          <a
            href="tel:+14039693600"
            onClick={() => trackEvent('truck_repair_phone_click', { location: 'fleet_section' })}
            className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            Call to Discuss Your Fleet
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 gap-3"
        >
          {audiences.map((audience) => (
            <div
              key={audience}
              className="bg-gray-950 border border-gray-800 rounded-lg px-4 py-4 text-center text-sm font-medium text-gray-200"
            >
              {audience}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const items = [
  'Commercial truck tires',
  'Tire inspection',
  'Tire replacement',
  'Roadside tire assistance',
  'Tire-related breakdown support',
];

export default function TireSupport() {
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
            Truck Repair &amp; Tire Support From One Provider
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            A tire problem is often part of a bigger truck breakdown or service
            situation. As the sole authorized CEAT dealer in Canada, Tire Town
            can address tire issues alongside the rest of the repair — steer,
            drive and trailer positions included.
          </p>
          <Link
            href="/#products"
            className="inline-block text-white font-semibold hover:underline"
          >
            View our commercial tire lineup →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gray-950 border border-gray-800 rounded-lg p-7"
        >
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-200">
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

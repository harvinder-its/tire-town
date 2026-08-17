'use client';

import { motion } from 'framer-motion';

const points = [
  {
    title: 'Truck-Focused Service',
    description: 'Built around commercial and heavy vehicle needs, not ordinary passenger-car repair.',
  },
  {
    title: 'Mobile & Roadside Support',
    description: 'Get assistance where your truck is located, in addition to scheduled service.',
  },
  {
    title: 'One Call for Multiple Needs',
    description: 'Repair, diagnostics, tires and related service — without having to call around.',
  },
  {
    title: 'Alberta Coverage',
    description: 'Supporting drivers and businesses across Calgary, Edmonton and Grande Prairie.',
  },
  {
    title: 'Practical Repair Solutions',
    description: "Focused on diagnosing the actual problem and getting your truck back in service.",
  },
];

export default function WhyTireTown() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          Why Choose Tire Town
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-yellow-500/40 text-yellow-500 font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-2">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

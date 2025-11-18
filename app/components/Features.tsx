'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: '✓',
    title: 'Authentic CEAT Tires',
    description: 'Factory-authorized in Canada',
  },
  {
    icon: '📊',
    title: 'Optimized for Mileage',
    description: 'Superior retreadability',
  },
  {
    icon: '❄️',
    title: 'Weather-Resistant',
    description: 'Built for Canadian conditions',
  },
  {
    icon: '🚚',
    title: 'Fleet Pricing',
    description: 'Nationwide shipping available',
  },
  {
    icon: '💡',
    title: 'Expert Recommendations',
    description: 'Tire matching by application',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-black scroll-mt-[210px]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Fleets Choose Tire Town
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

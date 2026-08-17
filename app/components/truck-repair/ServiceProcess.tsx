'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Contact Tire Town',
    description: "Tell us what's happening with your truck and where assistance is needed.",
  },
  {
    number: '2',
    title: 'Diagnose the Problem',
    description: "The right service is determined based on the truck's symptoms and repair needs.",
  },
  {
    number: '3',
    title: 'Get Back on the Road',
    description: 'Complete the necessary service or repair and get the truck moving again.',
  },
];

export default function ServiceProcess() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="text-center relative"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black font-bold text-2xl">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

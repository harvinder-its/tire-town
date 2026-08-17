'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export const servicesFaqs = [
  {
    question: 'What truck makes and models do you repair?',
    answer:
      'We service semi-trucks and trailers across all major makes and models, including PM maintenance, general repair, and engine, transmission & electrical work for owner-operators and fleets alike.',
  },
  {
    question: 'Do you offer scheduled fleet PM programs?',
    answer:
      'Yes. We set up recurring preventive maintenance schedules for fleets so PM services, inspections, and compliance checks happen on time, every time, without you having to track it manually.',
  },
  {
    question: 'Can you perform DOT/CVSA annual inspections?',
    answer:
      'Yes, our general repair service includes DOT and annual safety inspections alongside any repairs needed to bring a truck or trailer into compliance.',
  },
  {
    question: 'How fast can you get my truck back on the road?',
    answer:
      'Turnaround depends on the repair, but we prioritize fleet and breakdown work to minimize downtime, and we keep you updated with a clear diagnosis and repair timeline up front.',
  },
  {
    question: 'Do you work on trailers as well as trucks?',
    answer:
      'Yes. Our general repair and PM services cover trailers as well as trucks, including doors, landing gear, lighting, flooring, and structural repairs.',
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="services-faq" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black scroll-mt-[100px]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Truck Repair FAQs
        </motion.h2>

        <div className="space-y-4">
          {servicesFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-900 transition-colors duration-200"
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-5 bg-gray-900 text-gray-300 text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

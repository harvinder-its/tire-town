'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    question: 'Are these CEAT tyres authentic?',
    answer: 'Yes, we are the sole authorized CEAT distributor in Canada and ship direct from validated inventory.',
  },
  {
    question: 'Do you offer fleet pricing?',
    answer: 'Yes, contact us for custom fleet quotes, volume discounts, and scheduled shipments.',
  },
  {
    question: 'Can you match tires to axle positions?',
    answer: 'Absolutely. We recommend specific CEAT patterns for steer, drive, and trailer positions to maximize life.',
  },
  {
    question: 'What is the typical lead time?',
    answer: 'Most orders ship within 3–7 business days across Canada.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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

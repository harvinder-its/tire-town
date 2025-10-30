'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black px-6 py-20 pt-32">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Semi-Truck & Trailer Tires —<br />
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Built for Long-Haul Performance
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
        >
          Tire Town Distributors Ltd. — Sole authorized CEAT dealer in Canada.
          Durable CEAT tires engineered for mileage, retreadability, and Canadian road conditions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+14039693600"
            className="px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
          >
            Call +1 (403) 969-3600
          </a>
        </motion.div>
      </div>
    </section>
  );
}

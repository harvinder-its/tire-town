'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">About Tire Town Distributors</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Tire Town Distributors Ltd. is the sole authorized distributor of CEAT commercial truck and trailer tires in Canada. We supply high-performance tyres engineered for long-haul mileage, superior retreadability, and resistance to harsh weather. With industry-leading warranty and nationwide shipping, we keep trucks moving.
              </p>
              <p>
                We partner directly with CEAT to ensure authentic products, expert product matching, and support for all wheel positions — drive, steer and trailer. Whether you run regional routes or cross-country hauls, Tire Town offers the right tire and the technical support to maximize uptime and reduce cost-per-mile.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 rounded-lg p-8 text-center"
            >
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-2">Authorized CEAT Dealer</h3>
              <p className="text-gray-400 text-lg">in Canada</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

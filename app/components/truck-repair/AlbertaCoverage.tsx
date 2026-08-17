'use client';

import { motion } from 'framer-motion';

const cities = [
  {
    name: 'Calgary',
    description:
      'Truck repair and roadside assistance for commercial vehicles operating in and around Calgary, including trucks moving through the city on highway routes.',
  },
  {
    name: 'Edmonton',
    description:
      'Diagnostics, repair and roadside support for Edmonton-area drivers, fleets and businesses running trucks in and out of the region.',
  },
  {
    name: 'Grande Prairie',
    description:
      'Truck service and roadside support for commercial vehicles operating around Grande Prairie and northern Alberta routes.',
  },
];

export default function AlbertaCoverage() {
  return (
    <section id="coverage" className="py-16 sm:py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Truck Repair Services Across Alberta
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Tire Town supports commercial truck drivers, fleets and businesses
            in three key Alberta service areas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-950 border border-gray-800 rounded-lg p-7"
            >
              <h3 className="text-2xl font-bold mb-3">{city.name}</h3>
              <p className="text-gray-400 leading-relaxed">{city.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

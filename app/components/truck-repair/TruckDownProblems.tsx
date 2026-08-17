'use client';

import { motion } from 'framer-motion';
import { trackEvent } from '@/lib/analytics';

const problems = [
  "Truck won't start",
  'Engine warning light or performance problem',
  'Truck has gone into derate',
  'DEF or DPF warning',
  'Broken or slipping belt',
  'Shaft or driveline issue',
  'Tire problem or blowout',
  'Oil or routine service is due',
  'Welding or structural repair need',
  'Breakdown requiring roadside assistance',
];

export default function TruckDownProblems() {
  return (
    <section className="py-16 sm:py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Truck Problems Don&apos;t Wait — Neither Should the Repair
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Whatever symptom brought you here, tell us what the truck is doing
            and we&apos;ll help you get to the right repair.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {problems.map((problem, index) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.06 }}
              className="flex items-center gap-3 bg-gray-950 border border-gray-800 rounded-lg px-5 py-4"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-500 shrink-0" />
              <span className="text-gray-200">{problem}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+14039693600"
            onClick={() => trackEvent('truck_repair_phone_click', { location: 'truck_down_problems' })}
            className="inline-block px-8 py-4 bg-white text-black font-semibold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Call Now — +1 (403) 969-3600
          </a>
        </div>
      </div>
    </section>
  );
}

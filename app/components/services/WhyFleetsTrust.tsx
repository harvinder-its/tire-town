'use client';

import { motion } from 'framer-motion';

const points = [
  {
    icon: '🔧',
    title: 'Certified Technicians',
    description: 'Experienced heavy-truck & diesel techs',
  },
  {
    icon: '⏱️',
    title: 'Fast Turnaround',
    description: 'Minimize costly fleet downtime',
  },
  {
    icon: '🚛',
    title: 'Fleet Accounts',
    description: 'Priority scheduling for fleets',
  },
  {
    icon: '🛞',
    title: 'One-Stop Shop',
    description: 'CEAT tires and repair, one roof',
  },
  {
    icon: '📋',
    title: 'Transparent Reporting',
    description: 'Detailed PM & repair reports',
  },
];

export default function WhyFleetsTrust() {
  return (
    <section className="py-20 px-6 bg-black scroll-mt-[100px]">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Why Fleets Trust Our Repair Shop
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="text-center"
            >
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

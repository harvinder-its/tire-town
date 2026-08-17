'use client';

import { motion, type Variants } from 'framer-motion';

const services = [
  {
    id: 'truck-pm-repairs',
    icon: '📋',
    name: 'Truck PM Repairs',
    subtitle: 'Preventive Maintenance',
    description:
      'Scheduled, CVSA/DOT-aligned preventive maintenance for semi-trucks and trailers. Regular PM service catches worn parts before they turn into breakdowns, keeping your fleet compliant, safe, and out of the shop.',
    items: [
      'Full multi-point PM inspections (CVSA/DOT-aligned)',
      'Oil, filter & fluid services',
      'Brake adjustment & wear inspection',
      'Belts, hoses & cooling system checks',
      'Lighting, reflective tape & compliance checks',
      'Wheel-end, hub & bearing inspection',
      'Scheduled fleet PM programs & reminders',
    ],
  },
  {
    id: 'general-repair',
    icon: '🔧',
    name: 'General Repair',
    subtitle: 'Full-Service Truck & Trailer Repair',
    description:
      'Complete general repair for semi-trucks and trailers of every make and model — from air brakes and suspension to exhaust, cooling systems, and trailer bodywork. Our technicians diagnose the root cause and repair it right the first time.',
    items: [
      'Air brake & foundation brake repair',
      'Suspension, steering & alignment',
      'Exhaust, DEF & emissions systems',
      'Cooling system & radiator repair',
      'Welding & fabrication',
      'Trailer repair (doors, landing gear, lights, flooring)',
      'DOT/annual safety inspections',
    ],
  },
  {
    id: 'engine-transmission-electrical',
    icon: '⚙️',
    name: 'Engine, Transmission & Electrical Repair',
    subtitle: 'Diagnostics & Drivetrain Repair',
    description:
      'Advanced diagnostics and repair for diesel engines, manual and automated transmissions, and complex electrical systems. We use manufacturer-level diagnostic tools to find the root cause of fault codes and electrical issues — not just the symptom.',
    items: [
      'Diesel engine diagnostics & repair',
      'Manual & automated transmission repair/rebuild',
      'ECM/ECU computer diagnostics & fault codes',
      'Electrical systems, wiring & lighting circuits',
      'Starters, alternators & battery systems',
      'Clutch repair & replacement',
      'Cooling & fuel system diagnostics',
    ],
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function ServicesList() {
  return (
    <section
      id="services"
      className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black scroll-mt-[100px]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Truck Repair Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three core service lines covering every stage of your fleet&apos;s maintenance cycle — from routine PM to complex drivetrain diagnostics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              id={service.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              whileHover={{
                scale: 1.02,
                y: -8,
                transition: { type: 'spring', stiffness: 260, damping: 22 },
              }}
              className="scroll-mt-[140px] bg-black border border-gray-700 rounded-xl overflow-hidden hover:border-gray-500 transition-colors duration-300 flex flex-col"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
                <p className="text-gray-400 mb-4 font-semibold">{service.subtitle}</p>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-3 mt-auto">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-300">
                      <span className="text-emerald-400 mt-1" aria-hidden="true">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  className: 'h-7 w-7',
  fill: 'none' as const,
  stroke: 'currentColor' as const,
  strokeWidth: 1.75,
  viewBox: '0 0 24 24',
};

const services: Service[] = [
  {
    title: 'Roadside & Service Calls',
    description: 'Assistance for trucks that break down or need service while working or travelling.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.4" /></svg>
    ),
  },
  {
    title: 'Off-Road Assistance',
    description: 'Service for trucks and equipment that need help away from standard roadside locations.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 20l4-10 4 6 3-8 4 12M3 20h18" /></svg>
    ),
  },
  {
    title: 'DEF & DPF Service',
    description: 'Diagnostics and service for DEF and DPF issues that can affect truck performance.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4M12 21v-4M4.2 6.2l2.8 2.8M17 15l2.8 2.8M3 12h4M17 12h4M4.2 17.8L7 15M17 9l2.8-2.8" /><circle cx="12" cy="12" r="3" /></svg>
    ),
  },
  {
    title: 'Truck Oil Change',
    description: 'Routine oil service for commercial trucks and diesel vehicles.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2 3 5 6.5 5 10a5 5 0 01-10 0c0-3.5 3-7 5-10z" /></svg>
    ),
  },
  {
    title: 'Engine Repair & Diagnostics',
    description: 'Troubleshooting and repair support for engine-related problems.',
    icon: (
      <svg {...iconProps}><rect x="4" y="9" width="12" height="8" rx="1" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 9V6h5v3M16 12h4l1 2v3h-5" /><circle cx="8" cy="17" r="1.4" /><circle cx="14" cy="17" r="1.4" /></svg>
    ),
  },
  {
    title: 'Broken Belts',
    description: 'Inspection and repair or replacement assistance for damaged belts.',
    icon: (
      <svg {...iconProps}><circle cx="7" cy="9" r="3" /><circle cx="17" cy="15" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M9.5 7.5c3 0 5.5 2 5.5 5" /></svg>
    ),
  },
  {
    title: 'Shaft Repair',
    description: 'Repair assistance for driveline and shaft-related problems.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-4 4 8 2-4h6" /></svg>
    ),
  },
  {
    title: 'Truck Derate Diagnostics',
    description: 'Help diagnosing derate conditions and identifying the underlying issue.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v4M12 16.5h.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.3 4.5L2.9 17a1.7 1.7 0 001.5 2.5h15.2a1.7 1.7 0 001.5-2.5L13.7 4.5a1.7 1.7 0 00-3.4 0z" /></svg>
    ),
  },
  {
    title: 'Truck Welding',
    description: 'Welding and repair work where appropriate for truck and equipment needs.',
    icon: (
      <svg {...iconProps}><path strokeLinecap="round" strokeLinejoin="round" d="M4 20l6-6M14 4l6 6-8 8-3-3M13 5l-2.5 2.5" /></svg>
    ),
  },
  {
    title: 'Truck Tires',
    description: 'Commercial tire inspection, replacement and roadside tire support.',
    icon: (
      <svg {...iconProps}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v3M12 17v3M4 12h3M17 12h3" /></svg>
    ),
  },
];

export default function TruckServices() {
  return (
    <section id="services" className="py-16 sm:py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Truck Repair Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Practical repair and diagnostic support for commercial trucks, built
            around the problems that actually put drivers out of service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              className="bg-gray-950 border border-gray-800 rounded-lg p-6 hover:border-gray-600 transition-colors duration-300"
            >
              <div className="text-yellow-500 mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

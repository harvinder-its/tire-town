'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    name: 'WINSUPER LHT',
    subtitle: 'Long Haul Trailer',
    description: 'Designed for long-haul trailer applications, the WINSUPER LHT offers wider solid shoulder ribs, improved uniform wear, and higher retreadability for low operating cost per mile. Ideal for highway trailer axles and inter-state fleets.',
    image: '/images/winsuper-lht.jpeg',
    alt: 'WINSUPER LHT CEAT long haul trailer tire — Tire Town Distributors',
  },
  {
    name: 'WINMILE-AW',
    subtitle: 'All-Wheel Mileage Pattern',
    description: 'Multi-position tyre with a 5-rib design for superior traction and stability. Engineered for long mileage across steer, drive and trailer positions with durable casing for retreading.',
    image: '/images/winmile-aw.jpeg',
    alt: 'WINMILE-AW CEAT all-wheel tire — Tire Town Distributors',
  },
  {
    name: 'WINMILE-D',
    subtitle: 'Drive Axle Traction (Close Shoulder)',
    description: 'Aggressive block design with optimized contact area for drive axles. Enhanced casing strength and weather resistance for heavy loads and mixed regional routes. Close shoulder design for improved stability.',
    image: '/images/winmile-d-close-shoulder.jpeg',
    alt: 'WINMILE-D Close Shoulder CEAT drive tire — Tire Town Distributors',
  },
  {
    name: 'WINMILE-D',
    subtitle: 'Drive Axle Traction (Open Shoulder)',
    description: 'Aggressive block design with optimized contact area for drive axles. Enhanced casing strength and weather resistance for heavy loads and mixed regional routes. Open shoulder design for superior traction.',
    image: '/images/winmile-d-open-shoulder.jpeg',
    alt: 'WINMILE-D Open Shoulder CEAT drive tire — Tire Town Distributors',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-gradient-to-b from-black via-gray-950 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our CEAT Commercial Tires</h2>
          <p className="text-xl text-gray-400">Premium tire solutions for every wheel position</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={`${product.name}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-black border border-gray-700 rounded-lg overflow-hidden hover:border-gray-500 transition-all duration-300"
            >
              <div className="relative h-64 bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full p-4"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 font-semibold">{product.subtitle}</p>
                <p className="text-gray-300 leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

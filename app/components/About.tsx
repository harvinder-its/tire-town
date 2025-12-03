'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-black scroll-mt-[180px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Tire Town Distributors</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Text & Authorized Dealer Card */}
            <div className="space-y-8">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Tire Town Distributors Ltd. is the sole authorized distributor of CEAT commercial truck and trailer tires in Canada. We supply high-performance tyres engineered for long-haul mileage, superior retreadability, and resistance to harsh weather.
                </p>
                <p>
                  We partner directly with CEAT to ensure authentic products, expert product matching, and support for all wheel positions — drive, steer and trailer.
                </p>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-yellow-500/30 rounded-xl p-8 text-center"
              >
                <div className="text-6xl mb-4">🏆</div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Authorized CEAT Dealer</h3>
                <p className="text-gray-300 text-lg">Sole Distributor in Canada</p>
              </motion.div>
            </div>

            {/* Right Side - PDF Viewer */}
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-700">
                  <span className="text-sm font-medium text-gray-300">📄 CEAT TBR Databook</span>
                  <a
                    href="/images/CEAT_TBR_databook_US.pdf"
                    download="CEAT_TBR_databook_US.pdf"
                    className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </a>
                </div>
                <iframe
                  src="/images/CEAT_TBR_databook_US.pdf"
                  className="w-full h-[500px]"
                  title="CEAT TBR Databook"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

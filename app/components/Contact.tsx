'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const initialFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (!showConfirmation) return;
    const timeoutId = setTimeout(() => setShowConfirmation(false), 2500);
    return () => clearTimeout(timeoutId);
  }, [showConfirmation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your request.');
      }

      setStatus({ type: 'success', message: 'Thanks! We received your request and will respond within one business day.' });
      setShowConfirmation(true);
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again shortly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-md rounded-2xl bg-white p-8 text-center text-black shadow-2xl"
              role="status"
              aria-live="assertive"
            >
              <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Image
                  src="/images/final-logo.png"
                  alt="Tire Town Distributors"
                  width={180}
                  height={60}
                  className="h-12 w-auto"
                />
                <span className="hidden h-10 w-px bg-gray-200 sm:block" aria-hidden="true" />
                <Image
                  src="/images/logo_ceat.png"
                  alt="CEAT Specialty"
                  width={130}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-xl font-bold">Request received!</p>
              <p className="mt-2 text-base text-gray-600">
                Thanks for reaching out. One of our specialists will respond within one business day.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-20 px-6 bg-black scroll-mt-[40px]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Quote</h2>
            <p className="text-xl text-gray-400">
              Expect a response within 1 business day. Or call{' '}
              <a href="tel:+14039693600" className="text-white hover:underline font-semibold">
                +1 (403) 969-3600
              </a>
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-gray-950 border-2 border-gray-800 rounded-lg p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Request Quote'}
            </button>

            <div aria-live="polite">
              {status && (
                <p
                  className={`text-sm font-semibold text-center ${
                    status.type === 'success' ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8 space-y-2"
          >
            <p className="text-gray-400">
              <a href="mailto:info@tiretown.ca" className="text-white hover:underline">
                info@tiretown.ca
              </a>
              {' '} | {' '}
              <a href="tel:+14039693600" className="text-white hover:underline">
                +1 (403) 969-3600
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

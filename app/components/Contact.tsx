'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 1 business day.');
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black">
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
            className="w-full px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            Request Quote
          </button>
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
  );
}

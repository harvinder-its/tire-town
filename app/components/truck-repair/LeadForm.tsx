'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  vehicleType: '',
  serviceNeeded: '',
  message: '',
};

const cities = ['Calgary', 'Edmonton', 'Grande Prairie', 'Other Alberta location'];

const serviceOptions = [
  'Roadside / Service Call',
  'Off-Road Assistance',
  'DEF / DPF Service',
  'Truck Oil Change',
  'Engine Repair / Diagnostics',
  'Broken Belt',
  'Shaft Repair',
  'Truck Derate Diagnostics',
  'Truck Welding',
  'Truck Tire Service',
  'Not Sure / Other',
];

export default function LeadForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/truck-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send your request.');
      }

      trackEvent('truck_repair_form_submit', { city: formData.city, service: formData.serviceNeeded });
      setStatus({
        type: 'success',
        message: "Thanks — we've received your request and will get back to you shortly. For urgent issues, please call us directly.",
      });
      setFormData(initialFormState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors';

  return (
    <section id="request-service" className="py-16 sm:py-20 px-6 bg-black scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Request Truck Service</h2>
          <p className="text-lg sm:text-xl text-gray-400">
            For an active breakdown, calling is fastest:{' '}
            <a
              href="tel:+14039693600"
              onClick={() => trackEvent('truck_repair_phone_click', { location: 'lead_form_header' })}
              className="text-white hover:underline font-semibold"
            >
              +1 (403) 969-3600
            </a>
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-gray-950 border-2 border-gray-800 rounded-lg p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
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
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-semibold mb-2">
                City *
              </label>
              <select
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select a city
                </option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="vehicleType" className="block text-sm font-semibold mb-2">
                Truck / Vehicle Type
              </label>
              <input
                type="text"
                id="vehicleType"
                name="vehicleType"
                placeholder="e.g. Semi tractor, single axle"
                value={formData.vehicleType}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="serviceNeeded" className="block text-sm font-semibold mb-2">
                Service Needed *
              </label>
              <select
                id="serviceNeeded"
                name="serviceNeeded"
                value={formData.serviceNeeded}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Briefly describe what the truck is doing"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Get Truck Repair Assistance'}
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
      </div>
    </section>
  );
}

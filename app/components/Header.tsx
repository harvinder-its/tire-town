'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <Image
                src="/images/final-logo.png"
                alt="Tire Town Distributors Logo"
                width={200}
                height={200}
                quality={100}
                priority
                className="object-contain h-16 w-auto"
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black font-medium hover:text-gray-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+14039693600"
              className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden lg:hidden"
        >
          <div className="pt-4 pb-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-black font-medium hover:text-gray-600 transition-colors duration-200 py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+14039693600"
              className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 text-center"
            >
              Call +1 (403) 969-3600
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}

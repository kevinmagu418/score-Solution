"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex-1 bg-gradient-to-r from-[var(--primary-brown)] via-[#5a1f17] to-[#3b150f] flex flex-col items-center justify-center px-8 py-28 md:py-40 text-center text-[var(--text-light)] overflow-hidden"
    >
      <div className="container mx-auto max-w-3xl px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-[var(--neutral-beige)]">
          Your Trusted Partner for Immigration Services in Kenya
        </h1>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80%" }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-2 h-[3px] bg-[var(--accent-gold)] rounded-full"
        ></motion.div>

        {/* Subtext */}
        <p className="text-base md:text-lg mb-8 mt-4 max-w-2xl mx-auto text-[var(--neutral-beige)]/90">
          Navigating the complexities of Kenyan immigration with over 8 years of experience.
        </p>

        {/* Buttons */}
        <div className="flex justify-center flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-block px-6 py-3 text-base md:text-lg bg-[var(--accent-gold)] text-black rounded-full hover:bg-opacity-90 transition"
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-base md:text-lg border-2 border-[var(--accent-gold)] text-[var(--accent-gold)] rounded-full hover:bg-[var(--accent-gold)] hover:text-black transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

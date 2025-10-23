"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobeCTA() {
  return (
    <section className="relative overflow-hidden bg-white text-black py-24">
      {/* Faint Globe Background */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 flex items-center justify-center opacity-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[600px] h-[600px]"
          fill="none"
          stroke="black"
          strokeWidth="1"
        >
          <circle cx="256" cy="256" r="240" stroke="black" />
          <path
            d="M256 16a240 240 0 000 480M16 256h480M76 128h360M76 384h360"
            stroke="black"
          />
        </svg>
      </motion.div>

      {/* Gold Orbit Trails */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="w-[480px] h-[480px] rounded-full border-[1.5px] border-[var(--color-accent-gold)] opacity-20 absolute"></div>
        <div className="w-[380px] h-[380px] rounded-full border-[1.5px] border-[var(--color-accent-gold)] opacity-20 absolute"></div>
      </motion.div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-4"
        >
          We Connect the World — and You’re Next
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto mb-10"
        >
          From visa processing to global career transitions — our experts at{" "}
          <strong>Score Solutions</strong> are here to help you cross borders
          confidently.
        </motion.p>

        {/* Button with Pulse Animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-3 border-4 border-black bg-[var(--color-accent-gold)] text-black font-bold uppercase tracking-widest shadow-[4px_4px_0_#000] hover:bg-black hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

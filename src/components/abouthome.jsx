"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHomeSplit() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
      {/* LEFT SIDE: TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex-1 bg-gradient-to-r from-[var(--primary-brown)] via-[#5a1f17] to-[#3b150f] flex items-center justify-center px-8 py-16 lg:py-0"
      >
        <div className="max-w-xl text-center lg:text-left">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest uppercase text-[var(--accent-gold)] mb-4"
          >
            About Score Solutions
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--neutral-beige)] leading-tight mb-5"
          >
            Guiding Your Immigration Journey <br />
            <span className="text-[var(--accent-gold)]">With Experience & Care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[var(--neutral-beige)]/80 mb-8 text-base sm:text-lg leading-relaxed"
          >
            With over 8 years of expertise, Score Solutions helps individuals and corporations navigate Kenyan immigration processes—efficiently, transparently, and reliably.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start gap-4 flex-wrap"
          >
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-[var(--accent-gold)] text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            >
              Expertise
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 rounded-full border-2 border-[var(--neutral-beige)] text-[var(--neutral-beige)] font-medium hover:bg-[var(--neutral-beige)] hover:text-black transition"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* RIGHT SIDE: IMAGE */}
      <div className="relative flex-1 h-[60vh] sm:h-[70vh] lg:h-auto min-h-[400px] lg:min-h-[600px]">

  <motion.div style={{ y }} className="absolute inset-0 z-0">
    <Image
      src="/migration.webp"
      alt="Immigration Assistance Kenya"
      fill
      priority={false}
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "center" }}
    />
    {/* Subtle overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-[#220a07]/60 via-transparent to-transparent"></div>
  </motion.div>

  {/* Floating badge */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md border border-[var(--accent-gold)]/40 rounded-2xl p-4 shadow-lg hidden sm:block z-10"
  >
    <p className="text-[var(--neutral-beige)]/80 text-sm font-medium">
      Trusted by <span className="text-[var(--accent-gold)] font-semibold">1,250+</span> clients worldwide
    </p>
  </motion.div>
</div>


   

      {/* Subtle glowing divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-full h-[2px] origin-left bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent"
      />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function AboutHome() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex items-center justify-center text-[var(--color-primary-brown)] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/nairobi2.jpeg"
          alt="Nairobi Prehistoric Site"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority={false}
          loading="lazy"
          sizes="100vw"
          className="z-0"
        />
      </div>

      {/* Content Card */}
      <div className="relative z-20 w-full max-w-md bg-white backdrop-blur-md rounded-lg shadow-lg p-8 mx-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Image
                        src="/logo.png" // Make sure logo.png is inside the /public folder
                        alt="Score Solutions Logo"
                        width={140} // adjust as needed
                        height={140} // adjust as needed
                        className="hover:opacity-80 transition-opacity"
                      />
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-center">
              About Score Solutions
            </h2>
            <p className="text-base sm:text-lg text-center mb-4">
              Score Solutions is an innovative immigration services provider with 8+ years of experience,
              helping individuals and corporations navigate Kenyan immigration processes.
            </p>

            <Link
              href="/about"
              className="inline-block bg-[var(--accent-orange)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 text-sm"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

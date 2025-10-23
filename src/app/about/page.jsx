"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Business,
  Groups,
  WorkspacePremium,
  GppGood,
  Diversity3,
  ConnectWithoutContact,
} from "@mui/icons-material";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
});

const bounceIcon = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-beige)]">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="/nairobi.jpeg"
            alt="About Score Solutions"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>

        {/* Floating Circles */}
        <motion.div
          className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full bg-[var(--color-accent-orange)]/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-80px] right-[-80px] w-96 h-96 rounded-full bg-[var(--color-accent-gold)]/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />

        {/* Text */}
        <motion.div
          className="relative z-10 px-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            About Score Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10">
            Your trusted partner for immigration services helping you connect across borders with confidence.
          </p>
          <motion.a
            href="#who-we-are"
            className="inline-block bg-[var(--color-accent-orange)] text-black font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.a>
        </motion.div>
      </section>

      {/* Who We Are Section */}
{/* Who We Are – Vintage Book Theme */}
<section className="relative py-24 bg-[#fdfaf4] text-[#222] font-serif overflow-hidden">
  {/* Serrated Page Edges (using mask gradient + texture) */}
  <div className="absolute inset-0 bg-[url('/paper-texture.webp')] bg-cover bg-center opacity-40"></div>
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fdfaf4]/80 to-transparent mix-blend-overlay"></div>
  <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(circle_at_50%_50%,white_70%,transparent_100%)]"></div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
    {/* Left – Story Text */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="space-y-6 leading-relaxed relative"
    >
      {/* Slight curled shadow for a page feel */}
      <div className="absolute -inset-2 rounded-lg shadow-[inset_0_0_40px_rgba(0,0,0,0.15)]"></div>

      <h2 className="relative text-5xl md:text-6xl font-bold tracking-tight mb-8 text-[#2c1b10] drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
        Who We Are
      </h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-lg italic"
      >
        <strong>Nairobi, Kenya —</strong> Our story began in 2015, inked on humble pages filled with dreams. What started as a small vision has since grown into a legacy of connection, service, and trust.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
        className="text-lg"
      >
        At <strong>Score Solutions</strong>, we believe in helping people cross borders  not just physically, but through opportunity, confidence, and clarity. Every client’s journey is a chapter in our story.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="text-lg"
      >
        Our work is built on dedication, professionalism, and compassion values that continue to define who we are and what we stand for.
      </motion.p>

      
    </motion.div>

    {/* Right – Vintage Book Image */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative"
    >
      <div className="relative border-[6px] border-[#3b2b20]/70 rounded-md shadow-2xl">
        <img
          src="/score.png"
          alt="Score Solutions Team"
          className="w-full h-[400px] object-cover grayscale-[40%] sepia-[20%] rounded-sm"
        />
        <p className="absolute bottom-0 left-0 right-0 bg-[#fdfaf4]/90 text-center text-xs uppercase tracking-wide py-2 border-t border-[#3b2b20] italic">
          “The journey begins” — 2017
        </p>
      </div>
    </motion.div>
  </div>
</section>





      {/* Management Team */}
      <motion.section
        variants={fadeIn(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[var(--color-neutral-beige)] py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeIn(0.4)} className="text-3xl font-bold text-[var(--color-primary-brown)] mb-12 flex justify-center items-center gap-2">
            <Groups className="text-[var(--color-accent-orange)]" fontSize="large" />
            Our Management Team
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-12"
          >
            {[
              {
                name: "Beatrice Omil",
                position: "Managing Director",
                description: "Bachelor of Commerce (Finance) from UoN and a Diploma in Business Management.",
                image: "/beatrice.jpeg",
              },
              {
                name: "Allan Omballa",
                position: "General Manager",
                description: "Bachelor of Commerce (Accounting) from Moi University. Expertise in Taxation and Business Operations.",
                image: "/allan.webp",
              },
              {
                name: "Teddy Joshua Okotah",
                position: "Operations Manager",
                description: "Oversees back-office operations, efficiency, and service delivery.",
                image: "/okotah.avif",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
                }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-2xl transition transform hover:scale-105"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold text-[var(--color-primary-brown)]">{member.name}</h3>
                <p className="text-lg text-gray-700 font-bold mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        id="core-values"
        variants={fadeIn(0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary-brown)] mb-12 flex justify-center items-center gap-2">
            <Diversity3 className="text-[var(--color-accent-orange)]" fontSize="large" />
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/value.png",
                icon: <WorkspacePremium fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Value Addition",
                description: "We consistently provide our clients with advice, services, and follow-up that add value.",
              },
              {
                image: "/professionalism.jpg",
                icon: <Groups fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Professionalism",
                description: "We attract, develop, and retain the best minds through continuous training.",
              },
              {
                image: "/integrity.jpeg",
                icon: <GppGood fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Integrity",
                description: "We conduct business operations consistent with the high expectations of our clients.",
              },
              {
                image: "/lifetime.jpeg",
                icon: <ConnectWithoutContact fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Lifetime Relationship",
                description: "We view client relationships as long-term partnerships with shared goals.",
              },
              {
                image: "/team.webp",
                icon: <Diversity3 fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Teamwork",
                description: "We are one team with shared goals, fostering a collaborative and supportive culture.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[var(--color-neutral-beige)] p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col items-center"
              >
                <motion.img
                  src={value.image}
                  alt={value.title}
                  loading="lazy"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.02 }}
                />
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

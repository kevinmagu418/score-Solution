"use client";

import { Work, AirplaneTicket, Apartment, ContactMail } from "@mui/icons-material";
import Link from 'next/link';
import { motion } from "framer-motion";
import StatsSection from "@/components/Stats";
import AboutHome from "@/components/abouthome";
import HomeServices from "@/components/aboutservice";
import HeroSection from "@/components/HeroSection";

export default function HomePage() {

  return (
    <div>
      <HeroSection/>

      {/* Brief Intro Section */}
      <AboutHome/>
      {/* Key Services Section */}
      <HomeServices />


      {/* Our Trusted Clients */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-[var(--color-neutral-gray)] text-center text-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Trusted Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
            {[
              { src: "/egyptair.png", alt: "Egypt Air", name: "Egypt Air" },
              { src: "/capitalcafe.png", alt: "Capital Coffee Lounge", name: "Capital Coffee Lounge" },
              { src: "/sekenani.jpeg", alt: "Sekanani Lounge", name: "Sekanani Lounge" },
              { src: "/tourism.jpeg", alt: "Tourism for Tomorrow", name: "Tourism for Tomorrow" },
              { src: "/naivas.png", alt: "Naivas", name: "Naivas" },
              { src: "/etg.png", alt: "Export Trading Group", name: "Export Trading Group" },
              { src: "/oilibya.jpeg", alt: "Oilibya", name: "Oilibya" },
              { src: "/stonearts.png", alt: "Stone Arts", name: "Stone Arts" },
            ].map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="w-24 h-24 object-contain mb-2"
                  loading="lazy"
                />
                <p className="text-sm font-medium text-center">{client.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
     
      <StatsSection />
    

    </div>
  );
}

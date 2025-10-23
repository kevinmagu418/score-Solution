"use client";

import { useEffect } from "react";
import {
  ContactMail,
  Work,
  TravelExplore,
  HomeWork,
Send,
Gavel,
  GppGood,
  AssignmentTurnedIn,

} from "@mui/icons-material";
import "animate.css";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import GlobeCTA from "@/components/globecta";

const services = [
  {
    icon: <ContactMail fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Passport Services",
    description: "Full assistance with new passports, renewals, lost passports, and name changes under Kenya's e-passport system.",
    imageUrl: "/homepassport.jpeg",
    features: [
      "New passport applications (34, 50, 66 pages)",
      "Lost/damaged passport replacements",
      "Name change processing",
      "Diaspora application support",
    ],
  },
  {
    icon: <TravelExplore fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Visa and Exemption Services",
    description: "Facilitating all visa types: tourist, business, multiple entry, East Africa visas, and special exemptions.",
    imageUrl: "/Kenyan-free-visa.png",
    features: [
      "Tourist, Business, Transit, Courtesy Visas",
      "Multiple Entry and East Africa Tourist Visa",
      "Visa extensions and special cases",
      "Professional document verification",
    ],
  },
  {
    icon: <Work fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Work Permits and Passes",
    description: "Professional handling of work permits across all classes from Agriculture to Professional Employment.",
    imageUrl: "/work-permit.jpg",
    features: [
      "Class A - Mining",
      "Class B - Agriculture",
      "Class C - Professional Employment",
      "Class D - Specific Employment Offers",
    ],
  },
  {
    icon: <HomeWork fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Permanent Residence",
    description: "Helping you apply for permanent residence based on family ties, marriage, or long-term residency.",
    imageUrl: "/house.avif",
    features: [
      "Ex-Kenyan Citizenship Restoration",
      "Children and Spouses of Kenyan Citizens",
      "Special Permits for Long-Term Residents",
    ],
  },
  {
    icon: <GppGood fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Citizenship Services",
    description: "Guidance through regaining, dual citizenship, marriage-based citizenship, and stateless persons' registration.",
    imageUrl: "/kenya-flag.jpg",
    features: [
      "Dual Citizenship Declarations",
      "Regaining Citizenship by Birth",
      "Marriage-Based Citizenship",
      "Registration for Children and Dependents",
    ],
  },
  {
    icon: <AssignmentTurnedIn fontSize="medium" className="text-[var(--accent-orange)]" />,
    title: "Foreign Nationals Management",
    description: "Efficient registration services for foreigners staying in Kenya beyond 90 days and issuance of Alien IDs.",
    imageUrl: "/FOREIGN-NATIONALS.jpg",
    features: [
      "Registration and Alien ID Issuance",
      "Special Pass and Visitor Pass Handling",
      "Exemption Handling (Diplomatic/Consular)",
    ],
  },
  {
  icon: <Gavel fontSize="medium" className="text-[var(--accent-orange)]" />,
  title: "Permit Rejection & Appeal",
  description:
    "Expert assistance in reviewing rejected work permit or visa applications, identifying issues, and lodging formal appeals to the relevant authorities.",
  imageUrl: "/reject.webp",
  features: [
    "Review of rejection reasons and documents",
    "Preparation of comprehensive appeal letters",
    "Representation before immigration boards",
    "Follow-up and resubmission for reconsideration",
  ],
},
];

export default function ServicesPage() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          el.classList.add("animate__animated", "animate__fadeInUp");
          el.classList.remove("opacity-0");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section with Lazy-loaded Background Image */}
      <section className="relative overflow-hidden py-32 text-center text-white">
              <div className="absolute inset-0">
                <Image
                  src="/call.webp"
                  alt="Contact Background"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  className="z-0"
                  priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
      
              <motion.div
                className="absolute top-[-50px] left-[-50px] w-72 h-72 rounded-full bg-white/20 blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[-60px] right-[-60px] w-96 h-96 rounded-full bg-white/10 blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
              />
      
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 flex flex-col items-center justify-center"
              >
                <motion.img
                  src="/Gmail-logo.png"
                  alt="Gmail Logo"
                  className="w-20 h-20 mb-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, repeatType: "loop", duration: 1.2, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
                <p className="text-lg sm:text-xl mb-8 max-w-xl">
                  Get in touch directly via email. Just click below and we’ll be ready to assist you immediately.
                </p>
                <motion.a
                  href="mailto:info@scoresolutions.co.ke"
                  className="inline-flex items-center px-8 py-4 bg-white text-[var(--color-primary-brown)] font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  Email Us Now <Send fontSize="small" className="ml-2" />
                </motion.a>
              </motion.div>
            </section>
      {/* Services Cards */}
      <section className="bg-[var(--color-neutral-beige)] py-20 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden opacity-0 animate-on-scroll transition-all duration-700 hover:shadow-2xl"
            >
              {/* Optimized Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  quality={85}
                  className="rounded-t-2xl"
                  loading="lazy"
                />
              </div>
              
              {/* Service Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-[var(--primary-brown)]">{service.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <ul className="text-gray-700 text-sm list-disc list-inside mb-4 space-y-1 text-left">
                  {service.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* CTA Section */}
      <GlobeCTA/>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import {
  ContactMail,
  Work,
  TravelExplore,
  HomeWork,

  GppGood,
  AssignmentTurnedIn,

} from "@mui/icons-material";
import "animate.css";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

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
      <section className="relative bg-[var(--primary-brown)] text-black py-24 px-6 text-center">
  {/* Hero Image Container */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/nairobi2.jpeg"
      alt="Immigration Services Background"
      layout="fill"
      objectFit="cover"
      quality={85}
      className="opacity-30"
      loading="lazy"
    />
  </div>
  
  {/* Title Section */}
  <div className="relative z-10 max-w-5xl mx-auto animate__animated animate__fadeInDown">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Immigration Services</h1>
    <p className="text-xl md:text-2xl font-light leading-relaxed">
      Trusted solutions for your immigration journey in Kenya and beyond.
    </p>
  </div>
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
      <section className="bg-[var(--primary-brown)] text-black py-20 text-center">
        <div className="max-w-3xl mx-auto animate__animated animate__zoomIn">
          <h2 className="text-3xl font-bold mb-4">Need Expert Immigration Assistance?</h2>
          <p className="text-lg mb-6 font-light">
            Contact Score Solutions today for professional, reliable, and timely immigration solutions.
          </p>
          
    
          <Link
              href="/contact"
              className="inline-block px-6 py-3 text-lg border-2 border-[var(--color-accent-orange)] text-[var(--color-accent-gold)] rounded-full hover:bg-[var(--color-accent-gold)] hover:text-black transition"
            >
              Contact Us
            </Link>
        </div>
      </section>
    </main>
  );
}

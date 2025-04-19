"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Business,
  History,
  Groups,
  WorkspacePremium,
  GppGood,
  Diversity3,
  ConnectWithoutContact
} from '@mui/icons-material';

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay }
  }
});

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-beige)]">
      {/* Hero Section */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        animate="show"
        className="relative bg-[var(--color-primary-brown)] text-[var(--color-neutral-beige)] py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Score Solutions</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner for immigration services in Kenya and beyond.
          </p>
        </div>
      </motion.div>

      {/* About Section - Who We Are */}
      <motion.div
        variants={fadeIn(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[var(--color-primary-navy)] text-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Business className="text-[#0a0a0a] mr-2" fontSize="large" />
              Who We Are
            </h2>
            <p className="text-lg text-neutral-100 mb-6 font-medium">
              Score Solutions is an innovative and customer-focused service solutions provider incorporated under the Companies Act of Kenya in 2015.
            </p>
            <p className="text-lg text-neutral-100 font-medium">
              We started as a small business in 2015 and have grown tremendously, expanding our services nationally and beyond Kenya's borders.
            </p>
          </div>
          <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-md">s
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-4 flex items-center">
                <WorkspacePremium className="text-[var(--color-accent-gold)] mr-2" />
                Our Vision
              </h3>
              <p className="text-gray-700 italic">
                "To be the leading Immigration Services Solutions provider for Individuals, Groups and Corporate within the county and beyond Borders"
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-4 flex items-center">
                <GppGood className="text-[var(--color-accent-gold)] mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-700 italic">
                "To offer world class services to our clients to enable them to effectively and efficiently deliver on their objectives..."
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        variants={fadeIn(0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold text-[var(--color-primary-brown)] mb-12 text-center flex justify-center items-center gap-2">
          <Diversity3 className="text-[var(--color-accent-gold)]" fontSize="large" />
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <WorkspacePremium fontSize="large" className="text-[var(--color-accent-orange)]" />,
              title: "Value Addition",
              description:
                "We consistently provide our clients with advice, services, and follow-up that add value."
            },
            {
              icon: <Groups fontSize="large" className="text-[var(--color-accent-orange)]" />,
              title: "Professionalism",
              description:
                "We attract, develop, and retain the best minds through continuous training."
            },
            {
              icon: <GppGood fontSize="large" className="text-[var(--color-accent-orange)]" />,
              title: "Integrity",
              description:
                "We conduct business operations consistent with high expectations of our clients."
            },
            {
              icon: <ConnectWithoutContact fontSize="large" className="text-[var(--color-accent-orange)]" />,
              title: "Lifetime Relationship",
              description:
                "We view client relationships as long-term partnerships with shared goals."
            },
            {
              icon: <Diversity3 fontSize="large" className="text-[var(--color-accent-orange)]" />,
              title: "Team Work",
              description:
                "We are one team with the same goals and ambitions, fostering a collaborative culture."
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-3">{value.title}</h3>
              <p className="text-gray-700">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Management Team Section */}
      <motion.div
        variants={fadeIn(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--color-primary-brown)] mb-12 text-center flex justify-center items-center gap-2">
            <Groups className="text-[var(--color-accent-gold)]" fontSize="large" />
            Our Management Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Beatrice Omil",
                position: "Managing Director",
                description:
                  "Bachelor of Commerce (Finance) from UoN and a Diploma in Business Management.",
                image: "beatrice.jpeg"
              },
              {
                name: "Allan Omballa",
                position: "General Manager",
                description:
                  "Bachelor of Commerce (Accounting) from Moi University. Expertise in Taxation and Business Operations.",
                image: "/allan.webp"
              },
              {
                name: "Teddy Joshua Okotah",
                position: "Operations Manager",
                description:
                  "Oversees back office operations, efficiency, and service delivery.",
                image: "/okotah.avif"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="bg-[var(--color-neutral-beige)] p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-2">{member.name}</h3>
                <p className="text-lg text-gray-700 font-bold mb-2">{member.position}</p>
                <p className="text-gray-700">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
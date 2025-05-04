"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Business,
  History,
  Groups,
  WorkspacePremium,
  GppGood,
  Diversity3,
  ConnectWithoutContact,
} from "@mui/icons-material";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  },
});

const bounceIcon = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-beige)]">
      
      {/* Hero Section */}
      <motion.section
  variants={fadeIn(0.2)}
  initial="hidden"
  animate="show"
  className="relative bg-[var(--color-primary-brown)] text-[var(--color-neutral-beige)] py-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="nairobi.jpeg"  // <-- Replace with your image path
      alt="Immigration Services"
      className="w-full h-full object-cover opacity-40"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto">
    <motion.h1 variants={fadeIn(0.4)} className="text-4xl md:text-5xl font-bold mb-6">
      About Score Solutions
    </motion.h1>
    <motion.p variants={fadeIn(0.6)} className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
      Your trusted partner for immigration services in Kenya and beyond.
    </motion.p>
    <motion.div variants={fadeIn(0.8)}>
      <button className="bg-[var(--color-accent-orange)] hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition">
        Learn More
      </button>
    </motion.div>
  </div>
</motion.section>


      {/* Management Team */}
      <motion.section
        variants={fadeIn(0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 variants={fadeIn(0.4)} className="text-3xl font-bold text-[var(--color-primary-brown)] mb-12 flex justify-center items-center gap-2">
            <Groups className="text-[var(--color-accent-orange)]" fontSize="large" />
            Our Management Team
          </motion.h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Beatrice Omil",
                position: "Managing Director",
                description: "Bachelor of Commerce (Finance) from UoN and a Diploma in Business Management.",
                image: "beatrice.jpeg",
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
                description: "Oversees back office operations, efficiency, and service delivery.",
                image: "/okotah.avif",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200 } },
                }}
                className="bg-[var(--color-neutral-beige)] p-8 rounded-lg shadow-lg text-center"
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

      {/* Who We Are */}
      <motion.div
        variants={fadeIn(0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-[var(--color-primary-brown)] text-black py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 variants={fadeIn(0.5)} className="text-4xl font-bold flex justify-center items-center gap-2">
              <Business className="text-[var(--color-accent-orange)]" fontSize="large" />
              Who We Are
            </motion.h2>
            <motion.p variants={fadeIn(0.6)} className="mt-6 text-lg md:text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto font-medium">
              Score Solutions is an innovative and customer-focused service solutions provider incorporated under the Companies Act of Kenya in 2015.
            </motion.p>
            <motion.p variants={fadeIn(0.7)} className="mt-4 text-lg md:text-xl text-[var(--color-neutral-gray)] max-w-3xl mx-auto font-medium">
              We started as a small business and have expanded our services nationally and beyond Kenya’s borders.
            </motion.p>
          </div>

          {/* Vision and Mission */}
          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 gap-12 mt-16">
            {[
              {
                Icon: WorkspacePremium,
                title: "Our Vision",
                text: "To be the leading Immigration Services Solutions provider for Individuals, Groups, and Corporates within the country and beyond borders.",
              },
              {
                Icon: GppGood,
                title: "Our Mission",
                text: "To offer world-class services to our clients to enable them to effectively and efficiently deliver on their objectives.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={bounceIcon}
                className="flex flex-col items-center text-center"
              >
                <item.Icon className="text-[var(--color-accent-orange)]" fontSize="large" />
                <h3 className="mt-4 text-2xl font-semibold text-[var(--color-accent-orange)]">{item.title}</h3>
                <p className="mt-4 text-lg italic text-[var(--color-neutral-gray)] max-w-md">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Core Values */}
<motion.section
  variants={fadeIn(0.5)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-20 px-4 sm:px-6 lg:px-8"
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
          description: "We are one team with the same goals and ambitions, fostering a collaborative culture.",
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
        >
          {/* Image */}
          <motion.img
            src={value.image}
            alt={value.title}
            loading="lazy"
            className="w-full h-40 object-cover rounded-lg mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          {/* Icon */}
          <div className="text-4xl mb-4">{value.icon}</div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-[var(--color-primary-brown)] mb-3">{value.title}</h3>
          {/* Description */}
          <p className="text-gray-700">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

              
    </div>
  );
};

export default AboutUs;

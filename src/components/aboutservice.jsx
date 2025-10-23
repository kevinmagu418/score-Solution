"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ApartmentIcon from "@mui/icons-material/Apartment";

const services = [
  {
    icon: <ContactMailIcon fontSize="medium" className="text-[var(--accent-orange)] mb-2" />,
    imgSrc: "/homepassport.jpeg",
    title: "Passport Services",
    desc: "Assistance with processing and acquiring passports for individuals and corporations.",
    link: "/services",
  },
  {
    icon: <WorkIcon fontSize="medium" className="text-[var(--accent-orange)] mb-2" />,
    imgSrc: "/homeworkpermit.webp",
    title: "Work Permits",
    desc: "Providing work permit services for foreign employees looking to work in Kenya.",
    link: "/services",
  },
  {
    icon: <AirplaneTicketIcon fontSize="medium" className="text-[var(--accent-orange)] mb-2" />,
    imgSrc: "/Kenyan-free-visa.png",
    title: "Visas",
    desc: "Assistance with tourist, business, and other visa applications for Kenya.",
    link: "/services",
  },
  {
    icon: <ApartmentIcon fontSize="medium" className="text-[var(--accent-orange)] mb-2" />,
    imgSrc: "/homepermanentresidence.jpeg",
    title: "Permanent Residence",
    desc: "Helping individuals and families navigate the permanent residence process in Kenya.",
    link: "/services",
  },
];

export default function HomeServices() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-white text-[var(--color-primary-brown)]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Key Services</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[var(--accent-orange)]/10 via-white to-[var(--accent-orange)]/5 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:ring-2 hover:ring-[var(--accent-orange)] hover:ring-offset-2 hover:ring-offset-white"
            >
              {/* Image */}
              <div className="relative w-full h-44 mb-4 overflow-hidden rounded-md">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={service.imgSrc}
                    alt={service.title}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Hover overlay without default blur */}
                  <div className="absolute inset-0 bg-white/0 hover:bg-white/10 hover:backdrop-blur-sm rounded-md transition-all duration-300"></div>
                </motion.div>
              </div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex justify-center"
              >
                {service.icon}
              </motion.div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold mt-2 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.desc}</p>

              {/* Link */}
              <Link
                href={service.link}
                className="inline-block px-5 py-2 text-sm border-2 border-[var(--accent-orange)] text-black font-semibold rounded-full hover:bg-[var(--accent-orange)] hover:text-black transition-colors duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

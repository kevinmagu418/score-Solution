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
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Key Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={false} // lazy loaded by default
                />
              </div>

              {/* Icon */}
              <div className="flex justify-center">
                {service.icon}
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold mt-2 mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.desc}</p>

              {/* Link */}
              <Link
  href={service.link}
  className="inline-block px-4 py-2 text-sm border-2 border-[var(--accent-orange)] text-black font-semibold rounded-full hover:bg-[var(--accent-orange)] hover:text-black transition-colors duration-300"
>
  Learn More
</Link>

            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

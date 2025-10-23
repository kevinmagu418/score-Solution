"use client";

import { LocationOn, Email, Phone, Send, Instagram, Twitter, LinkedIn, Facebook, YouTube } from "@mui/icons-material";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
  const cards = [1, 2, 3];

  return (
    <div className="relative">
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
      
      {/* Contact Info & Map */}
      <section
        id="contact-info"
        className="py-20 bg-[var(--color-neutral-beige)] text-[var(--color-primary-brown)] relative"
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <LocationOn fontSize="large" className="text-[var(--color-accent-orange)]" />,
                title: "Address",
                content: "Kogo Plaza, Ground Floor, Mai Mahiu Road, P.O Box 55064-00100 Nairobi, Kenya",
              },
              {
                icon: <Phone fontSize="large" className="text-[var(--color-accent-gold)]" />,
                title: "Phone",
                content: "+254 700 058 068\n+254 713 088 058\n+254 722 794 468",
              },
              {
                icon: <Email fontSize="large" className="text-[var(--color-accent-red)]" />,
                title: "Email",
                content: "info@scoresolutions.co.ke",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105 text-center flex flex-col items-center gap-4"
                whileHover={{ y: -5 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="whitespace-pre-line">
                  {item.title === "Email" ? (
                    <Link href={`mailto:${item.content}`} className="text-[var(--color-accent-red)] underline hover:text-black transition">
                      {item.content}
                    </Link>
                  ) : item.content}
                </p>
              </motion.div>
            ))}

            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:scale-105 col-span-full">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {[{icon: Instagram, link:"https://instagram.com"}, {icon:Twitter, link:"https://twitter.com"}, {icon:LinkedIn, link:"https://linkedin.com"}, {icon:Facebook, link:"https://facebook.com"}, {icon:YouTube, link:"https://youtube.com"}].map((item, i)=>(
                  <Link key={i} href={item.link} target="_blank" className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--color-accent-orange)]/20 hover:bg-[var(--color-accent-orange)] hover:text-white transition transform hover:scale-110 shadow-md">
                    <item.icon fontSize="medium" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-lg relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.276526123682!2d36.81779991531354!3d-1.293374336022876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a33c4d0ed2d%3A0xf7a6b2e2b1c5e0d2!2sKogo%20Plaza!5e0!3m2!1sen!2ske!4v1708543712345!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ minHeight: "450px", borderRadius: "1rem" }}
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </section>
{/* Final Call to Action – Visit Us */}
<section className="relative overflow-hidden py-32 text-center text-white">
  <div className="absolute inset-0">
    <Image
      src="/visit.webp"
      alt="Visit Background"
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      className="z-0"
    />
    <div className="absolute inset-0 bg-black/50"></div>
  </div>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 flex flex-col items-center justify-center"
  >
    <motion.img
      src="/location-pin.png"
      alt="Location Icon"
      className="w-20 h-20 mb-6"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    />
    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Our Office</h2>
    <p className="text-lg sm:text-xl mb-8 max-w-xl">
      Kogo Plaza, Ground Floor, Mai Mahiu Road, Nairobi.  
      Come have a chat with our team in person.
    </p>
    <motion.a
      href="https://www.google.com/maps?q=Kogo+Plaza,+Mai+Mahiu+Road,+Nairobi"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-8 py-4 bg-white text-[var(--color-primary-brown)] font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Visit Us on Maps
    </motion.a>
  </motion.div>
    </section>  

      

    </div>
  );
}

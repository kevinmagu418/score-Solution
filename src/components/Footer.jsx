"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
  YouTube,
  Email,
  Phone,
  Language,
} from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FAF4EF] to-[#E8DFD7] text-[#2E2E2E] border-t border-[var(--accent-gold)] mt-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 text-sm"
      >
        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[var(--primary-brown)]">
            Get in Touch
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <PlaceIcon fontSize="small" />
              <span className="text-sm">
                Kogo Plaza, Ground Floor, Mai Mahiu Road, Nairobi
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Email fontSize="small" />
              <a
                href="mailto:info@scoresolutions.com"
                className="hover:text-[var(--accent-gold)] transition-colors"
              >
                info@scoresolutions.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone fontSize="small" />
              <span>+254 700 058 068 / +254 713 088 058</span>
            </li>
            <li className="flex items-center gap-2">
              <Language fontSize="small" />
              <a
                href="https://www.scoresolutions.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent-gold)] transition-colors"
              >
                www.scoresolutions.co.ke
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-[var(--primary-brown)]">
            Connect With Us
          </h2>
          <div className="flex gap-6 mb-6">
            {[
              { href: "https://instagram.com", icon: <Instagram /> },
              { href: "https://twitter.com", icon: <Twitter /> },
              { href: "https://linkedin.com", icon: <LinkedIn /> },
              { href: "https://facebook.com", icon: <Facebook /> },
              { href: "https://youtube.com", icon: <YouTube /> },
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-[var(--primary-brown)] transition-transform"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm text-gray-600 leading-relaxed"
          >
            Follow us for immigration updates, news, and expert insights.
          </motion.p>
        </div>
      </motion.div>

      {/* Bottom Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="border-t border-[var(--accent-gold)] text-center py-6 text-xs text-gray-600"
      >
        &copy; {new Date().getFullYear()} Score Solutions. All rights reserved.
      </motion.div>
    </footer>
  );
}

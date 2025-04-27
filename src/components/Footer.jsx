"use client";
import { Instagram, Twitter, LinkedIn, Facebook, YouTube, Email, Phone, Language } from "@mui/icons-material"; // Material Icons
import PlaceIcon from "@mui/icons-material/Place";

export default function Footer() {
  return (
    <footer className="bg-[var(--neutral-gray)] text-black py-12 mt-16 w-full">
      <div className="container mx-auto px-4 text-center text-sm space-y-10">

        {/* Social Media Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Follow Us on Social Media</h2>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
              <Twitter fontSize="large" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
              <Facebook fontSize="large" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
              <YouTube fontSize="large" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-2">
          <div className="flex justify-center items-center gap-2 text-gray-700">
            <PlaceIcon fontSize="small" />
            <span className="text-lg font-semibold">Nairobi, Kenya</span>
          </div>
          <p className="max-w-md mx-auto text-gray-700">
            Kogo Plaza, Ground Floor, Mai Mahiu Road, P.O Box 55064-00100 Nairobi, Kenya
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Contact Us</h2>
          <div className="flex flex-col items-center gap-2 text-gray-700">
            <div className="flex items-center gap-2">
              <Email fontSize="small" />
              <a href="mailto:info@scoresolutions.com" className="hover:text-[var(--primary-brown)] transition-colors">
                info@scoresolutions.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone fontSize="small" />
              <span className="font-medium">+254 700058068, +254 713088058, +254 722 794468</span>
            </div>
            <div className="flex items-center gap-2">
              <Language fontSize="small" />
              <a href="https://www.scoresolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-brown)] transition-colors">
                www.scoresolutions.co.ke
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Score Solutions. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

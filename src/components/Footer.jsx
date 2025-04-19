"use client";
import { Instagram, Twitter, LinkedIn, Facebook, YouTube } from "@mui/icons-material"; // Material Icons
import PlaceIcon from "@mui/icons-material/Place";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#8d5a33] to-[#4e2a1e] text-text py-10 mt-12 w-full">
      <div className="container mx-auto text-center text-sm space-y-6">
        
        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold text-accent mb-2">Follow Us on social media platforms</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <Instagram fontSize="large" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <Twitter fontSize="large" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <LinkedIn fontSize="large" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <Facebook fontSize="large" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-text hover:opacity-80">
              <YouTube fontSize="large" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-4 flex flex-col items-center text-gray-400">
          <div className="flex items-center gap-2">
            <PlaceIcon fontSize="small" className="text-accent" />
            <span className="text-lg font-medium text-gray-600">Nairobi, Kenya</span>
          </div>
          <span className="text-sm text-gray-600">Kogo Plaza, Ground Floor, Mai Mahiu Road P.O Box 55064-00100 Nairobi, Kenya</span>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold text-accent mb-2">Contact Us</h2>
          <p>Email: <a href="mailto:info@scoresolutions.com" className="hover:text-accent">info@scoresolutions.com</a></p>
          <p>Phone: 
            <span className="text-black font-black"> +254 700058068, +254 713088058, +254 722 794468</span>
          </p>
          <p>Website: <a href="https://www.scoresolutions.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">www.scoresolutions.com</a></p>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Score Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

"use client";
import { LocationOn, Email, Phone, Send, Instagram, Twitter, LinkedIn, Facebook, YouTube } from "@mui/icons-material";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-primary-brown)] text-[var(--color-neutral-beige)] py-32 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate__animated animate__fadeInUp">
            Get in Touch
          </h1>
          <p className="text-lg sm:text-xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
            Have any questions or need assistance with your immigration journey? We’re here to help.
          </p>
          <Link
            href="#contact-info"
            className="inline-block mt-4 px-6 py-3 text-lg bg-[var(--color-accent-orange)] text-black rounded-full hover:bg-opacity-90 transition transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Contact Us Now <Send fontSize="small" className="inline-block ml-2" />
          </Link>
        </div>
      </section>

      {/* Contact Info Section */}
      <section id="contact-info" className="py-20 bg-[var(--color-neutral-beige)] text-center text-[var(--color-primary-brown)]">
        <div className="container mx-auto space-y-16">
          {/* Our Contact Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 animate__animated animate__fadeInUp">
              Contact Information
            </h2>
            <p className="text-lg sm:text-xl mb-10 animate__animated animate__fadeInUp animate__delay-1s">
              Reach out to us via the following methods:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInLeft animate__delay-2s">
                <LocationOn fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-orange)]" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p>Kogo Plaza, Ground Floor, Mai Mahiu Road, P.O Box 55064-00100 Nairobi, Kenya</p>
              </div>
              <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s">
                <Phone fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-orange)]" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p>+254 700 058 068<br />+254 713 088 058<br />+254 722 794 468</p>
              </div>
              <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInRight animate__delay-2s">
                <Email fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-orange)]" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p>info@scoresolutions.co.ke</p>
              </div>
            </div>
          </div>

          {/* Follow Us on Social Media */}
          <div className="bg-[var(--color-neutral-beige)] py-12 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-8 animate__animated animate__fadeInUp">
              Follow Us on Social Media
            </h2>
            <p className="text-lg sm:text-xl mb-10 text-gray-700 animate__animated animate__fadeInUp animate__delay-1s">
              Connect with us directly through our official profiles:
            </p>
            <div className="flex flex-wrap justify-center gap-8 animate__animated animate__fadeInUp animate__delay-2s">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[var(--color-accent-gold)] transition-colors">
                <Instagram fontSize="large" />
                <span className="mt-2 font-medium">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[var(--color-accent-gold)] transition-colors">
                <Twitter fontSize="large" />
                <span className="mt-2 font-medium">Twitter</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[var(--color-accent-gold)] transition-colors">
                <LinkedIn fontSize="large" />
                <span className="mt-2 font-medium">LinkedIn</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[var(--color-accent-gold)] transition-colors">
                <Facebook fontSize="large" />
                <span className="mt-2 font-medium">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:text-[var(--color-accent-gold)] transition-colors">
                <YouTube fontSize="large" />
                <span className="mt-2 font-medium">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--color-primary-brown)] text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 animate__animated animate__fadeInUp">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white sm:text-xl mb-6 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We are committed to guiding you through every step of your immigration process. Get in touch today! <br/>Direct link to our email below
          </p>
          <Link
            href="mailto:info@scoresolutions.co.ke"
            className="inline-block px-6 py-3 text-lg bg-[var(--color-accent-orange)] text-black rounded-full hover:bg-opacity-90 transition transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Email Us <Send fontSize="small" className="inline-block ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

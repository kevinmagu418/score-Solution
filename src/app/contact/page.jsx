"use client";
import { LocationOn, Email, Phone, Send } from "@mui/icons-material";
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
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-[var(--color-neutral-beige)] text-center text-[var(--color-primary-brown)]">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 animate__animated animate__fadeInUp">
            Contact Information
          </h2>
          <p className="text-lg sm:text-xl mb-10 animate__animated animate__fadeInUp animate__delay-1s">
            Reach out to us via the following methods:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInLeft animate__delay-2s">
              <LocationOn fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-gold)] hover:text-yellow-300 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>123 Immigration Avenue, Nairobi, Kenya</p>
            </div>
            <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s">
              <Phone fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-gold)] hover:text-yellow-300 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>+254 712 345 678</p>
            </div>
            <div className="transition-transform transform hover:scale-105 duration-300 animate__animated animate__fadeInRight animate__delay-2s">
              <Email fontSize="large" className="mx-auto mb-4 text-[var(--color-accent-gold)] hover:text-yellow-300 transition duration-300" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>info@scoresolutions.co.ke</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--color-neutral-gray)] text-center text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 animate__animated animate__fadeInUp">
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            We are committed to helping you with all your immigration needs. Contact us today to learn how we can assist you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-lg bg-[var(--color-accent-gold)] text-black rounded-full hover:bg-opacity-90 transition transform hover:scale-105 duration-300 animate__animated animate__fadeInUp animate__delay-2s"
          >
            Contact Us Now <Send fontSize="small" className="inline-block ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

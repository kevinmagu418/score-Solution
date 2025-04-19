"use client";
import { Work, AirplaneTicket, Apartment, ContactMail } from "@mui/icons-material";

import Link from 'next/link';

export default function HomePage() {
 
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[var(--color-primary-brown)] text-[var(--color-neutral-beige)] py-32 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Your Trusted Partner for Immigration Services in Kenya
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Navigating the complexities of Kenyan immigration with over 8 years of experience.
          </p>
          <div className="flex justify-center space-x-6">
           <Link
           href="/services"
           className="inline-block px-6 py-3 text-lg bg-[var(--color-accent-gold)] text-black rounded-full hover:bg-opacity-90 transition"
         >
           Explore Services
         </Link>
       
         <Link
           href="/contact"
           className="inline-block px-6 py-3 text-lg border-2 border-[var(--color-accent-gold)] text-[var(--color-accent-gold)] rounded-full hover:bg-[var(--color-accent-gold)] hover:text-black transition"
         >
           Contact Us
         </Link>
       
          </div>
        </div>
      </section>

      {/* Brief Intro Section */}
      <section className="py-20 bg-[var(--color-neutral-beige)] text-center text-[var(--color-primary-brown)]">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            About Score Solutions
          </h2>
          <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto">
            Score Solutions is an innovative immigration services provider with 8+ years of experience, helping individuals and corporations navigate Kenyan immigration processes.
          </p>
        </div>
      </section>

      {/* Key Services Section */}
      <section id="services" className="py-20 bg-white text-[var(--color-primary-brown)]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Our Key Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Cards */}
            {[ 
              {
                icon: <ContactMail fontSize="large" className="mb-4 text-[var(--color-accent-orange)]" />,
                title: "Passport Services",
                desc: "Assistance with processing and acquiring passports for individuals and corporations.",
                link: "/services",
              },
              {
                icon: <Work fontSize="large" className="mb-4 text-[var(--color-accent-orange)]" />,
                title: "Work Permits",
                desc: "Providing work permit services for foreign employees looking to work in Kenya.",
                link: "/services",
              },
              {
                icon: <AirplaneTicket fontSize="large" className="mb-4 text-[var(--color-accent-orange)]" />,
                title: "Visas",
                desc: "Assistance with tourist, business, and other visa applications for Kenya.",
                link: "/services",
              },
              {
                icon: <Apartment fontSize="large" className="mb-4 text-[var(--color-accent-orange)]" />,
                title: "Permanent Residence",
                desc: "Helping individuals and families navigate the permanent residence process in Kenya.",
                link: "/services",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <a href={service.link} className="text-[var(--color-accent-orange)] hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/**our trusted clients */}
      <section className="py-20 bg-[var(--color-neutral-gray)] text-center text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-semibold mb-12">Our Trusted Clients</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
      {/* Client 1 */}
      <div className="flex flex-col items-center">
        <img src="/egyptair.png" alt="Egypt Air" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium">Egypt Air</p>
      </div>

      {/* Client 2 */}
      <div className="flex flex-col items-center">
        <img src="/capitalcafe.png" alt="Capital Coffee Lounge" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium text-center">Capital Coffee Lounge</p>
      </div>

      {/* Client 3 */}
      <div className="flex flex-col items-center">
        <img src="/sekenani.jpeg" alt="Sekanani Lounge" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium text-center">Sekanani Lounge</p>
      </div>

      {/* Client 4 */}
      <div className="flex flex-col items-center">
        <img src="/tourism.jpeg" alt="Tourism for Tomorrow" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium text-center">Tourism for Tomorrow</p>
      </div>

      {/* Client 5 */}
      <div className="flex flex-col items-center">
        <img src="/naivas.png" alt="Naivas" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium">Naivas</p>
      </div>

      {/* Client 6 */}
      <div className="flex flex-col items-center">
        <img src="/etg.png" alt="Export Trading Group" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium text-center">Export Trading Group</p>
      </div>

      {/* Client 7 */}
      <div className="flex flex-col items-center">
        <img src="/oilibya.jpeg" alt="Oilibya" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium">Oilibya</p>
      </div>

      {/* Client 8 */}
      <div className="flex flex-col items-center">
        <img src="/stonearts.png" alt="Stone Arts" className="w-24 h-24 object-contain mb-2" loading="lazy" />
        <p className="text-sm font-medium">Stone Arts</p>
      </div>
    </div>
  </div>
</section>

      
      
      
     {/* Stats Section */}
     <section className="py-20 bg-gradient-to-r from-[#8d5a33] to-[#4e2a1e] text-white text-center">

<div className="container mx-auto">
  <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
    Trusted by Over <span className="text-yellow-300">1,250+ Clients</span> Worldwide
  </h2>

  <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-6xl mx-auto">
    <div className="flex flex-col items-center">

      <h3 className="text-4xl font-bold">1,250+</h3>
      <p className="text-lg mt-1">Clients Served</p>
    </div>

    <div className="flex flex-col items-center">
      <h3 className="text-4xl font-bold">22</h3>
      <p className="text-lg mt-1">Countries Reached</p>
    </div>

    <div className="flex flex-col items-center">
      
      <h3 className="text-4xl font-bold">8+</h3>
      <p className="text-lg mt-1">Years Experience</p>
    </div>
   <div className="flex flex-col items-center">
      
      <h3 className="text-4xl font-bold">1,850+</h3>
      <p className="text-lg mt-1">Successful Projects</p>
    </div>
  </div>
</div>
</section> 
     


    </div>
  );
}

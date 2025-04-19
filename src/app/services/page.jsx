"use client";

import {
  ContactMail,
  Work,
  TravelExplore,
  HomeWork,
  People,
  AssignmentInd,
} from "@mui/icons-material";
import { useEffect } from "react";
import "animate.css";

const services = [
  {
    icon: <ContactMail fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Passport Services",
    description: "Complete assistance with Kenyan passport applications and renewals.",
    imageUrl: "/passport.jpeg",
    details: [
      {
        label: "Key Services",
        items: [
          "New applications & renewals",
          "Lost/damaged replacement",
          "Change of name processing",
          "34/50/66 page options",
        ],
      },
      {
        label: "Our Process",
        items: [
          "Form 19 completion",
          "Document verification",
          "Application submission",
          "Collection coordination",
        ],
      },
    ],
  },
  {
    icon: <Work fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Work Permits",
    description: "End-to-end work permit processing for foreign nationals.",
    imageUrl: "/workpermit.jpeg",
    details: [
      {
        label: "Categories",
        items: [
          "Class A: Mining/Prospecting",
          "Class B: Agriculture",
          "Class C: Professionals",
          "Class D: Employment",
          "Class K: Residents",
        ],
      },
    ],
  },
  {
    icon: <TravelExplore fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Tourist Visas",
    description: "Visa application assistance for tourists visiting Kenya.",
    imageUrl: "/touristvisa.jpeg",
    details: [
      {
        label: "Visa Types",
        items: [
          "Single entry",
          "Multiple entry",
          "Transit visa",
        ],
      },
      {
        label: "Our Process",
        items: [
          "Application form submission",
          "Supporting document verification",
          "Visa approval",
        ],
      },
    ],
  },
  {
    icon: <HomeWork fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Business Visas",
    description: "Comprehensive services for foreign investors and businesses.",
    imageUrl: "/businessvisa.jpeg",
    details: [
      {
        label: "Visa Categories",
        items: [
          "Investment visas",
          "Director visas",
          "Employee visas",
        ],
      },
      {
        label: "Process Steps",
        items: [
          "Visa application form",
          "Business registration verification",
          "Visa approval process",
        ],
      },
    ],
  },
  {
    icon: <People fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Family Visas",
    description: "Assist families in bringing relatives to Kenya for residency or work.",
    imageUrl: "/familyvisa.jpeg",
    details: [
      {
        label: "Visa Types",
        items: [
          "Spouse visa",
          "Children visa",
          "Parents visa",
        ],
      },
      {
        label: "Required Documents",
        items: [
          "Marriage certificate",
          "Birth certificates",
          "Proof of relationship",
        ],
      },
    ],
  },
  {
    icon: <AssignmentInd fontSize="large" className="text-[color:var(--primary-blue)]" />,
    title: "Refugee Status",
    description: "Assistance with refugee applications and status verification.",
    imageUrl: "/refugee.jpeg",
    details: [
      {
        label: "Key Services",
        items: [
          "Refugee status verification",
          "Document processing",
          "Permanent resident status applications",
        ],
      },
      {
        label: "Our Process",
        items: [
          "Refugee application submission",
          "Interviews and documentation",
          "Approval and status assignment",
        ],
      },
    ],
  },
];

const ServicesPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          el.classList.add("animate__animated", "animate__fadeInUp");
          el.classList.remove("opacity-0");
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="bg-[color:var(--primary-blue)] text-black py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate__animated animate__fadeInDown">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Immigration Services</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Expert solutions for all your Kenyan immigration needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[color:var(--primary-brown)] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl shadow-md p-6 opacity-0 animate-on-scroll transition-all duration-700"
            >
              {/* Image with lazy loading */}
              <div className="mb-4">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-2 text-black">{service.title}</h2>
                <p className="mb-4 text-sm font-light">{service.description}</p>

                {service.details.map((section, i) => (
                  <div key={i} className="mb-4">
                    <h3 className="text-md font-semibold mb-2">{section.label}:</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {section.items.map((item, j) => (
                        <li key={j} className="font-light">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[color:var(--primary-blue)] text-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate__animated animate__zoomIn">
          <h2 className="text-3xl font-semibold mb-4">Need Immigration Assistance?</h2>
          <p className="text-lg mb-6 font-light leading-relaxed">
            Our specialists provide personalized guidance for all Kenyan immigration matters.
          </p>
          <a
            href="tel:+254700058068"
            className="inline-block bg-[color:var(--primary-brown)] text-black font-semibold py-3 px-8 rounded-lg text-lg hover:opacity-90 transition"
          >
            Call +254 700 058 068
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;

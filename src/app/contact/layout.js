
import React from 'react';

export const metadata = {
    title: 'Contact Us - Score Solutions Immigration',
    description: 'Get in touch with Score Solutions for expert immigration services in Kenya. Contact us for visa applications, e-passports, work permits, and more.',
    keywords: 'contact, immigration services, visa applications, e-passport, Kenya, Score Solutions, immigration consultancy, contact immigration experts',
    authors: 'Score Solutions',
    robots: 'index, follow',
    openGraph: {
      title: 'Contact Us - Score Solutions Immigration',
      description: 'Get in touch with Score Solutions for expert immigration services in Kenya. Contact us for visa applications, e-passports, work permits, and more.',
      url: 'https://www.scoresolutions.com/contact',
      siteName: 'Score Solutions',
      images: [
        {
          url: 'https://www.scoresolutions.com/images/contact-banner.png', // Update this image URL as needed
          width: 1200,
          height: 630,
          alt: 'Contact Us - Score Solutions Immigration',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us - Score Solutions Immigration',
      description: 'Get in touch with Score Solutions for expert immigration services in Kenya. Contact us for visa applications, e-passports, work permits, and more.',
      image: 'https://www.scoresolutions.com/images/contact-banner.png', // Update this image URL as needed
    },
  };
  export default function ContactLayout({ children }) {
    return (
      <div>
        
          
    
        {children}
      </div>
    );
  }
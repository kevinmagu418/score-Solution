
import React from 'react';
export const metadata = {
    title: 'About Score Solutions - Immigration Services',
    description: 'Score Solutions is a leading immigration services provider in Kenya, offering expert assistance with visa applications, e-passports, and more.',
    keywords: 'immigration services, visa applications, e-passport, Kenya, Score Solutions, immigration consultancy, business services',
    authors: 'Score Solutions',
    robots: 'index, follow',
    openGraph: {
      title: 'About Score Solutions - Immigration Services',
      description: 'Score Solutions is a leading immigration services provider in Kenya, offering expert assistance with visa applications, e-passports, and more.',
      url: 'https://www.scoresolutions.com/about-us',
      siteName: 'Score Solutions',
      images: [
        {
          url: 'https://www.scoresolutions.com/images/score-logo.png',
          width: 1200,
          height: 630,
          alt: 'Score Solutions Logo',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Score Solutions - Immigration Services',
      description: 'Score Solutions is a leading immigration services provider in Kenya, offering expert assistance with visa applications, e-passports, and more.',
      image: 'https://www.scoresolutions.com/images/score-logo.png',
    },
  };

  export default function AboutLayout({ children }) {
    return (
      <div>
        
        {children}
        
      </div>
    );
  }
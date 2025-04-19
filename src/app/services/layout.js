import React from 'react';

export const metadata = {
    title: 'Our Services - Score Solutions Immigration',
    description: 'Explore the range of immigration services provided by Score Solutions, including visa applications, e-passports, and more.',
    keywords: 'immigration services, visa applications, e-passport, Kenya, Score Solutions, immigration consultancy, business services',
    authors: 'Score Solutions',
    robots: 'index, follow',
    openGraph: {
      title: 'Our Services - Score Solutions Immigration',
      description: 'Explore the range of immigration services provided by Score Solutions, including visa applications, e-passports, and more.',
      url: 'https://www.scoresolutions.com/services',
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
      title: 'Our Services - Score Solutions Immigration',
      description: 'Explore the range of immigration services provided by Score Solutions, including visa applications, e-passports, and more.',
      image: 'https://www.scoresolutions.com/images/score-logo.png',
    },
  };
  export default function ServiceLayout({ children }) {
    return (
      <div>
        
        
        {children}
        
      </div>
    );
}
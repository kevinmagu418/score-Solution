import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Score Solution | Immigration Services in Kenya",
  description:
    "Score Solution is your trusted partner for immigration services in Kenya. We offer expert consultation, visa assistance, and legal guidance for smooth migration.",
  keywords: [
    "Immigration services Kenya",
    "Visa assistance Kenya",
    "Migration consultants Kenya",
    "Score Solution",
    "Work permits Kenya",
    "Study abroad Kenya",
    "Kenya immigration experts",
  ],

  icons: {
    icon: "/score.png",
  },
  authors: [{ name: "Score Solution", url: "https://scoresolution.co.ke" }],
  creator: "Score Solution",
  publisher: "Score Solution",
  robots: "index, follow",
  openGraph: {
    title: "Score Solution | Immigration Services in Kenya",
    description:
      "Expert immigration consultation and visa services for individuals and families in Kenya. Trusted by thousands for smooth migration support.",
    url: "https://scoresolution.co.ke",
    siteName: "Score Solution",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased flex flex-col min-h-screen` }style={{
          background: "linear-gradient(to right, #7b2e22, #5a1f17, #3b150f)",
        }}
>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
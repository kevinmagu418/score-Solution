"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import Image from 'next/image';

// Nav links array
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contacts", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  // Hide tooltip after 9 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="bg-[var(--score-blue)] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
  <Image
    src="/logo.png" // Make sure logo.png is inside the /public folder
    alt="Score Solutions Logo"
    width={140} // adjust as needed
    height={140} // adjust as needed
    className="hover:opacity-80 transition-opacity"
  />
</Link>

        {/* Mobile Menu Button */}
        <div className="relative lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <CloseIcon fontSize="large" className="text-white" />
            ) : (
              <MenuIcon fontSize="large" className="text-white" />
            )}
          </button>

          {/* Tooltip Message */}
          {hasMounted &&showTooltip &&(
            <div className="absolute top-10 right-2 bg-[var(--color-primary-navy)] text-white text-sm px-4 py-2 rounded-md shadow-md animate-fade-in w-[200px] sm:w-auto max-w-xs">
            Click here to navigate to pages
          </div>
          
          )}
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute top-full left-0 w-full bg-[var(--score-blue)] lg:bg-transparent px-6 pb-6 lg:static lg:w-auto lg:flex lg:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden lg:block"
          }`}
        >
          <ul className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-8">
            {navLinks.map((navlink) => (
              <li key={navlink.name}>
                <Link
                  href={navlink.href}
                  className={`block py-2 px-1 text-lg lg:text-base ${
                    pathname === navlink.href
                      ? "text-white font-semibold border-b-2 border-white"
                      : "text-[var(--score-blue-light)] hover:text-white"
                  } transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                >
                  {navlink.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

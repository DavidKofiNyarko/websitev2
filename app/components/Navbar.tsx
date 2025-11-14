"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path.startsWith("#")) {
      return false; // Hash links are not considered active based on pathname
    }
    return pathname === path;
  };

  const getLinkClassName = (path: string, isMobile = false) => {
    const baseClasses = isMobile
      ? "block px-4 py-3 text-base font-medium rounded-lg transition-colors"
      : "text-sm md:text-base font-medium px-2 md:px-3 py-2 rounded-lg transition-colors";

    const activeClasses = isActive(path)
      ? "text-[#1C442A] bg-[#1C442A]/10"
      : "text-gray-700 hover:text-[#1C442A] hover:bg-gray-50";

    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent/90 backdrop-blur-lg border-b border-gray-200/40 w-full max-w-full"
    >
      <div className="mx-auto max-w-7xl w-full px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="AgriPath Logo"
                width={80}
                height={80}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-1 justify-center">
            <Link href="/about" className={getLinkClassName("/about")}>
              About Us
            </Link>
            <Link href="/investors" className={getLinkClassName("/investors")}>
              Investors
            </Link>
            <Link href="/farmers" className={getLinkClassName("/farmers")}>
              Farmers
            </Link>
            <Link href="/faqs" className={getLinkClassName("/faqs")}>
              FAQs
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
            <a
              href="https://app.agripath.co/signin"
              className="hidden md:block px-3 md:px-4 lg:px-5 py-1.5 md:py-2 text-xs md:text-sm font-semibold text-gray-700 border border-gray-300 rounded-full hover:border-[#1C442A] hover:text-[#1C442A] hover:bg-gray-50 transition-all duration-300 ease-out whitespace-nowrap"
            >
              Sign in
            </a>
            <a
              href="https://app.agripath.co/signin"
              className="px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 md:py-2 text-xs sm:text-sm font-semibold text-white bg-[#1C442A] rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out whitespace-nowrap"
            >
              <span className="hidden sm:inline">Create Account</span>
              <span className="sm:hidden">Join</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-700 hover:text-[#1C442A] transition-colors rounded-lg hover:bg-gray-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/40 bg-white/95 backdrop-blur-lg">
            <div className="px-3 sm:px-4 pt-3 pb-4 space-y-1">
              <Link
                href="/about"
                className={getLinkClassName("/about", true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/investors"
                className={getLinkClassName("/investors", true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Investors
              </Link>
              <Link
                href="/farmers"
                className={getLinkClassName("/farmers", true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Farmers
              </Link>
              <Link
                href="/faqs"
                className={getLinkClassName("/faqs", true)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              {/* Mobile CTA Buttons */}
              <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col gap-2">
                <a
                  href="https://app.agripath.co/signin"
                  className="w-full px-4 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-full hover:border-[#1C442A] hover:text-[#1C442A] hover:bg-gray-50 transition-all duration-300 ease-out text-center"
                >
                  Sign in
                </a>
                <a
                  href="https://app.agripath.co/signin"
                  className="w-full px-4 py-2.5 text-sm font-semibold text-white bg-[#1C442A] rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out text-center"
                >
                  Create Account
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

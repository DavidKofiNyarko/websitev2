"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="px-4 py-12 md:py-16"
      style={{ backgroundColor: "#1C442A" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="/logo.png"
                alt="AgriPath Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <div
                className="text-xl font-bold mb-1"
                style={{ color: "#F5A623" }}
              >
                AGRIPATH
              </div>
              <div className="text-sm font-medium" style={{ color: "#F5A623" }}>
                FARMING & ADVISORY
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#F5A623" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About Us", "Investors", "Farmers", "FAQs"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white hover:text-[#F5A623] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#F5A623" }}
            >
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/legal#investment-terms"
                  className="text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/legal#terms-of-service"
                  className="text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/legal#privacy-policy"
                  className="text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/legal#refund-policy"
                  className="text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div id="contact-us">
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: "#F5A623" }}
            >
              Contact Us
            </h3>
            <div className="space-y-4">
              {/* Social Media Icons */}
              <div className="flex gap-3">
                {[
                  {
                    name: "Facebook",
                    href: "https://www.facebook.com/share/16VX3ZQwuL/?mibextid=wwXIfr",
                    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                  },
                  {
                    name: "Instagram",
                    href: "https://www.instagram.com/agripath.ltd?igsh=MWVieTVnNmFybHM3OQ%3D%3D&utm_source=qr",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    name: "LinkedIn",
                    href: "https://www.linkedin.com/company/107099056/admin/dashboard/",
                    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                  },
                  {
                    name: "YouTube",
                    href: "https://www.youtube.com/@AgriPathAfrica",
                    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ backgroundColor: "#F5A623" }}
                    aria-label={social.name}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#1C442A" }}
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#F5A623" }}
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@agripath.co"
                  className="text-white hover:text-[#F5A623] transition-colors duration-200"
                >
                  info@agripath.co
                </a>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#F5A623" }}
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <div className="text-white">
                  <a
                    href="tel:+233598491339"
                    className="block hover:text-[#F5A623] transition-colors duration-200"
                  >
                    +233 598 491 339
                  </a>
                  <a
                    href="tel:+233206662019"
                    className="block hover:text-[#F5A623] transition-colors duration-200"
                  >
                    +233 206 662 019
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 mt-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#F5A623" }}
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white">
                  Accra, Akuse, Afram Plains, Bolga - Ghana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Security & Copyright */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Payment Security Badge */}
            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span className="text-white text-sm">Secured by paystack</span>
            </div>

            {/* Copyright */}
            <div className="text-white text-sm text-center md:text-right">
              Copyright AgriPath © 2025 All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

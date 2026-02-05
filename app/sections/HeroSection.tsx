"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import InfiniteScroll from "../components/InfiniteScroll";
import Link from "next/link";
import { useModal } from "../components/ModalContext";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { openFarmerModal } = useModal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations with timeline
      if (titleRef.current && subtitleRef.current && ctaRef.current) {
        // Set initial states
        gsap.set([titleRef.current, subtitleRef.current], { opacity: 0 });
        gsap.set(Array.from(ctaRef.current.children), { opacity: 0, y: 30 });

        const tl = gsap.timeline();

        tl.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        })
          .to(
            subtitleRef.current,
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .to(
            Array.from(ctaRef.current.children),
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              stagger: 0.2,
            },
            "-=0.4"
          );
      }

      // Image animation
      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Overlay cards animation
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);
        gsap.from(cards, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          delay: 0.8,
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-cover bg-center bg-no-repeat w-full"
        style={{
          backgroundImage: "url('/hero-image.png')",
        }}
      >
        <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="z-10">
              <h1
                ref={titleRef}
                className="mb-6 text-5xl font-extrabold leading-tight tracking-tight font-kulim-park text-[#1C442A]"
              >
                We're Making Agriculture Investable for Everyone.
              </h1>
              <p
                ref={subtitleRef}
                className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-inter"
              >
                AgriPath makes it easy for anyone to invest in real farms, track
                progress online, and share profits from transparent, sustainable
                agriculture projects across Africa.
              </p>
              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 z-10 relative"
              >
                <Link
                  href="https://app.agripath.co/signin"
                  className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center"
                  style={{ opacity: 1 }}
                >
                  Start Investing Now
                </Link>
                <button
                  onClick={openFarmerModal}
                  className="liquid-button px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-transparent hover:text-white hover:shadow-lg transition-all duration-300 ease-out text-center relative overflow-hidden"
                  style={{ opacity: 1 }}
                >
                  <span className="relative z-10">Register Your Farm</span>
                </button>
              </div>
            </div>

            {/* Right Side - Image with Overlay Cards */}
            <div ref={imageRef} className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-[600px] bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/hero.png')",
                  }}
                />
              </div>

              {/* Overlay Cards */}
              <div
                ref={cardsRef}
                className="absolute inset-0 pointer-events-none hidden lg:block"
              >
                {/* Investor Account Card */}
                <div className="absolute top-8 left-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      Investor Account
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    GHS 12,480
                  </div>
                  <div className="text-sm text-green-600 font-medium">
                    +20% ROI
                  </div>
                </div>

                {/* Field Update Card */}
                <div className="absolute top-8 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      Field Update
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    43 Acres
                  </div>
                  <div className="text-xs text-gray-600">Afram Plains</div>
                </div>

                {/* Track Project Card */}
                <div className="absolute bottom-24 left-4 bg-white rounded-lg shadow-lg p-4 max-w-[220px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      Track Project
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    Tomatoes
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    65% growth stage
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full w-[65%]" />
                  </div>
                </div>

                {/* Outgrower Program Card */}
                <div className="absolute bottom-8 right-4 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      Outgrower Program
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    20+ Partner Farmers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Crops Section */}
      </section>
      <InfiniteScroll />
    </>
  );
}

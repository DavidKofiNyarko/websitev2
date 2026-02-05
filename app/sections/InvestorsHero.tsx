"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InvestorsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;

      // Hero section animation - start early for blending
      if (tagRef.current && headingRef.current && descriptionRef.current && buttonsRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 95%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(tagRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        })
          .from(
            headingRef.current,
            {
              opacity: 0,
              y: 40,
              duration: 1.2,
              ease: "power3.out",
            },
            "-=0.5"
          )
          .from(
            descriptionRef.current,
            {
              opacity: 0,
              y: 30,
              duration: 1.1,
              ease: "power3.out",
            },
            "-=0.8"
          )
          .from(
            Array.from(buttonsRef.current.children),
            {
              opacity: 0,
              y: 30,
              scale: 0.95,
              duration: 1,
              ease: "power3.out",
              stagger: {
                amount: 0.3,
                from: "start",
              },
            },
            "-=0.7"
          );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative py-24 md:py-40 px-4 overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Agricultural field background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-50/10 backdrop-blur-xs" />

        <div className="mx-auto max-w-4xl w-full text-center relative z-10">
          {/* For Investors Tag */}
          <div ref={tagRef} className="mb-8">
            <button className="px-6 py-2.5 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold text-sm md:text-base hover:border-[#1C442A] hover:text-[#1C442A] transition-all duration-300">
              For Investors
            </button>
          </div>

          {/* Main Headline */}
          <div ref={headingRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-kulim-park text-[#1C442A] leading-tight mb-6">
              Invest Smart. Grow Impact. Earn Returns.
            </h1>
          </div>

          {/* Descriptive Text */}
          <div ref={descriptionRef}>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
              AgriPath connects you to verified, high-impact agricultural projects
              across Africa; where every investment supports farmers, strengthens
              food systems, and delivers measurable profits.
            </p>
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.agripath.co/signup" className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center">
              Create Free Account
            </a>
            <a href="https://app.agripath.co/signin" className="px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-white hover:bg-[#1C442A] hover:text-white hover:shadow-lg transition-all duration-300 ease-out text-center">
              Invest In AgriPath
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


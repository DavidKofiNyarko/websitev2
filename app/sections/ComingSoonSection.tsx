"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useModal } from "../components/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ComingSoonSection() {
  const { openPartnerSelectionModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      if (contentRef.current && imageRef.current) {
        // Create overlapping timeline for smooth blending - overlapping with previous section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });

        tl.from(contentRef.current, {
          opacity: 0,
          x: -60,
          y: 35,
          scale: 0.95,
          duration: 1.3,
          ease: "power3.out",
        }).from(
          imageRef.current,
          {
            opacity: 0,
            x: 60,
            y: 35,
            scale: 0.92,
            rotation: 2,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className=" relative overflow-hidden w-full px-12 bg-[#F0F5F2]"
      // style={{ backgroundColor: "#F0F5F2" }}
    >
      {/* Subtle circular design elements */}
      <div className="flex justify-center items-center relative w-full h-full">
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-gray-200 rounded-full -mr-48 -mb-48 opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-gray-200 rounded-full -mr-32 -mb-32 opacity-20 pointer-events-none" />
      </div>
      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch min-h-[600px] md:min-h-[700px]">
          {/* Left side - Text Content */}
          <div ref={contentRef} className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-kulim-park text-[#1C442A]">
              The AgriPath App — Coming Soon
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              We&apos;re building a mobile app for investors to fund, track, and
              grow agricultural projects from anywhere. Stay tuned for launch!
            </p>

            {/* Platform Availability */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm md:text-base text-gray-700">
                Coming to both iPhone & Android
              </span>
              <div className="flex items-center gap-3">
                {/* iPhone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1C442A"
                  className="w-6 h-6"
                >
                  <path d="M11.6734 7.22198C10.7974 7.22198 9.44138 6.22598 8.01338 6.26198C6.12938 6.28598 4.40138 7.35397 3.42938 9.04597C1.47338 12.442 2.92538 17.458 4.83338 20.218C5.76938 21.562 6.87338 23.074 8.33738 23.026C9.74138 22.966 10.2694 22.114 11.9734 22.114C13.6654 22.114 14.1454 23.026 15.6334 22.99C17.1454 22.966 18.1054 21.622 19.0294 20.266C20.0974 18.706 20.5414 17.194 20.5654 17.11C20.5294 17.098 17.6254 15.982 17.5894 12.622C17.5654 9.81397 19.8814 8.46998 19.9894 8.40998C18.6694 6.47798 16.6414 6.26198 15.9334 6.21398C14.0854 6.06998 12.5374 7.22198 11.6734 7.22198ZM14.7934 4.38998C15.5734 3.45398 16.0894 2.14598 15.9454 0.849976C14.8294 0.897976 13.4854 1.59398 12.6814 2.52998C11.9614 3.35798 11.3374 4.68998 11.5054 5.96198C12.7414 6.05798 14.0134 5.32598 14.7934 4.38998Z"></path>
                </svg>
                {/* Android Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#1C442A"
                  className="w-6 h-6"
                >
                  <path d="M6.38231 3.9681C7.92199 2.73647 9.87499 2 12 2C14.125 2 16.078 2.73647 17.6177 3.9681L19.0711 2.51472L20.4853 3.92893L19.0319 5.38231C20.2635 6.92199 21 8.87499 21 11V12H3V11C3 8.87499 3.73647 6.92199 4.9681 5.38231L3.51472 3.92893L4.92893 2.51472L6.38231 3.9681ZM3 14H21V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V14ZM9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z"></path>
                </svg>
              </div>
            </div>
            {/* CTA Button */}
            <button
              onClick={openPartnerSelectionModal}
              className="px-8 py-3.5 w-fit bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out inline-block cursor-pointer"
            >
              Partner With Us
            </button>
          </div>

          {/* Right side - Smartphone Image */}
          <div
            ref={imageRef}
            className="relative flex justify-center md:justify-end h-full"
          >
            <div className="relative w-full max-w-6xl h-full">
              <Image
                src="/coming-soon.png"
                alt="AgriPath App Preview"
                width={1400}
                height={1400}
                className="w-full h-full object-contain absolute bottom-20 sm:-bottom-15 left-10 scale-300 sm:scale-250 md:scale-200 lg:scale-150 xl:scale-125 2xl:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

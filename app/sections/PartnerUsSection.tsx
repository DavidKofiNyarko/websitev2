"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnerUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Create a flowing timeline that blends with previous section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
          end: "top 60%",
          toggleActions: "play none none none",
        },
      });

      if (contentRef.current) {
        const children = Array.from(contentRef.current.children);
        tl.from(children, {
          opacity: 0,
          y: 40,
          duration: 1.1,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
            from: "start",
          },
        });
      }

      if (buttonsRef.current) {
        const buttons = Array.from(buttonsRef.current.children);
        // Ensure buttons are visible initially
        gsap.set(buttons, {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        tl.fromTo(
          buttons,
          {
            opacity: 0,
            y: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: {
              amount: 0.3,
              from: "start",
            },
          },
          "-=0.5"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-4 relative overflow-hidden w-full"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/partner-image.jpg"
          alt="Partner background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1C442A]/80 to-[#1C442A]" />

      <div className="mx-auto max-w-4xl w-full relative z-10 text-center">
        <div ref={contentRef}>
          <div
            className="text-2xl md:text-3xl font-normal mb-4"
            style={{
              fontFamily: "var(--font-kulim-park)",
              color: "#F5A623",
              fontStyle: "italic",
            }}
          >
            Partner Us!
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-kulim-park">
            Join as a Farmer or Buyer
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
            We work with trusted outgrowers and committed offtakers to build a
            resilient Agri-supply-chain.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center z-10"
          style={{ opacity: 1 }}
        >
          <a
            href="https://app.agripath.co/signin"
            className="px-8 py-3.5 bg-white text-[#1C442A] font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center"
          >
            I&apos;m a Farmer
          </a>
          <a
            href="https://app.agripath.co/signin"
            className="px-8 py-3.5 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center"
            style={{ backgroundColor: "#F5A623", color: "#1C442A" }}
          >
            I&apos;m a Buyer
          </a>
        </div>
      </div>
    </section>
  );
}

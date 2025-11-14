"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutUsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const missionButtonRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const contentLeftRef = useRef<HTMLDivElement>(null);
  const imageRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;

      // Mission section animation - start early for blending
      if (missionButtonRef.current && missionTextRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 95%",
            end: "top 70%",
            toggleActions: "play none none none",
          },
        });

        tl.from(missionButtonRef.current, {
          opacity: 0,
          scale: 0.8,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
        }).from(
          missionTextRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.5"
        );
      }

      // Who We Are section animation - overlapping with mission
      if (contentLeftRef.current && imageRightRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: whoWeAreRef.current,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });

        tl.from(contentLeftRef.current, {
          opacity: 0,
          x: -60,
          y: 20,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          imageRightRef.current,
          {
            opacity: 0,
            x: 60,
            y: 20,
            scale: 0.9,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full overflow-x-hidden">
      {/* Mission Section */}
      <div className="relative py-24 md:py-40 px-4 overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-50/10 backdrop-blur-xs" />

        <div className="mx-auto max-w-7xl w-full text-center relative z-10">
          {/* Our Mission Button */}
          <div ref={missionButtonRef} className="mb-8">
            <button className="px-6 py-2.5 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold text-sm md:text-base hover:border-[#1C442A] hover:text-[#1C442A] transition-all duration-300">
              Our Mission
            </button>
          </div>

          {/* Mission Statement */}
          <div ref={missionTextRef}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-kulim-park text-[#1C442A] leading-tight">
              Empowering Farmers. Connecting Investors.
              <br />
              Growing Africa's Future.
            </h1>
          </div>
        </div>
      </div>

      {/* Who We Are Section */}
      <div
        ref={whoWeAreRef}
        className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Side - Content */}
            <div ref={contentLeftRef}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]">
                Who We Are
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800">
                <p>
                  <strong>AgriPath</strong> is an agricultural investment
                  platform that connects capital to verified farms and trusted
                  partners across Ghana. We're building a future where
                  agriculture is accessible, transparent, and profitable for
                  everyone.
                </p>
                <p>
                  African farmers face significant challenges: limited access to
                  capital, unpredictable markets, and fragmented supply chains.
                  These barriers prevent smallholder farmers from scaling their
                  operations and accessing the resources they need to thrive.
                </p>
                <p>
                  <strong>
                    We manage farms, coordinate outgrowers, and develop digital
                    tools that allow anyone
                  </strong>{" "}
                  to invest in agriculture with confidence. Our platform
                  provides real-time tracking, transparent reporting, and direct
                  connections between investors and farmers.
                </p>
                <p>
                  At AgriPath, we believe in the power of agriculture to
                  transform communities and drive economic growth.{" "}
                  <strong>we grow, we manage, and we share.</strong> ❤️
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div ref={imageRightRef} className="relative">
              <div
                className="absolute -right-4 -bottom-4 w-full h-full border-r-4 border-b-4 rounded-lg"
                style={{ borderColor: "#F5A623" }}
              />
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src="/about-us-hero.png"
                  alt="AgriPath team meeting"
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

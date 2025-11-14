"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: 1,
    title: "Register Your Farm",
    description: "Sign up online or through our field agents.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Farm Assessment",
    description: "Our team visits and verifies your farm's potential.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Get Inputs & Support",
    description: "Receive funding, inputs, and guidance from our team.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Farm & Grow",
    description: "We provide continuous technical support until harvest.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: 5,
    title: "Harvest & Earn",
    description:
      "Your produce is sold through our offtaker network, and profits are shared.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
        />
      </svg>
    ),
  },
];

export default function HowFarmingWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate heading and subtitle - blending with previous section
      if (headingRef.current && subtitleRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 55%",
            toggleActions: "play none none none",
          },
        });

        tl.from(headingRef.current, {
          opacity: 0,
          y: 50,
          x: -20,
          duration: 1.3,
          ease: "power3.out",
        }).from(
          subtitleRef.current,
          {
            opacity: 0,
            y: 35,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }

      // Animate steps with stagger - overlapping with heading
      if (stepsRef.current) {
        const stepCards = Array.from(stepsRef.current.children);
        gsap.from(stepCards, {
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 88%",
            end: "top 35%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          scale: 0.92,
          rotation: -1,
          duration: 1.2,
          ease: "power3.out",
          stagger: {
            amount: 0.9,
            from: "start",
          },
        });
      }

      // Animate CTA button - blending smoothly
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          scale: 0.92,
          duration: 1,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Heading and Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
          >
            How Farming with AgriPath Works
          </h2>
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We keep things simple, so you can focus on farming while we handle
            the rest.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16"
        >
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              <div className="text-sm md:text-base font-semibold mb-3 text-[#1C442A]">
                Step {step.number}
              </div>
              <div className="flex items-start gap-4">
                {/* Icon Circle */}
                <div
                  className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: "#F5A623" }}
                >
                  {step.icon}
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-[#1C442A]">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div ref={ctaRef} className="text-center">
          <a
            href="https://app.agripath.co/signin"
            className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out inline-block"
          >
            Register Your Farm Today
          </a>
        </div>
      </div>
    </section>
  );
}

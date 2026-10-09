"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useModal } from "../components/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: 1,
    title: "Create an Account",
    description: "Sign up to access available projects and get your personalized dashboard.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Select a Project",
    description: "Choose a verified agricultural project with full details - ROI, duration, and impact goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Make Payment Securely",
    description: "Fund your investment through Paystack for fast, safe, and transparent transactions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: 4,
    title: "We Farm, You Relax",
    description: "Our agronomists and farm teams manage all operations - from land prep to harvest.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    title: "Monitor Progress",
    description: "Get updates, photos, and reports directly on your dashboard throughout the season.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: 6,
    title: "Earn & Reinvest",
    description: "After harvest, profits are calculated and paid to your AgriPath wallet or preferred account.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

export default function HowItWorksSection() {
  const { openPartnerSelectionModal } = useModal();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const conclusionRef = useRef<HTMLParagraphElement>(null);
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

      // Animate conclusion and CTA - blending smoothly
      if (conclusionRef.current && ctaRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: conclusionRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        });

        tl.from(conclusionRef.current, {
          opacity: 0,
          y: 35,
          x: -15,
          duration: 1.1,
          ease: "power3.out",
        }).from(
          ctaRef.current,
          {
            opacity: 0,
            y: 25,
            scale: 0.92,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.6"
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl w-full">
        {/* Heading and Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
          >
            How Investing with AgriPath Works
          </h2>
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            From signup to harvest, we've simplified agricultural investment, so
            you can fund verified farms confidently and watch your portfolio grow.
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

        {/* Conclusion and CTA */}
        <div className="text-center">
          <p
            ref={conclusionRef}
            className="text-lg md:text-xl font-semibold text-[#1C442A] mb-8 flex items-center justify-center gap-2"
          >
            You earn returns while helping farmers and communities thrive.
            <span className="text-red-500">❤️</span>
          </p>
          <div ref={ctaRef}>
            <button
              onClick={openPartnerSelectionModal}
              className="px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-white hover:bg-[#1C442A] hover:text-white transition-all duration-300 ease-out inline-block cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


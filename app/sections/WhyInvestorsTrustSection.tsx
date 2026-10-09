"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useModal } from "../components/ModalContext";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    id: "verified",
    title: "Verified, Managed, and Measurable",
    description:
      "Every AgriPath project goes through due diligence, verified farms, clear contracts, and reliable offtakers. Your investment is always tied to real assets with measurable progress.",
    image: "/verify-image.png",
  },
  {
    id: "risk",
    title: "Risk-Managed for Security",
    description:
      "We combine insurance coverage, agronomist supervision, and secured payments through Paystack, keeping your capital safe and your profits predictable.",
    image: "/risk-image.png",
  },
  {
    id: "transparency",
    title: "Transparency You Can Count On",
    description:
      "From dashboards to live updates, you can track your project's journey, from land prep to harvest. Every stage is visible, so you always know how your money is performing.",
    image: "/transparency-image.png",
  },
  {
    id: "sustainable",
    title: "Sustainable Impact & Returns",
    description:
      "Beyond profits, every investment supports farmers, creates jobs, and builds climate-smart farms that strengthen Africa's food systems.",
    image: "/sustain-image.png",
  },
];

const allBenefits = [
  "Verified, Managed, and Measurable",
  "Risk-Managed for Security",
  "Transparency You Can Count On",
  "Sustainable Impact & Returns",
];

export default function WhyInvestorsTrustSection() {
  const { openPartnerSelectionModal } = useModal();
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  // Scroll-triggered animations for heading and description
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate heading and description
      if (headingRef.current && descriptionRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(headingRef.current, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      // Initialize all panels after refs are set
      setTimeout(() => {
        // Initialize all image panels
        imageRefs.current.forEach((ref, index) => {
          if (ref) {
            if (index === 0) {
              gsap.set(ref, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0,
              });
            } else {
              gsap.set(ref, {
                opacity: 0,
                scale: 0.85,
                rotation: -8,
                x: -80,
                y: 20,
              });
            }
          }
        });

        // Initialize all content panels
        contentRefs.current.forEach((ref, index) => {
          if (ref) {
            if (index === 0) {
              gsap.set(ref, {
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotation: 0,
              });
            } else {
              gsap.set(ref, {
                opacity: 0,
                scale: 0.85,
                rotation: 8,
                x: 80,
                y: 20,
              });
            }
          }
        });
      }, 100);

      // Animate CTA section
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play: Cycle through features automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000); // Switch every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Super smooth morphing animation when switching features
  useEffect(() => {
    // Skip on initial mount - let the scroll animation handle initial setup
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const currentImage = imageRefs.current[activeFeature];
    const currentContent = contentRefs.current[activeFeature];
    const prevIndex =
      activeFeature === 0 ? features.length - 1 : activeFeature - 1;
    const prevImage = imageRefs.current[prevIndex];
    const prevContent = contentRefs.current[prevIndex];

    if (currentImage && currentContent && prevImage && prevContent) {
      // Create super smooth morphing timeline
      const morphTl = gsap.timeline();

      // Smoothly fade out and scale down previous elements
      morphTl.to([prevImage, prevContent], {
        opacity: 0,
        scale: 0.85,
        rotation: (i) => (i === 0 ? -8 : 8),
        x: (i) => (i === 0 ? -80 : 80),
        y: 20,
        duration: 0.8,
        ease: "power2.inOut",
      });

      // Set initial state for new elements (off-screen)
      gsap.set([currentImage, currentContent], {
        opacity: 0,
        scale: 0.85,
        rotation: (i) => (i === 0 ? -8 : 8),
        x: (i) => (i === 0 ? -80 : 80),
        y: 20,
      });

      // Smoothly morph in new elements with elegant easing
      morphTl.to(
        [currentImage, currentContent],
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: {
            amount: 0.15,
            from: "start",
          },
        },
        "-=0.4"
      );
    }
  }, [activeFeature]);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Top Section - Heading and Description */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
          >
            Why Investors Trust AgriPath
          </h2>
          <p
            ref={descriptionRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            We're not just connecting investors to farms, we're building a
            technology-driven ecosystem that guarantees transparency,
            accountability from seed to sale.
          </p>
        </div>

        {/* Mid-Section - Image and Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left Side - Images */}
          <div
            ref={imageContainerRef}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-3/4 overflow-hidden rounded-3xl bg-white">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  className="absolute inset-0"
                  style={{
                    zIndex: activeFeature === index ? 10 : 0,
                    pointerEvents: activeFeature === index ? "auto" : "none",
                    opacity: index === 0 ? 1 : 0,
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Feature Content */}
          <div ref={contentContainerRef} className="relative min-h-[500px]">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  contentRefs.current[index] = el;
                }}
                className="absolute inset-0"
                style={{
                  zIndex: activeFeature === index ? 10 : 0,
                  pointerEvents: activeFeature === index ? "auto" : "none",
                  opacity: index === 0 ? 1 : 0,
                }}
              >
                <div
                  className="bg-gray-50 rounded-lg p-6 md:p-8 border-l-4 h-full"
                  style={{ borderColor: "#F5A623" }}
                >
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4 font-kulim-park"
                    style={{
                      color: activeFeature === index ? "#F5A623" : "#1C442A",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {allBenefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-3">
                        <div
                          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                          style={{
                            backgroundColor:
                              benefit === feature.title ? "#F5A623" : "#1C442A",
                          }}
                        >
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span
                          className={`text-base md:text-lg font-medium ${
                            benefit === feature.title
                              ? "text-[#F5A623] font-bold"
                              : "text-gray-800"
                          }`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200"
        >
          <p className="text-lg md:text-xl font-semibold text-gray-800 flex items-center gap-2">
            Start Investing Confidently
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </p>
          <button
            onClick={openPartnerSelectionModal}
            className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out inline-block cursor-pointer"
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}

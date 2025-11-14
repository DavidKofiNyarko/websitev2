"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Input & Funding Support",
    description:
      "We connect farmers to investor-backed funding and provide access to high-quality seeds, fertilizers, and other essential inputs.",
  },
  {
    title: "Market Access & Distribution",
    description:
      "We facilitate partnerships with local markets and distributors to ensure farmers can sell their produce at fair prices.",
  },
  {
    title: "Training & Capacity Building",
    description:
      "We offer training programs that enhance farmers' skills in sustainable farming practices and modern agricultural techniques.",
  },
  {
    title: "Technology & Innovation",
    description:
      "We leverage technology to provide farmers with real-time data on weather patterns, crop health, and market trends to optimize productivity.",
  },
];

export default function WeGrowWithYouSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Create smooth blending animation - overlapping with previous section
      if (imageRef.current && contentRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 55%",
            toggleActions: "play none none none",
          },
        });

        tl.from(imageRef.current, {
          opacity: 0,
          x: -60,
          y: 35,
          scale: 0.92,
          rotation: -2,
          duration: 1.3,
          ease: "power3.out",
        }).from(
          contentRef.current,
          {
            opacity: 0,
            x: 60,
            y: 35,
            scale: 0.95,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.9"
        );
      }

      // Animate heading and intro - cascading effect
      if (headingRef.current && introRef.current) {
        gsap.from([headingRef.current, introRef.current], {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          x: (i) => (i === 0 ? -15 : 15),
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.25,
        });
      }

      // Animate services list - smooth cascade
      if (servicesRef.current) {
        const serviceItems = Array.from(servicesRef.current.children);
        gsap.from(serviceItems, {
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -40,
          y: 20,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          stagger: {
            amount: 0.5,
            from: "start",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-transparent py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <div ref={imageRef} className="relative overflow-hidden">
            <div
              className="absolute right-0 bottom-0 w-full h-full border-r-4 border-b-4 rounded-lg"
              style={{ borderColor: "#F5A623" }}
            />
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-200 ">
              <Image
                src="/grow-image.png"
                alt="Farmer with produce"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef}>
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
            >
              We Grow With You
            </h2>
            <p
              ref={introRef}
              className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed"
            >
              Farming shouldn't be a struggle. We provide the resources,
              knowledge, and partnerships farmers need to grow with confidence
              from planting to harvest.
            </p>

            {/* Services List */}
            <div ref={servicesRef} className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "#1C442A" }}
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
                  <div>
                    <h3
                      className="font-bold text-base md:text-lg mb-2"
                      style={{ color: "#1C442A" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

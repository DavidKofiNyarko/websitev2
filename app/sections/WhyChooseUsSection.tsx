"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    title: "Grow Fast",
    description: "Earn solid returns (15%-40%) in just 4-12 months.",
  },
  {
    title: "Make an Impact",
    description:
      "Every cedi you invest supports farmers & strengthens food security.",
  },
  {
    title: "Stay in the Loop",
    description:
      "Track your farm projects with real-time updates and reports.",
  },
  {
    title: "Your Choice",
    description:
      "Cash out at harvest or roll your returns into the next project.",
  },
];

export default function WhyChooseUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Create smooth blending animation - overlapping with previous section
      if (contentRef.current && imageRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 55%",
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

      // Animate content elements with stagger - cascading effect
      if (tagRef.current && headingRef.current && descriptionRef.current) {
        gsap.from([tagRef.current, headingRef.current, descriptionRef.current], {
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 35,
          x: (i) => (i === 0 ? 0 : -20),
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.2,
        });
      }

      // Animate benefits list - smooth cascade
      if (benefitsRef.current) {
        const benefitItems = Array.from(benefitsRef.current.children);
        gsap.from(benefitItems, {
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -40,
          y: 15,
          scale: 0.95,
          duration: 1,
          ease: "power3.out",
          stagger: {
            amount: 0.4,
            from: "start",
          },
        });
      }

      // Animate buttons - final flourish
      if (buttonsRef.current) {
        const buttons = Array.from(buttonsRef.current.children);
        gsap.from(buttons, {
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 25,
          scale: 0.9,
          rotation: -1,
          duration: 1,
          ease: "power3.out",
          stagger: {
            amount: 0.2,
            from: "start",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div ref={contentRef}>
            <div
              ref={tagRef}
              className="text-sm md:text-base font-semibold mb-4 font-kulim-park"
              style={{ color: "#F5A623" }}
            >
              Why Choose Us?
            </div>
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
            >
              Simple, Transparent, and Impactful
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed"
            >
              We simplify agri-investment by combining real assets, verified
              data, and risk management systems that protect your capital and
              grow your returns.
            </p>

            {/* Benefits List */}
            <div ref={benefitsRef} className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
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
                      className="font-bold text-base md:text-lg mb-1"
                      style={{ color: "#1C442A" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <a href="https://app.agripath.co/signin" className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center">
                Create Free Account
              </a>
              <a href="https://app.agripath.co/signin" className="px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-transparent hover:bg-[#1C442A] hover:text-white hover:shadow-lg transition-all duration-300 ease-out text-center">
                Invest In AgriPath
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div ref={imageRef} className="relative">
            <div
              className="absolute -right-4 -bottom-4 w-full h-full border-r-4 border-b-4 rounded-lg"
              style={{ borderColor: "#F5A623" }}
            />
            <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
              <Image
                src="/choose-us.png"
                alt="Agricultural field"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


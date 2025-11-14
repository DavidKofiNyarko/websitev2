"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const aboutLeftRef = useRef<HTMLDivElement>(null);
  const aboutRightRef = useRef<HTMLDivElement>(null);
  const whyLeftRef = useRef<HTMLDivElement>(null);
  const whyRightRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // About section animations - start earlier for blending
      if (aboutLeftRef.current && aboutRightRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutLeftRef.current,
            start: "top 95%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(aboutLeftRef.current, {
          opacity: 0,
          y: 50,
          x: -30,
          duration: 1.1,
          ease: "power3.out",
        }).from(
          aboutRightRef.current,
          {
            opacity: 0,
            y: 50,
            x: 30,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.7"
        );
      }

      // Why Choose Us section animations - overlapping with about section
      if (whyLeftRef.current && whyRightRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: whyLeftRef.current,
            start: "top 90%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        });

        tl.from(whyLeftRef.current, {
          opacity: 0,
          x: -60,
          scale: 0.95,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          whyRightRef.current,
          {
            opacity: 0,
            x: 60,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        );

        // Benefits list animation - cascading after content
        if (benefitsRef.current) {
          const benefits = Array.from(benefitsRef.current.children);
          gsap.from(benefits, {
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            x: 30,
            duration: 0.9,
            ease: "power2.out",
            stagger: {
              amount: 0.5,
              from: "start",
            },
          });
        }
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
        {/* About AgriPath Section */}
        <div className="mb-24 md:mb-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left side - Heading and Button */}
            <div ref={aboutLeftRef}>
              <div className="text-sm md:text-base font-semibold mb-4 font-kulim-park text-[#F5A623]">
                About AgriPath
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-kulim-park text-[#1C442A]">
                Empowering Growth Across Africa's Farmlands.
              </h2>
              <button
                className="px-6 py-3 border-2 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ease-out flex items-center gap-2 group"
                style={{ borderColor: "#1C442A", color: "#1C442A" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#1C442A";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#1C442A";
                }}
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </button>
            </div>

            {/* Right side - Description */}
            <div
              ref={aboutRightRef}
              className="space-y-4 text-base md:text-lg leading-relaxed text-gray-800"
            >
              <p>
                AgriPath is redefining agricultural investment by connecting
                capital to verified farms and trusted partners across Ghana.
              </p>
              <p>
                We help farmers scale production, create local jobs, and
                strengthen food systems, while giving investors transparent
                access to profitable, real-world farm projects.
              </p>
              <p>
                Together, we're making sustainable agriculture investable for
                everyone.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <div ref={whyLeftRef} className="relative overflow-hidden">
            <div
              className="absolute left-0 bottom-0 w-full h-full border-l-4 border-b-4 rounded-lg"
              style={{ borderColor: "#F5A623" }}
            />
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/about-image.png"
                alt="Farmer with produce"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div ref={whyRightRef}>
            <div className="text-sm md:text-base font-semibold mb-4 font-kulim-park text-[#1C442A]">
              Why Choose Us?
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight font-kulim-park text-[#1C442A]"
              style={{ fontFamily: "var(--font-kulim-park)" }}
            >
              Agriculture, but Smarter.
            </h2>
            <p className="text-base md:text-lg text-gray-800 mb-8 leading-relaxed">
              We simplify agri-investment by combining real assets, verified
              data, and risk management systems that protect your capital and
              grow your returns.
            </p>

            {/* Benefits List */}
            <div ref={benefitsRef} className="space-y-6">
              {[
                {
                  title: "Grow Fast",
                  description:
                    "Earn solid returns (15%-40%) in just 4-12 months.",
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
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
                    style={{ backgroundColor: "var(--ag-green, #1C442A)" }}
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
                      style={{ color: "var(--ag-green, #1C442A)" }}
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
          </div>
        </div>
      </div>
    </section>
  );
}

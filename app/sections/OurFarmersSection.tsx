"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const farmerTypes = [
  "Women Farmers in Agribusiness",
  "Young Farmers and Graduates in Agriculture",
  "Rural Community Producers",
];

export default function OurFarmersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

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

      // Animate heading and description - cascading effect
      if (headingRef.current && descriptionRef.current) {
        gsap.from([headingRef.current, descriptionRef.current], {
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

      // Animate list items - smooth cascade
      if (listRef.current) {
        const listItems = Array.from(listRef.current.children);
        gsap.from(listItems, {
          scrollTrigger: {
            trigger: listRef.current,
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
            amount: 0.4,
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
      className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div ref={contentRef}>
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
            >
              Our Farmers, Our Focus
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed"
            >
              We work with smallholder farmers across Ghana, with a special
              focus on youth and women ready to grow beyond subsistence farming.
              Whether you&apos;re starting small or expanding your fields,
              we&apos;re here to help you succeed. we&apos;re here to help you
              succeed.
            </p>

            {/* List */}
            <div ref={listRef} className="space-y-4">
              {farmerTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3">
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
                  <span className="text-base md:text-lg text-gray-700">
                    {type}
                  </span>
                </div>
              ))}
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
                src="/farmer.png"
                alt="Farmer using technology"
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

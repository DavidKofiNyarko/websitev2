"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const coreValues = [
  {
    title: "Transparency",
    description: "Every project is verified and tracked from seed to sale.",
  },
  {
    title: "Empowerment",
    description: "We create equal growth opportunities for farmers and investors.",
  },
  {
    title: "Sustainability",
    description: "Our methods protect the land and promote responsible production.",
  },
  {
    title: "Innovation",
    description: "We integrate technology to make agriculture accessible and rewarding.",
  },
];

export default function CoreValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current) return;

      // Animate heading and intro - blending with previous section
      if (headingRef.current && introRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        });

        tl.from(headingRef.current, {
          opacity: 0,
          y: 40,
          x: -20,
          duration: 1.2,
          ease: "power3.out",
        }).from(
          introRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.8"
        );
      }

      // Animate core values cards - cascading effect
      if (valuesRef.current) {
        const valueCards = Array.from(valuesRef.current.children);
        gsap.from(valueCards, {
          scrollTrigger: {
            trigger: valuesRef.current,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          scale: 0.95,
          duration: 1.1,
          ease: "power3.out",
          stagger: {
            amount: 0.7,
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
        {/* Heading */}
        <div className="mb-8 md:mb-12">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
          >
            Our Core Values
          </h2>
          <p
            ref={introRef}
            className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed"
          >
            We are redefining agricultural investment in Africa, bridging farmers
            and investors through data, transparency, and technology.
          </p>
        </div>

        {/* Core Values Grid */}
        <div
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


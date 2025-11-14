"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SecurePaymentsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

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

        // Animate heading and description within content - cascading effect
        if (headingRef.current && descriptionRef.current) {
          gsap.from([headingRef.current, descriptionRef.current], {
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
            opacity: 0,
            y: 25,
            x: (i) => (i === 0 ? -15 : 15),
            duration: 1.1,
            ease: "power3.out",
            stagger: 0.25,
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Payment Platform Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full">
              <Image
                src="/payment-platform.png"
                alt="Payment platforms secured by Paystack"
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef}>
            <h2
              ref={headingRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-kulim-park text-[#1C442A]"
            >
              Secure Payments You Can Trust
            </h2>
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-gray-700 leading-relaxed"
            >
              Every transaction on AgriPath is processed by Paystack — one of
              Africa's most trusted payment platforms, ensuring speed,
              transparency, and security for every investor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


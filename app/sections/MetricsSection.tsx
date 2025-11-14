"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const metrics = [
  { value: 170, suffix: "+", label: "Acres Cultivated" },
  { value: 20, suffix: "+", label: "Partner Farmers" },
  { value: 200, suffix: "+", label: "Investors Onboarded" },
  { value: 20, valueEnd: 35, suffix: "%", label: "Annual ROI" },
];

export default function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !metricsRef.current) return;

      const metricCards = Array.from(metricsRef.current.children);

      // Start animation earlier and use longer duration for blending with hero
      gsap.from(metricCards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          end: "top 45%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 1.3,
        ease: "power3.out",
        stagger: {
          amount: 0.7,
          from: "start",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16  px-4 relative z-10 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div
          ref={metricsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div
                className="metric-number text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
                style={{
                  color: "#F5A623", // Golden yellow
                }}
              >
                {metric.valueEnd
                  ? `${metric.value}-${metric.valueEnd}${metric.suffix}`
                  : `${metric.value}${metric.suffix}`}
              </div>
              <div
                className="text-sm md:text-base font-medium"
                style={{
                  color: "#1C442A", // Dark green (ag-green)
                }}
              >
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function InvestmentOpportunitiesSection() {
  const [activeTab, setActiveTab] = useState("Crop Projects");
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const tabs = ["Crop Projects", "Livestock Projects", "High-Value Projects"];

  const projectData = {
    "Crop Projects": {
      subtitle: "Fast-Growing. Market-Ready. Proven Demand.",
      title: "Invest in Staple Crop Farms with High Returns",
      description:
        "Join projects in cassava, sweet potatoes, and maize core staples with reliable markets and factory off-take agreements. Earn steady returns while empowering local food systems.",
      details: [
        { label: "Expected ROI:", value: "20-35%", suffix: " per cycle" },
        { label: "Duration:", value: "4-12 months", suffix: "" },
      ],
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Cassava field",
    },
    "Livestock Projects": {
      subtitle: "Sustainable. Scalable. High-Protein Impact.",
      title: "Fund Livestock Operations with Guaranteed Returns",
      description:
        "Support poultry, goat, and cattle farming projects with established supply chains and growing market demand. Generate consistent income while strengthening local protein production.",
      details: [
        { label: "Expected ROI:", value: "25-40%", suffix: " per cycle" },
        { label: "Duration:", value: "6-18 months", suffix: "" },
      ],
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Livestock farming",
    },
    "High-Value Projects": {
      subtitle: "Premium. Export-Ready. Maximum Returns.",
      title: "Invest in High-Value Cash Crops for Export Markets",
      description:
        "Partner with premium projects in cocoa, cashew, and specialty crops targeting international markets. Access higher returns through value-added processing and direct export partnerships.",
      details: [
        { label: "Expected ROI:", value: "30-50%", suffix: " per cycle" },
        { label: "Duration:", value: "12-24 months", suffix: "" },
      ],
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Cocoa beans",
    },
  };

  const currentProject = projectData[activeTab as keyof typeof projectData];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, subtitleRef.current], { opacity: 0, y: 50 });
      gsap.set(tabsRef.current?.children || [], { opacity: 0, y: 30 });
      gsap.set([contentRef.current, imageRef.current], { opacity: 0, x: -50 });
      gsap.set(imageRef.current, { x: 50 });
      gsap.set(detailsRef.current?.children || [], { opacity: 0, x: -30 });
      gsap.set(buttonsRef.current?.children || [], { opacity: 0, y: 20 });

      // Create timeline with ScrollTrigger - start earlier for blending
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 92%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title and subtitle - overlapping animations
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        // Animate tabs - overlapping with subtitle
        .to(
          tabsRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: {
              amount: 0.4,
              from: "start",
            },
          },
          "-=0.6"
        )
        // Animate content and image - simultaneous for blending
        .to(
          contentRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=1.0"
        )
        // Animate details - cascading
        .to(
          detailsRef.current?.children || [],
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: {
              amount: 0.4,
              from: "start",
            },
          },
          "-=0.7"
        )
        // Animate buttons - final flourish
        .to(
          buttonsRef.current?.children || [],
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: {
              amount: 0.3,
              from: "start",
            },
          },
          "-=0.5"
        );

      // Image hover animation
      if (imageRef.current) {
        const imageElement = imageRef.current.querySelector("img");
        if (imageElement) {
          gsap.set(imageElement, { scale: 1 });

          imageRef.current.addEventListener("mouseenter", () => {
            gsap.to(imageElement, {
              scale: 1.05,
              duration: 0.6,
              ease: "power2.out",
            });
          });

          imageRef.current.addEventListener("mouseleave", () => {
            gsap.to(imageElement, {
              scale: 1,
              duration: 0.6,
              ease: "power2.out",
            });
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);

    // Animate content change
    gsap.to(contentRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(contentRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });

    // Animate image change
    gsap.to(imageRef.current, {
      opacity: 0,
      x: 20,
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(imageRef.current, {
          opacity: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      },
    });
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-16 md:py-24 px-4 w-full overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl w-full">
        {/* Top Section - Title and Subtitle */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-kulim-park text-[#1C442A]"
          >
            Investment Opportunities
          </h2>
          <p
            ref={subtitleRef}
            className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Explore secure, high-yield agriculture projects designed for real
            growth and real impact.
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className="flex justify-center gap-4 md:gap-8 mb-12 md:mb-16"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`text-base md:text-lg font-semibold pb-2 transition-all duration-300 ${
                activeTab === tab
                  ? "text-[#1C442A] border-b-2 border-[#1C442A]"
                  : "text-gray-600 hover:text-[#1C442A]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div ref={contentRef}>
            <div className="text-sm md:text-base text-gray-600 mb-4">
              {currentProject.subtitle}
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 font-kulim-park text-gray-800">
              {currentProject.title}
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
              {currentProject.description}
            </p>

            {/* Key Details */}
            <div ref={detailsRef} className="space-y-4 mb-8">
              {currentProject.details.map((detail, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1"
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
                  <div className="text-base md:text-lg">
                    <span className="text-gray-700">{detail.label} </span>
                    <span className="font-bold" style={{ color: "#F5A623" }}>
                      {detail.value}
                    </span>
                    <span className="text-gray-700">{detail.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.agripath.co/signin"
                className="px-8 py-3.5 bg-[#1C442A] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-out text-center"
              >
                Start Investing Now
              </a>
              <a
                href="https://app.agripath.co/signin"
                className="px-8 py-3.5 border-2 border-[#1C442A] text-[#1C442A] font-semibold rounded-full bg-transparent hover:bg-[#1C442A] hover:text-white hover:shadow-lg transition-all duration-300 ease-out text-center"
              >
                Talk to Someone
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src={currentProject.image}
                alt={currentProject.imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

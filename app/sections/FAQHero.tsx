"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqCategories = [
  "General Info",
  "Investments",
  "Payments & Payouts",
  "Account & Security",
];

const faqs = {
  "General Info": [
    {
      question: "What is AgriPath, and how does it work?",
      answer:
        "AgriPath is an agricultural investment platform that allows investors to fund various crop production projects and earn returns based on harvest sales. We connect investors with verified farms, manage the entire production process, and ensure transparent tracking from seed to sale.",
    },
    {
      question: "What is AgriPath?",
      answer:
        "AgriPath is a technology-driven agricultural investment platform that connects capital to verified farms across Ghana. We help farmers scale production while giving investors transparent access to profitable, real-world farm projects with measurable returns.",
    },
    {
      question: "How are payouts made?",
      answer:
        "Payouts are made directly to your registered account after harvest sales are completed. We use secure payment platforms like Paystack to process all transactions. You can choose to cash out your returns or reinvest them into new projects.",
    },
    {
      question: "How often do you receive updates?",
      answer:
        "You'll receive regular updates throughout the project lifecycle, including weekly progress reports, photos from the field, and milestone notifications. All updates are accessible through your dashboard on the AgriPath app or website.",
    },
  ],
  Investments: [
    {
      question: "What's the minimum investment amount?",
      answer:
        "The minimum investment amount varies by project, typically starting from GHS 500. Each project listing will show the minimum investment required, expected returns, and project duration.",
    },
    {
      question: "What types of projects can I invest in?",
      answer:
        "You can invest in various agricultural projects including crop production (cassava, tomatoes, maize, etc.), livestock operations, and high-value export crops. Each project is verified and includes detailed information about expected returns and timelines.",
    },
    {
      question: "What are the expected returns?",
      answer:
        "Returns vary by project type and duration, typically ranging from 15% to 40% annually. Project details include specific ROI projections based on market conditions and historical performance data.",
    },
    {
      question: "How long do investments take?",
      answer:
        "Investment durations vary by project type. Crop projects typically range from 4 to 12 months, while livestock and high-value projects may take longer. Each project listing specifies the exact timeline.",
    },
  ],
  "Payments & Payouts": [
    {
      question: "How do I make payments?",
      answer:
        "Payments can be made securely through our integrated payment platform (Paystack) using mobile money, bank transfers, or credit/debit cards. All transactions are encrypted and secure.",
    },
    {
      question: "When will I receive my returns?",
      answer:
        "Returns are distributed after harvest sales are completed and funds are received. The exact timeline depends on the project duration and harvest schedule, which is clearly outlined in each project's details.",
    },
    {
      question: "Are there any fees?",
      answer:
        "AgriPath charges a small platform fee that is clearly disclosed before you invest. There are no hidden fees, and all costs are transparently displayed in the project information.",
    },
  ],
  "Account & Security": [
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking 'Create Account' or 'Sign Up' on our website or app. You'll need to provide basic information and verify your email address to get started.",
    },
    {
      question: "Is my information secure?",
      answer:
        "Yes, we use industry-standard encryption and security measures to protect your personal and financial information. All data is stored securely and we never share your information with third parties without your consent.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "You can reset your password by clicking 'Forgot Password' on the sign-in page. You'll receive an email with instructions to create a new password.",
    },
  ],
};

export default function FAQHero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("General Info");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(0);

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!heroRef.current) return;

      // Animate title
      if (titleRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 95%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 40,
          duration: 1.2,
          ease: "power3.out",
        });
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 95%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 1.1,
          ease: "power3.out",
        });
      }

      // Animate search bar
      if (searchRef.current) {
        gsap.from(searchRef.current, {
          scrollTrigger: {
            trigger: searchRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        });
      }

      // Tabs animation removed for better alignment
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Animate FAQ items when they change (tab or search)
  useEffect(() => {
    if (!faqRef.current) return;

    const items = Array.from(faqRef.current.children);
    if (items.length === 0) return;

    // Kill any existing animations
    gsap.killTweensOf(items);

    // Set initial state
    gsap.set(items, { opacity: 0, y: 30 });

    // Animate in
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: {
        amount: 0.3,
        from: "start",
      },
    });
  }, [activeTab, searchQuery]);

  const filteredFAQs = faqs[activeTab as keyof typeof faqs].filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-x-hidden bg-white"
    >
      {/* Hero Section with Background */}
      <div className="relative py-24 md:py-32 px-4 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-start">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-image.png"
            alt="Agricultural field background"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/25 " />

        <div className="mx-auto max-w-4xl w-full relative z-10 pt-8">
          {/* Title */}
          <div className="text-center mb-8 md:mb-10">
            <h1
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-kulim-park text-[#1C442A] mb-4"
            >
              Frequently Asked Questions (FAQs)
            </h1>
            <p ref={subtitleRef} className="text-base md:text-lg text-gray-700">
              Find answers to common questions about AgriPath
            </p>
          </div>

          {/* Search Bar */}
          <div ref={searchRef} className="mb-6 md:mb-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400 group-focus-within:text-[#1C442A] transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border-2 border-gray-300 rounded-xl focus:border-[#1C442A] focus:outline-none focus:ring-2 focus:ring-[#1C442A]/20 text-base shadow-sm hover:shadow-md transition-all duration-300"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-10 justify-center items-center w-full">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveTab(category);
                  setExpandedIndex(0);
                  setSearchQuery("");
                }}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${
                  activeTab === category
                    ? "bg-[#1C442A] text-white shadow-lg shadow-[#1C442A]/30"
                    : "bg-white text-gray-700 border-2 border-gray-300 hover:border-[#1C442A] hover:text-[#1C442A] hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items Section */}
          <div className=" py-8 md:py-12 px-4">
            <div className="mx-auto max-w-4xl w-full">
              {/* FAQ Items */}
              <div ref={faqRef} className="space-y-4">
                {filteredFAQs.map((faq, index) => {
                  const isExpanded = expandedIndex === index;
                  return (
                    <div
                      key={`${activeTab}-${index}-${faq.question}`}
                      className="bg-white border-2 border-gray-300 rounded-xl overflow-hidden transition-all duration-500 hover:border-[#1C442A] hover:shadow-xl hover:-translate-y-1 transform"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#1C442A]/20 hover:bg-gradient-to-r hover:from-green-50/50 hover:to-transparent transition-all duration-300 group"
                      >
                        <span className="font-semibold text-base md:text-lg text-gray-900 pr-4 group-hover:text-[#1C442A] transition-colors duration-300">
                          {faq.question}
                        </span>
                        <div
                          className={`shrink-0 w-8 h-8 rounded-full bg-gradient-to-br ${
                            isExpanded
                              ? "from-[#F5A623] to-[#e89613]"
                              : "from-gray-200 to-gray-300"
                          } flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}
                        >
                          <svg
                            className={`w-5 h-5 text-white transition-all duration-300 ${
                              isExpanded ? "rotate-180" : "rotate-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </button>
                      <div
                        className={`transition-all duration-500 ease-in-out ${
                          isExpanded
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="px-6 pb-5 border-t border-gray-100 pt-4">
                          <p className="text-base text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* No Results Message */}
              {filteredFAQs.length === 0 && (
                <div className="text-center py-16 transform transition-all duration-500 animate-fade-in">
                  <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg font-medium">
                    No FAQs found matching your search
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Try a different term or category
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

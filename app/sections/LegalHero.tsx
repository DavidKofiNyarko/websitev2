"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const legalTabs = [
  "Investment Terms & Conditions",
  "Terms of Service",
  "Privacy Policy",
  "Refund Policy",
];

const hashToTabMap: { [key: string]: string } = {
  "investment-terms": "Investment Terms & Conditions",
  "terms-of-service": "Terms of Service",
  "privacy-policy": "Privacy Policy",
  "refund-policy": "Refund Policy",
};

const investmentTermsContent = {
  title: "Investment Terms & Conditions",
  introduction:
    "These Terms & Conditions (\"Agreement\") govern your investment in agricultural projects offered by AgriPath. By proceeding with an investment, you acknowledge that you have read, understood, and agreed to these terms.",
  sections: [
    {
      number: 1,
      title: "Investment Acknowledgement",
      content: [
        "By investing with AgriPath, you confirm that:",
        "• You understand the nature of agricultural investments and the associated risks.",
        "• You have carefully reviewed all documentation before making an investment.",
        "• You agree that investments are tied to specific farming cycles and returns are dependent on crop production and market conditions.",
      ],
    },
    {
      number: 2,
      title: "Investment Structure & Duration",
      content: [
        "Investments are structured on a per-unit, per-crop, or per-project basis.",
        "• Each investment is linked to a specific crop cycle, and payouts will only occur after harvest.",
        "• Investors may not withdraw funds before the completion of the farming cycle.",
      ],
    },
    {
      number: 3,
      title: "Returns & Payouts",
      content: [
        "Returns on investments depend on farm yield and market conditions.",
        "• Investors will receive payouts as per the agreed revenue-sharing model.",
        "• Returns are paid after harvest, subject to processing and market conditions.",
      ],
    },
    {
      number: 4,
      title: "Risk Disclaimer",
      content: [
        "• Agricultural investments carry inherent risks, including weather conditions, pest outbreaks, and market fluctuations.",
        "• While AgriPath implements risk mitigation strategies, we do not guarantee fixed returns.",
        "• In the event of a major failure or unforeseen situation, AgriPath will communicate all necessary updates.",
      ],
    },
    {
      number: 5,
      title: "Refund Policy",
      content: [
        "• Investments are non-refundable once the farming cycle begins.",
        "• Refunds are only processed if AgriPath cancels a project before planting.",
        "• If a duplicate transaction occurs, investors may request a refund within 7 days of payment.",
      ],
    },
    {
      number: 6,
      title: "Investor Responsibilities",
      content: [
        "• Investors must provide accurate personal and financial details during registration.",
        "• Any changes must be communicated to AgriPath within 14 days of the changing details.",
        "• Investors must comply with applicable laws regarding agricultural investments.",
      ],
    },
    {
      number: 7,
      title: "Data Protection & Privacy",
      content: [
        "• Personal data is collected for investment processing and communication.",
        "• Data is protected in accordance with AgriPath's Privacy Policy and is not shared with third parties except where legally required.",
      ],
    },
    {
      number: 8,
      title: "Termination & Amendments",
      content: [
        "• AgriPath reserves the right to modify these terms, and investors will be notified of any major changes.",
        "• In case of fraud, misrepresentation, or violation of these terms, AgriPath may terminate an investor's participation.",
      ],
    },
    {
      number: 9,
      title: "Dispute Resolution",
      content: [
        "Any dispute arising out of or in connection with this Agreement shall first be discussed in good faith between the Parties. If the Parties are unable to resolve the matter, they shall refer it to their respective legal counsel for resolution. If the dispute remains unresolved, it shall be finally settled by arbitration under the Arbitration Act, 2010 (Act 798) of Ghana, in accordance with the Rules of the Alternative Dispute Resolution Centre. The arbitration shall be conducted by a sole arbitrator, appointed in accordance with the said Rules. The seat of arbitration shall be Accra, Ghana, and the language shall be English. The award shall be final and binding on the Parties.",
      ],
    },
  ],
};

const termsOfServiceContent = {
  title: "Terms of Service",
  introduction:
    "These Terms of Service ('Terms') govern your access to and use of AgriPath's platform, services, and website. By accessing or using our services, you agree to be bound by these Terms.",
  sections: [
    {
      number: 1,
      title: "Acceptance of Terms",
      content: [
        "By accessing or using AgriPath's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.",
      ],
    },
    {
      number: 2,
      title: "Use of Platform",
      content: [
        "• You must be at least 18 years old to use our platform.",
        "• You agree to provide accurate and complete information when creating an account.",
        "• You are responsible for maintaining the confidentiality of your account credentials.",
      ],
    },
    {
      number: 3,
      title: "Prohibited Activities",
      content: [
        "• You may not use the platform for any illegal or unauthorized purpose.",
        "• You may not attempt to gain unauthorized access to any part of the platform.",
        "• You may not interfere with or disrupt the platform's operation.",
      ],
    },
  ],
};

const privacyPolicyContent = {
  title: "Privacy Policy",
  introduction:
    "At AgriPath, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.",
  sections: [
    {
      number: 1,
      title: "Information We Collect",
      content: [
        "We collect information that you provide directly to us, including:",
        "• Personal identification information (name, email, phone number).",
        "• Financial information necessary for investment processing.",
        "• Account credentials and preferences.",
      ],
    },
    {
      number: 2,
      title: "How We Use Your Information",
      content: [
        "We use your information to:",
        "• Process your investments and transactions.",
        "• Communicate with you about your account and investments.",
        "• Improve our services and platform functionality.",
      ],
    },
    {
      number: 3,
      title: "Data Protection",
      content: [
        "• We implement industry-standard security measures to protect your data.",
        "• We do not sell or share your personal information with third parties except as required by law.",
        "• Your data is stored securely and accessed only by authorized personnel.",
      ],
    },
  ],
};

const refundPolicyContent = {
  title: "Refund Policy",
  introduction:
    "This Refund Policy outlines the circumstances under which refunds may be processed for investments made through AgriPath.",
  sections: [
    {
      number: 1,
      title: "General Policy",
      content: [
        "• Investments are generally non-refundable once the farming cycle begins.",
        "• Refunds may be considered only in specific circumstances outlined below.",
      ],
    },
    {
      number: 2,
      title: "Eligible Refunds",
      content: [
        "Refunds may be processed if:",
        "• AgriPath cancels a project before planting begins.",
        "• A duplicate transaction occurs (refund request must be made within 7 days).",
        "• Technical errors result in unauthorized transactions.",
      ],
    },
    {
      number: 3,
      title: "Refund Process",
      content: [
        "• Refund requests must be submitted through our support channel.",
        "• Processing time: 7-14 business days after approval.",
        "• Refunds will be processed to the original payment method.",
      ],
    },
  ],
};

const legalContent = {
  "Investment Terms & Conditions": investmentTermsContent,
  "Terms of Service": termsOfServiceContent,
  "Privacy Policy": privacyPolicyContent,
  "Refund Policy": refundPolicyContent,
};

export default function LegalHero() {
  const [activeTab, setActiveTab] = useState("Investment Terms & Conditions");
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  // Handle hash-based navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1); // Remove the #
      if (hash && hashToTabMap[hash]) {
        setActiveTab(hashToTabMap[hash]);
        // Scroll to top of content
        setTimeout(() => {
          contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate tabs
      gsap.fromTo(
        tabsRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate content
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Animate support section
      gsap.fromTo(
        supportRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: supportRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [activeTab]);

  const currentContent = legalContent[activeTab as keyof typeof legalContent];

  return (
    <section
      ref={heroRef}
      className="w-full overflow-x-hidden bg-white min-h-screen py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center"
        >
          Legal Documents
        </h1>

        {/* Navigation Tabs */}
        <div
          ref={tabsRef}
          className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12 justify-center border-b border-gray-200 pb-4"
        >
          {legalTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#1C442A] text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={contentRef} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {currentContent.title}
          </h2>

          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            {currentContent.introduction}
          </p>

          <div className="space-y-8">
            {currentContent.sections.map((section) => (
              <div
                key={section.number}
                className="border-l-4 border-[#1C442A] pl-6 py-2"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  {section.number}. {section.title}
                </h3>
                <div className="space-y-2 text-gray-700 leading-relaxed">
                  {section.content.map((item, index) => (
                    <p key={index} className={item.startsWith("•") ? "pl-4" : ""}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Section */}
        <div
          ref={supportRef}
          className="max-w-4xl mx-auto mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-700 text-lg mb-4">
            Still have questions about our {currentContent.title}?
          </p>
          <Link
            href="https://app.agripath.co/signin"
            className="text-[#1C442A] hover:text-[#0F2A1A] underline font-semibold text-lg"
          >
            Contact Support
          </Link>
          <span className="text-gray-600 ml-2">— Our team is here to guide you.</span>
        </div>
      </div>
    </section>
  );
}


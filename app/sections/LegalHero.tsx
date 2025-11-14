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
    "Welcome to AgriPath. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. Please read these terms carefully before using our services. If you do not agree with any part of these terms, you may not use our platform. AgriPath is a platform that connects investors with agricultural investment opportunities. These Terms of Service govern your use of our website, mobile applications, and all related services provided by AgriPath.",
  sections: [
    {
      number: 1,
      title: "Definitions",
      content: [
        "For the purposes of these Terms of Service:",
        "• \"AgriPath\" refers to the platform and services provided by AgriPath.",
        "• \"User\" means any individual or entity that accesses or uses the Platform.",
        "• \"Platform\" refers to AgriPath's website, mobile applications, and all related services.",
        "• \"Investment Opportunity\" means any agricultural investment project listed on the Platform.",
        "• \"Content\" includes all text, graphics, logos, images, and other materials on the Platform.",
      ],
    },
    {
      number: 2,
      title: "Account Registration",
      content: [
        "To use certain features of the Platform, you must register for an account. When registering, you agree to:",
        "• Provide accurate, current, and complete information.",
        "• Maintain and promptly update your account information.",
        "• Maintain the security of your password and identification.",
        "• Accept responsibility for all activities that occur under your account.",
        "• Notify AgriPath immediately of any unauthorized use of your account.",
        "AgriPath reserves the right to suspend or terminate your account if any information provided is inaccurate, incomplete, or violates these Terms.",
      ],
    },
    {
      number: 3,
      title: "User Eligibility",
      content: [
        "By using the Platform, you represent and warrant that:",
        "• You are at least 18 years of age.",
        "• You have the legal capacity to enter into these Terms.",
        "• You are not prohibited by law from using the Platform.",
        "• You will comply with all applicable laws and regulations.",
      ],
    },
    {
      number: 4,
      title: "Platform Services",
      content: [
        "AgriPath provides the following services through the Platform:",
        "• Browsing and viewing investment opportunities.",
        "• Making investments in agricultural projects.",
        "• Tracking investment performance and updates.",
        "• Communication with AgriPath and other users.",
        "• Access to educational resources and information.",
        "AgriPath reserves the right to modify, suspend, or discontinue any aspect of the Platform at any time without notice.",
      ],
    },
    {
      number: 5,
      title: "Investment Terms",
      content: [
        "All investments made through the Platform are subject to the following:",
        "• All investments involve risk, and you may lose some or all of your investment.",
        "• Past performance is not indicative of future results.",
        "• AgriPath does not guarantee any returns on investments.",
        "• You are solely responsible for evaluating investment opportunities.",
        "• Separate investment agreements may apply to specific investments.",
        "• You must comply with all applicable securities and investment regulations.",
      ],
    },
    {
      number: 6,
      title: "User Conduct",
      content: [
        "You agree not to:",
        "• Violate any applicable laws or regulations.",
        "• Infringe upon the rights of others.",
        "• Use the Platform for any fraudulent or unlawful purpose.",
        "• Interfere with or disrupt the Platform's operation.",
        "• Attempt to gain unauthorized access to any part of the Platform.",
        "• Use automated systems or bots to access the Platform.",
        "• Transmit any viruses, malware, or harmful code.",
        "• Harass, abuse, or harm other users.",
        "• Post false, misleading, or defamatory content.",
      ],
    },
    {
      number: 7,
      title: "Intellectual Property",
      content: [
        "All content on the Platform, including but not limited to text, graphics, logos, images, and software, is the property of AgriPath or its licensors and is protected by copyright, trademark, and other intellectual property laws.",
        "• You are granted a limited, non-exclusive, non-transferable license to access and use the Platform for personal, non-commercial purposes.",
        "• You may not reproduce, modify, distribute, or create derivative works from any content without prior written consent from AgriPath.",
        "• You may not use any trademarks, logos, or service marks without permission.",
        "• All rights not expressly granted are reserved by AgriPath.",
      ],
    },
    {
      number: 8,
      title: "Third-Party Content and Links",
      content: [
        "The Platform may contain links to third-party websites or content. These links are provided for your convenience only.",
        "• AgriPath does not endorse or control third-party websites or content.",
        "• AgriPath is not responsible for the availability, accuracy, or content of third-party websites.",
        "• Your use of third-party websites is at your own risk and subject to their terms of service.",
      ],
    },
    {
      number: 9,
      title: "Disclaimer of Warranties",
      content: [
        "THE PLATFORM AND SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.",
        "• AgriPath disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.",
        "• AgriPath does not warrant that the Platform will be uninterrupted, error-free, or secure.",
        "• AgriPath does not warrant that defects will be corrected or that the Platform is free of viruses or other harmful components.",
      ],
    },
    {
      number: 10,
      title: "Limitation of Liability",
      content: [
        "TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGRIPATH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM.",
        "• AgriPath's total liability for any claims arising from your use of the Platform shall not exceed the amount you paid to AgriPath in the 12 months preceding the claim.",
        "• Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the above limitations may not apply to you.",
      ],
    },
    {
      number: 11,
      title: "Indemnification",
      content: [
        "You agree to indemnify, defend, and hold harmless AgriPath, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with:",
        "• Your use of the Platform.",
        "• Your violation of these Terms.",
        "• Your violation of any third-party rights.",
        "• Any content you submit or transmit through the Platform.",
      ],
    },
    {
      number: 12,
      title: "Dispute Resolution",
      content: [
        "Any dispute arising out of or relating to these Terms shall be resolved as follows:",
        "• First, the parties shall attempt to resolve the dispute informally through good faith negotiations.",
        "• If informal resolution is unsuccessful, the parties agree to submit the dispute to mediation.",
        "• If mediation is unsuccessful, the dispute shall be resolved through binding arbitration in accordance with the rules of the Alternative Dispute Resolution Centre of Ghana.",
        "• Arbitration proceedings shall be conducted in English and shall take place in Ghana.",
        "• You waive any right to participate in a class-action lawsuit or class-wide arbitration.",
      ],
    },
    {
      number: 13,
      title: "Termination",
      content: [
        "AgriPath may terminate or suspend your access to the Platform at any time, with or without cause or notice, for any reason, including but not limited to:",
        "• Violation of these Terms.",
        "• Fraudulent or illegal activity.",
        "• Request by law enforcement or government agencies.",
        "You may terminate your account at any time by contacting AgriPath.",
        "Upon termination, your right to use the Platform will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.",
      ],
    },
    {
      number: 14,
      title: "Changes to Terms",
      content: [
        "AgriPath reserves the right to modify these Terms at any time. We will notify you of any material changes by:",
        "• Posting the updated Terms on the Platform.",
        "• Updating the \"Last Updated\" date at the top of these Terms.",
        "• Sending you an email notification (if you have provided an email address).",
        "Your continued use of the Platform after any changes constitutes your acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Platform.",
      ],
    },
    {
      number: 15,
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and construed in accordance with the laws of Ghana, without regard to its conflict of law principles.",
        "• The United Nations Convention on Contracts for the International Sale of Goods shall not apply.",
        "• Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts of Ghana.",
      ],
    },
    {
      number: 16,
      title: "Severability",
      content: [
        "If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect and enforceable.",
      ],
    },
    {
      number: 17,
      title: "Entire Agreement",
      content: [
        "These Terms, together with the Privacy Policy, Data Protection Policy, and any other legal notices published by AgriPath on the Platform, shall constitute the entire agreement between you and AgriPath concerning your use of the Platform.",
      ],
    },
  ],
};

const privacyPolicyContent = {
  title: "Privacy Policy",
  introduction:
    "At AgriPath, we are committed to the protection of your personal data in accordance with the Data Protection Laws of Ghana, 2012, Act 843. This Privacy Policy explains how we process your data from collection to disclosure, when you visit our website and use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use our platform. By using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.",
  sections: [
    {
      number: 1,
      title: "Information We Collect",
      content: [
        "We collect several types of information from and about users of our platform, including:",
        "",
        "Personal Data:",
        "Personal data refers to any information that identifies you as an individual. We may collect:",
        "• Contact information (name, email address, phone number)",
        "• Account credentials (username and password)",
        "• Financial information (bank account/card details, payment information)",
        "• Identification documents (passport, ID card, tax identification number)",
        "• Investment preferences and history",
        "• Professional information (employment status, job title, company)",
        "",
        "Non-Personal Data:",
        "We also collect non-personal data that does not directly identify you:",
        "• Usage data (how you interact with our platform)",
        "• Device information (browser type, operating system, device type)",
        "• IP address and location data",
        "• Cookies and similar tracking technologies",
        "• Aggregated or anonymized data",
      ],
    },
    {
      number: 2,
      title: "How We Collect Information",
      content: [
        "We collect information through various methods:",
        "• Direct interactions (when you create an account, make investments, contact us)",
        "• Automated technologies (cookies, server logs, web beacons)",
        "• Third-party sources (identity verification services, financial institutions, business partners)",
        "• Public sources (public records, social media profiles, publicly available databases)",
      ],
    },
    {
      number: 3,
      title: "How We Use Your Information",
      content: [
        "We use your information for various purposes, including:",
        "• Providing and maintaining our services",
        "• Processing and facilitating investment transactions",
        "• Verifying your identity and preventing fraud",
        "• Complying with legal and regulatory requirements",
        "• Communicating with you about your account and investments",
        "• Sending you marketing communications (with your consent)",
        "• Improving and personalizing our platform",
        "• Analyzing usage patterns and trends",
        "• Protecting our legal rights and interests",
      ],
    },
    {
      number: 4,
      title: "Legal Basis for Processing",
      content: [
        "We process your personal data based on one or more of the following legal grounds:",
        "• Contractual Necessity: Processing is necessary to perform the contract we have with you",
        "• Legitimate Interests: Processing is necessary for our legitimate business interests",
        "• Legal Obligation: Processing is necessary to comply with our legal obligations",
        "• Consent: You have given consent to the processing of your personal data",
      ],
    },
    {
      number: 5,
      title: "Information Sharing and Disclosure",
      content: [
        "We may share your information with the following categories of recipients:",
        "• Service Providers: Third parties that perform services on our behalf (payment processors, identity verification services, cloud hosting providers)",
        "• Business Partners: Agricultural project operators and other partners involved in facilitating investments",
        "• Regulatory Authorities: Government agencies and regulatory bodies when required by law",
        "• Professional Advisors: Accountants, auditors, lawyers, and other professional advisors",
        "• Corporate Transactions: In connection with a merger, acquisition, or sale of assets",
        "",
        "We do not sell your personal data to third parties. Any third parties with whom we share your information are contractually obligated to protect your data in accordance with this Privacy Policy.",
      ],
    },
    {
      number: 6,
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:",
        "• Encryption of sensitive information",
        "• Secure network architecture and firewalls",
        "• Access controls and authentication procedures",
        "• Regular security assessments and audits",
        "• Employee training on data protection",
        "",
        "Despite our efforts, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.",
      ],
    },
    {
      number: 7,
      title: "Data Retention",
      content: [
        "We retain your personal data for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider:",
        "• The amount, nature, and sensitivity of the personal data",
        "• The potential risk of harm from unauthorized use or disclosure",
        "• The purposes for which we process your personal data",
        "• Legal and regulatory requirements",
        "",
        "For investment-related data, we typically retain information for at least 5 years after the end of the investment to comply with financial regulations.",
      ],
    },
    {
      number: 8,
      title: "Your Data Protection Rights",
      content: [
        "Depending on your location, you may have the following rights regarding your personal data:",
        "• Right to Access: The right to request copies of your personal data",
        "• Right to Rectification: The right to request correction of inaccurate information",
        "• Right to Erasure: The right to request deletion of your personal data",
        "• Right to Restrict Processing: The right to request restriction of processing of your data",
        "• Right to Data Portability: The right to receive your data in a structured, machine-readable format",
        "• Right to Object: The right to object to processing of your personal data",
        "• Right to Withdraw Consent: The right to withdraw consent at any time",
        "",
        "To exercise these rights, please contact us using the information provided in the 'Contact Information' section. We may need to verify your identity before responding to your request.",
      ],
    },
    {
      number: 9,
      title: "International Data Transfers",
      content: [
        "We may transfer your personal data to countries outside your country of residence, which may have different data protection laws. When we transfer personal data internationally, we ensure appropriate safeguards are in place to protect your information and comply with applicable data protection laws. These safeguards may include:",
        "• Standard contractual clauses approved by the European Commission",
        "• Binding corporate rules for transfers within a corporate group",
        "• Adequacy decisions for countries offering adequate protection",
        "• Obtaining your explicit consent for certain transfers",
      ],
    },
    {
      number: 10,
      title: "Cookies and Similar Technologies",
      content: [
        "We use cookies and similar tracking technologies to collect and use information about you. Cookies are small text files that are placed on your device when you visit a website. We use the following types of cookies:",
        "• Essential Cookies: Required for the operation of our platform",
        "• Analytical/Performance Cookies: Allow us to recognize and count visitors and analyze how users navigate our platform",
        "• Functionality Cookies: Allow our platform to remember choices you make",
        "• Targeting Cookies: Record your visit, pages visited, and links followed",
        "",
        "You can set your browser to refuse all or some browser cookies or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of our platform may become inaccessible or not function properly.",
      ],
    },
    {
      number: 11,
      title: "Children's Privacy",
      content: [
        "Our platform is not intended for children under 18 years of age. We do not knowingly collect personal data from children under 18. If you are a parent or guardian and believe that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to delete that information.",
      ],
    },
    {
      number: 12,
      title: "Third-Party Links",
      content: [
        "Our platform may contain links to third-party websites, plugins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. We encourage you to read the privacy policy of every website you visit.",
      ],
    },
    {
      number: 13,
      title: "Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our platform prior to the changes becoming effective. The date the Privacy Policy was last revised is indicated at the top of the page. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.",
      ],
    },
  ],
};

const refundPolicyContent = {
  title: "Refund Policy",
  introduction:
    "This Refund Policy outlines the terms and conditions for refunds on investments made through AgriPath. We are committed to fair and transparent practices for all our agricultural investment projects. By using our platform and making investments, you acknowledge and agree to the terms of this Refund Policy. Please read this policy carefully before making any investment decisions.",
  sections: [
    {
      number: 1,
      title: "Investment Nature and Risks",
      content: [
        "Agricultural investments made through AgriPath are financial commitments to real-world agricultural projects. These investments:",
        "• Support ongoing agricultural operations and development.",
        "• Are subject to natural, market, and operational risks.",
        "• May have long-term maturity periods.",
        "• Are not guaranteed to provide returns.",
        "",
        "Before committing funds, we encourage all investors to carefully review project details, risk factors, and timelines to ensure alignment with their investment goals and risk tolerance.",
      ],
    },
    {
      number: 2,
      title: "Cooling-Off Period",
      content: [
        "AgriPath offers a 48-hour cooling-off period after an investment is made. During this period, you may cancel your investment and receive a full refund without any penalties or fees.",
        "",
        "The cooling-off period begins when your transaction is confirmed and ends 48 hours later.",
        "",
        "To request a cancellation during the cooling-off period:",
        "• Log into your AgriPath account.",
        "• Navigate to \"My Investments.\"",
        "• Select the investment you wish to cancel.",
        "• Click \"Cancel Investment.\"",
        "• Follow the prompts to complete the cancellation request.",
        "",
        "Refunds for cancellations made within the cooling-off period will be processed via your original payment method within 5-7 business days.",
      ],
    },
    {
      number: 3,
      title: "Refunds After the Cooling-Off Period",
      content: [
        "After the 48-hour cooling-off period has expired, investments are generally considered final and non-refundable. This is due to the nature of agricultural projects and the allocation of funds to operational activities.",
        "",
        "However, in exceptional circumstances, we may evaluate refund requests on a case-by-case basis. Factors we consider include:",
        "• The nature and stage of the agricultural project.",
        "• Whether funds have been deployed to the project.",
        "• The specific circumstances of your refund request.",
        "• The impact on other investors and stakeholders.",
        "• Applicable regulatory requirements.",
        "",
        "Please note that approved refunds after the cooling-off period may incur processing fees and may not include any accrued returns or profits.",
      ],
    },
    {
      number: 4,
      title: "Project Cancellation or Significant Changes",
      content: [
        "If a project is canceled before operations begin or undergoes significant changes (such as changes to scope, timeline, or expected returns), AgriPath will:",
        "• Notify affected investors promptly.",
        "• Provide detailed information about the changes or cancellation.",
        "• Outline available options, which may include:",
        "  - Full or partial refund.",
        "  - Reallocation to another suitable project.",
        "  - Continuation with modified parameters.",
        "",
        "In such cases, AgriPath will make reasonable efforts to return your original investment amount, less any directly incurred costs that cannot be recovered.",
      ],
    },
    {
      number: 5,
      title: "Refund Process and Timeline",
      content: [
        "For approved refunds:",
        "",
        "Request Submission:",
        "• Refund requests must be submitted in writing via the platform or by emailing refunds@agripath.co.",
        "• You will receive an acknowledgment within 3 business days.",
        "",
        "Evaluation:",
        "• Requests within the cooling-off period are processed immediately.",
        "• Requests outside the cooling-off period may take up to 14 business days for evaluation.",
        "",
        "Processing:",
        "• Approved refunds will be processed within 5-10 business days of approval.",
        "• Refunds are typically issued via your original payment method.",
        "",
        "Please note that processing times may vary depending on your financial institution or payment provider.",
      ],
    },
    {
      number: 6,
      title: "Non-Refundable Items",
      content: [
        "The following items are generally non-refundable:",
        "• Platform and transaction fees.",
        "• Third-party payment processing fees.",
        "• Any distributed returns or profits.",
        "• Investments where the cooling-off period has expired and funds have been deployed.",
        "• Investments in projects with explicitly stated non-refundable terms (disclosed prior to investment).",
      ],
    },
    {
      number: 7,
      title: "Fraudulent or Unauthorized Transactions",
      content: [
        "If you suspect an unauthorized or fraudulent transaction on your account:",
        "• Contact our support team immediately at support@agripath.co.",
        "• Provide all relevant transaction details.",
        "• Follow any additional security steps as advised by our team.",
        "",
        "AgriPath will investigate the matter promptly and, if confirmed as fraudulent, will process a full refund and take appropriate measures to secure your account.",
      ],
    },
    {
      number: 8,
      title: "Disputes and Resolution",
      content: [
        "If you are dissatisfied with a refund decision, you may:",
        "• Request a review by our customer service team.",
        "• Provide additional supporting information or documentation.",
        "• Escalate the matter to our dispute resolution team.",
        "",
        "AgriPath aims to resolve all disputes fairly and in accordance with our policies and applicable regulations. You may also have the right to refer unresolved disputes to alternative dispute resolution mechanisms or relevant financial regulators.",
      ],
    },
    {
      number: 9,
      title: "Changes to This Policy",
      content: [
        "AgriPath reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting the updated policy on our platform.",
        "",
        "We will notify users of significant changes via email or platform announcements. The updated policy will apply to new investments made after the change; previous investments will be governed by the policy in effect at the time of investment.",
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
                  {section.content.map((item, index) => {
                    if (item === "") {
                      return <br key={index} />;
                    }
                    if (item.endsWith(":") && !item.startsWith("•") && !item.startsWith("  -")) {
                      return (
                        <p key={index} className="font-semibold mt-3 mb-1">
                          {item}
                        </p>
                      );
                    }
                    if (item.startsWith("  -")) {
                      return (
                        <p key={index} className="pl-8">
                          {item}
                        </p>
                      );
                    }
                    return (
                      <p key={index} className={item.startsWith("•") ? "pl-4" : ""}>
                        {item}
                      </p>
                    );
                  })}
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


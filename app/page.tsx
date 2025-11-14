"use client";

import HeroSection from "./sections/HeroSection";
import MetricsSection from "./sections/MetricsSection";
import AboutSection from "./sections/AboutSection";
import ComingSoonSection from "./sections/ComingSoonSection";
import InvestmentOpportunitiesSection from "./sections/InvestmentOpportunitiesSection";
import PartnerUsSection from "./sections/PartnerUsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ComingSoonSection />
      <InvestmentOpportunitiesSection />
      <PartnerUsSection />
    </div>
  );
}

"use client";

import InvestorsHero from "../sections/InvestorsHero";
import MetricsSection from "../sections/MetricsSection";
import WhyInvestorsTrustSection from "../sections/WhyInvestorsTrustSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import SecurePaymentsSection from "../sections/SecurePaymentsSection";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import ComingSoonSection from "../sections/ComingSoonSection";
import PartnerUsSection from "../sections/PartnerUsSection";

export default function InvestorsPage() {
  return (
    <div>
      <InvestorsHero />
      <MetricsSection />
      <WhyInvestorsTrustSection />
      <HowItWorksSection />
      <SecurePaymentsSection />
      <WhyChooseUsSection />
      <ComingSoonSection />
      <PartnerUsSection />
    </div>
  );
}

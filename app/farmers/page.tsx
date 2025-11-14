"use client";

import FarmersHero from "../sections/FarmersHero";
import MetricsSection from "../sections/MetricsSection";
import WeGrowWithYouSection from "../sections/WeGrowWithYouSection";
import HowFarmingWorksSection from "../sections/HowFarmingWorksSection";
import OurFarmersSection from "../sections/OurFarmersSection";
import PartnerUsSection from "../sections/PartnerUsSection";

export default function FarmersPage() {
  return (
    <div>
      <FarmersHero />
      <MetricsSection />
      <WeGrowWithYouSection />
      <HowFarmingWorksSection />
      <OurFarmersSection />
      <PartnerUsSection />
    </div>
  );
}

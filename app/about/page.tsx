"use client";

import AboutUsHero from "../sections/AboutUsHero";
import CoreValuesSection from "../sections/CoreValuesSection";
import MeetTheTeamSection from "../sections/MeetTheTeamSection";
import PartnerUsSection from "../sections/PartnerUsSection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHero />
      <CoreValuesSection />
      <MeetTheTeamSection />
      <PartnerUsSection />
    </div>
  );
}

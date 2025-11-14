"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQHero from "../sections/FAQHero";
import ComingSoonSection from "../sections/ComingSoonSection";
import PartnerUsSection from "../sections/PartnerUsSection";

export default function FAQPage() {
  return (
    <div>
      <FAQHero />
      <ComingSoonSection />
      <PartnerUsSection />
    </div>
  );
}

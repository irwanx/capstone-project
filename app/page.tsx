"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";

import HeroSection from "@/components/sections/HeroSection";

const WhyLearnSection = dynamic(
  () => import("@/components/sections/WhyLearnSection"),
);
const SolutionSection = dynamic(
  () => import("@/components/sections/SolutionSection"),
);
const BonusSection = dynamic(
  () => import("@/components/sections/BonusSection"),
);
const ProfitSimulationSection = dynamic(
  () => import("@/components/sections/ProfitSimulationSection"),
);
const TestimonialSection = dynamic(
  () => import("@/components/sections/TestimonialSection"),
);
const LearningPathSection = dynamic(
  () => import("@/components/sections/LearningPathSection"),
);
const ClosingCtaSection = dynamic(
  () => import("@/components/sections/ClosingCTASection"),
);

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const yOffset = -70;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 200);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <WhyLearnSection />
      <SolutionSection />
      <BonusSection />
      <ProfitSimulationSection />
      <TestimonialSection />
      <LearningPathSection />
      <ClosingCtaSection />
    </>
  );
}

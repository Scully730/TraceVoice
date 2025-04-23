import React from "react";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import FeaturesSection from "../Components/FeatureSection";
import DemoSection from "../Components/DemoSection";
import WaitlistSection from "../Components/WaitlistSection";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <div className="bg-[#0f172a] text-[#f8fafc]">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DemoSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default LandingPage;

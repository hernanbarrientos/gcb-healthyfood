import React from "react";
import FourSection from "./blog-section/FourSection";
import Header from "./home-section/header/Header";
import FiveSection from "./join-section/SectionFive";
import TwoSection from "./recipes-section/TwoSection";
import OneSection from "./home-section/OneSection";
import ThreeSection from "./services-section/ThreeSection";

function LandingPage() {
  return (
    <>
      <Header />
      <OneSection />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection />
    </>
  );
}

export default LandingPage;

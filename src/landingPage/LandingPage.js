import React from "react";
import FourSection from "../Components/blogSection/FourSection";
import Header from "../Components/header/Header";
import FiveSection from "../Components/joinSection/FiveSection";
import TwoSection from "../Components/recipesSection/TwoSection";
import OneSection from "../Components/sectionOne/OneSection";
import ThreeSection from "../Components/servicesSection/ThreeSection";

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

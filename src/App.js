import React from "react";
import Register from "./Page/Register";
import OneSection from "./Components/sectionOne/OneSection";
import TwoSection from "./Components/recipesSection/TwoSection";
import ThreeSection from "./Components/servicesSection/ThreeSection";
import FourSection from "./Components/blogSection/FourSection";
import FiveSection from "./Components/joinSection/FiveSection";



function App() {
  return (
    <>
      <OneSection />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection />
      <Register />

      
    </>
  );
}

export default App;

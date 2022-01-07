import React from "react";
import Register from "./Page/Register";
import Header from "./Components/Header";
import CardsRecipes from "./Components/CardsRecipes";
import ImgServiceLeft from "./images/bloco_services.svg";
import ImgHeader from "./images/illustration.svg";
import CardsBlog from "./Components/CardsBlog";
import ImgFooter from "./images/bloco_final_image.svg";
import OneSection from "./Components/OneSection"
import TwoSection from "./Components/TwoSection"
import ThreeSection from "./Components/ThreeSection"
import FourSection from "./Components/FourSection";
import FiveSection from "./Components/FiveSection";
   


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

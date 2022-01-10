import React from "react";
import Register from "./Page/Register";
import OneSection from "./Components/sectionOne/OneSection";
import TwoSection from "./Components/recipesSection/TwoSection";
import ThreeSection from "./Components/servicesSection/ThreeSection";
import FourSection from "./Components/blogSection/FourSection";
import FiveSection from "./Components/joinSection/FiveSection";
import Header from "./Components/header/Header"

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  return (

    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route exact path="/" element={<OneSection/>} />
    //     <Route exact path="/recipes" element={<TwoSection/>} />
    //     <Route exact path="/services" element={<ThreeSection/>} />
    //     <Route exact path="/blog" element={<FourSection/>} />
    //     <Route exact path="/join" element={<FiveSection/>} />
    //     <Route exact path="/resgiter" element={<Register/>} />
    //   </Routes>
    // </Router>
    <>
      <Header />
      <OneSection />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection />
      <Register />

      {/* <AppRoutes/> */}
    </>
  );
}


export default App;



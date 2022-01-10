import React from "react";

import Register from "../../Page/Register";
import OneSection from "../../Components/sectionOne/OneSection";
import TwoSection from "../../Components/recipesSection/TwoSection";
import ThreeSection from "../../Components/servicesSection/ThreeSection";
import FourSection from "../../Components/blogSection/FourSection";
import FiveSection from "../../Components/joinSection/FiveSection";

import { Container, Nav, Subtitle } from "./styles";
// import { Link } from "react-router-dom"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function Header() {

    
     
      <Routes>
        <Route exact path="/" element={<OneSection/>} />
        <Route exact path="/recipes" element={<TwoSection/>} />
        <Route exact path="/services" element={<ThreeSection/>} />
        <Route exact path="/blog" element={<FourSection/>} />
        <Route exact path="/join" element={<FiveSection/>} />
        <Route exact path="/resgiter" element={<Register/>} />
      </Routes>
    


  return (
    <Router>
    <Container>
      <Subtitle>Healthy Food</Subtitle>
      <Nav>
        <ul>
          <li>
            <Link to="recipes">HEALTHY RECIPES</Link>
          </li>
          <li>
            <Link to="/blog">BLOG</Link>
          </li>
          <li>
            <Link to="/join">JOIN</Link>
          </li>
          <li>
            <Link to="/register">REGISTER</Link>
          </li>
        </ul>
      </Nav>
    </Container>
    </Router>
  );
}

export default Header;

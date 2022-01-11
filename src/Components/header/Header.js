import React from "react";



import { Container, Nav, Subtitle } from "./styles";

import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
 const signUp = () => {
   navigate("/register")
 }

  return (
   
      <Container>
        <Subtitle>Healthy Food</Subtitle>
        <Nav>
          <ul>
            <li>
              <Link to="recipes" smooth={true} duration={800}>                
                HEALTHY RECIPES
              </Link>
            </li>
            <li>
            <Link to="blog" smooth={true} duration={1100}>BLOG</Link>
            </li>
            <li>
              <Link to="join" smooth={true} duration={1300}>JOIN</Link>
            </li>
            <li>
              <a onClick={signUp}>REGISTER</a>
            </li>
          </ul>
        </Nav>
      </Container>
    
  );
}

export default Header;

import React from "react";
import {Container, Nav, Subtitle } from "./styles";

function Header() {
  return (
    <Container>
    <Subtitle>Healthy Food</Subtitle>
    <Nav>
      <ul>
          <li><a href="#">HEALTHY RECIPES</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">JOIN</a></li>
          <li><a href="#">REGISTER</a></li>
      </ul>
    </Nav>
    </Container>
  );
}

export default Header;

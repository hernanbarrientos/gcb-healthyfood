import React from "react";
import {Container, Nav, Button, Subtitle, Ul } from "./headerStyles";

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
        
        {/* <Button as="a" href="#">
        HEALTHY RECIPES
        </Button>
        <Button as="a" href="#">
          BLOG
        </Button>
        <Button as="a" href="#">
          JOIN
        </Button>
        <Button as="a" href="#">
          REGISTER
        </Button> */}
      </ul>
    </Nav>
    </Container>
  );
}

export default Header;

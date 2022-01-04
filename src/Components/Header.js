import React from "react";
import { Container, Button, Subtitle, ContainerNav } from "./headerStyles";

function Header() {
  return (
    <Container>
      <Subtitle>Healthy Food</Subtitle>
      <ContainerNav>
        <Button as="a" href="#">
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
        </Button>
      </ContainerNav>
    </Container>
  );
}

export default Header;

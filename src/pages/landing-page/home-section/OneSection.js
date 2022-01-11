import React from "react";
import ImgHeader from "../../../images/illustration.svg";

import {
  Container,
  ImgLeft,
  ContainerTextInput,
  Title,
  ContainerInputButton,
  InputTitle,
  ButtonInputTitle,
} from "./styles";

function OneSection(props) {
  return (
    <Container id="home">
      <ImgLeft src={ImgHeader} alt="img-right" />

      <ContainerTextInput>
        <Title> Ready for Trying a new recipe? </Title>
        <ContainerInputButton>
          <InputTitle placeholder="Search healthy recipes" />
          <ButtonInputTitle>Search</ButtonInputTitle>
        </ContainerInputButton>
      </ContainerTextInput>
    </Container>
  );
}
export default OneSection;

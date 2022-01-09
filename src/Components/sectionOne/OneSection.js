import React from "react";
import ImgHeader from "../../images/illustration.svg";
import  Header  from "../../Components/header/Header";

import {
  Container,
  ImgLeft,
  ContainerTextInput,
  Title,
  ContainerInputButton,
  InputTitle,
  ButtonInputTitle,
} from "./styles"


function OneSection(props) {
  return (
    <Container className="oneSection">
      <ImgLeft src={ImgHeader} alt="img-right" />
      <Header />
     

      <ContainerTextInput className="oneSection-title">
        <Title> Ready for Trying a new recipe? </Title>
        <ContainerInputButton className="oneSection-input-button">
          <InputTitle placeholder="Search healthy recipes" />
          <ButtonInputTitle>Search</ButtonInputTitle>
        </ContainerInputButton>
      </ContainerTextInput>
    </Container>
  );
}
export default OneSection;

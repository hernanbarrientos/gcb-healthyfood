import React from "react";
import SignUp from "../Components/form/SignUp";
import {
  PageContainer,
  Subtitle,
  SignUpContainer,
  ImagePage,
  Title,
  Nav,
  Header,
} from "./styles";
import ImgHeader from "../images/illustration.svg";

const Register = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Healthy Food</Title>
        <Nav>
          <ul>
            <li>
              <a href="#">BACK</a>
            </li>
          </ul>
        </Nav>
      </Header>
      <ImagePage src={ImgHeader} alt="img-right" />
      <SignUpContainer>
        <Subtitle>REGISTER</Subtitle>
        <SignUp />
      </SignUpContainer>
    </PageContainer>
  );
};

export default Register;

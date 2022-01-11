import React from "react";
import SignUp from "../register/form/SignUp";
import {
  PageContainer,
  Subtitle,
  SignUpContainer,
  ImagePage,
  Title,
  Nav,
  Header,
} from "./styles";
import ImgHeader from "../../images/illustration.svg";

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const goToBack = () => {
    navigate("/");
  };

  return (
    <PageContainer>
      <Header>
        <Title>Healthy Food</Title>
        <Nav>
          <ul>
            <li>
              <a onClick={goToBack}>BACK</a>
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

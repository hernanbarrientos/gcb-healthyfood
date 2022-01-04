import React from "react";
import { PageContainer, Subtitle, SignUpContainer } from "./styles";

function Register() {
  return (
    <PageContainer>
      <Header />
      <SignUpContainer>
        <Subtitle>REGISTER</Subtitle>
        <SignUp />
      </SignUpContainer>
    </PageContainer>
  )
}

export default Register;

import React from "react";
import ImgFooter from "../../images/bloco_final_image.svg";
import {
  ContainerJoin,
  ContainerArticle,
  ContainerInputButton,
  FooterPage,
} from "./styles";

function FiveSection(props) {
  return (
    <>
      <ContainerJoin key="join">
        <ContainerArticle>
          <h1> Join our membership to get special offer </h1>

          <ContainerInputButton>
            <input placeholder="Enter your email address" type="email" />
            <button> Join </button>
          </ContainerInputButton>
        </ContainerArticle>
        <div>
          <img src={ImgFooter} alt="img-left" />
        </div>
      </ContainerJoin>
      <FooterPage>
        <h6> Reproduzido por Hernán Barrientos</h6>
        <h6> 2022 </h6>
        <h6> todos direitos reservados </h6>
      </FooterPage>
    </>
  );
}
export default FiveSection;

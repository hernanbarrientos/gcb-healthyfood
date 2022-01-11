import React from "react";
import ImgServiceLeft from "../../images/bloco_services.svg";
import {
  ContainerSection,
  ContainerImgLeft,
  ContainerText,
  ButtonSection,
} from "./styles";

function ThreeSection(props) {
  return (
    <ContainerSection name="services">
      <ContainerImgLeft>
        <img src={ImgServiceLeft} alt="image services left" />
      </ContainerImgLeft>
      <ContainerText>
        <h1> The best services ready To serve you </h1>

        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>

        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>

        <ButtonSection> Know More </ButtonSection>
      </ContainerText>
    </ContainerSection>
  );
}
export default ThreeSection;

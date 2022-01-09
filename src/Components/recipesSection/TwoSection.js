import React from "react";
import CardsRecipes from "../cardsRecipes/CardsRecipes";
import comida1 from "../../images/comida_1.svg";
import comida2 from "../../images/comida_2.svg";
import comida3 from "../../images/comida_3.svg";
import comida4 from "../../images/comida_4.svg";

import { ContainerSection, ContainerArticle, ContainerCards } from "./styles";

function TwoSection(props) {
  return (
    <ContainerSection className="twoSection">
      <h1>Our Best Recipes</h1>
      <ContainerArticle className="twoSection-text">
        <p className="subtitle">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </ContainerArticle>
      <ContainerCards>
        <CardsRecipes title="Broccoli Salad with Bacon" image={comida1} />
        <CardsRecipes title="Classic Beef Burgers" image={comida2} />

        <CardsRecipes title="Classic Potato Salad" image={comida3} />
        <CardsRecipes title="Cherry Cobbler on the Grill" image={comida4} />
      </ContainerCards>
    </ContainerSection>
  );
}
export default TwoSection;

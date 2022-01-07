import React from "react";
import CardsRecipes from "./CardsRecipes";
import comida1 from "../images/comida_1.svg"
import comida2 from "../images/comida_2.svg"
import comida3 from "../images/comida_3.svg"
import comida4 from "../images/comida_4.svg"

function TwoSection(props) {
  return (
    <section className="twoSection" >
      <h1>Our Best Recipes</h1>
      <article className="twoSection-text">
        <p className="subtitle">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </article>
      <div className="twoSection-cards">
        <CardsRecipes 
        title="Broccoli Salad with Bacon"
        image={comida1}
        />
        <CardsRecipes         
        title="Classic Beef Burgers"
        image={comida2}/>

        <CardsRecipes
        title="Classic Potato Salad"
        image={comida3}/>
        <CardsRecipes
        title="Cherry Cobbler on the Grill"
        image={comida4}/>
      </div>
    </section>
  );
}
export default TwoSection;

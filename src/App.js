import React from "react";
import Register from "./Page/Register";
import Header from "./Components/Header";
import CardsRecipes from "./Components/CardsRecipes";
import ImgServiceLeft from "./images/bloco_services.svg";
import ImgHeader from "./images/illustration.svg";
import CardsBlog from "./Components/CardsBlog";
import ImgFooter from "./images/bloco_final_image.svg";
import OneSection from "./Components/OneSection"
import TwoSection from "./Components/TwoSection"
import ThreeSection from "./Components/ThreeSection"
import FourSection from "./Components/FourSection";
import FiveSection from "./Components/FiveSection";
   


function App() {
  return (
    <>
      {/* <section className="oneSection">
        <img src={ImgHeader} alt="img-right" />
        <Header />

        <article className="oneSection-title">
          <h1> Ready for Trying a new recipe? </h1>
          <div className="oneSection-input-button">
            <input placeholder="Search healthy recipes" />
            <button>Search</button>
          </div>
        </article>
      </section> */}
      {/* <Register /> */}
      <OneSection />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection />

      {/* <section className="twoSection">
        <h1>Our Best Recipes</h1>
        <article className="twoSection-text">
          <p className="subtitle">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </article>
        <div className="twoSection-cards">
          <CardsRecipes />
          <CardsRecipes />
          <CardsRecipes />
          <CardsRecipes />
        </div>
      </section> */}

      {/* <section className="threeSection">
        <div className="threeSection-img">
          <img src={ImgServiceLeft} alt="img-left" />
        </div>
        <div className="threeSection-text">
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

          <button> Know More </button>
        </div>
      </section> */}

      {/* <section className="fourSection">
        <h1>Read Our Blog</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts
        </p>
        <div className="fourSection-cards">
          <CardsBlog />
          <CardsBlog />
          <CardsBlog />
          <CardsBlog />
        </div>
      </section> */}

      {/* <section className="fiveSection">
        <article className="fiveSection-text">
          <h1> Join our membership to get special offer </h1>

          <div className="fiveSection-input-button">
            <input placeholder="Enter your email address" />
            <button> Join </button>
          </div>
        </article>
        <div>
          <img src={ImgFooter} alt="img-left" />
        </div>
      </section> */}
    </>
  );
}

export default App;

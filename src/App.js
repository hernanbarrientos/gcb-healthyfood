import React from "react";
import Register from "./Page/Register";
import Header from "./Components/Header";
import CardsRecipes from "./Components/CardsRecipes"

function App() {
  return (
    <>
      <div className="container">
        <Header />

        <div className="main">
          <h1> Ready for Trying a new recipe? </h1>
          <input
          placeholder="Search healthy recipes"
          />
          <button>Search</button>
        </div>
      </div>
      <div className="twoSection">
        <h1>Our Best Recipes</h1>
       <div className="text-section-two"><h4>Far far away, behind the word mountains, far from the countries
Vokalia and Consonantia, there live the blind texts.</h4></div> 
<div className="cards">
<CardsRecipes />
<CardsRecipes />
<CardsRecipes />
<CardsRecipes />
</div>

      </div>
    </>
  );
}

export default App;

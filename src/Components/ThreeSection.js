import React from "react";
import ImgServiceLeft from "../images/bloco_services.svg";


function ThreeSection(props) {
  return (

    <section className="threeSection">
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
      </section>
    
  );
}
export default ThreeSection;

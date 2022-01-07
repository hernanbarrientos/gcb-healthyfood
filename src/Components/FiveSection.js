import React from "react";
import ImgFooter from "../images/bloco_final_image.svg"


function FiveSection(props) {
  return (
    <section className="fiveSection">
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
      </section>
  );
}
export default FiveSection;

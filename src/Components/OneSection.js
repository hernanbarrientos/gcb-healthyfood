import React from "react";
import ImgHeader from "../images/illustration.svg";
import Header from "./Header";

function OneSection(props) {
  return (
    <section className="oneSection">
      <img src={ImgHeader} alt="img-right" />
      <Header />

      <article className="oneSection-title">
        <h1> Ready for Trying a new recipe? </h1>
        <div className="oneSection-input-button">
          <input placeholder="Search healthy recipes" />
          <button>Search</button>
        </div>
      </article>
    </section>
  );
}
export default OneSection;

import React from "react";
import styled from "styled-components";
import comida1 from "../images/comida_1.svg";

function CardsRecipes(props) {
  const Card = styled.div`
    margin: 1%;
    width: 35vw;
    height: 20vh;
    background-color: #fff;
    display: flex;
    border-radius: 12px;
    box-shadow: 2px 2px 8px #f1f1f1;
    align-content: center;
    align-items: center;

    @media (min-width: 200px) and (max-width: 610px) {
      width: 85vw;
      height: 20vh;
    }
  `;
  const CardText = styled.div`
    padding: 5%;
    align-items: center;
    text-align: left;

    h2 {
      font-weight: 800;
      color: #1d164d;
      width: 90%;
      line-height: 1.1;

      @media (min-width: 200px) and (max-width: 610px) {
        font-size: 0.8em;
      }
    }
  `;
  const Image = styled.img`
    height: 20vh;
  `;
  const Button = styled.button`
    width: 9vw;
    height: 6vh;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: #badc58;
    box-shadow: 2px 2px 8px #dcf591;
    font-size: 1rem;
    font-family: "muli";
    margin: 3% 0;

    @media (min-width: 200px) and (max-width: 610px) {
      width: 30vw;
      height: 4.8vh;
      font-size: 0.8rem;
    }

    :hover {
      color: #badc58;
      background-color: #1d164d;
      transition: 0.6s;
    }
  `;

  return (
    <Card>
      <Image src={props.image} />
      <CardText>
        <h2>{props.title}</h2>
        <Button> See Recipe </Button>
      </CardText>
    </Card>
  );
}
export default CardsRecipes;

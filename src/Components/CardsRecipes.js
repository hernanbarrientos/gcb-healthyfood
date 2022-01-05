import React from "react";
import styled from "styled-components";
import comida1 from "../images/comida_1.svg"


function CardsRecipes(props) {

  const Card = styled.div`
    margin: 2%;
    width: 550px;
    height: 250px;
    background-color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 2px 2px 8px #f1f1f1;
  `
   const CardText = styled.div`
   padding:4%;
   align-items: center;
   text-align: left;
   ;
 `
  const Image = styled.img`
  object-fit: cover;
  height:250px;
  
  `


  return (

    <Card>
      <Image src={comida1} />
      <CardText>
      <h2>Broccoli Salad with Bacon</h2>
      <button> See Recipe </button>
      </CardText>
      
    </Card>

  )
}
export default CardsRecipes;
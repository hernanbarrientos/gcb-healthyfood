import React from "react";
import styled from "styled-components";
import comida1 from "../images/comida_1.svg"


function CardsRecipes(props) {

  const Card = styled.div`
    margin: 2%;
    width: 500px;
    height: 200px;
    background-color: #fff;
    display: flex;
    align-items: center;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0.5px 0.5px 3.5px gray  ;
  `
   const CardText = styled.div`
   padding:4%;
   align-items: center;
   text-align: left;
   ;
 `
  const Image = styled.img`
  object-fit: cover;
  height:200px;
  
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
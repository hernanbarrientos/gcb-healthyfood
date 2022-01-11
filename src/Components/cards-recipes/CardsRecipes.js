import React from "react";
import { Card, CardText, Image, Button } from "./styles";

function CardsRecipes(props) {
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

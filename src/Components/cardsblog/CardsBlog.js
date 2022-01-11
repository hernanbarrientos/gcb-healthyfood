import React from "react";
import {
  Card,
  Image,
  CardText,
  NameUser,
  TextBlog,
  FooterContainer,
  ImgFooter,
} from "./styles";

function CardsBlog(props) {
  return (
    <Card>
      <Image src={props.blogImage} />
      <CardText>
        <TextBlog>{props.title}</TextBlog>
      </CardText>
      <FooterContainer>
        <ImgFooter src={props.userImage} alt="user image" />
        <p>{props.userName}</p>
      </FooterContainer>
    </Card>
  );
}
export default CardsBlog;

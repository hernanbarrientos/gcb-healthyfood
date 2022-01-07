import React from "react";
import styled from "styled-components";
import blog1 from "../images/blog_image_1.svg";


function CardsBlog(props) {
  const Card = styled.div`
    margin: 0 1%;
    width: 21.5em;
    height: 26em;
    background-color: #fff;
    text-align: left;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 2px 2px 8px #f1f1f1;
  `;

  const Image = styled.img`
    object-fit: cover;
    width: 21.5rem;
  `;

  const CardText = styled.div`
    padding: 8% 4%;
    text-align: left;
    width: 100%;
    letter-spacing: 0.1rem;
    font-family: "muli";
  `;

  const TextBlog = styled.h2`
    color: #1d164d;
    font-weight: 900;
    letter-spacing: 0.1rem;
    font-size: 1.34rem;
  `;
  const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    align-content: center;
    padding-left: 6%;

    p {
      margin: 0 0 0 2%;
      font-family: "muli";
      font-weight: 600;
      font-size: medium;
    }
  `;
  const ImgFooter = styled.img`
    border-radius: 50px;
    width: 60px;
  `;

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

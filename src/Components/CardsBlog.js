import React from "react";
import styled from "styled-components";
import blog1 from "../images/blog_image_1.svg";
import user01 from "../images/user01.jpg"

function CardsBlog(props) {
  const Card = styled.div`
    margin: 2%;
    width: 20em;
    height: 28em;
    background-color: #fff;
    text-align: left;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 2px 2px 8px #f1f1f1;
  `;

  const Image = styled.img`
    object-fit: cover;
    width: 20rem;
  `;

  const CardText = styled.div`
    padding: 8% 4%;
    text-align: left;
    width: 100%;
    letter-spacing: 0.1rem;
  `;

  const TextBlog = styled.h2`
  color: #1d164d;
  font-weight: 900;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  
  `
  const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  `
  const ImgFooter = styled.img`
  border-radius: 50px;
  width: 70px;
  `
  

  return (
    <Card>
      <Image src={blog1} />
      <CardText>
        <TextBlog>Quick-start guide to nuts and seeds</TextBlog>
        </CardText>
        <FooterContainer> 
          <ImgFooter src={user01} alt="user image" />         
          <p>User Name</p>
          </FooterContainer>
      
    </Card>
  );
}
export default CardsBlog;

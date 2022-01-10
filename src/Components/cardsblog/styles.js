import styled from "styled-components";

export const Card = styled.div`
  margin: 2% 0.5%;
  width: 21.5em;
  height: 24em;
  background-color: #fff;
  text-align: left;
  border-radius: 12px;
  box-shadow: 2px 2px 8px #f1f1f1;
  
`;

export const Image = styled.img`
  width: 17rem;
`;

export const CardText = styled.div`
  padding: 8% 4%;
  height: 22%;
  text-align: left;
  width: 100%;
  letter-spacing: 0.1rem;
  
`;

export const TextBlog = styled.h2`
  color: var(--primary);
  font-weight: 900;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
`;
export const FooterContainer = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  align-content: center;
  padding-left: 4%;
  padding-top: 20px;

  p {
    font-family: "muli";
    font-weight: 600;
    font-size: 0.7rem;
  }
`;

export const ImgFooter = styled.img`
  border-radius: 50px;
  width: 45px;
`;

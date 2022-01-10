import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  padding: 4%;
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    color: var(--primary);
    font-weight: 900;
    letter-spacing: 0.2rem;
    font-size: 2rem;
  }
`;
export const ContainerArticle = styled.article`
  margin: 1% auto;
  width: 60%;
  p {
    font-weight: 300;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--texts);
    font-family: "muli", sans-serif;
  }
`;

export const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  gap: 1%;
`;

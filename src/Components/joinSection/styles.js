import styled from "styled-components";

export const ContainerJoin = styled.section`
  align-items: center;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 0;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }

  img {
    width: 100%;
  }
`;

export const ContainerArticle = styled.article`
  margin: 0 auto;
  padding: 0 auto;
  width: 80%;
  text-align: left;
  align-items: center;
  align-content: center;

  h1 {
    width: 90%;
    color: var(--primary);
    font-weight: 900;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    font-family: "montserrat", "muli", sans-serif;
    @media (max-width: 500px) {
      text-align: center;
      width: 100%;
      margin: 0 auto;
    }
  }
`;

export const ContainerInputButton = styled.div`
  margin: 6% 0;
  width: 100%;
  line-height: 1.5;
  font-size: 1.2rem;

  input {
    height: 40px;
    width: 220px;
    border-radius: 4px;
    border: 1.8px solid gray;
    padding: 2%;
    font-size: 1rem;
    font-family: "muli";
    margin-right: 4%;

    @media (max-width: 600px) {
      font-size: 0.8rem;
      height: 100%;
      width: 100%;
    }
  }

  button {
    width: 80px;
    height: 40px;
    border-radius: 4px;
    border: none;
    color: white;
    background-color: var(--secondary);
    font-size: larger;
    box-shadow: 2px 2px 8px var(--secondary);
    cursor: pointer;

    @media (max-width: 600px) {
      font-size: 1rem;
      margin-top: 1%;
      padding: 2%;
      height: 100%;
      width: 100%;
    }

    &:hover {
      color: var(--secondary);
      background-color: var(--primary);
      border-radius: 6px;
      transition: 0.6s;
    }
  }
`;
export const FooterPage = styled.footer`
  width: 100%;
  height: 100%;
  background-color: var(--tertiary);
  display: flex;
  justify-content: space-between;
  padding: 2% 4%;

  h6 {
    color: lightgray;
    letter-spacing: 0.1rem;

    @media (max-width: 700px) {
      font-size: 30%;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media (min-width: 200px) and (max-width: 600px) {
    height: 43vh;
  }
`;

export const ImgLeft = styled.img`
  float: right;
  width: 65%;
`;

export const ContainerTextInput = styled.article`
  width: 50%;
  line-height: 1.6;
  padding-left: 6%;
  padding-top: 18%;

  @media (min-width: 200px) and (max-width: 600px) {
    width: 90%;
  }
`;
export const Title = styled.h1`
  width: 80%;
  color: var(--primary);
  font-family: "montserrat", sans-serif;
  font-size: 2rem;
  @media (max-width: 600px) {
    margin-top: 4%;
    font-size: 1.8rem;
    line-height: 1;
  }
`;
export const ContainerInputButton = styled.div`
  display: flex;
`;
export const InputTitle = styled.input`
  height: 40px;
  width: 200px;
  border-radius: 4px;
  border: 1.8px solid gray;
  padding: 4%;
  font-size: 1rem;
  font-family: "muli";
  margin-right: 4%;
`;

export const ButtonInputTitle = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: var(--secondary);
  cursor: pointer;

  &:hover {
    color: var(--secondary);
    background-color: var(--primary);
    border-radius: 6px;
    transition: 0.6s;
  }
`;

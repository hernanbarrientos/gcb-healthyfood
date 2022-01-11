import styled from "styled-components";

export const ContainerSection = styled.section`
  align-items: center;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 850px) {
    width: 100%;
    grid-template-columns: 1fr;
  }
`;
export const ContainerImgLeft = styled.div`
  width: 100%;

  img {
    left: 0;
    position: relative;
    width: 100%;
  }
`;
export const ContainerText = styled.article`
  margin: 0 auto;
  width: 90%;
  text-align: left;
  padding-right: 10%;

  h1 {
    color: var(--primary);
    width: 100%;
    font-weight: 900;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    line-height: 1.5;
  }

  p {
    margin: 6% 0;
    width: 90%;
    line-height: 1.5;
    font-size: 1rem;
    color: var(--texts);
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 0 auto;
    align-items: center;

    P {
      margin: 2% auto;
    }
  }
`;

export const ButtonSection = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: var(--secondary);
  box-shadow: 2px 2px 8px var(--secondary);
  font-size: large;

  &:hover {
    color: var(--secondary);
    background-color: var(--primary);
    border-radius: 6px;
    transition: 0.6s;
    cursor: pointer;
  }
`;

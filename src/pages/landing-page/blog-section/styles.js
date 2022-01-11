import styled from "styled-components";

export const ContainerBlog = styled.section`
  background-color: var(--tertiary);
  text-align: center;
  padding: 6% 0 6% 6%;
  align-items: center;
  align-content: center;
  justify-content: space-between;

  h1 {
    color: var(--primary);
    font-weight: 900;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    font-family: "montserrat", "muli", sans-serif;
  }
`;

export const TextDescription = styled.p`
  width: 60%;
  padding: 2%;
  margin: 0 auto;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.2rem;
  font-size: 1.1em;
  color: var(--texts);

  @media (max-width: 850px) {
    width: 99%;
    line-height: 1.1;
    letter-spacing: 0.1rem;
  }
`;
export const ContainerButtonScroll = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ArrowRight = styled.img`
  width: 30%;
  box-shadow: 2px 2px 8px lightgray;
  border-radius: 50px;
`;
export const ArrowLeft = styled.img`
  width: 30%;
  box-shadow: 2px 2px 8px lightgray;
  border-radius: 50px;
`;

export const ButtonRight = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ButtonLeft = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CardContainers = styled.section`
  margin: 0 auto;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 95%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

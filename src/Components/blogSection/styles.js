import styled from "styled-components";

export const ContainerBlog = styled.section`
  background-color: var(--tertiary);
  text-align: center;
  padding: 6% 0 8% 8%;

  h1 {
    color: var(--primary);
    font-weight: 900;
    letter-spacing: 0.2rem;
    font-size: 2rem;
    font-family: "montserrat", "muli", sans-serif;
  }
  p {
    width: 60%;
    padding: 2%;
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.5;
    letter-spacing: 0.2rem;
    font-size: 1.1em;
    color: var(--texts);
  }
  @media (max-width: 850px) {
    P {
      width: 90%;
      line-height: 1.1;
      letter-spacing: 0.1rem;
    }
  }
`;
export const CardContainers = styled.section`
  display: flex;
  overflow-y: hidden;
`;

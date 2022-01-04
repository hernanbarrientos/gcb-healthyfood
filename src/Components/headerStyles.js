import styled from "styled-components";

export const Container = styled.nav`
  padding: 1% 10%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Subtitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1pt;
  margin: 0;
  color: #badc58;

  @media (max-width: 920px) {
    font-size: 2.2rem;
    margin: 0.3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: #91ad3b;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0.3em;
  padding: 0.5em;

  &:hover {
    color: white;
    background-color: #badc58;
    border-radius: 3px;
    transition: 0.6s;
  }
  @media (max-width: 720px) {
    font-size: 1rem;
    margin: 0.3rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    margin: 0.3rem 0.3rem;
    padding: 0.2rem;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
    margin: 0.1rem 0.1rem;
    padding: 0.1rem;
  }
`;
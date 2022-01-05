import styled from "styled-components";

export const Container = styled.nav`
  padding: 2% 8%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: 300px) {
    font-size: 1.3rem;
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.3em;
  padding: 0.5em;

  &:hover {
    color: #badc58;
    background-color: #fff;
    border-radius: 4px;
    transition: 0.6s;
  }
  @media (max-width: 720px) {
    font-size: 0.8rem;
    margin: 0.3rem;
  }

  @media (max-width: 500px) {
    font-size: 0.9rem;
    margin: 0.3rem 0.3rem;
    padding: 0.2rem;
  }

  @media (max-width: 300px) {
    font-size: 0.7rem;
    margin: 0.1rem 0.1rem;
    padding: 0.1rem;
  }
`;

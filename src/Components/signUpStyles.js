import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  padding: 0 auto;
  margin: 2% auto;
  align-items: center;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled.input`
  margin: auto;
  margin-bottom: 2%;
  padding: 2%;
  width: 90%;
  height: 2vh;
  color: #1d164d;
  font-size: 1.2rem;
  border: none;
  border-radius: 6px;
  box-shadow: 0.5px 0.5px 2px;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    height: 3.5vh;
  }
  @media (max-width: 480px) {
    font-size: 0.48rem;
    height: 2.5vh;
  }
  @media (max-width: 320px) {
    font-size: 0.4rem;
    height: 100%;
    border-radius: 2px;
    margin-bottom: 6%;
  }
`;
export const Button = styled.button`
  color: #91ad3b;
  max-width: 100px;
  width: 40%;
  height: 6vh;
  text-decoration: none;
  border: none;
  box-shadow: 1px 1px 2px;
  font-size: 1.3rem;
  font-weight: 500;
  margin: auto;
  margin-top: 2%;

  &:hover {
    color: white;
    background-color: #badc58;
    border-radius: 3px;
    transition: 0.6s;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    height: 4vh;
  }

  @media (max-width: 300px) {
    font-size: 0.6rem;
    height: 2vh;
  }
`;

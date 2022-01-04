import styled from "styled-components";

export const Container = styled.div`
  width: 50vw;
  padding: 0 auto;
  margin: 2% auto;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    height: 3vh;
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputForm = styled.input`
  margin: auto;
  margin-bottom: 3%;
  padding: 2% auto;
  width: 80%;
  height: 3.5vh;
  color: #1d164d;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 2px;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    height: 2.5vh;
    width: 100%;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
    height: 2.5vh;
    border-radius: 2.5px;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
    height: 100%;
    border-radius: 1.5px;
    margin-bottom: 6%;
  }
`;
export const Button = styled.button`
  color: #91ad3b;
  width: 30%;
  height: 5vh;
  text-decoration: none;
  border: none;
  box-shadow: 1px 1px 2px;
  font-size: 1.5rem;
  font-weight: 500;
  margin: auto;

  &:hover {
    color: white;
    background-color: #badc58;
    border-radius: 3px;
    transition: 0.6s;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 300px) {
    font-size: 0.8rem;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  padding: 0 auto;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 0.7rem;
    height: 3vh;
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
`;

export const Input = styled.input`
  
  margin-bottom: 5%;
  padding-left: 2%;
  width: 100%;
  height: 30px;
  color: var(--primary);
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0.5px 0.5px 2px;

  @media (min-width: 200px) and (max-width: 600px) {
    width: 80%;
    border-radius: 2.5px;
    margin: 10px;
    
  }
   
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-bottom: 1px;
`;

export const P = styled.p`
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  margin-top: -10px;
`;

export const Button = styled.button`
  color: var(--primary);
  width: 40%;
  height: 6vh;
  text-decoration: none;
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 2px;
  font-size: 1.5rem;
  font-weight: 500;
  margin: auto;
  

  &:hover {
    color: white;
    background-color: var(--primary);
    border-radius: 3px;
    transition: 0.6s;
  }
  @media(min-width: 200px) and (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }


`;

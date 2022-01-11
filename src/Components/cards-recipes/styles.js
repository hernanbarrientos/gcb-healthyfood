import styled from "styled-components";

export const Card = styled.div`
  margin: 1%;
  width: 400px;
  height: 170px;
  background-color: #fff;
  display: flex;
  border-radius: 12px;
  box-shadow: 2px 2px 8px #f1f1f1;
  align-content: center;
  align-items: center;

  @media (min-width: 200px) and (max-width: 610px) {
    width: 85vw;
    height: 20vh;
  }
`;

export const CardText = styled.div`
  padding: 5%;
  align-items: center;
  text-align: left;

  h2 {
    font-weight: 800;
    color: var(--primary);
    width: 90%;
    line-height: 1.1;

    @media (min-width: 200px) and (max-width: 600px) {
      font-size: inherit;
    }
  }
`;

export const Image = styled.img`
  height: 100%;
`;
export const Button = styled.button`
  width: 95px;
  height: 35px;
  border-radius: 4px;
  border: none;
  color: white;
  background-color: var(--secondary);
  box-shadow: 2px 2px 6px lightgray;
  font-size: 1rem;
  font-family: "muli";
  margin: 4px 0;

  @media (min-width: 200px) and (max-width: 900px) {
    width: 60%;
    height: 4.8vh;
    font-size: 0.8rem;
    padding: 2%;
  }

  :hover {
    color: var(--secondary);
    background-color: var(--primary);
    transition: 0.6s;
  }
`;

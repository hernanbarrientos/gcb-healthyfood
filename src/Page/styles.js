import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
`;

export const Subtitle = styled.h1`
  font-size: 1.7em;
  font-weight: 700;
  color: #1d164d;

  @media (max-width: 600px) {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

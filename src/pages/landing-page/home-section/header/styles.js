import styled from "styled-components";

export const Container = styled.header`
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  position: absolute;
  margin: 0 auto;
  padding: 2% 4% 2% 4%;
  text-align: center;
  z-index: 1;

  @media (max-width: 605px) {
    /* width: 33.3333%;
    display: block; */
    /* align-content: left;
    text-align: left;
    margin-left: 2%; */
    padding: 2%;
  }
`;

export const Subtitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
  letter-spacing: 1pt;
  margin: 2%;
  color: var(--secondary);

  @media (max-width: 900px) {
    font-size: 1.4em;
  }
  @media (max-width: 300px) {
    font-size: 0.9rem;
  }
`;

export const MenuBar = styled.div`
  display: none;

  @media (max-width: 605px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const MenuImage = styled.img`
  width: 20%;
`;

export const Nav = styled.nav`
  ul {
    list-style: none;
  }
  ul li {
    display: inline;
  }
  ul li a {
    margin: 0 auto;
    color: #fff;
    text-decoration: none;
    font-family: "muli", sans-serif;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 1em;
  }
  ul li a:hover {
    color: var(--secondary);
    background-color: #fff;
    border-radius: 6px;
    transition: 0.6s;
  }

  @media (min-width: 605px) and (max-width: 1000px) {
    ul li a {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 606px) {
    ul li {
      display: none;
    }

    ul li a {
      display: block;
      margin: 0;
      color: var(--primary);
      text-decoration: none;
      font-family: "muli", sans-serif;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.2em;
      margin: 0.2em;
    }
    ul li a:hover {
      color: var(--primary);
      background-color: var(--secondary);
      border-radius: 2px;
      transition: 0.6s;
      width: 100%;
      height: 100%;
    }
  }
`;

export const NavMobile = styled.nav`
  display: none;

  @media (max-width: 605px) {
    display: flex;

    ul {
      list-style: none;
    }
    ul li {
      display: inline;
    }
    ul li a {
      margin: 0 auto;
      color: #fff;
      text-decoration: none;
      font-family: "muli", sans-serif;
      font-size: 1.1rem;
      font-weight: 600;
      padding: 1em;
      @media (max-width: 300px) {
        font-size: 0.7rem;
      }
    }
    ul li a:hover {
      color: var(--secondary);
      background-color: #fff;
      border-radius: 6px;
      transition: 0.6s;
    }
  }
`;

import {createGlobalStyle} from "styled-components"

const Base = createGlobalStyle`

:root{
  --primary: #1d164d;
  --secondary: #badc58;
  --tertiary: #fafafa;
  --texts: gray;

}

  body {

    font-family: "muli", "montserrat", sans-serif;
    max-width: 1000px;
    width:100%;

   
  }
`
export default Base;
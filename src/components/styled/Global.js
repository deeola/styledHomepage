import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap');

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

img{
    width: 100%;
    display: block;
}


body{
    font-family: 'Spartan', sans-serif;   
}

p{
    line-height: 1.5;
}

`;

export default GlobalStyles;

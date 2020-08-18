import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font: 20px 'Asap', sans-serif;
    color: ${props => props.theme.darkGreen};
}

body{ 
    background: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
}

a{
    text-decoration: none;
}
ul{
    list-style: none;
}

`;

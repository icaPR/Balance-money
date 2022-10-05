import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #161712;
    --black: #161712;
    --red: #F05D5E;
    --green: #0F7173;

    --black-light: #703D57;
    
    --text-title:  #161712;
    --text-body: #8F9A84;
    
    --background:  #E0E3DD;
    --shape: #FFFFFF;
}
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html {
    @media (mas-width: 1080px){
        font-size: 93.73%;
    }

    @media (mas-width: 720px){
        font-size: 87.5%;
    }
}

body {
    background: var(--background);
    -webkit-font-smoothing: antiliased;
}
body,button, textarea, input{
    font-family: "Poppins", sans-serif;
    font-weight: 400;

}

h1,h2,h3,h4,h5,h6, strong{
    font-weight: 600;
}

button {
    cursor: pointer;
}

[display]{
    opacity: 0.5;
    cursor: not-allowed;
}
`;

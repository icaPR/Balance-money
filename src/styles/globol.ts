import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #E7ECEF;
    --red: #dbe7f6;
    --black: #dbe7f6;

    --black-light: #dbe7f6;
    
    --text-title: #dbe7f6;
    --text-body: #dbe7f6;
    
    --background: #dbe7f6;
    --shape: #dbe7f6;
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

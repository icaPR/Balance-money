import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --background: #161712;
    --blue: #477EFF;
    --red: #D7263D;
    --green: #23CE6B;

    --black-light: #080708;
    
    --text-title:  #363F5F;
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

.react-modal-overlay{
    background: rgba(0,0,0,0.5) ;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

}
.react-modal-content{
    width: 100%;
    max-width: 576px;   
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:0.25rem;
;
}

.react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border:0;
    background: transparent;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.7);
    }
}
`;

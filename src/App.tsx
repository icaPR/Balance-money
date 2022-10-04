import styled from "styled-components";
import { GlobalStyle } from "./styles/globol";

const Title = styled.h1`
  font-size: 64px;
  color: red;
`;

export function App() {
  return (
    <div className="App">
      <h1>alo</h1>
      <GlobalStyle />
    </div>
  );
}

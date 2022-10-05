import styled from "styled-components";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/globol";
import { Dashboard } from "./components/Dashboard/index";

const Title = styled.h1`
  font-size: 64px;
  color: red;
`;

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}

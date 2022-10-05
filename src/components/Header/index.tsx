import logoImg from "../../assets/Logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="B logo" />
        </header>
        <button type="button">Nova transação</button>
      </Content>
    </Container>
  );
}

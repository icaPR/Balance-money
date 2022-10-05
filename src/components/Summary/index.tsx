import icomeImg from "../../assets/Entradas.svg";
import outomeImg from "../../assets/Saídas.svg";
import totalImg from "../../assets/Total.svg";
import { Container } from "./styles";
export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImg} alt="Entradas" />
        </header>
        <strong>R$500</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outomeImg} alt="Saidas" />
        </header>
        <strong>R$400</strong>
      </div>
      <div>
        <header>
          <p>Toral</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$100</strong>
      </div>
    </Container>
  );
}

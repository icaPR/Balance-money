import { Container } from "./styles";
import { Summary } from "../Summary/index";
import { Transaction } from "../Transaction/index";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transaction />
    </Container>
  );
}

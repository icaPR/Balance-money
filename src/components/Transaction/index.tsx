import { Container } from "./styles";

export function Transaction() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Web</td>
            <td className="deposit">R$100,00</td>
            <td>AA</td>
            <td>1/08/2020</td>
          </tr>
          <tr>
            <td>Desenvolvimento de Web</td>
            <td className="withdraw">- R$100,00</td>
            <td>AA</td>
            <td>1/08/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
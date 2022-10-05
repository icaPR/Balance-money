import { useState } from "react";
import Modal from "react-modal";
import logoImg from "../../assets/Logo.svg";

import { Container, Content } from "./styles";

interface HederProps {
  onOpen: () => void;
}

export function Header({ onOpen }: HederProps) {
  return (
    <Container>
      <Content>
        <header>
          <img src={logoImg} alt="B logo" />
        </header>
        <button type="button" onClick={onOpen}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}

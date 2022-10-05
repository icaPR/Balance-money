import Modal from "react-modal";
//import Container from "./styled";
interface NewTransactionProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewTransactionModal({ isOpen, onClose }: NewTransactionProps) {
  return (
    //<Container>
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h1>Cads</h1>
    </Modal>
    //</Container>
  );
}

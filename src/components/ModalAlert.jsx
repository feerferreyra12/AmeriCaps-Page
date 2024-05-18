
import { Modal, Button } from 'react-bootstrap';

export const ModalAlert = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>El carrito está vacío</Modal.Title>
    </Modal.Header>
  </Modal>
);



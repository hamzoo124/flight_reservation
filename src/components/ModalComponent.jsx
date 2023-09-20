import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import Signup from './Signup';

const ModalComponent = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
      <Button variant="secondary ms-auto" onClick={handleClose}>
          Close
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Signup/>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;

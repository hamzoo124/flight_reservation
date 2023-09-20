import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

const OrderN = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button  className="btn btn-primary"onClick={handleOpenModal}>Signup</button>
      <ModalComponent show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};
 export default OrderN;
import React, { useRef } from 'react';
import '../components/Modal/Modal.scss';

import Modal from '../components/Modal/Modal';

function App() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return (
    <div className="App">
      <button className="modal-btn-open" onClick={openModal}>
        Open Modal
      </button>
      <Modal ref={modalRef}>
        <button
          className="modal-btn-close"
          onClick={() => modalRef.current.closeModal()}
        >
          Close
        </button>
        <h1>Modal Header</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint eum
          alias neque fuga asperiores, deleniti pariatur sapiente eligendi
          doloremque. Mollitia, facere tempora modi asperiores eum perspiciatis
          iste ipsum eaque explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi odit
          ducimus similique quo a quis itaque hic, impedit atque voluptatem
          doloribus assumenda nulla saepe molestiae aliquid corrupti magnam sint
          laboriosam.
        </p>
      </Modal>
    </div>
  );
}

export default App;

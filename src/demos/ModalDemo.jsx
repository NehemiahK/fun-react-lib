import React, { useState } from 'react';
import Modal from '../components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const openModalHandler = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <button className="modal__btn-open" onClick={openModalHandler}>
        Open Modal
      </button>
      <Modal isOpen={isOpen}>
        <button className="modal__btn-close" onClick={closeModalHandler}>
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

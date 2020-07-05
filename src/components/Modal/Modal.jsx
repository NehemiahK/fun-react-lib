import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Modal.scss';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(props.isOpen);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      closeModal: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return (
      <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={close} />
        <div className="modal-box">{props.children}</div>
      </div>
    );
  }
  return null;
});

export default Modal;

Modal.propTypes = {
  isOpen: Boolean,
};

Modal.defaultProps = {
  isOpen: false,
};

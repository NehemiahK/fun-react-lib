import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <div className="modal__wrapper">
        <div className="modal__backdrop" />
        <div className="modal__box">{props.children}</div>
      </div>
    );
  }
  return null;
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  isOpen: false,
};

import React from 'react';
import PropTypes from 'prop-types';

import './SimpleButton.scss';

const SimpleButton = ({ color, size, onClick, children }) => {
  return (
    <button
      className={`simple-button ${color} ${size}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

SimpleButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

SimpleButton.defaultProps = {
  color: 'red',
  children: 'Click here',
  size: 'sm',
};

export default SimpleButton;

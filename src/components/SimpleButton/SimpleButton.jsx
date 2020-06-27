import React from 'react';
import './simplebutton.css';

const SimpleButton = (props) => {
  return (
    <button
      className={`simple-button ${props.color} ${props.size}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

SimpleButton.defaultProps = {
  color: 'red',
  onClick: () => {},
  children: 'Click here',
  size: 'sm',
};

export default SimpleButton;

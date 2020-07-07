import React from 'react';
import PropTypes from 'prop-types';

import './RadioButton.scss';

const RadioButton = ({
  checked,
  value,
  name,
  onChange,
  children,
  disabled,
}) => {
  return (
    <div className="radio-button">
      <input
        id={name}
        type="radio"
        checked={checked}
        disabled={disabled || false}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{children}</label>
    </div>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  disabled: PropTypes.bool,
};

RadioButton.defaultProps = {
  onChange: () => {},
  children: 'Select me',
  checked: false,
  disabled: false,
  name: 'radio',
  value: '',
};

export default RadioButton;

import React from 'react';
import './RadioButton.scss';

const RadioButton = (props) => {
  const { checked, value, name, onChange, children, disabled } = props;
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

RadioButton.defaultProps = {
  onChange: () => {},
  children: 'Select me',
  checked: false,
  disabled: false,
  name: 'radio',
  value: '',
};

export default RadioButton;

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import radioButtonPath from '../docs/radio-button.md';
import RadioButton from '../components/RadioButton/RadioButton';

const RadioButtonDemo = () => {
  const [markdown, setMarkdown] = useState('');
  const [selectedValue, setSelectedValue] = React.useState('A');

  useEffect(() => {
    fetch(radioButtonPath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
      <ReactMarkdown source={markdown} />
      <div style={{ margin: 10 }} />
      <RadioButton
        name="radio-a"
        checked={selectedValue === 'A'}
        onChange={handleChange}
        value="A"
      >
        Select A
      </RadioButton>

      <RadioButton
        name="radio-b"
        checked={selectedValue === 'B'}
        onChange={handleChange}
        value="B"
      >
        Select B
      </RadioButton>
    </>
  );
};

export default RadioButtonDemo;

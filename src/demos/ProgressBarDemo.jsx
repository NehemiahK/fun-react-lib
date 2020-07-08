import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import simpleButtonPath from '../docs/progressbar.md';

const ProgressBarDemo = () => {
  const [markdown, setMarkdown] = useState('');

  const testData = [
    { bgColor: '#6a1b9a', completed: 60 },
    { bgColor: '#00695c', completed: 30 },
    { bgColor: '#ef6c00', completed: 53 },
  ];

  useEffect(() => {
    fetch(simpleButtonPath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  return (
    <>
      <ReactMarkdown source={markdown} />
      {testData.map((item, idx) => (
        <ProgressBar
          // eslint-disable-next-line react/no-array-index-key
          key={idx}
          bgColor={item.bgColor}
          completed={item.completed}
        />
      ))}
    </>
  );
};

export default ProgressBarDemo;

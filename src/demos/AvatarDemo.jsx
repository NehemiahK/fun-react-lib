import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';
import Avatar from '../components/Avatar/Avatar';
import avatarPath from '../docs/avatar.md';

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const AvatarDemo = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(avatarPath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  return (
    <>
      <ReactMarkdown source={markdown} />
      <div style={{ margin: 10 }} />
      <div
        style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}
      >
        {sizes.map((size, i) => (
          <Avatar
            key={i.toString()}
            size={size}
            src="https://avatars2.githubusercontent.com/u/53559108?s=460&u=d6851bf5daa2cea22482af9ab17d3e74bc939bdb&v=4"
          />
        ))}
      </div>
      <div style={{ margin: 16 }} />
      <div
        style={{ display: 'flex', justifyContent: 'space-between', width: 400 }}
      >
        {sizes.map((size, i) => (
          <Avatar key={i.toString()} size={size} name="RA" />
        ))}
      </div>
      <div style={{ margin: 10 }} />
    </>
  );
};

export default AvatarDemo;

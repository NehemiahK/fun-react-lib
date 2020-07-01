import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Tabs } from '../components';
import tabPath from '../docs/tabs.md';

const TabsDemo = () => {
  const [markdown, setMarkdown] = React.useState('');

  React.useEffect(() => {
    fetch(tabPath)
      .then((response) => response.text())
      .then((text) => {
        setMarkdown(text);
      });
  });

  return (
    <React.Fragment>
      <ReactMarkdown source={markdown} />
      <br />
      <Tabs defaultIndex={0} onTabClick={console.log}>
        <Tabs.Tab name="London">
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </Tabs.Tab>
        <Tabs.Tab name="Paris">
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </Tabs.Tab>
        <Tabs.Tab name="Tokyo">
          <h3>Tokyo</h3>
          <p>Tokyo is the capital of Japan.</p>
        </Tabs.Tab>
      </Tabs>
    </React.Fragment>
  );
};

export default TabsDemo;

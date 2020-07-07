import React, { useState } from 'react';
import './App.scss';
import ComponentList from './components/ComponentList/ComponentList';
import DemoDisplay from './demos/DemoDisplay';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [demo, setDemo] = useState('');

  return (
    <div className="App">
      <Navbar />
      <ComponentList setDemo={setDemo} />
      <DemoDisplay demo={demo} />
    </div>
  );
}

export default App;

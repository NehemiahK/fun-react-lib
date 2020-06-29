import React, { useState } from 'react';
import './App.css';
import ComponentList from './components/ComponentList/ComponentList'
import DemoDisplay from './demos/DemoDisplay'
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import {Router} from "@reach/router";
import logo from './logo.svg';

function App() {
    const navLinks = [
        {
            text: 'Home',
            path: '/',
            icon: 'ion-ios-home'
        },
        {
            text: 'Contact',
            path: '/contact',
            icon: 'ion-ios-megaphone'
        },
        {
            text: 'About',
            path: '/about',
            icon: 'ion-ios-business'
        },
        {
            text: 'Blog',
            path: '/blog',
            icon: 'ion-ios-bonfire'
        }
    ];


    const [demo, setDemo] = useState('');

  return (
    <div className="App">
        <Navbar navLinks={navLinks} logo={logo}/>
        <Router>
            <Home path="/Home"/>
            <Blog path="/Blog"/>
            <About path="/About"/>
            <Contact path="/Contact"/>
        </Router>
      <ComponentList setDemo={setDemo} />
      <DemoDisplay demo={demo} />
    </div>
  );
}

export default App;

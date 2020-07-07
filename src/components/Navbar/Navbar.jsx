/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

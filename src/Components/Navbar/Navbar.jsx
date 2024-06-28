import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
आवर्तन <span>कथक केंद्र , हिसार</span></div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

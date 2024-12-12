import React, { useState } from 'react';
import './Menu.css';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu-container">
      <div className="menu-header">
        <h1 className="menu-logo">Logo</h1>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>
      <ul className={`menu-items ${isOpen ? 'show' : ''}`}>
        <li><a href="#" className="menu-link">Home</a></li>
        <li><a href="#" className="menu-link">About</a></li>
        <li><a href="#" className="menu-link">Services</a></li>
        <li><a href="#" className="menu-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
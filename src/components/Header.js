import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <p className="hg">Health Care</p>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/mental-health-resources" className="nav-link">Mental Health Resources</Link>
        <Link to="/nutrition-advice" className="nav-link">Nutrition Advice</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;

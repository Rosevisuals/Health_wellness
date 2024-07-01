import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Nav } from 'react-bootstrap';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Health Care</Link>
      </div>
      <Nav className="nav">
        <Nav.Item>
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className="nav-link">About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/profile" className="nav-link">Profile</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/mental-health-resources" className="nav-link">Mental Health Resources</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/nutrition-advice" className="nav-link">Nutrition Advice</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}

export default Header;

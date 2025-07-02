import React from 'react';
import '../styles/header.css'; // Create this css

const Header: React.FC = () => (
  <header className="header">
    <img src="../../public/logo.png" alt="Instagram" className="logo" />
  </header>
);

export default Header;

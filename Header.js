import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu open/close
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu after navigating
    }
  };

  return (
    <header>
      <div className="container">
        <h1>Wanderssafari</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#x22EE; {/* Three vertical dots */}
        </button>
        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><button onClick={() => handleScroll('home')}>Home</button></li>
            <li><button onClick={() => handleScroll('about')}>AboutUs</button></li>
            <li><button onClick={() => handleScroll('tours')}>Tours</button></li>
            <li><button onClick={() => handleScroll('destinations')}>Destinations</button></li>
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/contact">ContactUs</Link></li>
            <li><Link to="/payment">Payment</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

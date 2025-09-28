import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <div className="logo-circle">
            <span className="logo-text">IEEE</span>
          </div>
          <span className="brand-text">TXST</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-menu">
          <button 
            className="nav-link"
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('events')}
          >
            Events
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('officers')}
          >
            Officers
          </button>
          <button 
            className="nav-link"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('home')}
        >
          Home
        </button>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('about')}
        >
          About
        </button>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('events')}
        >
          Events
        </button>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </button>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('officers')}
        >
          Officers
        </button>
        <button 
          className="mobile-nav-link"
          onClick={() => scrollToSection('contact')}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
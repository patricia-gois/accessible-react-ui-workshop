import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import './Navbar.css';
import ThemeToggle from '../UI/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fecha o menu se o utilizador carregar na tecla Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="header">
      {/* Skip Link: Invisível, mas aparece ao carregar em TAB */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <nav className="nav-container" aria-label="Primary Navigation">

        <div className="logo">
          <Rocket size={24} />
          <span>DevUseCases</span>
        </div>

        {/* Botão de Menu para Mobile */}
        <button
          className="mobile-toggle"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        <ul id="nav-menu" className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#contact" className="cta-button" onClick={() => setIsOpen(false)}>Let's Talk</a></li>
        </ul>

        <ThemeToggle />

      </nav>
    </header>
  );
};

export default Navbar;
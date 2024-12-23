import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${theme}`}>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h2>Poke Pedia</h2>
          </Link>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className="bi bi-list"></i>
        </button>
        <nav className="navbar">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/history" onClick={toggleMenu}>
            History
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}></i>
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/history" onClick={toggleMenu}>
              History
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <i className={`bi ${theme === "light" ? "bi-moon" : "bi-sun"}`}></i>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;

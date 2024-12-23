import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/About.css";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`about-page ${theme}`}>
      <div className="about-container">
        <h1 className="about-title">About Poke Pedia</h1>
        <div className="about-content">
          <section className="about-introduction">
            <p>
              Welcome to Poke Pedia, your ultimate source for all things
              Pokémon! Our mission is to provide trainers around the world with
              comprehensive information about their favorite pocket monsters.
            </p>
          </section>
          <section className="about-features">
            <h2>Our Features</h2>
            <ul>
              <li>
                <i className="bi bi-check-circle"></i> Comprehensive Pokédex
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Detailed move lists
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Evolution chains
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Type matchups
              </li>
              <li>
                <i className="bi bi-check-circle"></i> Latest Pokémon news
              </li>
            </ul>
          </section>
          <section className="about-team">
            <h2>Our Team</h2>
            <p>
              Poke Pedia is maintained by a dedicated team of Pokémon
              enthusiasts who are committed to providing accurate and up-to-date
              information.
            </p>
          </section>
          <section className="about-contact">
            <h2>Contact Us</h2>
            <p>
              Have questions or suggestions? We'd love to hear from you!
              <br />
              Email us at:{" "}
              <a href="mailto:info@pokepedia.com">info@pokepedia.com</a>
            </p>
          </section>
        </div>
        <Link to="/" className="about-back-link">
          <i className="bi bi-arrow-left"></i> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;

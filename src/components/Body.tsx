import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Body.css";
import characters from "../assets/characters.json";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";

const Body = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const { theme } = useTheme();

  const forward = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const backward = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1500);
    setCurrentIndex(
      currentIndex === 0 ? characters.length - 1 : currentIndex - 1
    );
  };

  const pokemon = characters[currentIndex];

  return (
    <div className={`pokemon-character-display ${theme}`}>
      <div className="container">
        <div className="left-fragment">
          <Link className="see-history" to={`/history/${pokemon.id}`}>
            History
          </Link>
          <img
            src={pokemon.imageUrl}
            className={`pokemon ${animate ? "flip" : ""}`}
            alt={pokemon.name}
          />
          <div className="button-group">
            <button onClick={backward}>
              <i className="bi bi-caret-left"></i>
            </button>
            <button onClick={forward}>
              <i className="bi bi-caret-right"></i>
            </button>
          </div>
        </div>
        <div className="right-fragment">
          <h2 className={animate ? "animation" : ""}>{pokemon.name}</h2>
          <p className={`description ${animate ? "animation" : ""}`}>
            {pokemon.description}
          </p>
          <div className={`stats ${animate ? "animation" : ""}`}>
            <h3>Stats</h3>
            <ul>
              <li>
                <span>Type:</span> {pokemon.type}
              </li>
              <li>
                <span>Height:</span> {pokemon.height}
              </li>
              <li>
                <span>Weight:</span> {pokemon.weight}
              </li>
              <li>
                <span>Abilities:</span> {pokemon.abilities.join(", ")}
              </li>
            </ul>
          </div>
          <div className={`evolution ${animate ? "animation" : ""}`}>
            <h3>Evolution</h3>
            <p>{pokemon.evolution}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;

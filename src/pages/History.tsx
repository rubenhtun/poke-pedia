import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Info } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import "../styles/History.css";
import characters from "../assets/characters.json";

const History = () => {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();

  if (!id) {
    return (
      <div className={`pokemon-creature-list ${theme}`}>
        {characters.map((pokemon) => (
          <Link className="pokemon-history" to={`/history/${pokemon.id}`}>
            <div key={pokemon.id} className="pokemon-creature">
              <img src={pokemon.imageUrl} alt={`${pokemon.name} character`} />
              <p className="name">{pokemon.name}</p>
              <p className="type">{pokemon.type}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  } else {
    const pokemon = characters[Number(id) - 1];

    if (!pokemon) {
      return <div>Pokemon not found</div>;
    }

    return (
      <div className={`history-container ${theme}`}>
        {" "}
        <Link to="/" className="back-link">
          <ArrowLeft className="back-icon" />
          Back to Pokédex
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`pokemon-card ${theme}`}
        >
          <div className="pokemon-header">
            <div className="pokemon-image-container">
              <img
                className="pokemon-image"
                src={pokemon.imageUrl}
                alt={pokemon.name}
              />
            </div>
            <div className="pokemon-info">
              <div className={`pokemon-type ${theme}`}>{pokemon.type}</div>
              <h1 className={`pokemon-name ${theme}`}>{pokemon.name}</h1>
              <p className={`pokemon-description ${theme}`}>
                {pokemon.description}
              </p>
            </div>
          </div>
          <div className={`history-section ${theme}`}>
            <h2 className={`section-title ${theme}`}>
              <Clock className="section-icon" />
              Historical Background
            </h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className={`history-text ${theme}`}
            >
              {pokemon.history}
            </motion.p>
          </div>
          <div className={`history-section ${theme}`}>
            <h3 className={`additional-info-section ${theme}`}>
              <Info className="section-icon" />
              Additional Information
            </h3>
            <ul className="info-list">
              <li className={`info-item ${theme}`}>
                <span className="info-label">Height:</span> {pokemon.height}
              </li>
              <li className={`info-item ${theme}`}>
                <span className="info-label">Weight:</span> {pokemon.weight}
              </li>
              <li className={`info-item ${theme}`}>
                <span className="info-label">Abilities:</span>{" "}
                {pokemon.abilities.join(", ")}
              </li>
              <li className={`info-item ${theme}`}>
                <span className="info-label">Evolution:</span>{" "}
                {pokemon.evolution}
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    );
  }
};

export default History;

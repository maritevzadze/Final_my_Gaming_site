import React from 'react';
import { motion } from 'framer-motion';

const GameCard = ({ game }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="game-card"
  >
    <h2>{game.name}</h2>
    <p>{game.description}</p>
  </motion.div>
);

export default GameCard;

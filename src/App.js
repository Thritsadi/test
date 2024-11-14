import React, { useState } from 'react';
import Hangman from './components/Hangman';
import WordSelector from './components/WordSelector';
import './App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [randomWord, setRandomWord] = useState('');
  const [gameStatus, setGameStatus] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    // Import words from words.js dynamically based on the category
    const wordsData = require('./data/words.js');

    // Check if the category exists in the words data (now lowercase)
    if (category && wordsData[category.toLowerCase()]) {
      const words = wordsData[category.toLowerCase()];
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
    } else {
      console.error(`Category not found: ${category}`);
    }
  };

  const resetGame = () => {
    setSelectedCategory(null);
    setRandomWord('');
    setGameStatus('');
  };

  return (
    <div className="app-container">
      <h1 className="title">Hangman Game</h1>

      {/* Word Selector Component */}
      <WordSelector onCategorySelect={handleCategorySelect} />

      {/* Hangman Game Component */}
      {randomWord && (
        <Hangman word={randomWord} setGameStatus={setGameStatus} />
      )}

      {/* Display Game Status */}
      {gameStatus && <h2 className="status">{gameStatus === 'won' ? 'You Win!' : 'Game Over'}</h2>}

      {/* Reset Button */}
      <button className="reset-button" onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default App;

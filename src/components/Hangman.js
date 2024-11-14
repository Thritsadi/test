import React, { useState, useEffect } from 'react';

const Hangman = ({ word, setGameStatus }) => {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const maxWrongGuesses = 7;

  // Handle letter guess
  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prev) => [...prev, letter]);
      if (!word.includes(letter)) {
        setWrongGuesses((prev) => prev + 1);
      }
    }
  };

  // Check if the word is guessed or game is over
  const isWordGuessed = word.split('').every((letter) => guessedLetters.includes(letter));
  const isGameOver = wrongGuesses >= maxWrongGuesses;

  useEffect(() => {
    if (isWordGuessed) {
      setGameStatus('won');
    } else if (isGameOver) {
      setGameStatus('lost');
    }
  }, [isWordGuessed, isGameOver, setGameStatus]);

  // Display word with underscores for unguessed letters
  const displayWord = word
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
    .join(' ');

  return (
    <div className="hangman-container">
      <h3>Guess the Word:</h3>
      <div className="word-display">{displayWord}</div>
      <div className="wrong-guesses">Wrong Guesses: {wrongGuesses}/{maxWrongGuesses}</div>

      {isGameOver && <div className="game-over">Game Over! The word was: {word}</div>}
      {isWordGuessed && <div className="win">You Win! The word was: {word}</div>}

      <div className="alphabet">
        {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
          <button
            key={letter}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || isGameOver}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hangman;

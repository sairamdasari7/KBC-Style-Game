import React, { useState } from 'react';

const PlayerComponent = ({ currentQuestion, options, onSubmitAnswer, questionNumber, totalQuestions }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = () => {
    if (playerName && selectedAnswer) {
      onSubmitAnswer(playerName, selectedAnswer);
      setSelectedAnswer('');
    } else {
      alert("Please enter your name and select an answer!");
    }
  };

  return (
    <div className="player-container">
      <h1>Enter your name</h1>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Your Name"
      />

      <h2>{`Question ${questionNumber}/${totalQuestions}`}</h2>
      <p>{currentQuestion}</p>

      <h2>Select your answer</h2>
      <div className="options">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option[0])}
            className={selectedAnswer === option[0] ? 'selected' : ''}
          >
            {option}
          </button>
        ))}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PlayerComponent;

import React, { useState } from 'react';

const PlayerComponent = ({ onSubmitAnswer }) => {
  const [playerName, setPlayerName] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSubmit = () => {
    if (playerName && selectedAnswer) {
      onSubmitAnswer(playerName, selectedAnswer);
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
      <h2>Select your answer</h2>
      <div className="options">
        <button onClick={() => setSelectedAnswer('A')}>A</button>
        <button onClick={() => setSelectedAnswer('B')}>B</button>
        <button onClick={() => setSelectedAnswer('C')}>C</button>
        <button onClick={() => setSelectedAnswer('D')}>D</button>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PlayerComponent;

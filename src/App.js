import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameComponent from './components/GameComponent';
import PlayerComponent from './components/PlayerComponent';

const App = () => {
  const handleAnswerSubmission = (playerName, selectedAnswer) => {
    console.log(`${playerName} submitted ${selectedAnswer}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameComponent />} />
        <Route path="/player" element={<PlayerComponent onSubmitAnswer={handleAnswerSubmission} />} />
      </Routes>
    </Router>
  );
};

export default App;

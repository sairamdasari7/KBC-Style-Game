import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameComponent from './components/GameComponent';
import PlayerComponent from './components/PlayerComponent';

const questions = [
  { question: "What is the capital of France?", options: ["A) Paris", "B) Rome", "C) Berlin", "D) Madrid"], answer: "A" },
  { question: "What is 2 + 2?", options: ["A) 3", "B) 4", "C) 5", "D) 6"], answer: "B" },
  { question: "Who wrote 'Hamlet'?", options: ["A) Dickens", "B) Shakespeare", "C) Orwell", "D) Twain"], answer: "B" },
  { question: "What is the largest planet?", options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], answer: "C" },
  { question: "Which is a programming language?", options: ["A) Python", "B) Snake", "C) Crocodile", "D) Lion"], answer: "A" }
];

const App = () => {
  const [currentQuestionIndex] = useState(0); // No need for setCurrentQuestionIndex

  const handleAnswerSubmission = (playerName, selectedAnswer) => {
    console.log(`${playerName} submitted ${selectedAnswer}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameComponent />} />
        <Route 
          path="/player" 
          element={
            <PlayerComponent 
              currentQuestion={questions[currentQuestionIndex].question} 
              onSubmitAnswer={handleAnswerSubmission} 
            />
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

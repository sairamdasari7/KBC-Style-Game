import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameComponent from './components/GameComponent';
import PlayerComponent from './components/PlayerComponent';
import ResultComponent from './components/ResultComponent';

const questions = [
  { question: "What is the capital of France?", options: ["A) Paris", "B) Rome", "C) Berlin", "D) Madrid"], answer: "A" },
  { question: "What is 2 + 2?", options: ["A) 3", "B) 4", "C) 5", "D) 6"], answer: "B" },
  { question: "Who wrote 'Hamlet'?", options: ["A) Dickens", "B) Shakespeare", "C) Orwell", "D) Twain"], answer: "B" },
  { question: "What is the largest planet?", options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], answer: "C" },
  { question: "Which is a programming language?", options: ["A) Python", "B) Snake", "C) Crocodile", "D) Lion"], answer: "A" }
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  
  const handleAnswerSubmission = (playerName, selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsGameOver(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameComponent />} />
        <Route 
          path="/player" 
          element={
            !isGameOver ? (
              <PlayerComponent
                currentQuestion={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onSubmitAnswer={handleAnswerSubmission}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            ) : (
              <ResultComponent score={score} totalQuestions={questions.length} />
            )
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import QRCodeComponent from './QRCodeComponent';

const questions = [
  { question: "What is the capital of France?", options: ["A) Paris", "B) Rome", "C) Berlin", "D) Madrid"], answer: "A" },
  { question: "What is 2 + 2?", options: ["A) 3", "B) 4", "C) 5", "D) 6"], answer: "B" },
  { question: "Who wrote 'Hamlet'?", options: ["A) Dickens", "B) Shakespeare", "C) Orwell", "D) Twain"], answer: "B" },
  { question: "What is the largest planet?", options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"], answer: "C" },
  { question: "Which is a programming language?", options: ["A) Python", "B) Snake", "C) Crocodile", "D) Lion"], answer: "A" }
];

const GameComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctPlayer, setCorrectPlayer] = useState(null);
  const [gameCompleted, setGameCompleted] = useState(false);

  // Function to handle answer selection
  const handleAnswerSubmission = (selectedOption) => {
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (selectedOption === correctAnswer) {
      setCorrectPlayer("Player");
      setTimeout(() => {
        setCorrectPlayer(null);

        if (currentQuestionIndex + 1 === questions.length) {
          setGameCompleted(true);
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }
      }, 2000);
    } else {
      alert("Incorrect answer!");
    }
  };

  return (
    <div className="game-container">
      <h1>KBC Game</h1>
      <div className="qr-code">
        <QRCodeComponent value="https://kbc-style-game.vercel.app/player" />
      </div>
      {gameCompleted ? (
        <h2>Congratulations! You’ve completed the game!</h2>
      ) : correctPlayer ? (
        <h2>Congratulations {correctPlayer}!</h2>
      ) : (
        <div>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <ul>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSubmission(option[0])}>
                {option} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameComponent;

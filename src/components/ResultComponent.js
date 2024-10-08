import React from 'react';

const ResultComponent = ({ score, totalQuestions }) => {
  const message =
    score === totalQuestions
      ? "Congratulations! You successfully completed the challenge!"
      : "Well tried, better luck next time.";

  return (
    <div className="result-container">
      <h1>{message}</h1>
      <p>{`Your score: ${score} out of ${totalQuestions}`}</p>
    </div>
  );
};

export default ResultComponent;

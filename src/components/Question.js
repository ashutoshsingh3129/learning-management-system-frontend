"use client"
import React from 'react';

const Question = ({ question, onAnswer }) => {
  const handleAnswer = (answer) => {
    onAnswer(answer);
  };

  return (
    <div>
      <h2>{question.text}</h2>
      <button onClick={() => handleAnswer(true)}>Correct</button>
      <button onClick={() => handleAnswer(false)}>Incorrect</button>
    </div>
  );
};

export default Question;

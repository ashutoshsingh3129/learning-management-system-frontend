"use client";

import { createQuestion } from '@/services/api';
import React, { useState } from 'react';

const CreateQuestion = ({ onCreate }) => {
  const [difficulty, setDifficulty] = useState(1);
  const [content, setContent] = useState('');
  const [choices, setChoices] = useState({ A: '', B: '', C: '', D: '' });
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = { difficulty, content, choices, correctAnswer };

    try {
    //   const response = await fetch('/api/questions', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(newQuestion),
    //   });
        const response=await createQuestion(newQuestion)
      if (response.ok) {
        const createdQuestion = await response.json();
        onCreate(createdQuestion);
        setDifficulty(1);
        setContent('');
        setChoices({ A: '', B: '', C: '', D: '' });
        setCorrectAnswer('');
      } else {
        console.error("Error creating question:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating question:", error);
    }
  };

  const handleChoiceChange = (key, value) => {
    setChoices((prevChoices) => ({ ...prevChoices, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Create a New Question</h2>

      <label className="block mb-4">
        <span className="text-gray-700">Difficulty</span>
        <input
          type="number"
          min="1"
          max="10"
          value={difficulty}
          onChange={(e) => setDifficulty(Number(e.target.value))}
          className="w-full p-2 border rounded mt-2"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Question Content</span>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        />
      </label>

      <div className="mb-6">
        <h3 className="text-gray-700 font-semibold mb-2">Choices</h3>
        {["A", "B", "C", "D"].map((choice) => (
          <label key={choice} className="block mb-2">
            <span className="text-gray-700">Choice {choice}</span>
            <input
              type="text"
              value={choices[choice]}
              onChange={(e) => handleChoiceChange(choice, e.target.value)}
              className="w-full p-2 border rounded mt-2"
              required
            />
          </label>
        ))}
      </div>

      <label className="block mb-6">
        <span className="text-gray-700">Correct Answer</span>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          className="w-full p-2 border rounded mt-2"
          required
        >
          <option value="">Select the correct answer</option>
          {["A", "B", "C", "D"].map((choice) => (
            <option key={choice} value={choice}>{choice}</option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 w-full"
      >
        Create Question
      </button>
    </form>
  );
};

export default CreateQuestion;

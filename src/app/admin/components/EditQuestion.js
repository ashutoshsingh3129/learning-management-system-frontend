"use client";

import React, { useState, useEffect } from 'react';

const EditQuestion = ({ question, onUpdate }) => {
  const [difficulty, setDifficulty] = useState(question.difficulty);
  const [content, setContent] = useState(question.content);
  const [choices, setChoices] = useState(question.choices);
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedQuestion = { difficulty, content, choices, correctAnswer };

    try {
      const response = await fetch(`/api/questions/${question._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedQuestion),
      });

      if (response.ok) {
        const updatedData = await response.json();
        onUpdate(updatedData);
      } else {
        console.error("Error updating question:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const handleChoiceChange = (key, value) => {
    setChoices((prevChoices) => ({ ...prevChoices, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Edit Question</h2>

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
        className="bg-green-600 text-white p-3 rounded hover:bg-green-700 w-full"
      >
        Update Question
      </button>
    </form>
  );
};

export default EditQuestion;

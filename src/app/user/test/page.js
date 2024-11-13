'use client';

import { registerTest, startTest } from '@/services/api';
import { useState } from 'react';

const TestPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [question, setQuestion] = useState(null); // Holds the current question
  const [selectedAnswer, setSelectedAnswer] = useState(''); // Holds the selected answer
  const [testId, setTestId] = useState('');
  const [testCompleted, setTestCompleted] = useState(false); // Tracks if the test is completed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startTestRegistration = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const payload = { ...formData, userId: localStorage.getItem('userId') }; // Include user ID from localStorage
      const response = await registerTest(payload);
      setQuestion(response.data.initialQuestion); // Set the first question
      setTestId(response.data.test._id);
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const submitAnswer = async () => {
    if (!selectedAnswer) {
      setError("Please select an answer.");
      return;
    }
    setIsLoading(true);
    setError(null);

    try {
      const response = await startTest(
        testId,
        question._id,
        { userAnswer: selectedAnswer },
      );

      if (response.data.test.isCompleted) {
        setTestCompleted(true); // Mark test as completed
      } else {
        setQuestion(response.data.currentQuestion); // Load the next question from the response
        setSelectedAnswer(''); // Reset selected answer for the next question
      }
    } catch (err) {
      console.error('Failed to submit answer:', err);
      setError('Failed to submit answer. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Register for the Test</h1>
      
      {!question && !testCompleted && (
        <>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={startTestRegistration}
            disabled={isLoading}
            className={`w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ${isLoading && 'opacity-50 cursor-not-allowed'}`}
          >
            {isLoading ? 'Starting...' : 'Start Test'}
          </button>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </>
      )}

      {testCompleted && (
        <div className="text-center mt-6">
          <h2 className="text-2xl font-semibold text-green-600">Test Completed</h2>
          <p className="text-gray-700 mt-4">Thank you for completing the test!</p>
        </div>
      )}

      {!testCompleted && question && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Question</h2>
          <p className="text-gray-700 mt-2">{question.content}</p>
          <div className="flex flex-col mt-4 space-y-2">
            {Object.entries(question.choices).map(([key, value]) => (
              <label key={key} className="flex items-center space-x-2 p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                <input
                  type="radio"
                  name="answer"
                  value={key}
                  checked={selectedAnswer === key}
                  onChange={() => setSelectedAnswer(key)}
                  className="form-radio text-blue-500"
                />
                <span className="text-gray-700">{key}. {value}</span>
              </label>
            ))}
          </div>
          <button
            onClick={submitAnswer}
            disabled={isLoading || !selectedAnswer}
            className={`w-full mt-4 p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 ${(!selectedAnswer || isLoading) && 'opacity-50 cursor-not-allowed'}`}
          >
            {isLoading ? 'Submitting...' : 'Submit Answer'}
          </button>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default TestPage;

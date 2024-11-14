"use client";

import { useState, useEffect } from "react";
import CreateQuestion from "./CreateQuestion";
import { getAllQuestion } from "@/services/api";

const QuestionList = ({ onEdit }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await getAllQuestion();
        setQuestions(response.data);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  console.log("QuestionList received onEdit:", onEdit); // Verify that onEdit is a function

  const deleteQuestion = async (id) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((question) => question.id !== id));
    } catch (error) {
      console.error("Failed to delete question:", error);
    }
  };

  return (
    <div>
      <CreateQuestion onCreate={(newQuestion) => setQuestions([...questions, newQuestion])} />
      <table className="w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="text-left py-3 px-4">Question</th>
            <th className="text-left py-3 px-4">Difficulty</th>
            <th className="text-left py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question._id} className="border-b">
              <td className="py-3 px-4">{question.content}</td>
              <td className="py-3 px-4">{question.difficulty}</td>
              <td className="py-3 px-4">
                <button
                  className="text-blue-500"
                  onClick={() => {
                    console.log("onEdit clicked with question:", question); // Debug log
                    onEdit(question);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => deleteQuestion(question.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionList;

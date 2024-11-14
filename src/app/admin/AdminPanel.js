"use client";

import { useState } from "react";
import QuestionList from "./components/QuestionList";
import EditQuestion from "./components/EditQuestion";

const AdminPanel = () => {
  const [editingQuestion, setEditingQuestion] = useState(null);

  const handleEdit = (question) => {
    console.log("Editing question:", question); // Log to verify function call
    setEditingQuestion(question);
  };

  const handleUpdate = () => {
    setEditingQuestion(null); // Close edit mode after update
  };

  console.log("Rendering AdminPanel with handleEdit:", handleEdit);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      {!editingQuestion ? (
        <QuestionList onEdit={handleEdit} /> // Pass `handleEdit` to `QuestionList`
      ) : (
        <EditQuestion question={editingQuestion} onUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default AdminPanel;

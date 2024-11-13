// src/app/admin/components/TestResults.js
"use client";

import { useState } from 'react';

const TestResults = () => {
  const [results, setResults] = useState([
    { user: 'John Doe', score: 85 },
    { user: 'Jane Smith', score: 92 },
  ]);

  return (
    <table className="w-full bg-white shadow-md rounded my-6">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="text-left py-3 px-4">User</th>
          <th className="text-left py-3 px-4">Score</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} className="border-b">
            <td className="py-3 px-4">{result.user}</td>
            <td className="py-3 px-4">{result.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TestResults;

// src/app/admin/components/TestResults.js
"use client";

import { getAllTestResults } from '@/services/api';
import { useEffect, useState } from 'react';

const TestResults = () => {
  const [results, setResults] = useState([]);
  useEffect(()=>{
    tests()
  },[])

  let tests= async ()=>{

let res=await getAllTestResults()
console.log("rr",res)
setResults(res.data)
  }
  return (
    <table className="w-full bg-white shadow-md rounded my-6">
      <thead>
        <tr className="bg-gray-800 text-white">
          <th className="text-left py-3 px-4">User</th>
          <th className="text-left py-3 px-4">email</th>
          <th className="text-left py-3 px-4">Mark in %</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} className="border-b">
            <td className="py-3 px-4">{result.userInfo.name}</td>
            <td className="py-3 px-4">{result.userInfo.email}</td>
            <td className="py-3 px-4">{result.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TestResults;

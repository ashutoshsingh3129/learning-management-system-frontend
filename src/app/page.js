"use client";
import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-4">
    <h1 className="text-3xl font-bold mb-6">Welcome to the LMS</h1>
    <div className="flex space-x-4">
      <Link href="/auth/login">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
      <Link href="/auth/register">
        <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Register
        </button>
      </Link>
    </div>
  </div>
);

export default HomePage;

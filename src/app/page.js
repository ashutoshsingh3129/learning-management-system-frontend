"use client"
import React from 'react';
import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to the LMS</h1>
    <Link href="/auth/login">Login</Link>
    <Link href="/auth/register">Register</Link>
  </div>
);

export default HomePage;

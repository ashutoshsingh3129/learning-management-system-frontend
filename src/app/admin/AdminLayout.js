// src/app/admin/AdminLayout.js
"use client";

import Link from 'next/link';

const AdminLayout = ({ children }) => (
  <div className="flex min-h-screen">
    <aside className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/admin/questions">
              Manage Questions
            </Link>
          </li>
          <li>
            <Link href="/admin/test-results">
              View Test Results
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
    <main className="flex-1 p-8 bg-gray-100">
      {children}
    </main>
  </div>
);

export default AdminLayout;

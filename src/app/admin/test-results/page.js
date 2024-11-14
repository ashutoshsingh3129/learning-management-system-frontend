// src/app/admin/test-results/page.js
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '../AdminLayout';
import TestResults from '../components/TestResults';

const TestResultsPage = () => 
  (
    <ProtectedRoute>
  <AdminLayout>
    <h1 className="text-3xl font-semibold mb-6">Test Results</h1>
    <TestResults />
  </AdminLayout>
  </ProtectedRoute>
);

export default TestResultsPage;

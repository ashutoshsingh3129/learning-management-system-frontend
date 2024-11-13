// src/app/admin/test-results/page.js
import AdminLayout from '../AdminLayout';
import TestResults from '../components/TestResults';

const TestResultsPage = () => (
  <AdminLayout>
    <h1 className="text-3xl font-semibold mb-6">Test Results</h1>
    <TestResults />
  </AdminLayout>
);

export default TestResultsPage;

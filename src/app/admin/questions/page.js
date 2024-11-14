// src/app/admin/questions/page.js
import ProtectedRoute from '@/components/ProtectedRoute';
import AdminLayout from '../AdminLayout';
import QuestionList from '../components/QuestionList';

const QuestionsPage = () => (
  <ProtectedRoute>
  <AdminLayout>
    <h1 className="text-3xl font-semibold mb-6">Manage Questions</h1>
    <QuestionList />
  </AdminLayout>
  </ProtectedRoute>
);

export default QuestionsPage;

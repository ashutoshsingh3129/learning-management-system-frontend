// src/app/admin/questions/page.js
import AdminLayout from '../AdminLayout';
import QuestionList from '../components/QuestionList';

const QuestionsPage = () => (
  <AdminLayout>
    <h1 className="text-3xl font-semibold mb-6">Manage Questions</h1>
    <QuestionList />
  </AdminLayout>
);

export default QuestionsPage;

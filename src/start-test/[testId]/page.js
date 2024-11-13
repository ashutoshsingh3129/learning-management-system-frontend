// src/app/start-test/[testId]/page.js
import { useRouter } from 'next/navigation';
import { startTest } from '../../../services/testService';

const StartTestPage = ({ params }) => {
  const router = useRouter();
  const { testId } = params;

  const handleStartTest = async () => {
    try {
      const response = await startTest(testId);
      console.log("Test started:", response);
      // Redirect or handle success, e.g., navigating to test page
    } catch (error) {
      console.error("Error starting test:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h1>Start Test {testId}</h1>
      <button onClick={handleStartTest}>Start Test</button>
    </div>
  );
};

export default StartTestPage;

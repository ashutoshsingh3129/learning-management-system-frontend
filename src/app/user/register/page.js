"use client"
import RegisterForm from '@/components/RegisterForm';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();

  const handleRegistrationSuccess = (data) => {
    console.log("dd",data)
    router.push(`/test/${data.testId}`,{ state:data });
  };

  return (
    <div>
      <h1>Register for the Test</h1>
      <RegisterForm onSuccess={handleRegistrationSuccess} />
    </div>
  );
};

export default RegisterPage;

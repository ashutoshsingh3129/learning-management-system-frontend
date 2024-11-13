'use client';
import { registerTest } from '@/services/api';
import { useState } from 'react';

const RegisterForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        let payload={...formData}
        payload['userId']=localStorage.getItem('userId')
      const response = await registerTest(payload);
      console.log("rr",response)
      const testId = response.uniqueURL;
      onSuccess(response);
    } catch (err) {
      console.error('Registration failed:', err);
      setError('Failed to register. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default RegisterForm;

"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/auth/login');
    } else {
      setIsLoading(false); // Authentication confirmed, stop loading
    }
  }, [router]);

  if (isLoading) return null; // Or add a loading spinner if preferred

  return children;
}

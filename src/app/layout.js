"use client";

import { Provider, useDispatch, useSelector } from 'react-redux';
import store from '@/redux/store';
import './globals.css';
import { useRouter, usePathname } from 'next/navigation';
import { logout } from '@/redux/actions/authActions';

function AuthButton() {
  const router = useRouter();
  const pathname = usePathname();  // Use this to get the current path
  const dispatch = useDispatch();
  const isAuthenticated = localStorage.getItem('token') !== null; // useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logout());
    router.push('/');
  };

  // Check if we are on login or signup page
  const isAuthPage = pathname === '/auth/login' || pathname === '/auth/register';

  // Render nothing if we're on an auth page
  if (isAuthPage) return null;

  return (
    <div className="mt-4 flex justify-end w-full">
      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Login
        </button>
      )}
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Provider store={store}>
          <main className="flex flex-col items-center min-h-screen p-4">
            <div className="w-full flex justify-end">
              <AuthButton /> {/* Renders login/logout button aligned to the right */}
            </div>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

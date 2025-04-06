import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AuthCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(location.search);
      const token = params.get('token');

      if (token) {
        localStorage.setItem('token', token);
        // Set token in axios headers
        const axios = require('axios');
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        
        // Fetch user data
        try {
          const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/auth/me`);
          login({ token, user: response.data.user });
          navigate('/');
        } catch (error) {
          console.error('Error fetching user data:', error);
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };

    handleCallback();
  }, [location, navigate, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Signing you in...
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Please wait while we complete the authentication process.
        </p>
      </div>
    </div>
  );
};

export default AuthCallback; 
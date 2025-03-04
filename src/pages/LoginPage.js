import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <img 
          src="/logo.png" 
          alt="Anglo American Logo" 
          className="login-logo" 
        />
        <h1>Safety File Management</h1>
        <p>Please log in to access your safety file documents</p>
        <button 
          className="login-button" 
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
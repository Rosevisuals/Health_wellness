import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import './SignIn.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SignIn() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignInSuccess = () => {
    login();
    navigate('/dashboard'); // Redirect to the dashboard after sign-in
  };

  return (
    <div className="SignInWrapper">
      <h1>Sign In</h1>
      <div className="content">
        <p>Welcome back! Sign in to access your personalized health and wellness plans. Stay on track with your fitness, nutrition, and mental health goals with our comprehensive platform.</p>
        <p>Our AI-driven platform continuously adapts to your unique needs, providing you with the most effective and up-to-date recommendations. Your journey to a healthier, happier you starts here.</p>
      </div>
      <AuthForm endpoint="signin" buttonText="Sign In" onSuccess={handleSignInSuccess} />
      <div className="links">
        <Link to="/signup">Don't have an account? Create one now</Link>
        <Link to="/forgot-password">Forgot password?</Link>
      </div>
    </div>
  );
}

export default SignIn;

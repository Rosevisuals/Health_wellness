import React, { useContext } from 'react';
import AuthForm from '../components/AuthForm';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function SignUp() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignupSuccess = () => {
    login();
    navigate('/dashboard'); // Redirect to a protected route after sign-up
  };

  return (
    <div className="SignUpWrapper">
      <h1>Sign Up</h1>
      <div className="content">
        <p>Create an account to access personalized health and wellness plans. Our platform helps you stay on track with fitness, nutrition, and mental health goals tailored to your unique needs.</p>
        <p>Join us today and start your journey to a healthier, happier you!</p>
      </div>
      <AuthForm endpoint="signup" buttonText="Sign Up" onSuccess={handleSignupSuccess} />
      <div className="links">
        <Link to="/signin">Already have an account? Sign in</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}

export default SignUp;

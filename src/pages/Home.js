import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Home.css';

const HeroSection = styled.div`
  background-color: #1a237e;
  color: white;
  padding: 60px;
  height: 500px;
  text-align: center;
  border-radius: 10px;
  margin-top: 100px;
  width: 1000px;
  position: relative;
  left: 250px;

  @media (max-width: 1200px) {
    width: 90%;
    left: 5%;
  }

  @media (max-width: 900px) {
    width: 90%;
    left: 5%;
    padding: 50px;
    height: 450px;
  }

  @media (max-width: 600px) {
    width: 95%;
    left: 2.5%;
    padding: 40px;
    height: 400px;
  }

  @media (max-width: 400px) {
    width: 95%;
    left: 2.5%;
    padding: 30px;
    height: 350px;
  }
`;

const HeroButton = styled(Link)`
  background-color: #fbc02d;
  color: #1a237e;
  padding: 15px 30px;
  font-size: 1.2em;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f9a825;
  }
`;

function Home() {
  return (
    <>
      <HeroSection>
        <h1 className='hi'>Welcome to HealthafCare Platform</h1>
        <p className='hey'>Discover a new way to achieve your health and wellness goals with our advanced AI-driven platform.</p>
        <HeroButton to="/dashboard" className='stat'>Get Started</HeroButton>
      </HeroSection>

      <div className="HomeWrapper">
        <div className="type2">
          <h2>Personalized Recommendations</h2>
          <p className='ht'>
            We understand that everyone is unique. That’s why our platform provides personalized recommendations based on your comprehensive data, including lifestyle habits, health conditions, and fitness levels. Whether you're looking to lose weight, build muscle, manage a health condition, or simply live a healthier life, we have the perfect plan for you.
          </p>
          <ul className='ht'>
            <li>Detailed fitness plans tailored to your goals and preferences</li>
            <li>Customized nutrition advice that takes into account your dietary needs and preferences</li>
            <li>Mental health resources designed to support your emotional well-being</li>
          </ul>
          <p className='ht'>
            By analyzing your data, our AI delivers fitness and nutrition plans specifically designed for you. Our goal is to help you achieve optimal health and wellness in a way that fits seamlessly into your daily routine.
          </p>
        </div>

        <div className="type2">
          <h2>Adaptive Learning Algorithms</h2>
          <p className='ht'>
            Our platform employs cutting-edge adaptive learning algorithms that continuously refine and improve your recommendations. As you progress and provide feedback, our AI learns more about your preferences and needs, ensuring that your health journey is always supported with the most accurate and effective advice.
          </p>
          <ul className='ht'>
            <li>Real-time adjustments to fitness plans based on your progress</li>
            <li>Dynamic nutrition advice that evolves with your dietary changes</li>
            <li>Personalized mental health resources that adapt to your emotional well-being</li>
          </ul>
        </div>

        <div className="type2">
          <h2>A Holistic Approach to Wellness</h2>
          <p className='ht'>
            We believe in a holistic approach to wellness that encompasses all aspects of your health. Our services include:
          </p>
          <ul className='ht'>
            <li>Physical health: Tailored fitness plans and activity tracking</li>
            <li>Mental health: Resources for stress management, meditation, and emotional support</li>
            <li>Emotional well-being: Tools and advice for maintaining a positive outlook and healthy relationships</li>
          </ul>
          <p className='ht'>
            Our comprehensive approach ensures that you receive support in every area of your life, helping you to achieve a balanced and healthy lifestyle.
          </p>
        </div>

        <div className="type2">
          <h2>Expert Guidance and Community Support</h2>
          <p className='ht'>
            In addition to personalized plans, our platform offers access to a community of experts and like-minded individuals. Get advice, share your progress, and find motivation from people who understand your journey. Our community features include:
          </p>
          <ul className='ht'>
            <li>Access to certified fitness trainers, nutritionists, and mental health professionals</li>
            <li>Community forums and support groups</li>
            <li>Live Q&A sessions and webinars</li>
          </ul>
        </div>

        <div className="type2">
          <h2>Start Your Journey Today</h2>
          <p className='ht'>
            Begin your journey towards better health and wellness today. Our platform is designed to grow with you, offering continuous support and personalized guidance as you work towards your goals. Join us and experience the benefits of a truly personalized and adaptive health and wellness platform.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Subscriptions.css';

function Subscriptions() {
  const navigate = useNavigate();

  const handleSubscribe = (plan) => {
    navigate('/payment', { state: { selectedPlan: plan } });
  };

  return (
    <div className="subscriptions-wrapper">
      <h1>Subscriptions</h1>
      <div className="subscription-plans">
        <div className="plan">
          <div className="plan-title">Basic Plan</div>
          <div className="plan-price">$4.99/month</div>
          <div className="plan-description">
            Ideal for individuals looking to start their wellness journey with basic features.
          </div>
          <ul className="plan-benefits">
            <li>Access to personalized fitness plans</li>
            <li>Basic nutrition advice</li>
            <li>Limited access to mental health resources</li>
            <li>Email support</li>
          </ul>
          <button
            className="subscribe-button"
            onClick={() => handleSubscribe('Basic Plan')}
          >
            Subscribe Now
          </button>
        </div>
        <div className="plan">
          <div className="plan-title">Premium Plan</div>
          <div className="plan-price">$9.99/month</div>
          <div className="plan-description">
            Perfect for those who want a comprehensive wellness plan with advanced features.
          </div>
          <ul className="plan-benefits">
            <li>All features of the Basic Plan</li>
            <li>Advanced nutrition advice and meal plans</li>
            <li>Full access to mental health resources</li>
            <li>24/7 chat support with wellness coaches</li>
            <li>Monthly progress reports</li>
          </ul>
          <button
            className="subscribe-button"
            onClick={() => handleSubscribe('Premium Plan')}
          >
            Subscribe Now
          </button>
        </div>
        <div className="plan">
          <div className="plan-title">Family Plan</div>
          <div className="plan-price">$14.99/month</div>
          <div className="plan-description">
            Great for families looking to improve their wellness together with shared benefits.
          </div>
          <ul className="plan-benefits">
            <li>All features of the Premium Plan</li>
            <li>Personalized plans for up to 4 family members</li>
            <li>Family progress tracking</li>
            <li>Group wellness challenges</li>
            <li>Exclusive family discounts on wellness products</li>
          </ul>
          <button
            className="subscribe-button"
            onClick={() => handleSubscribe('Family Plan')}
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="next-steps">
        <h2>What Happens After Subscribing?</h2>
        <p>Once you subscribe, you'll receive a welcome email with instructions on how to get started. Here are the next steps:</p>
        <ul>
          <li>Set up your profile and enter your health and wellness goals.</li>
          <li>Take a quick assessment to personalize your fitness, nutrition, and mental health plans.</li>
          <li>Start your customized wellness journey with access to all the features of your chosen plan.</li>
          <li>Track your progress and receive regular updates and recommendations.</li>
          <li>Engage with our community and join group challenges to stay motivated.</li>
        </ul>
        <p>Our support team is always here to help you make the most of your subscription. Feel free to reach out with any questions or for additional guidance.</p>
      </div>
    </div>
  );
}

export default Subscriptions;

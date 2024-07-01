import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <h1>Welcome to Your Dashboard</h1>
      <p>
        Here you can manage your health and wellness plans, track your progress, and access all the features of your subscription.
      </p>
      <div className="dashboard-sections">
        <section className="section">
          <h2>Personalized Fitness Plans</h2>
          <p>
            Access your personalized fitness plans designed to help you achieve your health goals. Whether you're aiming to lose weight, build muscle, or improve your overall fitness, our tailored workouts ensure you stay on track.
          </p>
          <ul>
            <li>View and track your daily workout routines</li>
            <li>Adjust your fitness goals and preferences</li>
            <li>Monitor your progress with detailed analytics</li>
          </ul>
        </section>
        <section className="section">
          <h2>Nutrition Advice and Meal Plans</h2>
          <p>
            Discover customized nutrition advice and meal plans that cater to your dietary preferences and health needs. Our expert recommendations ensure you get the nutrients you need to fuel your body.
          </p>
          <ul>
            <li>Personalized meal plans based on your goals</li>
            <li>Access to a database of healthy recipes</li>
            <li>Track your daily food intake and nutritional values</li>
          </ul>
        </section>
        <section className="section">
          <h2>Mental Health Resources</h2>
          <p>
            Maintain your mental well-being with our comprehensive mental health resources. From guided meditations to stress management tips, we support your emotional health every step of the way.
          </p>
          <ul>
            <li>Guided meditation sessions</li>
            <li>Stress and anxiety management tools</li>
            <li>Access to mental health professionals</li>
          </ul>
        </section>
        <section className="section">
          <h2>Community and Support</h2>
          <p>
            Join our vibrant community of health enthusiasts. Share your progress, join group challenges, and get support from fellow members and wellness coaches.
          </p>
          <ul>
            <li>Participate in community challenges</li>
            <li>Engage in forums and discussion groups</li>
            <li>Receive support and motivation from coaches and peers</li>
          </ul>
        </section>
        <section className="section">
          <h2>Progress Tracking and Reports</h2>
          <p>
            Stay informed about your progress with detailed tracking and reports. Monitor your improvements and adjust your plans as needed to ensure continuous growth.
          </p>
          <ul>
            <li>Daily, weekly, and monthly progress reports</li>
            <li>Visualize your progress with charts and graphs</li>
            <li>Receive personalized feedback and recommendations</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

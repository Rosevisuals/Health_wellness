import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NutritionAdvice from './pages/NutritionAdvice';
import MentalHealthResources from './pages/MentalHealthResources';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard';
import FitnessPlans from './pages/FitnessPlans'; // Import FitnessPlans component
import Chatbot from './components/Chatbot'; // Ensure Chatbot is correctly imported
import ChatSupport from './pages/ChatSupport'; // Import ChatSupport component
import MonthlyProgressReports from './pages/MonthlyProgressReports'; // Import MonthlyProgressReports component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Chatbot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nutrition-advice" element={<NutritionAdvice />} />
        <Route path="/mental-health-resources" element={<MentalHealthResources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fitness-plans" element={<FitnessPlans />} />
        <Route path="/monthly-progress-reports" element={<MonthlyProgressReports />} />
        <Route path="/chat-support" element={<ChatSupport />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

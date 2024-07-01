import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NutritionAdvice from './pages/NutritionAdvice';
import MentalHealthResources from './pages/MentalHealthResources';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Subscriptions from './pages/Subscriptions';
import About from './pages/About';
import Contact from './pages/Contact';
import Payment from './pages/Payment'; // Import Payment component
import Dashboard from './components/Dashboard';
import FitnessPlans from './pages/FitnessPlans'; // Import FitnessPlans component
import Chatbot from './components/Chatbot'; // Ensure Chatbot is correctly imported
import ChatSupport from './pages/ChatSupport'; // Import ChatSupport component
import MonthlyProgressReports from './pages/MonthlyProgressReports'; // Import MonthlyProgressReports component
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute'; // Import ProtectedRoute component
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Chatbot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/nutrition-advice" element={<NutritionAdvice />} />
          <Route path="/mental-health-resources" element={<MentalHealthResources />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/subscriptions" element={
            <ProtectedRoute>
              <Subscriptions />
            </ProtectedRoute>
          } />
          <Route path="/payment" element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          } />
          <Route path="/fitness-plans" element={
            <ProtectedRoute>
              <FitnessPlans />
            </ProtectedRoute>
          } />
          <Route path="/monthly-progress-reports" element={
            <ProtectedRoute>
              <MonthlyProgressReports />
            </ProtectedRoute>
          } />
          <Route path="/chat-support" element={
            <ProtectedRoute>
              <ChatSupport />
            </ProtectedRoute>
          } />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;

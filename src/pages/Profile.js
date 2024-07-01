import React, { useState } from 'react';
import { FaUserCircle, FaCog, FaHeartbeat } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  const [editingField, setEditingField] = useState('');

  const handleFieldClick = (field) => {
    setEditingField(field === editingField ? '' : field);
  };

  return (
    <div className="profile-wrapper">
      <h1>Profile</h1>
      <div className="section">
        <div className="icon-wrapper">
          <FaUserCircle />
        </div>
        <h2>Your Personal Information</h2>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('name')}>Name</label>
          {editingField === 'name' && (
            <input type="text" placeholder="Enter your name" className="animated-input" />
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('email')}>Email</label>
          {editingField === 'email' && (
            <input type="email" placeholder="Enter your email" className="animated-input" />
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('address')}>Address</label>
          {editingField === 'address' && (
            <input type="text" placeholder="Enter your address" className="animated-input" />
          )}
        </div>
      </div>
      <div className="section">
        <div className="icon-wrapper">
          <FaCog />
        </div>
        <h2>Settings</h2>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('notifications')}>Notification Preferences</label>
          {editingField === 'notifications' && (
            <select className="animated-input">
              <option>Email</option>
              <option>SMS</option>
              <option>Push Notifications</option>
            </select>
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('privacy')}>Privacy Settings</label>
          {editingField === 'privacy' && (
            <select className="animated-input">
              <option>Public</option>
              <option>Friends Only</option>
              <option>Private</option>
            </select>
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('language')}>Preferred Language</label>
          {editingField === 'language' && (
            <select className="animated-input">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          )}
        </div>
      </div>
      <div className="section">
        <div className="icon-wrapper">
          <FaHeartbeat />
        </div>
        <h2>Health Data</h2>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('fitnessActivity')}>Fitness Activity</label>
          {editingField === 'fitnessActivity' && (
            <textarea placeholder="Enter your fitness activity" className="animated-input"></textarea>
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('nutrition')}>Nutrition</label>
          {editingField === 'nutrition' && (
            <textarea placeholder="Enter your nutrition details" className="animated-input"></textarea>
          )}
        </div>
        <div className="profile-field">
          <label onClick={() => handleFieldClick('sleepPatterns')}>Sleep Patterns</label>
          {editingField === 'sleepPatterns' && (
            <textarea placeholder="Enter your sleep patterns" className="animated-input"></textarea>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

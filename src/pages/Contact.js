import React from 'react';
import styled from 'styled-components';
import './Contact.css';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    margin: 20px 0;
  }
`;

function Contact() {
  return (
    <ContactWrapper>
      <h1>Contact Us</h1>
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Send Message</button>
        </div>
      </div>

      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p>Email: info@aihealthwellness.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Wellness St, Health City, HC 12345</p>
      </div>

      <div className="review-section">
        <h2>Leave a Review</h2>
        <div className="review-form">
          <div className="form-group">
            <label htmlFor="review-name">Name</label>
            <input type="text" id="review-name" name="review-name" required />
          </div>
          <div className="form-group">
            <label htmlFor="review-message">Review</label>
            <textarea id="review-message" name="review-message" rows="5" required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Submit Review</button>
          </div>
        </div>
        <div className="reviews">
          <h3>User Reviews</h3>
          <div className="review">
            <p><strong>John Doe:</strong> Excellent service! I feel much healthier and happier.</p>
          </div>
          <div className="review">
            <p><strong>Jane Smith:</strong> The personalized nutrition advice was spot on. Highly recommend!</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <h3>What is the AI Health and Wellness platform?</h3>
          <p>Our platform provides personalized health and wellness recommendations using advanced AI technology. We offer fitness plans, nutrition advice, mental health resources, and more.</p>
        </div>
        <div className="faq">
          <h3>How do I get started?</h3>
          <p>You can get started by accessong our dashboard where you will see different sections  on our platform. Select a section , and  you can access personalized recommendations based on your health data.</p>
        </div>
        <div className="faq">
          <h3>Is there a mobile app available?</h3>
          <p>Not yet, our mobile app is  not yet available for both iOS and Android. We are yet to release it soon.</p>
        </div>
        <div className="faq">
          <h3>Can I access my progress reports online?</h3>
          <p>Yes, you can view and track your progress reports through your dashboard on our platform. We provide detailed analytics and insights to help you stay on track with your goals.</p>
        </div>
        <div className="faq">
          <h3>What kind of support is available?</h3>
          <p>We offer chat support access of health enthusiasts. You can also connect with certified fitness trainers, nutritionists, and mental health professionals for personalized advice.</p>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;

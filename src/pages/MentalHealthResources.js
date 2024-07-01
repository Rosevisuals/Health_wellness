import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaPray, FaBrain, FaSmile, FaHeart } from 'react-icons/fa';
import './MentalHealthResources.css';

const MentalHealthResourcesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;

  h1 {
    margin: 20px 0;
  }
`;

const Illustration = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function MentalHealthResources() {
  const location = useLocation();
  const { accessLevel } = location.state || { accessLevel: 'basic' };

  return (
    <MentalHealthResourcesWrapper>
      <h1>Mental Health Resources</h1>

      <div className="typo">
        <div className="icon-wrapper">
          <FaPray />
        </div>
        <h2>Guided Meditations</h2>
        <Illustration src="images/meditation.jpg" alt="Guided Meditations" />
        <p>
          Guided meditations can help you relax, reduce stress, and improve mental clarity. Follow these steps for a calming meditation session:
        </p>
        <ul>
          <li><strong>Find a Quiet Space:</strong> Choose a peaceful environment where you won't be disturbed.</li>
          <li><strong>Sit Comfortably:</strong> Sit in a comfortable position with your back straight and hands resting on your lap.</li>
          <li><strong>Close Your Eyes:</strong> Gently close your eyes and take a few deep breaths to settle in.</li>
          <li><strong>Focus on Your Breathing:</strong> Pay attention to your breath, inhaling deeply through your nose and exhaling slowly through your mouth.</li>
          <li><strong>Use a Guided Meditation:</strong> Play a guided meditation audio or video that suits your needs (stress reduction, relaxation, or mental clarity).</li>
          <li><strong>Follow the Instructions:</strong> Listen to the guide's voice and follow the instructions, focusing on your breath and letting go of any tension.</li>
          <li><strong>End Gently:</strong> When the session ends, slowly open your eyes and take a moment to reorient yourself before continuing with your day.</li>
        </ul>
        <p>
          By incorporating these guided meditations into your routine, you can significantly reduce stress levels, enhance your ability to relax, and improve your mental clarity, contributing to a healthier and more balanced life.
        </p>
      </div>

      <div className="typo">
        <div className="icon-wrapper">
          <FaBrain />
        </div>
        <h2>Mental Health Tips</h2>
        <Illustration src="images/mental health.jpg" alt="Mental Health Tips" />
        <p>
          Practical tips to manage anxiety, improve sleep, and maintain overall mental health:
        </p>
        <ul>
          <li><strong>Managing Anxiety:</strong></li>
          <ul>
            <li><strong>Progressive Muscle Relaxation:</strong> Tense and then relax each muscle group in your body, starting from your toes and working up to your head. This technique helps release physical tension and reduces anxiety.</li>
            <li><strong>Visualization:</strong> Close your eyes and imagine a peaceful place, focusing on the sights, sounds, and smells to create a calming experience. Visualization can help distract your mind from anxious thoughts and promote relaxation.</li>
            <li><strong>Grounding Exercises:</strong> Focus on the present moment by identifying five things you can see, four things you can touch, three things you can hear, two things you can smell, and one thing you can taste. Grounding exercises can reduce anxiety by bringing your attention to the here and now.</li>
          </ul>
          <p>
            Using these anxiety management techniques can help you stay calm and centered, reducing the impact of anxiety on your daily life and enhancing your overall mental well-being.
          </p>
          <li><strong>Improving Sleep:</strong></li>
          <ul>
            <li><strong>Bedtime Routine:</strong> Establish a consistent routine before bed, such as reading a book, taking a warm bath, or practicing gentle yoga. A bedtime routine signals your body that it's time to wind down, improving sleep quality.</li>
            <li><strong>Sleep Environment:</strong> Keep your bedroom dark, quiet, and cool. Use blackout curtains and white noise machines if needed. A conducive sleep environment can significantly improve your ability to fall and stay asleep.</li>
            <li><strong>Avoid Stimulants:</strong> Avoid caffeine and electronics at least an hour before bedtime to help your mind unwind. Reducing stimulant intake can help you relax and prepare for restful sleep.</li>
          </ul>
          <p>
            Improving your sleep quality through these tips can lead to better overall health, increased energy levels, and improved mood and cognitive function.
          </p>
          <li><strong>Maintaining Good Mental Health:</strong></li>
          <ul>
            <li><strong>Daily Self-Care:</strong> Engage in activities that bring you joy and relaxation, such as reading, gardening, or spending time with loved ones.</li>
            <li><strong>Balancing Work and Life:</strong> Set boundaries between work and personal time to avoid burnout and maintain a healthy work-life balance.</li>
            <li><strong>Building Resilience:</strong> Develop coping strategies for dealing with life's challenges, such as practicing gratitude, seeking support from friends and family, and maintaining a positive outlook.</li>
          </ul>
          <p>
            These practices can help you maintain good mental health, enhance your resilience, and lead a more fulfilling life.
          </p>
        </ul>
      </div>

      {accessLevel !== 'basic' && (
        <div className="typo">
          <div className="icon-wrapper">
            <FaSmile />
          </div>
          <h2>Positive Affirmations</h2>
          <Illustration src="images/positive affirmations.jpg" alt="Positive Affirmations" />
          <p>
            Boost your mood and build a positive mindset with our collection of affirmations. These daily reminders can help you stay motivated and maintain a healthy perspective on life.
          </p>
          <ul>
            <li><strong>Daily Affirmations:</strong> Start your day with positive statements that affirm your abilities and potential. For example, "I am capable and strong," "I am worthy of love and respect," "I can achieve my goals."</li>
            <li><strong>Stress Relief:</strong> Use affirmations to remind yourself of your strengths and capacity to handle challenges. For example, "I am calm and in control," "I can handle whatever comes my way."</li>
            <li><strong>Mental Clarity:</strong> Focus on affirmations that encourage a clear and calm mind, helping you tackle tasks effectively. For example, "I am focused and present," "My mind is clear and sharp."</li>
            <li><strong>Building Self-Esteem:</strong> Affirmations that help you recognize your worth and build confidence in your abilities. For example, "I believe in myself," "I am confident and capable."</li>
            <li><strong>Overcoming Negative Thoughts:</strong> Techniques to replace negative self-talk with positive affirmations. For example, "I let go of negative thoughts," "I choose positivity and joy."</li>
          </ul>
          <p>
            Incorporating positive affirmations into your daily routine can significantly boost your self-esteem, improve your outlook on life, and help you manage stress more effectively.
          </p>
        </div>
      )}
      
      {accessLevel === 'family' && (
        <div className="typo">
          <div className="icon-wrapper">
            <FaHeart />
          </div>
          <h2>Holistic Wellness</h2>
          <Illustration src="images/meditation.jpg" alt="Holistic Wellness" />
          <p>
            Explore our holistic approach to wellness, integrating physical, mental, and emotional health to help you achieve overall well-being.
          </p>
          <ul>
            <li><strong>Physical Health:</strong> Tips and resources for maintaining physical fitness, including exercise routines and healthy eating habits. Regular physical activity can improve your mood, reduce stress, and boost overall health.</li>
            <li><strong>Emotional Health:</strong> Techniques for managing emotions, building healthy relationships, and fostering emotional resilience. Being emotionally healthy can help you cope with life's challenges and maintain positive relationships.</li>
            <li><strong>Spiritual Health:</strong> Practices to nurture your spirit, such as meditation, yoga, and connecting with nature. Focusing on spiritual health can provide a sense of purpose and inner peace.</li>
            <li><strong>Social Health:</strong> Strategies for building and maintaining supportive social networks and community connections. Strong social connections can provide support, reduce feelings of loneliness, and improve your overall well-being.</li>
          </ul>
          <p>
            Adopting a holistic approach to wellness can help you achieve a balanced and fulfilling life, where physical, mental, and emotional health are harmoniously integrated.
          </p>
        </div>
      )}

    </MentalHealthResourcesWrapper>
  );
}

export default MentalHealthResources;

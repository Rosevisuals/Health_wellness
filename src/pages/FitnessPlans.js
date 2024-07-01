import React, { useState } from 'react';
import './FitnessPlans.css';

function FitnessPlans() {
  const [progress, setProgress] = useState([]);
  const [date, setDate] = useState('');
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddProgress = (e) => {
    e.preventDefault();
    const newProgress = { date, activity, duration, calories };
    setProgress([...progress, newProgress]);
    setDate('');
    setActivity('');
    setDuration('');
    setCalories('');
  };

  return (
    <div className="FitnessPlansWrapper container">
      <h1>Fitness Plans</h1>
      <p className='ply'>Welcome to your personalized fitness plans. These plans are designed to help you achieve optimal health and wellness through a comprehensive approach.</p>

      {/* Mental Health and Wellness Section */}
      <section className="MentalWellness">
        <h2>Mental Health and Wellness</h2>
        
        <div className="wellness-item">
          <h4>Daily Mindfulness and Meditation</h4>
          <ul>
            <li><strong>Morning Meditation:</strong> Start your day with a clear and focused mind. Spend 10-15 minutes in a quiet place, focusing on your breath and setting positive intentions for the day. This practice can help reduce stress and improve concentration throughout the day.</li>
            <li><strong>Evening Relaxation:</strong> Unwind after a long day with a calming evening meditation. Spend 10-15 minutes focusing on deep, slow breaths and letting go of any tension or stress. This practice can help improve sleep quality and promote relaxation.</li>
            <li><strong>Mindful Moments:</strong> Incorporate short, mindful breaks throughout your day. Spend 1-2 minutes focusing on your breath, observing your surroundings, or practicing gratitude. These moments can help improve mindfulness and reduce stress.</li>
          </ul>
        </div>
        
        <div className="wellness-item">
          <h3>Stress Management Techniques</h3>
          <ul>
            <li><strong>Progressive Muscle Relaxation:</strong> Tense and then relax each muscle group in your body, starting from your toes and working up to your head. This technique helps release physical tension and reduces anxiety.</li>
            <li><strong>Visualization Exercises:</strong> Close your eyes and imagine a peaceful place, focusing on the sights, sounds, and smells to create a calming experience. Visualization can help distract your mind from anxious thoughts and promote relaxation.</li>
            <li><strong>Breathing Exercises:</strong> Practice deep breathing techniques, such as the 4-7-8 method, to help calm your nervous system and reduce stress. Breathe in for 4 seconds, hold for 7 seconds, and exhale for 8 seconds.</li>
          </ul>
        </div>

        <div className="wellness-item">
          <h3>Emotional Well-being</h3>
          <ul>
            <li><strong>Positive Affirmations:</strong> Use positive affirmations to build self-esteem and cultivate a positive mindset. Repeat phrases such as "I am capable," "I am worthy," and "I am resilient" throughout the day.</li>
            <li><strong>Journaling Prompts:</strong> Engage in reflective journaling to explore your thoughts and emotions. Use prompts such as "What am I grateful for today?" and "What are my goals for the week?" to guide your writing.</li>
          </ul>
        </div>
      </section>

      {/* Physical Fitness Section */}
      <section className="PhysicalFitness">
        <h2>Physical Fitness</h2>

        <div className="fitness-item">
          <h4>Personalized Workout Plans</h4>
          <ul>
            <li><strong>Beginner Level:</strong> Simple and effective exercises to build a foundation of fitness. Includes bodyweight exercises, light cardio, and flexibility training.</li>
            <li><strong>Intermediate Level:</strong> More challenging workouts to build strength and endurance. Includes weight training, moderate cardio, and advanced flexibility exercises.</li>
            <li><strong>Advanced Level:</strong> High-intensity workouts for experienced individuals. Includes heavy weightlifting, intense cardio, and complex flexibility routines.</li>
          </ul>
        </div>

        <div className="fitness-item">
          <h3>Cardio Workouts</h3>
          <ul>
            <li><strong>HIIT:</strong> High-Intensity Interval Training sessions that alternate between intense bursts of activity and short periods of rest. Great for burning fat and improving cardiovascular fitness.</li>
            <li><strong>Running Plans:</strong> Structured running programs designed to improve endurance and speed. Includes plans for beginners, intermediate runners, and advanced athletes.</li>
          </ul>
        </div>

        <div className="fitness-item">
          <h3>Strength Training</h3>
          <ul>
            <li><strong>Upper Body:</strong> Exercises targeting the chest, back, shoulders, and arms. Includes push-ups, pull-ups, bench presses, and shoulder presses.</li>
            <li><strong>Lower Body:</strong> Exercises targeting the legs and glutes. Includes squats, lunges, deadlifts, and leg presses.</li>
            <li><strong>Full Body:</strong> Comprehensive workouts that engage all major muscle groups. Includes circuit training, compound exercises, and functional movements.</li>
          </ul>
        </div>

        <div className="fitness-item">
          <h3>Flexibility and Mobility</h3>
          <ul>
            <li><strong>Yoga for Flexibility:</strong> Yoga routines designed to improve flexibility and reduce muscle tension. Includes poses such as downward dog, pigeon pose, and forward fold.</li>
            <li><strong>Pilates for Mobility:</strong> Pilates exercises that enhance mobility and strengthen the core. Includes movements such as leg circles, spine stretch, and the hundred.</li>
            <li><strong>Stretching Routines:</strong> Dynamic and static stretching routines to improve range of motion and prevent injuries. Includes stretches for all major muscle groups.</li>
          </ul>
        </div>
      </section>

      {/* Nutrition Advice Section */}
      <section className="NutritionAdvice">
        <h2>Nutrition Advice</h2>
        
        <div className="nutrition-item">
          <h4>Healthy Eating Habits</h4>
          <ul>
            <li><strong>Meal Planning:</strong> Tips and strategies for planning balanced meals throughout the week. Includes grocery shopping tips, meal prep ideas, and sample meal plans.</li>
            <li><strong>Balanced Diet:</strong> Guidelines for creating a balanced diet that includes all essential nutrients. Emphasizes the importance of protein, carbohydrates, fats, vitamins, and minerals.</li>
            <li><strong>Healthy Snacks:</strong> Ideas for nutritious snacks that can help maintain energy levels throughout the day. Includes fruits, nuts, yogurt, and vegetable sticks.</li>
          </ul>
        </div>

        <div className="nutrition-item">
          <h3>Recipes and Cooking Tips</h3>
          <ul>
            <li><strong>Quick and Healthy Meals:</strong> Easy-to-prepare recipes that are both nutritious and delicious. Includes breakfast, lunch, dinner, and snack ideas.</li>
            <li><strong>Vegetarian Recipes:</strong> A variety of vegetarian recipes that provide essential nutrients and are easy to make. Includes salads, stir-fries, and soups.</li>
            <li><strong>Gluten-Free Cooking:</strong> Tips and recipes for preparing gluten-free meals. Includes baking tips, alternative flours, and gluten-free meal ideas.</li>
          </ul>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="InteractiveFeatures">
        <h2>Interactive Features</h2>

        <div className="interactive-item">
          <h4>Progress Tracking</h4>
       
          <ul>
            <li><strong>Daily Logs:</strong> Record your daily workouts, meals, and activities. Track your calories burned, distance covered, and time spent on different exercises.</li>
            <li><strong>Progress Charts:</strong> Visualize your progress with charts and graphs that show your improvements over time. Track your weight, body measurements, and fitness levels.</li>
            <li><strong>Milestone Celebrations:</strong> Celebrate your achievements with milestone badges and rewards. Stay motivated by reaching new fitness levels and goals.</li>
          </ul>
        </div>

        <div className="interactive-item">
          <h3>Goal Setting and Tracking</h3>
          <p>Set and track your fitness goals with ease. Our platform helps you define realistic goals and provides the tools to achieve them.</p>
          <ul>
            <li><strong>SMART Goals:</strong> Set Specific, Measurable, Achievable, Relevant, and Time-bound (SMART) goals. Break down your long-term objectives into manageable short-term goals.</li>
            <li><strong>Personalized Plans:</strong> Create personalized fitness plans that align with your goals. Get recommendations for workouts, nutrition, and wellness activities based on your objectives.</li>
            <li><strong>Goal Reminders:</strong> Receive reminders and notifications to stay on track with your goals. Get tips and encouragement to maintain consistency and stay motivated.</li>
            <li><strong>Goal Adjustment:</strong> Adjust your goals as you progress. Update your targets based on your achievements and new challenges to keep your fitness journey dynamic and engaging.</li>
          </ul>
        </div>
      </section>

      {/* Progress Tracking Input Section */}
      <section className="ProgressTracking">
        <h2>Track Your Progress</h2>
        <form onSubmit={handleAddProgress}>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="activity">Activity:</label>
            <input
              type="text"
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="e.g., Running"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (minutes):</label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g., 30"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="calories">Calories Burned:</label>
            <input
              type="number"
              id="calories"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="e.g., 250"
              required
            />
          </div>
          <button type="submit">Add Progress</button>
        </form>
        
        <h3>Your Progress</h3>
        {progress.length === 0 ? (
          <p>No progress logged yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Duration (minutes)</th>
                <th>Calories Burned</th>
              </tr>
            </thead>
            <tbody>
              {progress.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.activity}</td>
                  <td>{entry.duration}</td>
                  <td>{entry.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Expert Tips and Testimonials */}
      <section className="ExpertTips">
        <h2>Expert Tips and Testimonials</h2>

        <div className="expert-item">
          <h3>Expert Tips</h3>
          <p>Get advice from certified fitness trainers, nutritionists, and mental health professionals. Read articles, watch videos, and stay informed.</p>
        </div>

        <div className="expert-item">
          <h3>Testimonials</h3>
          <p>Read success stories from our users. Learn how our fitness plans have helped others achieve their health and wellness goals.</p>
        </div>
      </section>
     
    </div>
  );
}

export default FitnessPlans;

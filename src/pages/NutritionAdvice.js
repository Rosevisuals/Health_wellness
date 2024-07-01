import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import './NutritionAdvice.css';
import MonthlyProgressReports from './MonthlyProgressReports';
import ChatSupport from './ChatSupport';

const NutritionAdviceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    margin: 20px 0;
  }
`;

function NutritionAdvice() {
  const location = useLocation();
  const { accessLevel } = location.state || { accessLevel: 'basic' };

  return (
    <NutritionAdviceWrapper>
      <h1>Nutrition Advice</h1>

      <div className="section">
        <h2>Balanced Diet Plans</h2>
        <p>
          Our balanced diet plans provide all the essential nutrients your body needs to function optimally. Here are some examples:
        </p>
        <ul>
          <li><strong>Breakfast:</strong> Oatmeal topped with fresh berries and a dollop of Greek yogurt.</li>
          <li><strong>Lunch:</strong> Grilled chicken salad with mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette.</li>
          <li><strong>Snack:</strong> A handful of nuts and an apple.</li>
          <li><strong>Dinner:</strong> Baked salmon with quinoa and steamed broccoli.</li>
        </ul>
        <p>
          These meals are designed to provide a balance of protein, carbohydrates, and healthy fats to support your overall health and energy levels.
        </p>
      </div>

      {accessLevel !== 'basic' && (
        <>
          <div className="section">
            <h2>Foods for Emotional Well-being</h2>
            <p>
              Certain foods can help improve your mood and reduce anxiety. Here are some recommendations:
            </p>
            <ul>
              <li><strong>Fatty Fish:</strong> Rich in omega-3 fatty acids, which are known to support brain health and reduce depression.</li>
              <li><strong>Dark Chocolate:</strong> Contains antioxidants and can boost endorphin levels, leading to improved mood.</li>
              <li><strong>Leafy Greens:</strong> High in folate, which is linked to a reduction in depression and improved mental health.</li>
              <li><strong>Yogurt:</strong> Contains probiotics that promote gut health, which is connected to emotional well-being.</li>
              <li><strong>Berries:</strong> Packed with antioxidants that can help reduce inflammation and improve mood.</li>
            </ul>
            <p>
              Incorporating these foods into your diet can help support your emotional health and overall well-being.
            </p>
          </div>

          <div className="section">
            <h2>Mindful Eating</h2>
            <p>
              Mindful eating involves paying full attention to the experience of eating and drinking. Here’s how to practice it:
            </p>
            <ul>
              <li><strong>Eat Slowly:</strong> Take your time to chew your food thoroughly and savor each bite.</li>
              <li><strong>Remove Distractions:</strong> Avoid eating in front of the TV or computer. Focus on your meal.</li>
              <li><strong>Listen to Your Body:</strong> Pay attention to hunger and fullness cues to avoid overeating.</li>
              <li><strong>Appreciate Your Food:</strong> Take a moment to appreciate the flavors, textures, and aromas of your meal.</li>
            </ul>
            <p>
              Practicing mindful eating can help you develop a healthier relationship with food and improve your digestion and satisfaction with meals.
            </p>
          </div>
        </>
      )}

      {accessLevel === 'premium' && (
        <>
          <div className="section">
            <h2>Personalized Meal Plans</h2>
            <p>
              Our platform provides personalized meal plans tailored to your dietary preferences, including:
            </p>
            <ul>
              <li><strong>Vegan:</strong> A balanced vegan meal plan with a variety of plant-based proteins, fruits, vegetables, and grains. Examples include lentil soup, tofu stir-fry, and quinoa salad.</li>
              <li><strong>Vegetarian:</strong> Includes eggs and dairy products, focusing on a variety of vegetables, fruits, and whole grains. Examples include vegetable omelets, Greek yogurt with fruits, and vegetable lasagna.</li>
              <li><strong>Gluten-Free:</strong> Meal plans that avoid gluten-containing foods, suitable for those with celiac disease or gluten sensitivity. Examples include rice noodles, gluten-free bread, and polenta dishes.</li>
              <li><strong>Low-Carb:</strong> Focuses on reducing carbohydrate intake while increasing protein and healthy fats. Examples include grilled chicken with vegetables, avocado salad, and egg-based breakfasts.</li>
            </ul>
            <p>
              Our personalized meal plans ensure that you receive the necessary nutrients while accommodating your dietary preferences.
            </p>
          </div>

          <div className="section">
            <h2>Nutritional Guidance for Health Conditions</h2>
            <p>
              We provide nutritional guidance to help manage various health conditions, such as:
            </p>
            <ul>
              <li><strong>Diabetes:</strong> Low glycemic index foods, balanced meals, and portion control to manage blood sugar levels. Examples of low glycemic foods include:
                <ul>
                  <li>Oatmeal</li>
                  <li>Legumes (lentils, chickpeas)</li>
                  <li>Non-starchy vegetables (broccoli, spinach, peppers)</li>
                  <li>Fruits (apples, berries, pears)</li>
                  <li>Whole grains (quinoa, barley)</li>
                </ul>
              </li>
              <li><strong>Hypertension:</strong> Low-sodium diet rich in fruits, vegetables, and whole grains to help lower blood pressure. Examples of low-sodium foods include:
                <ul>
                  <li>Fresh fruits and vegetables</li>
                  <li>Whole grains (brown rice, oats)</li>
                  <li>Lean meats (chicken, turkey)</li>
                  <li>Unsalted nuts and seeds</li>
                  <li>Herbs and spices (garlic, basil, rosemary)</li>
                </ul>
              </li>
              <li><strong>Digestive Disorders:</strong> High-fiber foods, probiotics, and hydration to support digestive health. Examples include:
                <ul>
                  <li>Whole grains (brown rice, oats)</li>
                  <li>Fruits (berries, apples, pears)</li>
                  <li>Vegetables (broccoli, carrots, peas)</li>
                  <li>Yogurt with probiotics</li>
                  <li>Legumes (beans, lentils)</li>
                </ul>
              </li>
              <li><strong>Heart Health:</strong> Foods rich in omega-3 fatty acids, antioxidants, and fiber to support cardiovascular health. Examples include:
                <ul>
                  <li>Fatty fish (salmon, mackerel, sardines)</li>
                  <li>Flaxseeds and chia seeds</li>
                  <li>Walnuts</li>
                  <li>Leafy green vegetables (spinach, kale)</li>
                  <li>Berries (blueberries, strawberries)</li>
                </ul>
              </li>
            </ul>
            <p>
              Our nutritional guidance is designed to support your health condition and improve your overall well-being.
            </p>
          </div>

          <div className="section">
            <h2>Eco-Conscious Wellness</h2>
            <p>
              Emphasizing eco-conscious wellness, we offer advice on how to make sustainable food choices that benefit both your health and the environment. Here’s how you can contribute to a healthier planet:
            </p>
            <ul>
              <li><strong>Plant-Based Diets:</strong> Incorporating more plant-based meals into your diet to reduce your carbon footprint. Examples include lentil stew, chickpea salad, and vegetable stir-fry.</li>
              <li><strong>Local and Seasonal Foods:</strong> Choosing locally-sourced and seasonal produce to support local farmers and reduce food miles. Examples include eating strawberries in summer and root vegetables in winter.</li>
              <li><strong>Reducing Food Waste:</strong> Tips on meal planning and portion control to minimize food waste. For instance, creating a weekly meal plan and using leftovers creatively in new dishes.</li>
            </ul>
            <p>
              By adopting eco-conscious practices, you can enjoy nutritious meals while contributing to the sustainability of our planet.
            </p>
          </div>

          <div className="section">
            <h2>Healthy Recipes</h2>
            <p>
              Explore our collection of healthy recipes that are easy to prepare and delicious. Each recipe is designed to provide balanced nutrition and cater to various dietary needs. Here are some examples:
            </p>
            <ul>
              <li><strong>Quinoa Salad:</strong> A protein-packed salad with quinoa, fresh vegetables, and a tangy lemon vinaigrette.</li>
              <li><strong>Chickpea Curry:</strong> A flavorful and hearty curry made with chickpeas, tomatoes, and aromatic spices.</li>
              <li><strong>Green Smoothie:</strong> A refreshing smoothie with spinach, avocado, and a hint of lime for a nutrient boost.</li>
              <li><strong>Baked Sweet Potatoes:</strong> Sweet potatoes baked with a drizzle of olive oil and a sprinkle of cinnamon.</li>
              <li><strong>Avocado Toast:</strong> Whole grain toast topped with mashed avocado, cherry tomatoes, and a sprinkle of chia seeds.</li>
              <li><strong>Stuffed Bell Peppers:</strong> Bell peppers stuffed with a mixture of brown rice, black beans, corn, and spices.</li>
            </ul>
            <p>
              Try these recipes and more to add variety and nutrition to your meals.
            </p>
          </div>

          <MonthlyProgressReports />

          <ChatSupport />
        </>
      )}

      <div className="section">
        <h2>Tip for Reducing a Bloated Stomach</h2>
        <p>
          Bloating can be uncomfortable, but there are several ways to reduce it:
        </p>
        <ul>
          <li><strong>Stay Hydrated:</strong> Drink plenty of water throughout the day to help your digestive system function properly.</li>
          <li><strong>Avoid Carbonated Drinks:</strong> Carbonated beverages can introduce excess gas into your digestive system.</li>
          <li><strong>Eat Slowly:</strong> Eating too quickly can cause you to swallow air, leading to bloating.</li>
          <li><strong>Include Probiotics:</strong> Foods like yogurt, kefir, and sauerkraut can help maintain a healthy balance of gut bacteria.</li>
          <li><strong>Avoid Artificial Sweeteners:</strong> Sugar alcohols found in some sugar-free products can cause bloating in some people.</li>
        </ul>
        <p>
          By following these tips, you can reduce bloating and improve your digestive comfort.
        </p>
      </div>
    </NutritionAdviceWrapper>
  );
}

export default NutritionAdvice;

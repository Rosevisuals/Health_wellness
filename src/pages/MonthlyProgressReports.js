import React from 'react';
import styled from 'styled-components';

const ReportsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h2 {
    margin-bottom: 20px;
    color: #1a73e8;
  }

  .report {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: left;
  }

  .report h3 {
    margin-bottom: 10px;
    color: #304ffe;
  }

  .report p {
    font-size: 1.1em;
    color: #666;
  }
`;

const MonthlyProgressReports = () => {
  return (
    <ReportsWrapper>
      <h2>Monthly Progress Reports</h2>
      <div className="report">
        <h3>Fitness Progress</h3>
        <p>Your fitness progress for the month includes improved endurance and muscle strength. You have completed 20 workout sessions this month.</p>
      </div>
      <div className="report">
        <h3>Nutrition Analysis</h3>
        <p>Your nutritional intake has been balanced, with a good mix of proteins, carbs, and healthy fats. Consider adding more leafy greens to your diet.</p>
      </div>
      <div className="report">
        <h3>Mental Health Insights</h3>
        <p>You have consistently practiced meditation and mindfulness. Your stress levels have decreased by 15% compared to last month.</p>
      </div>
      <div className="report">
        <h3>Personalized Recommendations</h3>
        <p>Keep up the good work! For next month, focus on incorporating more cardio exercises and maintaining a balanced diet.</p>
      </div>
    </ReportsWrapper>
  );
};

export default MonthlyProgressReports;

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import "./App.css";

function App() {
  // Team members (props)
  const members = ["Hrushikesh", "Aditi", "Rohan", "Sneha"];

  // Shared state: feedback counts for all members
  const [feedbackCounts, setFeedbackCounts] = useState(
    members.map(() => 0)
  );

  // Function to handle individual feedback increments
  const handleFeedback = (index) => {
    const updatedCounts = [...feedbackCounts];
    updatedCounts[index] += 1;
    setFeedbackCounts(updatedCounts);
  };

  // Function to reset all counts
  const resetAll = () => {
    setFeedbackCounts(members.map(() => 0));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌟 Team Feedback Board 🌟</h1>
      <div className="card-container">
        {members.map((name, index) => (
          <MemberCard
            key={index}
            name={name}
            count={feedbackCounts[index]}
            onFeedback={() => handleFeedback(index)}
          />
        ))}
      </div>

      <button onClick={resetAll} className="reset-btn">
        🔄 Reset All Feedback
      </button>
    </div>
  );
}

export default App;

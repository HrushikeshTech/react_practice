import React from "react";
import "./App.css";

function MemberCard({ name, count, onFeedback }) {
  return (
    <div className="member-card">
      <h2 className="member-name">{name}</h2>
      <p className="feedback-count">Feedback Count: {count}</p>
      <button onClick={onFeedback} className="feedback-btn">
        👍 Give Feedback
      </button>
    </div>
  );
}

export default MemberCard;

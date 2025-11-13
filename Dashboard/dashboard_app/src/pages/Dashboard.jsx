import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/dashboard/profile" style={{ margin: "0 10px" }}>Profile</Link>
        <Link to="/dashboard/settings" style={{ margin: "0 10px" }}>Settings</Link>
        <button onClick={() => navigate(-1)} style={{ marginLeft: "20px" }}>
          Go Back
        </button>
      </nav>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Login Page</h1>
      <p>Click below to go to Dashboard</p>
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Login
      </button>
    </div>
  );
}

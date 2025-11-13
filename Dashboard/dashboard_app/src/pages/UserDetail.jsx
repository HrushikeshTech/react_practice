import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

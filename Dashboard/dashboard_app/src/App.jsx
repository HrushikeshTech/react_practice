import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserPage from "./pages/UserDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

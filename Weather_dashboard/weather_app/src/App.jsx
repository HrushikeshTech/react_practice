import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("London"); // default city
  const [query, setQuery] = useState("");

  const apiKey = "5fde3debe1122bd7ae647712f9f66f4b"; // 🔑 replace with your actual key

  const fetchWeather = async (cityName) => {
    if (!cityName) return;
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) throw new Error("City not found!");
      const data = await response.json();
      setWeather(data);
      setCity(data.name);
      document.title = `🌤 ${data.main.temp}°C in ${data.name}`;
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Load default city weather
  useEffect(() => {
    fetchWeather(city);
  }, []);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(query);
    setQuery("");
  };

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1 className="title">🌦 Weather Dashboard</h1>

        {/* 🔍 Search Section */}
        <form onSubmit={handleSearch} className="search-box">
          <input
            type="text"
            placeholder="Enter city name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>

        {/* 🌀 Loading Spinner */}
        {loading ? (
          <div className="spinner"></div>
        ) : error ? (
          <p className="error">{error}</p>
        ) : weather ? (
          <>
            <h2 className="city-name">{city}</h2>
            <div className="weather-info">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
              <div>
                <p className="temperature">{Math.round(weather.main.temp)}°C</p>
                <p className="description">
                  {weather.weather[0].description}
                </p>
              </div>
            </div>

            <div className="extra-info">
              <div className="info-box">💧 Humidity: {weather.main.humidity}%</div>
              <div className="info-box">🌬 Wind: {weather.wind.speed} m/s</div>
            </div>

            <button onClick={() => fetchWeather(city)} className="refresh-btn">
              🔄 Refresh
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;

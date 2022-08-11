import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LocationSearch from "./LocationSearch.js";
import CurrentWeather from "./CurrentWeather.js";
import Footer from "./Footer.js";

function App() {
  return (
    <Container
      style={{
        backgroundColor: "black",
        padding: 20,
        width: 600,
      }}
    >
      <Card
        id="location-card"
        style={{
          backgroundColor: "grey",
          padding: 2,
        }}
      >
        <div className="forecast-heading" style={{ display: "block" }}>
          <h1>
            <strong>The Umbrella Forecast</strong>
          </h1>
          <h3>A 5-Day Weather Report</h3>
        </div>
      </Card>
      <LocationSearch />

      <Card
        style={{
          backgroundColor: "gray",
          padding: 2,
        }}
      >
        <div
          className="current-weather"
          style={{ display: "block", padding: 20 }}
        >
          <h2 id="currently">Currently</h2>
          <CurrentWeather />
        </div>
      </Card>
      <Footer />
    </Container>
  );
}

export default App;

import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LocationSearch from "./LocationSearch.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
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
            backgroundColor: "white",
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
        <Footer />
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Weather from "./Weather";
import Footer from "./Footer.js";
import Card from "react-bootstrap/Card";

function App() {
  return (
    <div
      className="img"
      id="img"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?cs=srgb&dl=pexels-pew-nguyen-243971.jpg&fm=jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
        maxwidth: 600,
      }}
    >
      <div
        className="mask"
        style={{
          backgroundColor: "rgba(80, 68, 45, .08)",
          padding: 40,
          height: "150vh",
          maxwidth: 600,
        }}
      >
        <div className="App">
          <Container
            className="rounded"
            style={{
              backgroundColor: "rgba(62,49,34,.4)",
              padding: 8,
              width: 558,
            }}
          >
            <Card
              id="location-card"
              style={{
                backgroundColor: "white",
                margin: 2,
              }}
            >
              <div className="col-12 mt-4">
                <h1>
                  <strong>The Umbrella Forecast</strong>
                </h1>
                <h3 className="text-black">A 5-Day Weather Report</h3>
              </div>
              <Weather />
              <Footer />
            </Card>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

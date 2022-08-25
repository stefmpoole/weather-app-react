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
          "url('https://images.pexels.com/photos/2499951/pexels-photo-2499951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        maxwidth: 600,
      }}
    >
      <div
        className="mask"
        style={{
          backgroundColor: "rgba(80, 68, 45, .5)",
          padding: 40,
          height: "120vh",
          maxwidth: 600,
        }}
      >
        <div className="App">
          <Container
            className="rounded"
            style={{
              backgroundColor: "rgba(5, 16, 31, 0.5)",
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

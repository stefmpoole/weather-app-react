import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Weather from "./Weather";
import Footer from "./Footer.js";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      <Container
        className="rounded"
        style={{
          backgroundColor: "black",
          paddingTop: 10,
          width: 600,
        }}
      >
        <Card
          id="location-card"
          style={{
            backgroundColor: "white",
            padding: 3,
          }}
        >
          <Row>
            <div className="col-12">
              <div
                className="img-fluid rounded"
                id="img"
                style={{
                  backgroundImage:
                    "url('https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "20vh",
                  margin: 4,
                }}
              />
            </div>
          </Row>
          <Row>
            <div className="col-12">
              <h1>
                <strong>The Umbrella Forecast</strong>
              </h1>
              <h3>A 5-Day Weather Report</h3>
            </div>
          </Row>
        </Card>
        <Weather />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

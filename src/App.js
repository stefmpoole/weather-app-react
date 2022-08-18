import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Weather from "./Weather";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <Container
        style={{
          backgroundColor: "black",
          paddingTop: 20,
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
                  margin: 3,
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
        <Weather defaultCity="Paris" />
        <Footer />
      </Container>
    </div>
  );
}

export default App;

import React from "react";
import "./WeatherForecast.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/esm/Container";

export default function WeatherForecast() {
  return (
    <Container>
      <Row>
        <CardGroup>
          <Card className="rounded" border="warning" style={{ margin: 2 }}>
            <h5 className="card-title text-center">Mon</h5>
            <img
              className="card-img-top"
              src="images/partly cloudy.png"
              alt="weather-png"
            />
            <div className="card-body">
              <p className="card-text text-center">
                <strong>0°|0°</strong>
              </p>
            </div>
          </Card>
          <Card className="rounded" border="warning" style={{ margin: 2 }}>
            <h5 className="card-title text-center">Tue</h5>
            <img
              className="card-img-top"
              src="images/partly cloudy.png"
              alt="weather-png"
            />
            <div className="card-body">
              <p className="card-text text-center">
                <strong>0°|0°</strong>
              </p>
            </div>
          </Card>
          <Card className="rounded" border="warning" style={{ margin: 2 }}>
            <h5 className="card-title text-center">Wed</h5>
            <img
              className="card-img-top"
              src="images/partly cloudy.png"
              alt="weather-png"
            />
            <div className="card-body">
              <p className="card-text text-center">
                <strong>0°|0°</strong>
              </p>
            </div>
          </Card>
          <Card className="rounded" border="warning" style={{ margin: 2 }}>
            <h5 className="card-title text-center">Thur</h5>
            <img
              className="card-img-top"
              src="images/partly cloudy.png"
              alt="weather-png"
            />
            <div className="card-body">
              <p className="card-text text-center">
                <strong>0°|0°</strong>
              </p>
            </div>
          </Card>
          <Card className="rounded" border="warning" style={{ margin: 2 }}>
            <h5 className="card-title text-center">Fri</h5>
            <img
              className="card-img-top"
              src="images/partly cloudy.png"
              alt="weather-png"
            />
            <div className="card-body">
              <p className="card-text text-center">
                <strong>0°|0°</strong>
              </p>
            </div>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CurrentTemp from "./CurrentTemp";
import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <Container
      style={{
        display: "-webkit-inline-flex",
        WebkitJustifyContent: "center",
      }}
    >
      <div className="current-weather justify-center mt-2 pt-0">
        <div id="current-city">{props.data.city}</div>
        <div className="mb-1" id="current-time">
          <FormattedDate date={props.data.date} />
        </div>
        <Card
          style={{
            backgroundColor: "rgba(99,119,115,.8)",
            width: 488,
          }}
        >
          <div className="CurrentWeather">
            <Row className="mt-0">
              <Col className="col-6">
                <div id="current-png">
                  <img src={props.data.icon} alt={props.data.description} />
                </div>
              </Col>
              <Col className="col-6 text-left mr-2">
                <div className="card-body pb-0">
                  <CurrentTemp farhenheit={props.data.temperature} />
                </div>
                <div className="col">
                  <div className="card-body pt-0 mt-0 text-right">
                    <div className="card-text">
                      <small>
                        <div id="currently">
                          <p>Currently: {props.data.description}</p>
                        </div>
                      </small>
                    </div>
                    <div className="card-text" id="humidity">
                      <small className="text-black">
                        Humidity: {props.data.humidity}%
                      </small>
                    </div>
                    <div className="card-text" id="wind">
                      <small className="text-black">
                        Wind: {props.data.wind} mph
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    </Container>
  );
}

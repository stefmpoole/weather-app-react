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
      className="mt-2"
      style={{
        padding: 0,
        display: "inline-flex",
      }}
    >
      <Card
        className="pt-0 pb-0 ml-2 mr-2"
        style={{
          background: "black",
          width: 600,
        }}
      >
        <div className="current-weather mt-2 pt-0 text-white">
          <div id="current-city">{props.data.city}</div>
          <div id="current-time">
            <FormattedDate date={props.data.date} />
          </div>
          <hr style={{ margin: 0 }} />
          <div className="CurrentWeather">
            <Row className="mt-0">
              <Col className="col-6 ml-3">
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
                      <small className="text-white">
                        <div id="currently">
                          <p>Currently: {props.data.description}</p>
                        </div>
                      </small>
                    </div>
                    <div className="card-text" id="humidity">
                      <small className="text-white">
                        Humidity: {props.data.humidity}%
                      </small>
                    </div>
                    <div className="card-text" id="wind">
                      <small className="text-white">
                        Wind: {props.data.wind} mph
                      </small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Card>
    </Container>
  );
}

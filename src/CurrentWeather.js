import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <p className="h3 text-center" id="current-time"></p>
      <hr />
      <Row className="row">
        <Col className="col-4">
          <div className="weather-icon ml-4" id="current-png"></div>
        </Col>
        <Col className="col-8 text-right mt-0 pt-0">
          <div className="card-body pb-0">
            <div className="current-temp">
              <span className="temperature mb-1 ml-2" id="current-temp"></span>
              <span className="degrees">
                <button
                  type="button"
                  className="btn ml-0 mr-0 pl-0 pr-0"
                  id="far"
                >
                  °F
                </button>
                <span className="text-center" id="degree-separation">
                  {" "}
                  |{" "}
                </span>
                <button
                  variant="secondary"
                  type="button"
                  className="btn ml-0 mr-0 pl-0 pr-0"
                  id="cel"
                >
                  °C
                </button>
              </span>
            </div>
          </div>
          <div className="col">
            <div className="card-body pt-0 pb-4 mt-0 text-right">
              <div className="card-text" id="descrip">
                <small className="text-white">Description:</small>
              </div>
              <div className="card-text" id="feels">
                <small className="text-white">Feels like:</small>
              </div>
              <div className="card-text" id="humidity">
                <small className="text-white">Humidity:</small>
              </div>
              <div className="card-text" id="wind">
                <small className="text-white">Wind:</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CurrentTemp from "./CurrentTemp";

export default function WeatherData(props) {
  return (
    <Container
      className="mt-1"
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
        <div className="current-weather mt-0 pt-0 text-white">
          <h2 className="text-center pt-1 pb-0" id="current">
            Currently
          </h2>
          <div id="current-city">
            <div>{props.data.city}</div>
            <FormattedDate date={props.data.date} />
          </div>
          <div className="CurrentWeather">
            <hr className="text-white mt-2 mb-0" />
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
                    <div className="card-text" id="descrip">
                      <small className="text-white">
                        {props.data.description}
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

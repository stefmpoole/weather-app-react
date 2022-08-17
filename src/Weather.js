import React, { useState } from "react";
import CheckBox from "./CheckBox";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { UmbrellaFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(false);
  const [city, setCity] = useState("");

  function getResponse(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=671bc037fdf9b66e2a2a9caaec161f09&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeather(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
      date: response.data.dt,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
    });
    setReady(true);
    console.log(response.data);
    console.log(response.data.dt);
  }

  if (weather.ready) {
    let form = (
      <Form onSubmit={getResponse}>
        <Form.Group className="form-outline pt-1 ml-2 mr-2" id="location-form">
          <div className="input-group pt-2">
            {ready}
            <input
              type="search"
              className="form-control rounded"
              placeholder="Enter City"
              aria-label="Enter City"
              aria-describedby="basic-addon2"
              autoComplete="off"
              autoFocus="on"
              id="search-text-input"
              onChange={handleSubmit}
            />
            <div className="input-group-append">
              <Button
                variant="danger"
                type="Submit"
                id="search-button"
                value="search"
                onChange={handleSubmit}
              >
                <UmbrellaFill />
              </Button>
            </div>
          </div>
        </Form.Group>
        <CheckBox />
      </Form>
    );
    return <div>{form}</div>;
  } else {
    return (
      <div className="weatherDescription">
        <Form onSubmit={getResponse}>
          <Form.Group
            className="form-outline pt-1 ml-2 mr-2"
            id="location-form"
          >
            <div className="input-group pt-2">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Enter City"
                aria-label="Enter City"
                aria-describedby="basic-addon2"
                autoComplete="off"
                autoFocus="on"
                id="search-text-input"
                onChange={handleSubmit}
              />
              <div className="input-group-append">
                <Button
                  variant="danger"
                  type="Submit"
                  id="search-button"
                  value="search"
                >
                  <UmbrellaFill />
                </Button>
              </div>
            </div>
          </Form.Group>
        </Form>
        <Container
          className="mt-3"
          style={{
            padding: 0,
            display: "inline-flex",
          }}
        >
          <Card
            className="pt-4 pb-2 ml-2 mr-2"
            style={{
              background: "black",
              width: 600,
            }}
          >
            <div className="current-weather mt-0 pt-0 text-white">
              <div id="currently">
                <h4>{weather.city}</h4>
                <h5>
                  <FormattedDate date={weather.date} />
                </h5>
              </div>
              <h2 className="text-center pt-3 pb-0">Currently</h2>
              <div className="CurrentWeather">
                <hr className="text-white mt-4 mb-0" />
                <Row className="mt-0">
                  <Col className="col-6 ml-3">
                    <div className="weather-icon" id="current-png">
                      <img src={weather.icon} alt={weather.description} />
                    </div>
                  </Col>
                  <Col className="col-6 text-left mr-2">
                    <div className="card-body pb-0">
                      <div className="current-temp">
                        <span id="current-temp">{weather.temperature}</span>
                        <span className="degrees">
                          <button
                            type="button"
                            className="btn ml-0 mr-0 pl-0 pr-0 text-white"
                            id="far"
                          >
                            °F
                          </button>
                          <span className="text-white" id="degree-separation">
                            |
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
                      <div className="card-body pt-0 mt-0 text-right">
                        <div className="card-text" id="descrip">
                          <small className="text-white">
                            {weather.description}
                          </small>
                        </div>
                        <div className="card-text" id="humidity">
                          <small className="text-white">
                            Humidity: {weather.humidity}%
                          </small>
                        </div>
                        <div className="card-text" id="wind">
                          <small className="text-white">
                            Wind: {weather.wind} mph
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
      </div>
    );
  }
}

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { SearchHeartFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather.js";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState(null);
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
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    console.log(response.data);
  }

  let form = (
    <Form onSubmit={getResponse}>
      <Form.Group className="form-outline pt-1 ml-2 mr-2" id="location-form">
        <div className="input-group pt-2">
          <input
            type="search"
            className="form-control"
            placeholder="Enter City"
            aria-label="Enter City"
            aria-describedby="basic-addon2"
            autocomplete="off"
            autofocus="on"
            id="search-text-input"
            onChange={handleSubmit}
          />
          <div className="input-group-append">
            <Button
              variant="warning"
              type="Submit"
              id="search-button"
              value="search"
            >
              <SearchHeartFill />
            </Button>
          </div>
        </div>
        <CurrentWeather />
      </Form.Group>
    </Form>
  );
  if (weather !== null) {
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
                className="form-control"
                placeholder="Enter City"
                aria-label="Enter City"
                aria-describedby="basic-addon2"
                autocomplete="off"
                autofocus="on"
                id="search-text-input"
                onChange={handleSubmit}
              />
              <div className="input-group-append">
                <Button
                  variant="warning"
                  type="Submit"
                  id="search-button"
                  value="search"
                >
                  <SearchHeartFill />
                </Button>
              </div>
            </div>
            <Card
              style={{
                backgroundColor: "gray",
                padding: 2,
              }}
            >
              <div
                className="current-weather"
                style={{ display: "block", padding: 20 }}
              >
                <h2 id="currently">Currently</h2>
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
                          <span
                            className="temperature mb-1 ml-2"
                            id="current-temp"
                          ></span>
                          <span className="degrees">
                            <button
                              type="button"
                              className="btn ml-0 mr-0 pl-0 pr-0"
                              id="far"
                            >
                              °F
                            </button>
                            <span
                              className="text-center"
                              id="degree-separation"
                            >
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
                            <small className="text-white">
                              Wind:{weather.wind}mph
                            </small>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Card>
            <ul>
              <li>Temperature: {Math.round(weather.temperature)}°F</li>
              <li>Description: {weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}mph</li>
            </ul>
            <div className="image">
              <img src={weather.icon} alt={weather.description} />
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}

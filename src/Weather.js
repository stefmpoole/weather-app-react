import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { SearchHeartFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "./Weather.css";
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
          </Form.Group>
        </Form>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°F</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
        </ul>
        <div className="image">
          <img src={weather.icon} alt={weather.description} />
        </div>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}

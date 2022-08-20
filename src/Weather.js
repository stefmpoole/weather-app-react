import React, { useState } from "react";
import CheckBox from "./CheckBox";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { UmbrellaFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "./Weather.css";
import WeatherData from "./WeatherData";
import axios from "axios";

export default function Weather() {
  const [weather, setWeather] = useState(false);
  const [city, setCity] = useState(null);

  function getResponse() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97c9febfd90b94ec808e8edbe99272c3&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  function search(event) {
    event.preventDefault();
    getResponse();
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
  }

  if (weather === false) {
    let submitForm = (
      <div className="submitForm">
        <Form onSubmit={search}>
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
                  onChange={handleSubmit}
                >
                  <UmbrellaFill />
                </Button>
              </div>
            </div>
          </Form.Group>
          <CheckBox />
        </Form>
      </div>
    );
    return <div>{submitForm}</div>;
  } else {
    return <WeatherData data={weather} />;
  }
}

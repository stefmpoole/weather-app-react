import React, { useState, useEffect } from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";
import Row from "react-bootstrap/Row";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setReady(false);
  }, [props.coords]);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily);
  }

  if (ready) {
    return (
      <Container
        className="mt-1"
        style={{
          width: 505,
        }}
      >
        <Row>
          <CardGroup
            id="CardGroup"
            style={{
              display: "-webkit-inline-flex",
              WebkitJustifyContent: "center",
            }}
          >
            {forecast.map(function (dailyForecast, index) {
              if (index < 5) {
                return (
                  <div key={index}>
                    <WeatherForecastDaily data={dailyForecast} />
                  </div>
                );
              } else {
                return null;
              }
            })}
          </CardGroup>
        </Row>
      </Container>
    );
  } else {
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=97c9febfd90b94ec808e8edbe99272c3&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

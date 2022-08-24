import React, { useState } from "react";
import WeatherForecastDaily from "./WeatherForecastDaily";
import "./WeatherForecast.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";

export default function WeatherForecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setReady(true);
    setForecast(response.data.daily[0]);
    console.log(response.data.daily[0]);
  }

  if (ready) {
    return (
      <Container>
        <Row>
          <CardGroup>
            <WeatherForecastDaily data={forecast} />
            <Card className="rounded" border="warning" style={{ margin: 2 }}>
              <h5 className="card-title text-center">Tue</h5>
              <img
                className="card-img-top"
                src="images/partly cloudy.png"
                alt="weather-png"
              />
              <div className="card-body">
                <span className="card-text text-center">
                  <strong>0°|0°</strong>
                </span>
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
                <div className="card-text text-center">
                  <strong>0°|0°</strong>
                </div>
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
                <div className="card-text text-center">
                  <strong>0°|0°</strong>
                </div>
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
                <div className="card-text text-center">
                  <strong>0°|0°</strong>
                </div>
              </div>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    );
  } else {
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=b1bc3da2669fb6d87af27aa8196f619e&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

import React from "react";
import Card from "react-bootstrap/Card";

export default function WeatherForecastDaily(props) {
  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <Card className="rounded" border="warning" style={{ margin: 2 }}>
      <h5 className="card-title text-center">{day()}</h5>
      <img
        src={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <div className="card-body">
        <div className="card-text text-center">
          <span>
            <strong>
              {maxTemp}°{""}
              {""}|{""}
              {""}
              {minTemp}°
            </strong>
          </span>
        </div>
      </div>
    </Card>
  );
}

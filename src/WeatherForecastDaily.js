import React from "react";
import Card from "react-bootstrap/Card";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDaily(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);
  return (
    <Card className="rounded" border="warning" style={{ margin: 2 }}>
      <h5 className="card-title text-center">{day()}</h5>
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
      />
      <div className="card-body">
        <div className="card-text text-center">
          <span>
            {maxTemp}° | {minTemp}°
          </span>
        </div>
      </div>
    </Card>
  );
}

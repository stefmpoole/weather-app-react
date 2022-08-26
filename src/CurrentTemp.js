import React, { useState } from "react";
import "./CurrentTemp.css";
import Button from "react-bootstrap/Button";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function celsiusTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farhenheitTemp(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "fahrenheit") {
    return (
      <div className="current-temp text-black">
        <span id="current-temp">{props.farhenheit}</span>
        <span className="degrees">
          <Button
            className=" text-black btn ml-0 mr-0 pl-0 pr-0"
            type="button"
            id="far"
          >
            °F
          </Button>
          |
          <Button
            variant="secondary"
            type="button"
            className="btn ml-0 mr-0 pl-0 pr-0"
            id="cel"
            onClick={celsiusTemp}
          >
            °C
          </Button>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.farhenheit - 32) * 5) / 9;
    return (
      <div className="current-temp">
        <span id="current-temp">{Math.round(celsius)}</span>
        <span className="degrees">
          <Button
            variant="secondary"
            type="button"
            className="btn ml-0 mr-0 pl-0 pr-0"
            id="far"
            onClick={farhenheitTemp}
          >
            °F
          </Button>
          <span className="text-white" id="degree-separation">
            |
          </span>
          <Button
            className="text-black btn ml-0 mr-0 pl-0 pr-0"
            type="button"
            id="cel"
          >
            °C
          </Button>
        </span>
      </div>
    );
  }
}

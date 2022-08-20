import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function CurrentTemp(props) {
  const [unit, setUnit] = useState(false);

  function showFarhenheit(event) {
    event.preventDefault();
  }

  function celsius(event) {
    event.preventDefault();
    setUnit(true);
  }

  console.log(props.farhenheit);
  if (unit === false) {
    return (
      <div className="current-temp">
        <span id="current-temp">{props.farhenheit}</span>
        <span className="degrees">
          <Button
            className=" text-white btn ml-0 mr-0 pl-0 pr-0"
            type="button"
            id="far"
            onClick={showFarhenheit}
          >
            °F
          </Button>
          <span className="text-white" id="degree-separation">
            |
          </span>
          <Button
            variant="secondary"
            type="button"
            className="btn ml-0 mr-0 pl-0 pr-0"
            id="cel"
            onClick={celsius}
          >
            °C
          </Button>
        </span>
      </div>
    );
  } else {
    let celsius = (Math.round(props.farhenheit - 32) * 5) / 9;
    return (
      <div className="current-temp">
        <span id="current-temp">{Math.round(celsius)}</span>
        <span className="degrees">
          <Button
            type="button"
            className=" text-white btn ml-0 mr-0 pl-0 pr-0"
            id="far"
            onClick={showFarhenheit}
          >
            °F
          </Button>
          <span className="text-white" id="degree-separation">
            |
          </span>
          <Button
            variant="secondary"
            type="button"
            className="btn ml-0 mr-0 pl-0 pr-0"
            id="cel"
            onClick={celsius}
          >
            °C
          </Button>
        </span>
      </div>
    );
  }
}

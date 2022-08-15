import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import Col from "react-bootstrap/Col";
import "./LocationSearch.css";

export default function LocationSearch() {
  return (
    <div className="location-search" style={{ paddingTop: 5 }}>
      <Col className="col-12 text-center">
        <p className="h3" id="h3"></p>
      </Col>
      <Weather />
    </div>
  );
}

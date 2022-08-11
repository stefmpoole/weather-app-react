import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./CheckBox.css";

export default function CheckBox() {
  return (
    <Form>
      <Row>
        <Col className="col-9 mt-2">
          <input id="checkbox" type="radio" />
          <label id="checkbox-label" for="checkbox">
            Search My Current Location
          </label>
        </Col>
      </Row>
    </Form>
  );
}

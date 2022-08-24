import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function CheckBox() {
  return (
    <div className="CheckBox">
      <Row>
        <Col className="col-9 mt-1">
          <Form.Group className="mb-3" id="formBasicCheckbox">
            <Form.Check
              className="text-white"
              type="radio"
              label="Search My Current Location"
              style={{ fontSize: 13 }}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { SearchHeartFill } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import "./ButtonForm.css";

export default function ButtonForm() {
  return (
    <Form>
      <Form.Group className="form-outline pt-1 ml-2 mr-2" id="location-form">
        <div className="input-group pt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            aria-label="Enter City"
            aria-describedby="basic-addon2"
            autocomplete="off"
            autofocus="on"
            id="search-text-input"
          />
          <div className="input-group-append">
            <Button
              variant="warning"
              type="Submit"
              id="search-button"
              value="search"
            >
              <SearchHeartFill />
            </Button>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}

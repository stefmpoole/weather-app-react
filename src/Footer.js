import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css";

export default function Footer() {
  return (
    <Container
      style={{
        padding: 20,
        width: 400,
        color: "white",
      }}
    >
      <Row className="row mt-2 mb-0 pb-0 text-center">
        <Col className="col-12">
          <small>
            <a
              href="https://github.com/stefmpoole/weather-app-react.git"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#eb6e4b" }}
            >
              Open-source code
            </a>
            <span className="text-black"> by Stefanie Poole </span>
          </small>
        </Col>
      </Row>
    </Container>
  );
}

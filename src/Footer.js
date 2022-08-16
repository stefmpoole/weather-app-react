import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Footer.css";

export default function Footer() {
  return (
    <Container
      style={{
        backgroundColor: "black",
        padding: 20,
        width: 400,
        color: "white",
      }}
    >
      <Row className="row mt-2">
        <Col className="col-12">
          <a
            href="https://github.com/stefmpoole/weather-app-react.git"
            target="_blank"
            style={{ color: "#f7e129" }}
          >
            Open-source code
          </a>
          <span> by Stefanie Poole </span>
        </Col>
      </Row>
    </Container>
  );
}

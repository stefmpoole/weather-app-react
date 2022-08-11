import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import CheckBox from "./CheckBox";
import ButtonForm from "./ButtonForm";
import Col from "react-bootstrap/Col";
import "./LocationSearch.css";

export default function LocationSearch() {
  return (
    <div className="location-search" style={{ paddingTop: 30 }}>
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/10398361/pexels-photo-10398361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: 400,
        }}
      >
        <overlayView
          className="mask rounded"
          style={{
            color: "white",
            height: 365,
            width: 552,
            position: "absolute",
            backgroundColor: "rgba(2, 1, 0, 0.1)",
            backgroundSize: "contain",
          }}
        >
          <Col className="col-12 pt-4 text-center">
            <p className="h3" id="h3"></p>
          </Col>
          <ButtonForm />
          <CheckBox />
        </overlayView>
      </div>
    </div>
  );
}

import React from "react";
import { Col, Row } from "react-bootstrap";
// import { IoPricetag } from "react-icons/io5";
import "./Card.css";
function Cart({ Heading,icon }) {
  return (
    <>
      <Row>
        <Col sm={2}>
          <a
            href="/"
          
            className="ioncart"
          >
            {icon}
          </a>
        </Col>
        <Col className="text-part">
          <h5 className=" card-title text-uppercase text-dark">{Heading}</h5>
          <p className="text">
            Consectetur adipi elit lorem <br />
            ipsum dolor sit amet.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Cart;

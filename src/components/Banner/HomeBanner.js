import React from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "../Buttons/Button";
import "./Banner.css";

const HomeBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Row>
          <Col sm={12} md={4}>
            <Carousel.Caption>
              <section className="section-1">
                <h3 className="h1 text-black">
                  Technology <br />
                  Hack You Won't <br />
                  Get
                </h3>
                <Button onClick={() => {}} button="SHOP PRODUCTS" />
              </section>
            </Carousel.Caption>
          </Col>
          <Col sm={12} md={8}>
            <img
              className="d-block w-40"
              src="https://themewagon.github.io/MiniStore/images/banner-image.png"
              alt="First slide"
            />
          </Col>
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-40"
          src="https://themewagon.github.io/MiniStore/images/banner-image.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <section className="section-1">
            <h3 className="text-uppercase h1 text-black">
              Your Products <br />
              Are Great.
            </h3>
            <Button onClick={() => {}} button="SHOP PRODUCTS" />
          </section>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;

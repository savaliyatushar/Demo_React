/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="contact">
      <hr/>
      <section>
        <Container>
          <Row>
            <Col>
              <div className=" justify-content-start d-flex">
                <img
                  src="	https://themewagon.github.io/MiniStore/images/main-logo.png"
                  className=" justify-content-start"
                />
              </div>
              <div>
                <p className="pera-color">
                  Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit
                  hendrerit. Gravida massa volutpat aenean odio erat nullam
                  fringilla.
                </p>
              </div>
              <div>
                <Row>
                  <Col>
                    <FaFacebook className="icon-color" />
                  </Col>
                  <Col>
                    <FaInstagram className="icon-color" />
                  </Col>
                  <Col>
                    <FaTwitter className="icon-color" />
                  </Col>
                  <Col>
                    <FaLinkedin className="icon-color" />
                  </Col>
                  <Col>
                    <FaYoutube className="icon-color" />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col>
              <div>
                <h5 className="text-start">QUICK LINKS</h5>
              </div>
              <div className="">
                <ul className="text-start list-unstyled text-uppercase pb-4">
                  <li className="menu-list pb-1">
                    <a href="" className=" text-black text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="menu-list pb-1">About</li>
                  <li className="menu-list pb-1">Shop</li>
                  <li className="menu-list pb-1">Contact</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <h5>HELP & INFO HELP</h5>
              </div>
              <div>
                <ul className="text-start list-unstyled text-uppercase">
                  <li className="menu-list pb-1">TRACK YOUR ORDER</li>
                  <li className="menu-list pb-1">RETURNS POLICIES</li>
                  <li className="menu-list pb-1">SHIPPING + DELIVERY</li>
                  <li className="menu-list pb-1">CONTACT US</li>
                  <li className="menu-list pb-1">FAQS</li>
                </ul>
              </div>
            </Col>
            <Col>
              <div>
                <h5>Contact Us</h5>
              </div>
              <div className="pb-4">
                <p className="mb-0 pera-color ">
                  Do you have any queries or suggestions?{" "}
                </p>
                <a href="" className="text-black text-decoration-none">
                  yourinfo@gmail.com
                </a>
              </div>
              <div>
                <p className="mb-0 pera-color">
                  If you need support? Just give us a call.{" "}
                </p>
                <a href="" className="text-black text-decoration-none">
                  +55 111 222 333 44
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      <div>
        <Container>
          <Row>
            <Col sm={2}>
              <p className=" d-flex flex-wrap">
                We ship with:
                <img src="https://themewagon.github.io/MiniStore/images/shippingcard.png" />
                <img src="https://themewagon.github.io/MiniStore/images/dhl.png" />
              </p>
            </Col>
            <Col sm={6}>
              <p className="text-center d-flex flex-wrap justify-content-center">
                Payment options:
                <img
                  src="https://themewagon.github.io/MiniStore/images/visa.jpg"
                  className="pe-2"
                />
                <img
                  src="https://themewagon.github.io/MiniStore/images/mastercard.jpg"
                  className="pe-2"
                />
                <img
                  src="https://themewagon.github.io/MiniStore/images/paypal.jpg"
                  className="pe-2"
                />
              </p>
            </Col>
            <Col sm={3}>
              <p className="text-center d-flex flex-wrap justify-content-center">
                AMERICA
                {/* <img src="" /> */}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

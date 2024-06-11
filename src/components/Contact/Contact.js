import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Buttons from "../Buttons/Button";

function Contact({ contact, manage }) {
  return (
    <>
      <Container className="pt-5 " id="home">
        <Row className="">
          <Col lg={6}>
            <h2>{contact}</h2>
            <p className="pera">
              Tortor dignissim convallis aenean et tortor at risus viverra
              adipiscing.
            </p>
            <Row>
              <Col lg={4}>
                <div>
                  <h5 className=" text-decoration-underline pb-3">OFFICE</h5>
                  <span className="pera">
                    730 Glenstone Ave 65802, Springfield, US
                  </span>
                  <div className="contact-number pt-4">
                    <p className="">
                      <Link
                        to="/home"
                        className=" text-decoration-none text-dark"
                      >
                        +12464 78312
                      </Link>
                    </p>
                    <p className="">
                      <Link to="" className=" text-decoration-none text-dark">
                        +12464 78312
                      </Link>
                    </p>
                    <p className="">
                      <Link
                        to="/mail"
                        className=" text-decoration-none text-dark"
                      >
                        ministore@yourinfo.com
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <h5 className=" text-decoration-underline pb-3">{manage}</h5>
                <span className="pera">
                  730 Glenstone Ave 65802, Springfield, US
                </span>
                <div className="contact-number pt-4">
                  <p className="">
                    <Link to="/" className=" text-decoration-none text-dark">
                      +12464 78312
                    </Link>
                  </p>
                  <p className="">
                    <Link to="/" className=" text-decoration-none text-dark">
                      +12464 78312
                    </Link>
                  </p>
                  <p className="">
                    <Link to="/" className=" text-decoration-none text-dark">
                      ministore@yourinfo.com
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <h2>ANY QUESTIONS?</h2>
            <span className="pera">
              Use the form below to get in touch with us.
            </span>

            <Form className="mt-3">
              <Form.Group>
                <Row>
                  <Col lg={6}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Write Your Name Here"
                      required
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Write Your email Here"
                      required
                    />
                  </Col>
                </Row>
              </Form.Group>
              <div className="pt-4">
                <Form.Group>
                  <Form.Control
                    type="number"
                    name="Number"
                    placeholder="Phone Number"
                    required
                  />
                </Form.Group>
              </div>
              <div className="pt-4">
                <Form.Group>
                  <Form.Control
                    type="text"
                    name="text"
                    placeholder="Write Your Subject Here"
                    required
                  />
                </Form.Group>
              </div>
              <div className="pt-4">
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    name="commentText"
                    placeholder="Write your comment here *"
                    style={{ height: "80px" }}
                  />
                </Form.Group>
              </div>
            </Form>
            <div className="pt-4">
              <Buttons button={"SUBMIT"} onClick={""} />
            </div>
          </Col>
        </Row>
        <div className="d-flex flex-wrap align-items-center">
          <Row className="mt-5">
            <Col lg={6}>
              <div className="image-holder mb-5">
                <img
                  src="https://demo.templatesjungle.com/ministore/images/single-image2.jpg"
                  alt="leptop"
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg={6} className="mt-5">
              <div className="locations-wrap">
                <div className="display-header">
                  <h2 className="display-7 text-uppercase text-dark">
                    OUR STORES
                  </h2>
                  <p className="pera">
                    You can also directly buy products from our stores.
                  </p>
                </div>

                <Row>
                  <Col lg={5}>
                    <div className="">
                      <h4 className="text-decoration-underline">OFFICE</h4>
                      <p className="pera">
                        730 Glenstone Ave 65802, Springfield, US
                      </p>
                      <div className="contact-number pt-4">
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            +12464 78312
                          </Link>
                        </p>
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            +12464 78312
                          </Link>
                        </p>
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            ministore@yourinfo.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={5}>
                    <div className="">
                      <h4 className=" text-decoration-underline">USA</h4>
                      <div>
                        <p className="pera">
                          730 Glenstone Ave 65802, Springfield, US
                        </p>
                      </div>
                      <div className="contact-number pt-4">
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            +12464 78312
                          </Link>
                        </p>
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            +12464 78312
                          </Link>
                        </p>
                        <p className="">
                          <Link
                            to="/"
                            className=" text-decoration-none text-dark"
                          >
                            ministore@yourinfo.com
                          </Link>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Contact;

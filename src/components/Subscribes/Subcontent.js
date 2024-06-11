import React from "react";
import { Col, Container, Row, Form, InputGroup, Button } from "react-bootstrap";

const Subcontent = () => {

  return (
    <div className="">
      <Container className="bg-dark text-center text-light py-5">
        <Row>
          <Col md={6} sm={12} className="pt-4 justify-content-start">
            <h2 className="display-7 text-uppercase ">Subscribe Us Now</h2>
            <p>
              Get latest news, updates, and deals directly mailed to your inbox.
            </p>
          </Col>
          <Col md={6} sm={12} className="pt-5">
            <Form className="subscription-form validate me-5">
              <InputGroup className="mb-3">
                <Form.Control
                  className="Control Form-control-rounded-none"
                  placeholder="Your email address here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                
                  className="btn btn-medium btn-success text-uppercase btn-rounded-none"
                  id="button-addon2"
                >
                  Button
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subcontent;

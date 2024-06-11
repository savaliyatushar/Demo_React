import React, { useState } from "react";
import "./Singlepost.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import Buttons from "../Buttons/Button";

function Singlepost({
  heading,
  date,
  leptopimg,
  comment,
  peraimg1,
  peraimg2,
  comment1,
  comment2,
  comment3,                                                                         
  leave,          
}) {
  const [formData, setFormData] = useState({
    commentText: "",
    fullName: "",
    email: "",
    saveDetails: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Container>
      <Row>
        <article className="post-item mt-5">
          <div className="post-content">
            <div className="post-meta text-uppercase mt-5">
              <span className="post-category mt-4 pt-4">{date}</span>
              <h1 className="post-title">{heading}</h1>
              <Col lg={12}>
                <div className="hero-image mt-5 justify-content-center">
                  <img
                    className="img-set pb-5 img-fluid"
                    src={leptopimg}
                    alt="laptop"
                  />
                </div>
                <div className="post-description text-lowercase">
                  <p className="pera">
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Consectetur facilisis vivamus massa magna. Blandit mauris
                      libero condimentum commodo morbi consectetur sociis
                      convallis sit. Magna diam amet justo sed vel dolor et
                      volutpat integer. Iaculis sit sapien hac odio elementum
                      egestas neque. Adipiscing purus euismod orci sem amet, et.
                      Turpis erat ornare nisi laoreet est euismod.
                    </strong>
                  </p>
                  <p className="pera">
                    Sit suscipit tortor turpis sed fringilla lectus facilisis
                    amet. Ipsum, amet dolor curabitur non aliquet orci urna
                    volutpat. Id aliquam neque, ut vivamus sit imperdiet enim,
                    lacus, vel. Morbi arcu amet, nulla fermentum vitae mattis
                    arcu mi convallis. Urna in sollicitudin in vestibulum erat.
                    Turpis faucibus augue ipsum, at aliquam. Cras sagittis
                    tellus nunc integer vitae neque bibendum eget. Tempus
                    malesuada et pellentesque maecenas. Sociis porttitor elit
                    tincidunt tellus sit ornare. Purus ut quis sed venenatis
                    eget ut ipsum, enim lacus. Praesent imperdiet vitae eu, eu
                    tincidunt nunc integer sit.
                  </p>
                  <blockquote>
                    “Sit suscipit tortor turpis sed fringilla lectus facilisis
                    amet. Ipsum, amet dolor curabitur non aliquet orci urna
                    volutpat. Id aliquam neque, ut vivamus sit imperdiet enim,
                    lacus, vel.
                  </blockquote>
                  <p>
                    <strong className="text-muted">Are you amazed?</strong>
                  </p>
                  <ul>
                    <li>
                      Blandit mauris libero condimentum commodo sociis convallis
                      sit.
                    </li>
                    <li>
                      Magna diam amet justo sed vel dolor et volutpat integer.
                    </li>
                    <li>
                      Laculis sit sapien hac odio elementum egestas neque.
                    </li>
                  </ul>
                  <p className="pera">
                    Morbi arcu amet, nulla fermentum vitae mattis arcu mi
                    convallis. Urna in sollicitudin in vestibulum erat. Turpis
                    faucibus augue ipsum, at aliquam. Cras sagittis tellus nunc
                    integer vitae neque bibendum eget. Tempus malesuada et
                    pellentesque maecenas. Sociis porttitor elit tincidunt
                    tellus sit ornare. Purus ut ipsum, enim lacus. Praesent
                    imperdiet vitae eu, eu tincidunt nunc integer sit.
                  </p>
                  <p className="pera">
                    Tortor diam dignissim amet, in interdum aliquet. Magnis
                    dictum et eros purus fermentum, massa ullamcorper sit
                    sollicitudin. Nascetur libero elementum adipiscing mauris
                    maecenas et magna. Etiam nec, rutrum a diam lacus, nunc
                    integer etiam. Mattis pulvinar non viverra donec
                    pellentesque. Odio mi consequat libero dolor. Porta ut diam
                    lobortis eget leo, lectus. Nunc tempus feugiat massa laoreet
                    ultrices diam magna quam. Congue auctor auctor luctus neque.
                    Enim lorem ultrices diam donec. Sed id placerat consectetur
                    faucibus.
                  </p>
                  <Row className="pt-4 justify-content-between">
                    <Col lg={6} className="mb-3">
                      <img src={peraimg1} alt="watches" className="img-fluid" />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <img src={peraimg2} alt="laptop" className="img-fluid" />
                    </Col>
                  </Row>
                  <p className="text-muted">
                    Velit, praesent pharetra malesuada
                  </p>
                </div>
              </Col>
            </div>
          </div>
        </article>
      </Row>

      <Row className="mt-5">
        <h2 className="display-6 fw-normal text-dark text-uppercase mb-4">
          {comment}
        </h2>
        <Col lg={1} sm={3} className="me-4 mb-3">
          <img src={comment1} alt="commentor" className="img-fluid" />
        </Col>
        <Col lg={10} sm={8} className="mb-3">
          <span>
            <strong>SAM SMITH</strong> Jul 10
          </span>
          <p className="d-flex pt-1 pera">
            Mattis pulvinar non viverra donec pellentesque. Odio mi consequat
            libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam
            dignissim amet, in interdum aliquet. Nascetur libero elementum
            adipiscing mauris maecenas et magna.
          </p>
        </Col>

        <Col lg={1} sm={3} className="me-4 mb-3 ms-5">
          <img src={comment2} alt="commentor" className="img-fluid" />
        </Col>
        <Col lg={10} sm={8} className="mb-3">
          <span>
            <strong>SANTIE MARY </strong> Jul 10
          </span>
          <p className="pera">
            Aug 22 Consectetur adipiscing elit. Nullam quis risus eget urna
            mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus.
          </p>
        </Col>

        <Col lg={1} sm={3} className="me-4 mb-3">
          <img src={comment3} alt="commentor" className="img-fluid" />
        </Col>
        <Col lg={10} sm={8} className="mb-3">
          <span>
            <strong>ANALISA NORA </strong> Jul 10
          </span>
          <p className="d-flex pt-1 pera">
            Mattis pulvinar non viverra donec pellentesque. Odio mi consequat
            libero dolor. Porta ut diam lobortis eget leo, lectus. Tortor diam
            dignissim amet, in interdum aliquet. Nascetur libero elementum
            adipiscing mauris maecenas et magna.
          </p>
        </Col>
        <div className="d-flex mt-5">
          <h2 className="display-6 fw-normal text-dark text-uppercase mb-4">
            {leave}
          </h2>
        </div>
        <div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Text className="pera">
                Your email address will not be published. Required fields are
                marked *
              </Form.Text>
              <Form.Control
                as="textarea"
                name="commentText"
                placeholder="Write your comment here *"
                style={{ height: "80px" }}
                value={formData.commentText}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group>
              <Row className="mt-3">
                <Col lg={6} className="d-flex">
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Write your full name here *"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </Col>
                <Col lg={6}>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Write your e-mail address *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Col>
              </Row>
              <Form.Check
                className="mt-3"
                inline
                label="Save my name, email, and website in this browser for the next time."
                name="saveDetails"
                type="checkbox"
                checked={formData.saveDetails}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Buttons
              button={"POST COMMENT"}
              onClick={handleSubmit}
              className={"mt-3"}
            />
          </Form>
        </div>
      </Row>
    </Container>
  );
}

export default Singlepost;

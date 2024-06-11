import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Buttons from '../Buttons/Button';
import Review from '../Reviews/Review';
import Subscribes from '../Subscribes/Subscribes';
import Instanav from '../Insta/Insta-nav';
import Feature from "../../components/Features/Feature";

function Aboutus({ heading,link, text }) {
  return (
    <>
      <section
        id={"AboutPage"}
        className="hero-section position-relative bg-light-blue padding-medium"
      >
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="text-center padding-top no-padding-bottom">
                <h2 className="display-2 text-uppercase text-dark">
                  {heading}
                </h2>
                <span>
                  <Link to="/home" className=" text-decoration-none text-dark">
                    {link}
                  </Link>
                  <span>{text}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Feature />
      </div>
      <section className="padding-large no-padding-top">
        <Container>
          <Row className="row d-flex flex-wrap align-items-center justify-content-between">
            <Col lg={6} md={12}>
              <div className="image-holder mb-4">
                <img
                  className="single-image"
                  src={
                    "https://demo.templatesjungle.com/ministore/images/single-image3.jpg"
                  }
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="detail ps-5">
                <div className="display-heding">
                  <h2 className="display-7 text-uppercase text-dark">
                    How was Ministore Found?
                  </h2>
                  <p className="pb-3 pera-color">
                    Risus augue curabitur diam senectus congue velit et. Sed
                    vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
                    Nulla adipiscing pharetra pellentesque maecenas odio eros
                    at. Quam libero etiam et in ac at quis.
                    
                    <br />
                    <br />
                    "Sed vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Quam libero etiam et in ac at
                    quis. Risus augue curabitur diam senectus congue velit et."
                  </p>
                  <Buttons
                    button={"shop our store"}
                    className={"text-uppercase"}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <Review />
        </div>
        <div>
          <Subscribes />
        </div>
        <div>
          <Instanav />
        </div>
      </section>
    </>
  );
}

export default Aboutus
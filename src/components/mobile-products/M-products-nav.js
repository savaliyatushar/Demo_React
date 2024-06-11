import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./M-products-nav.css";
import Responsive from "./M-product";
import list from "./Data";
import { Link } from "react-router-dom";


const Products = () => {
  const itemsPerSlide = 4; // Number of products per carousel item
  const numSlides = Math.ceil(list.length / itemsPerSlide);
  console.warn(list);
  return (
    <section
      id="product"
      className="product-store position-relative padding-large"
    >
      <Container>
        <Row>
          <div className="display-header d-flex justify-content-between pt-0">
            <h4>
              <p className="M text-uppercase">Mobiles Products</p>
            </h4>
            <div className="me-2 text-uppercase">
              <Link
                to="/shop"
                className="btn btn-medium btn-normal text-uppercase text-decoration-underline pe-0"
              >
                Go to Shop
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <Carousel className="custom-carousel">
              {Array.from({ length: numSlides }).map((_, slideIndex) => (
                <Carousel.Item key={slideIndex} className="lines">
                  <Row>
                    {list
                      .slice(
                        slideIndex * itemsPerSlide,
                        (slideIndex + 1) * itemsPerSlide
                      )
                      .map((item, index) => (
                        <Col key={index} xs={12} sm={6} md={3}>
                          <Responsive product={item} />
                        </Col>
                      ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Products;

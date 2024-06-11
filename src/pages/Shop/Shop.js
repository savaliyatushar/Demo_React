import React from "react";
import "./Shop.css"
import Shops from "../../components/Shops/Shops.js"
import { Col, Container, Dropdown, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import Subscribes from "../../components/Subscribes/Subscribes";
import Instanav from "../../components/Insta/Insta-nav";

function Shop() {
  const navLinks = [
    { path: "/link1", label: "All" },
    { path: "/link2", label: "Phones" },
    { path: "/link4", label: "Accessories" },
    { path: "/link4", label: "Tablets" },
    { path: "/link4", label: "Watches" },
  ];

  const navLinks2 = [
    { path: "/link1", label: "White" },
    { path: "/link2", label: "Cheap" },
    { path: "/link4", label: "Mobile" },
    { path: "/link4", label: "Modern" },
  ];
  const navLinks3 = [
    { path: "/link1", label: "Apple" },
    { path: "/link2", label: "Samsung" },
    { path: "/link4", label: "Huwai" },
  ];

  const navLinks4 = [
    { path: "/link1", label: "Less than $10" },
    { path: "/link2", label: "$10- $20" },
    { path: "/link4", label: "$20- $40" },
    { path: "/link4", label: "$40- $40" },
    { path: "/link4", label: "$40- $40" },
  ];

  return (
    <>
      <section className="hero-section position-relative bg-light-blue padding-medium">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="text-center padding-top no-padding-bottom">
                <h2 className="display-2 text-uppercase text-dark">shop</h2>
                <span>
                  <Link to="/home" className=" text-decoration-none text-dark">
                    home
                  </Link>
                  <span>/shop</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <div>
          <Row className="">
            <Col className="pt-5">
              <Row>
                <Col>
                  <Shops
                    shoppost={
                      "https://themewagon.github.io/MiniStore/images/insta-item1.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item2.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item4.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item4.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item6.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item7.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
              </Row>
              <Row className="pt-4">
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item8.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item10.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
                <Col>
                  <Shops
                    shoppost={
                      "https://demo.templatesjungle.com/ministore/images/product-item5.jpg"
                    }
                    shoptitle={"iphone 11"}
                    shopprice={"$125"}
                  />
                </Col>
              </Row>
            </Col>

            <Col lg={4} className="pt-5">
              <Form action="/" className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="search"
                  className="search border-rounded-0 p-0 m-0 border-dark"
                />
                <div className="FiSearch-div">
                  <Link to="/">
                    <FiSearch className="FiSearch" />
                  </Link>
                </div>
              </Form>
              <Nav className="vertical-nav pt-5">
                <ul className="list-unstyled">
                  <Dropdown className="mb-4">
                    <Dropdown.Toggle variant="light" className="text-uppercase">
                      Categories
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {navLinks.map((link, index) => (
                        <Dropdown.Item key={index} as={Link} to={link.path}>
                          {link.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="p-0 mt-5">
                    <Dropdown.Toggle variant="light" className="text-uppercase">
                      Tag
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {navLinks2.map((link, index) => (
                        <Dropdown.Item key={index} as={Link} to={link.path}>
                          {link.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown className="pt-0 mt-5">
                    <Dropdown.Toggle variant="light" className="text-uppercase">
                      BRANDS
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {navLinks3.map((link, index) => (
                        <Dropdown.Item key={index} as={Link} to={link.path}>
                          {link.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="p-0 mt-5">
                    <Dropdown.Toggle variant="light" className="text-uppercase">
                      FILTER BY PRICE
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {navLinks4.map((link, index) => (
                        <Dropdown.Item key={index} as={Link} to={link.path}>
                          {link.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </Nav>
            </Col>
          </Row>
        </div>
      </Container>
      <div>
        <Subscribes />
      </div>
      <div>
        <Instanav />
      </div>
    </>
  );
}

export default Shop;

import React from "react";
import "./Blog.css";
import Blogs from "../../components/Blog/Blogs";
import Subscribes from "../../components/Subscribes/Subscribes";
import Instanav from "../../components/Insta/Insta-nav";
import { Col, Container, Form, Nav, Row, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Postimg from "../../components/Latest Posts/Post"; //blog img mate instanav (Postimg) no use karyo che

function Blog() {
  const navLinks = [
    { path: "/link1", label: "All" },
    { path: "/link2", label: "Phones" },
    { path: "/link3", label: "Accessories" },
    { path: "/link4", label: "Tablets" },
    { path: "/link5", label: "Watches" },
  ];

  const navLinks2 = [
    { path: "/link1", label: "White" },
    { path: "/link2", label: "Cheap" },
    { path: "/link3", label: "Mobile" },
    { path: "/link4", label: "Modern" },
  ];

  const navLinks3 = [
    { path: "/link1", label: "Facebook" },
    { path: "/link2", label: "Instagram" },
    { path: "/link3", label: "Twitter" },
    { path: "/link4", label: "Pinterest" },
    { path: "/link5", label: "Youtube" },
  ];

  const navLinksImg = [
    {
      path: "/link1",
      label: "TOP 10 SMALL CAMERA IN THE WORLD",
      imgSrc:
        "https://demo.templatesjungle.com/ministore/images/post-small-image1.jpg",
    },
    {
      path: "/link2",
      label: "TECHNOLOGY HACK YOU WONT GET",
      imgSrc:
        "https://demo.templatesjungle.com/ministore/images/post-small-image2.jpg",
    },
    {
      path: "/link3",
      label: "GET SOME COOL GADGETS IN 2024",
      imgSrc:
        "https://demo.templatesjungle.com/ministore/images/post-small-image3.jpg",
    },
  ];

  return (
    <>
      <section>
        <div>
          <Blogs heading={"blog"} />
        </div>
        <section>
          <Container>
            <Row>
              <Col lg={3} className="pt-5">
                <Form action="/" className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="search"
                    className="search border-rounded-0 p-0 m-0"
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
                      <Dropdown.Toggle
                        variant="light"
                        className="text-uppercase"
                      >
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
                    <Dropdown className="mb-4">
                      <Dropdown.Toggle
                        variant="light"
                        className="text-uppercase"
                      >
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

                    <Dropdown className="pt-0 mt-0">
                      <Dropdown.Toggle
                        variant="light"
                        className="text-uppercase"
                      >
                        Social Links
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {navLinks3.map((link, index) => (
                          <Dropdown.Item key={index} as={Link} to={link.path}>
                            {link.label}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <div className="pt-4">
                      <h5 className="text-uppercase">Latest Posts</h5>
                      <Row className="d-flex flex-wrap align-items-center mb-3">
                        {navLinksImg.map((link, index) => (
                          <Col
                            key={index}
                            lg={12}
                            xs={6}
                            sm={4}
                            md={3}
                            className="d-flex"
                          >
                            <Link to={link.path}>
                              <img
                                src={link.imgSrc}
                                alt={link.label}
                                className="mt-3"
                              />
                            </Link>
                            <span className="mt-3 ml-3 text-start text-uppercase">
                              {link.label}
                            </span>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </ul>
                </Nav>
              </Col>
              <Col lg={9} className="pt-5">
                <Row>
                  <Col>
                    <Postimg
                      post={
                        "https://themewagon.github.io/MiniStore/images/post-item1.jpg"
                      }
                      date={"FEB 22, 2024 - GADGETS"}
                      Title={"GET SOME COOL GADGETS IN 2024"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "https://demo.templatesjungle.com/ministore/images/post-item3.jpg"
                      }
                      date={"FEB 22, 2024 - CAMERA"}
                      Title={"TOP 10 SMALL CAMERA IN THE WORLD"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "https://demo.templatesjungle.com/ministore/images/post-item2.jpg"
                      }
                      date={"FEB 25, 2024 - TECHNOLOGY"}
                      Title={"TECHNOLOGY HACK YOU WON’T GET"}
                    />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col>
                    <Postimg
                      post={
                        "https://demo.templatesjungle.com/ministore/images/post-item4.jpg"
                      }
                      date={"FEB 27, 2024 - TECHNOLOGY"}
                      Title={"GET SOME COOL GADGETS IN 2024"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "https://demo.templatesjungle.com/ministore/images/post-item5.jpg"
                      }
                      date={"MARCH 09, 2024 - TECHNOLOGY"}
                      Title={"TOP 10 SMALL CAMERA IN THE WORLD"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "	https://demo.templatesjungle.com/ministore/images/post-item6.jpg"
                      }
                      date={"MARCH 09, 2024 - GADGET"}
                      Title={"TECHNOLOGY HACK YOU WON’T GET"}
                    />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col>
                    <Postimg
                      post={
                        "	https://demo.templatesjungle.com/ministore/images/post-item7.jpg"
                      }
                      date={"MARCH 14, 2024 - GADGET"}
                      Title={"GET SOME COOL GADGETS IN 2024"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "	https://demo.templatesjungle.com/ministore/images/post-item8.jpg"
                      }
                      date={"MARCH 18, 2024 - GADGET"}
                      Title={"TOP 10 SMALL CAMERA IN THE WORLD"}
                    />
                  </Col>
                  <Col>
                    <Postimg
                      post={
                        "https://demo.templatesjungle.com/ministore/images/post-item9.jpg"
                      }
                      date={"MARCH 22, 2024 - GADGET"}
                      Title={"TECHNOLOGY HACK YOU WON’T GET"}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
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

export default Blog;

import React from "react";
import { Link } from "react-router-dom";
import "./Post-nav.css";
import { Row, Col, Container } from "react-bootstrap";
import Postimg from "./Post";

const Post = () => {
  return (
    <>
      <section className="d-flax p-top">
        <Container>
          <Col className="display-header text-uppercase d-flex justify-content-between pt-0">
            <div className="">
              <h4 className="">Latest Posts</h4>
            </div>
            <div className="">
              <Link
                to="/blog"
                className="btn btn-medium btn-normal text-uppercase text-decoration-underline pe-0"
              >
                read blog
              </Link>
            </div>
          </Col>
          <div className="pt-4">
            <Row>
              <Col>
                <Postimg
                  post={
                    "https://themewagon.github.io/MiniStore/images/post-item1.jpg"
                  }
                  date={"feb 22, 2024- Gadgets"}
                  Title={"GET SOME COOL GADGETS IN 2024"}
                />
              </Col>
              <Col>
                <Postimg
                  post={
                    "https://themewagon.github.io/MiniStore/images/post-item2.jpg"
                  }
                  date={"FEB 25, 2024 - TECHNOLOGY"}
                  Title={"TECHNOLOGY HACK YOU WON'T GET"}
                />
              </Col>
              <Col>
                <Postimg
                  post={
                    "https://themewagon.github.io/MiniStore/images/post-item3.jpg"
                  }
                  date={"FEB 22, 2024 - CAMERA"}
                  Title={"TOP 10 SMALL CAMERA IN THE WORLD"}
                />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Post;

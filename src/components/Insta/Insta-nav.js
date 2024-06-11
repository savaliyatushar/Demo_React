import React from "react";
import { Container, Row} from "react-bootstrap";
import Instapost from "./Insta";
import "./Insta.css";

const Instanav = () => {
  return (
    <>
      <section id="insta" className="instanav padding-large">
        <Container>
          <Row className="justify-content-center">
            <div className="display-header d-flex justify-content-between">
              <h4 className="text-uppercase">SHOP OUR INSTA</h4>
            </div>
          </Row>
          <Row className="no-gutters">
            <Instapost
              post={
                "https://themewagon.github.io/MiniStore/images/insta-item1.jpg"
              }
            />
            <Instapost
              post={
                "https://themewagon.github.io/MiniStore/images/insta-item4.jpg"
              }
            />
            <Instapost
              post={
                "https://themewagon.github.io/MiniStore/images/insta-item5.jpg"
              }
            />
            <Instapost
              post={
                "https://mrwallpaper.com/images/hd/silver-smartwatch-on-white-9xzj9mps80aoah3a.jpg"
              }
            />
            <Instapost
              post={
                "https://themewagon.github.io/MiniStore/images/insta-item3.jpg"
              }
            />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Instanav;

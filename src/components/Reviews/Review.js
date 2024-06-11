import React from "react";
import { Carousel, } from "react-bootstrap";
import { MdFormatQuote } from "react-icons/md";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

import Reviews from "./Reviews";
import "./Reviews.css";
// import {Row} from "react-bootstrap"
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <>
      <section id="blog" className="pb-5">
        <Reviews icon={<MdFormatQuote className="quote-icon" />} />
        <Carousel className="custom-carousel-review">
          <Carousel.Item>
            <Reviews
              quotepera={
                "“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”"
              }
              star={<FaStar />}
              halfstar={<FaStarHalfAlt />}
              outline={<FaRegStar />}
              person={"Emma Chamberlin"}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Reviews
              quotepera={
                "A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content."
              }
              star={<FaStar />}
              halfstar={<FaStarHalfAlt />}
              outline={<FaRegStar />}
              person={"Jennie Rose"}
            />
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Review;

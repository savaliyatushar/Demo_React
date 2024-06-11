import React from "react";
import "./Reviews.css";

const Reviews = ({ quotepera, icon, star, halfstar, outline, person }) => {
  return (
    <div className="swiper swiper-slide text-center d-flex justify-content-center swiper-slide-active">
      {/* <div className="quotation text-center"> */}
      <p className="quote-icon text-center">{icon}</p>
      {/* </div> */}
      <div className="swiper-slide text-center d-flex justify-content-center swiper-slide-active">
        <div className="review-item col-md-10">
          <blockquote>{quotepera}</blockquote>
          <div className="d-flex text-center stars-color align-items-center justify-content-center">
            <div className="">{star}</div>
            <div className="ps-1">{star}</div>
            <div className="ps-1">{star}</div>
            <div className="ps-1">{halfstar}</div>
            <div className="ps-1">{outline}</div>
          </div>
          <div className="author-detail">
            <div className="name text-dark text-uppercase pt-2">{person}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

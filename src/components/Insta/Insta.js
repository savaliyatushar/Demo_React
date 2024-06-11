import React from "react";
import { Col } from "react-bootstrap";

const Instapost = ({ post }) => {
  return (
    <>
      
        <Col className="">
          <img
            src={post}
            alt="Instagram Post"
            className="img"
          />
        </Col>
     
    </>
  );
};

export default Instapost;

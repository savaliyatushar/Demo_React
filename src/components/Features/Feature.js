import React from "react";
import Cart from "./Card";
import { Col, Row } from "react-bootstrap";
import { IoCartOutline } from "react-icons/io5";
import { PiMedalThin } from "react-icons/pi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BsShieldPlus } from "react-icons/bs";




import "./Feature.css";


const Feature = () => {
  return (
    <section
      id="services"   
    >
      <div className="container pt-5 pb-5">
        <Row className="pt-5 pb-5">
          <Col>
            <Cart Heading={"FREE DELIVERY"} icon={<IoCartOutline />} />
          </Col>
          <Col>
            <Cart Heading={"QUALITY GUARANTEE"} icon={<PiMedalThin />} />
          </Col>
          <Col>
            <Cart Heading={"DAILY OFFERS"} icon={<MdOutlineLocalOffer />} />
          </Col>
          <Col>
            <Cart Heading={"100% SECURE PAYMENT"} icon={<BsShieldPlus />} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Feature;

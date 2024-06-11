import React from "react";
import "./W-product.css";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Buttons from "../Buttons/Button";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../features/cart/cartSlice";

const WatchResponsive = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const handleRemoveToCart = () => {
    dispatch(removeItemFromCart(product));
  };

  return (
    <section>
      <Row>
        <Col>
          <Card className="border-radius">
            <Card.Img className="img" variant="top" src={product?.img} />
          </Card>
          <div className="d-flex justify-content-between mt-2">
            <p className="text-dark mb-0 f-size text-uppercase">
              {product?.title}
            </p>
            <div className="ms-auto text-warning">
              <p className="text-color">${product?.price}</p>
            </div>
          </div>
          <Row>
            <Col sm={4}>
              <Buttons
                onClick={handleAddToCart}
                className="w-25 bg-primary p-0 border-0"
                button="Add"
              />
            </Col>
            <Col sm={4}>
              <Buttons
                onClick={handleRemoveToCart}
                className="w-25 p-0 bg-0 border-0 border-rounded-2"
                button="Remove"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default WatchResponsive;

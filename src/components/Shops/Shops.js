import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Buttons from "../Buttons/Button";
import { addItemToCart, removeItemFromCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

function Shops({ shoppost, shoptitle, shopprice }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart());
  };

  const handleRemoveToCart = () => {
    dispatch(removeItemFromCart());
  };

  return (
    <>
      <Card className="w-75 border-0">
        <Card.Img className="img border-0" src={shoppost} />
      </Card>
      <div className="d-flex justify-content-between w-75">
        <p className="text-dark mb-0 f-size text-uppercase pb-0 mb-0">
          {shoptitle}
        </p>
        <div className="ms-auto text-warning">
          <p className="text-color">{shopprice}</p>
        </div>
      </div>
      <Row className="w-75">
        <Col sm={6} className="p-0">
          <Buttons
            onClick={handleAddToCart}
            className="w-25 bg-primary pt-0 mt-0  border-0"
            button="Add"
          />
        </Col>

        <Col sm={6} className="p-0">
          <Buttons
            onClick={handleRemoveToCart}
            className="w-25 bg-secondary pt-0 mt-0 border-0"
            button="Remove"
          />
        </Col>
      </Row>
    </>
  );
}

export default Shops;

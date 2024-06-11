// pages/Cart/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../features/cart/cartSlice";
import "./Cart.css";
import Buttons from "../../components/Buttons/Button";
import Subscribes from "../../components/Subscribes/Subscribes";
import Instanav from "../../components/Insta/Insta-nav";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (item) => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <>
      <section className="hero-section position-relative bg-light-blue padding-medium">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="text-center padding-top no-padding-bottom">
                <h2 className="display-2 text-uppercase text-dark"> CART</h2>
                <span>
                  <Link to="/home" className=" text-decoration-none text-dark">
                    Home
                  </Link>
                  <span>/Cart</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="cart container mt-5 ">
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt={item.title} width={"100px"} />
                <div>
                  <h3>{item.title}</h3>
                  <span>${item.price}</span>
                </div>
                <Buttons
                  className="m-0 p-0 text-center"
                  onClick={() => handleRemoveFromCart(item)}
                  button={<MdDeleteForever className="icon" />}
                />
              </li>
            ))}
        </ul>
      </div>
      <div>
        <Subscribes />
      </div>
      <div>
        <Instanav />
      </div>
    </>
  );
};

export default Cart;

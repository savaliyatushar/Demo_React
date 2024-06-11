import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNavbar = () => {
  const itemCount = useSelector((state) => state.cart.itemCount);

  return (
    <Navbar expand="lg" fixed="top" className="bg-light">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          <img
            src="https://themewagon.github.io/MiniStore/images/main-logo.png"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <Nav.Link as={NavLink} to="/home" className="me-4">
              HOME
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="me-4">
              SERVICES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/products" className="me-4">
              PRODUCTS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/watches" className="me-4">
              WATCHES
            </Nav.Link>
            <Nav.Link as={NavLink} to="/sale" className="me-4">
              SALE
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className="me-4">
              BLOG
            </Nav.Link>
            <NavDropdown
              title="PAGES"
              id="basic-nav-dropdown"
              className="bg-light"
            >
              <NavDropdown.Item as={NavLink} to="/about">
                ABOUT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/blog">
                BLOG
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop">
                SHOP
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/cart">
                CART
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/checkout">
                CHECKOUT
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/singlepost">
                SINGLE POST
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/contact">
                CONTACT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="align-items-center ">
            <Link to="/" className="me-4 text-dark">
              <IoSearch />
            </Link>
            <Link to="/login" className="me-4 text-dark">
              <FaUser />
            </Link>
            <Link to="/cart" className="me-2 text-dark text-decoration-none">
              <FaShoppingCart />
              <span className="cricle  text-white ">{itemCount}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

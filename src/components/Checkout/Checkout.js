import React, { useState, useEffect } from "react";
import "./Checkout.css";
import { Col, Container, FloatingLabel, Row, Table } from "react-bootstrap";
import Subscribes from "../Subscribes/Subscribes";
import Instanav from "../Insta/Insta-nav";
import Form from "react-bootstrap/Form";         // FORM DATA STORE A LOCAL STORE
import Buttons from "../Buttons/Button";

function Checkout({ heading, heading2, totals, label }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    orderNotes: "",
    paymentMethod: "",
  });

  useEffect(() => {
    const savedFormData = JSON.parse(localStorage.getItem("checkoutFormData"));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkoutFormData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = () => {
    console.warn("data send :", formData);
    // Add your order placing logic here
  };

  return (
    <>
      <section className="form-padding">
        <Container>
          <Row>
            <Col>
              <h2 className="">{heading}</h2>
              <Form className="pt-4">
                <Form.Group>
                  <Form.Label>{label}</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="name"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="name "
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Company Name (optional)*</Form.Label>
                  <Form.Control
                    type="text"
                    name="companyName"
                    placeholder="Company "
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Country / Region*</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Canada">Canada</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Street Address*</Form.Label>
                  <Form.Control
                    type="text"
                    name="streetAddress1"
                    placeholder="House number and street name"
                    required
                    value={formData.streetAddress1}
                    onChange={handleInputChange}
                  />
                  <Form.Control
                    type="text"
                    name="streetAddress2"
                    className="mt-3"
                    placeholder="Appartments, suite, etc."
                    value={formData.streetAddress2}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Town /City*</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>State *</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                  >
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Texas">Texas</option>
                    <option value="San Jose">San Jose</option>
                    <option value="Houston">Houston</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Zip Code *</Form.Label>
                  <Form.Control
                    type="number"
                    name="zipCode"
                    placeholder="02184"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Phone *</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    placeholder="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mt-4">
                  <Form.Label>Email address *</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col className="md-d-flex">
              <h2 className="">{heading2}</h2>
              <Form>
                <Form.Group className="mt-4">
                  <Form.Label>Order notes (optional)</Form.Label>
                  <FloatingLabel controlId="floatinglabel1">
                    <Form.Control
                      as="textarea"
                      name="orderNotes"
                      placeholder="Notes about your order. Like special notes for delivery."
                      style={{ height: "100px" }}
                      value={formData.orderNotes}
                      onChange={handleInputChange}
                    />
                  </FloatingLabel>
                </Form.Group>
                <h2 className="mt-5">{totals}</h2>
                <Table className="cellspacing-0">
                  <tbody>
                    <tr>
                      <th>Subtotal</th>
                      <td className="">
                        <span className="text-primary">$2,370.00</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td>
                        <span>$</span>2,370.00
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="m-3 mt-5">
                  <Form>
                    <Form.Check
                      type="radio"
                      label="DIRECT BANK TRANSFER"
                      name="paymentMethod"
                      value="DIRECT BANK TRANSFER"
                      className="h6 pb-0"
                      onChange={handleInputChange}
                      checked={
                        formData.paymentMethod === "DIRECT BANK TRANSFER"
                      }
                    />
                    <span className="small d-block justify-content-start pt-0">
                      Make your payment directly into our bank account. Please
                      use your Order ID. Your order will be shipped after funds
                      have cleared in our account.
                    </span>
                    <Form.Check
                      type="radio"
                      label="CHECK PAYMENTS"
                      name="paymentMethod"
                      value="CHECK PAYMENTS"
                      className="h6 pb-0 mt-3"
                      onChange={handleInputChange}
                      checked={formData.paymentMethod === "CHECK PAYMENTS"}
                    />
                    <span className="small d-block justify-content-start pt-0">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </span>
                    <Form.Check
                      type="radio"
                      label="CASH ON DELIVERY"
                      name="paymentMethod"
                      value="CASH ON DELIVERY"
                      className="h6 pb-0 mt-3"
                      onChange={handleInputChange}
                      checked={formData.paymentMethod === "CASH ON DELIVERY"}
                    />
                    <span className="small d-block justify-content-start pt-0">
                      Pay with cash upon delivery.
                    </span>
                    <Form.Check
                      type="radio"
                      label="PAYPAL"
                      name="paymentMethod"
                      value="PAYPAL"
                      className="h6 pb-0 mt-2"
                      onChange={handleInputChange}
                      checked={formData.paymentMethod === "PAYPAL"}
                    />
                    <span className="small d-block justify-content-start pt-0">
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </span>
                    <Buttons
                      button={"PLACE AN ORDER"}
                      onClick={handlePlaceOrder}
                    />
                  </Form>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="mt-5">
        <Subscribes />
      </div>
      <div>
        <Instanav />
      </div>
    </>
  );
}

export default Checkout;



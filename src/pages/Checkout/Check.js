  import React from 'react'
  // import { Container } from 'react-bootstrap'
  import { Link } from 'react-router-dom'
  import Checkout from '../../components/Checkout/Checkout';
  function Check() {
    return (
      <>
        {/* <Container> */}
        <section className="hero-section position-relative bg-light-blue padding-medium">
          <div className="hero-content">
            <div className="container">
              <div className="row">
                <div className="text-center padding-top no-padding-bottom">
                  <h2 className="display-2 text-uppercase text-dark">checkout</h2>
                  <span>
                    <Link to="/home" className=" text-decoration-none text">
                      home
                    </Link>
                    <span>/checkout</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <Checkout
            heading={"BILLING DETAILS"}
            heading2={"ADDITIONAL INFORMATION"}
            totals={"CART TOTALS"}
            label={"First Name*"}
          />
        </div>
        {/* </Container> */}
      </>
    );
  }

  export default Check;



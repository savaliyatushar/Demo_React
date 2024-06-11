import React from 'react'
import { Link } from 'react-router-dom';
import Contact from '../../components/Contact/Contact';
import Subscribes from '../../components/Subscribes/Subscribes';
import Instanav from '../../components/Insta/Insta-nav';
function Contactpage() {
  return (
    <>
      <section className="hero-section position-relative bg-light-blue padding-medium">
        <div className="hero-content">
          <div className="container">
            <div className="row">
              <div className="text-center padding-top no-padding-bottom">
                <h2 className="display-2 text-uppercase text-dark">Contact</h2>
                <span>
                  <Link to="/home" className=" text-decoration-none text-dark">
                    home
                  </Link>
                  <span>/contact</span>
                </span> 
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Contact contact={"CONTACT INFO"} manage={"MANAGEMENT"} />
      </div>
      <div>
        <Subscribes />
      </div>
      <div>
        <Instanav />
      </div>
    </>
  );
}

export default Contactpage
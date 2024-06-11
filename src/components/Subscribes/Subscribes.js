import React from 'react'
import Subcontent from './Subcontent';
import { Container } from 'react-bootstrap';
import "./Subscribes.css";
const Subscribes=()=> {
  return (
    <>
      <section className="container-grid padding-large position-relative overflow-hidden">
        <Container>
          <Subcontent />
        </Container>
      </section>
    </>
  );
};
export default Subscribes;
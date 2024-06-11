import { Row,Col, Container,Card } from "react-bootstrap";
import "./Sale.css";
import Buttons from "../Buttons/Button";

const Sale=()=> {
  return (
    <>
      <section className="d-flex bak-color" id="sale">
        <Container className="img-back-color">
          <Row>
            <Col sm={4}>
              <div className="mt-5 pt-5 ms-5">
                <div className="">
                  <p className="mb-0 h4">10%</p>
                </div>
                <div>
                  <h3 className="h1 text-black">
                    NEW YEAR <br />
                    SALE
                  </h3>
                  {/* <Butt on Buttons={""} pera={} /> */}
                  <Buttons onclik={""} button={"SHOP SALE"}/>
                </div>
              </div>
            </Col>
            <Col>
              <Card.Img
                variant="right"
                className="img-fluid"
                src="https://webflow-assets.ls.graphics/625816a3416990dd61391b9b/65366adb67a9adb0f6785c2d_012_Black-Titanium.webp"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sale;
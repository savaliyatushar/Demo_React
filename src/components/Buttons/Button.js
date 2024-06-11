import React from "react";
import Button from "react-bootstrap/Button";
import "./Button.css";
// import { propTypes } from "react-bootstrap/esm/Image";

const Buttons = ({ button, onClick, className}) => {
  return (
    <section>
      <Button
        onClick={onClick}
        type="button"
        className={className}
        // className="btn text-white text-uppercase mt-3"
        variant="dark"
      >
        {button}
        
      </Button>
    </section>
  );
};

export default Buttons;

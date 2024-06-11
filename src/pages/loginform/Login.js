import React, { useState } from "react";
import { Col, Container, Form, Row, Alert } from "react-bootstrap";
import axios from "axios";
import "./Login.css";
import Buttons from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const [username, setusername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const validusername = "user@gmail.com";
  const validPassword = "12345678";

  const saveuser = async () => {
    try {
      const response = await axios.post("http://192.168.113.13:3303/loginapi", {
        username: username,
        password: password,
      });
      console.log("resopns", response);
      login(username, password);
      navigate("/home");
    } catch (error) {
      console.error("There was an error", error);
      setError("There was an error");
    }
    // } else {
    //   setError("Invalid email or password.");
    // }
  };

  return (
    <Container
      fluid
      className="d-flex bg-watch bg-primary align-items-center justify-content-center min-vh-100"
    >
      <Row className="w-100">
        <Col xs={6} lg={7}></Col>
        <Col xs={6} md={6} lg={4} className="formjustify">
          <Form className="p-4 height width shadow-lg rounded bg-light">
            <div className="pt-3">
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="border-danger-2">
                  Email address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>
            </div>
            <div className="pt-3">
              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
            </div>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form.Text className="text-muted pt-0">
              <a href="/" className="text-decoration-none">
                Registration
              </a>
            </Form.Text>
            <div className="pt-4 text-center">
              <Buttons onClick={saveuser} button="Login" />
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

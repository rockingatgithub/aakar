import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NavbarTwo(props) {
  return (
    <Container fluid className="my-container">
      <Row>
        <Col xs={0} md={3} lg={6}></Col>
        <Col xs={4} md={3} lg={2}>
          <img
            src="https://img.techpowerup.org/200826/hh-1.png"
            style={{ height: "24px", width: "24px" }}
          />
          Consult Online
        </Col>
        <Col xs={4} md={3} lg={2}>
          <img
            src="https://img.techpowerup.org/200826/mm-1.png"
            style={{ height: "24px", width: "24px" }}
          />
          Download Our App
        </Col>
        <Col xs={4} md={3} lg={2}>
          <img
            src="https://img.techpowerup.org/200826/login-1.png"
            style={{ height: "24px", width: "24px" }}
          />
          Login/SignUp
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarTwo;

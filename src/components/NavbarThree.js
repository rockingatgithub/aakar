import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NavbarThree(props) {
  return (
    // <div id="navbar-3-container">
    //   <span className="navbar-3-items">Home</span>
    //   <span className="navbar-3-items">About Us</span>
    //   <span className="navbar-3-items">Join Us</span>
    //   <span className="navbar-3-items">Contact Us</span>
    //   <span className="navbar-3-items">Gallery</span>
    // </div>

    <Container fluid className="my-container">
      <Row noGutters={true}>
        <Col xs={0} md={2} lg={7}></Col>
        <Col xs={2} md={2} lg={1}>
          <span style={{ fontWeight: "600" }}>Home</span>
        </Col>
        <Col xs={3} md={2} lg={1}>
          About Us
        </Col>
        <Col xs={2} md={2} lg={1}>
          Join Us
        </Col>
        <Col xs={3} md={2} lg={1}>
          Contact
        </Col>
        <Col xs={2} md={2} lg={1}>
          Gallery
        </Col>
        <Col xs={0} md={0} lg={0}></Col>
      </Row>
    </Container>
  );
}

export default NavbarThree;

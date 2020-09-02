import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function NavbarOne(props) {
  return (
    <Container fluid className="my-container">
      <Row noGutters={true}>
        <Col xs={7} md={3} id="cases-number">
          <span className="navbar-1-text">
            No. of COVID-19 Cases: 000000(INDIA)
          </span>
        </Col>
        <Col xs={0} md={7}></Col>
        <Col xs={5} md={2} id="call-text">
          <span className="navbar-1-text">
            <img
              src="https://img.techpowerup.org/200826/c-copy-1.png"
              style={{ height: "40px", width: "50px" }}
            />
            CALL NOW!
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default NavbarOne;

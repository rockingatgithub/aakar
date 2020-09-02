import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Specialist(props) {
  return (
    <Container className="my-container" fluid>
      <Row noGutters>
        <Col className="spec-row">
          <span id="spec-heading">Are you a Specialists?</span>
          <span id="spec-para">
            Be a part of the next big thing towards mental healthcare. Join us
            in our journey of revolutionizing mental healthcare delivery by
            harnessing technology to help millions lead mentally peacefully and
            healthier lives.
          </span>
          <button id="know-more-btn">KNOW MORE</button>
        </Col>
      </Row>
    </Container>
  );
}

export default Specialist;

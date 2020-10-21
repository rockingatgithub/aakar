import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function LastRow(props) {
  return (
    <Container className="lastrow" fluid>
      <Row>
        <Col>
          <ul className="mylastlist">
            <li>CONTENT</li>
            <li>Resources</li>
            <li>Blog</li>
          </ul>
        </Col>
        <Col>
          <ul className="mylastlist">
            <li>INFORMATION</li>
            <li>About Us</li>
            <li>Be a part</li>
          </ul>
        </Col>
        <Col>
          <ul className="mylastlist">
            <li>HELP</li>
            <li>Support</li>
            <li>Contact</li>
          </ul>
        </Col>
        <Col>
          <ul className="mylastlist">
            <li>CONNECT</li>
          </ul>
        </Col>
      </Row>
      <Row className="blockrow">
        <Col lg={3}></Col>
        <Col lg={6} id="lastquote">
          "@2020 AAKAR Healing is not linear."
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
}

export default LastRow;

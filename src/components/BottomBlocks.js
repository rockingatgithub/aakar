import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function BottomBlocks(props) {
  return (
    <Container className="bottomblocks">
      <Row>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default BottomBlocks;

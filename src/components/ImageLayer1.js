import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "./Rectangle_16.png";
import img2 from "./Rectangle_15.png";
import img3 from "./Rectangle_14.png";
import img4 from "./Rectangle_13.png";
import img5 from "./Rectangle_12.png";
import img6 from "./Rectangle_11.png";

function ImageLayer1(props) {
  return (
    <Container className="my-container" fluid>
      <Row noGutters>
        <Col>
          <img
            src={img1}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
        <Col>
          <img
            src={img2}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
        <Col>
          <img
            src={img3}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <img
            src={img4}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
        <Col>
          <img
            src={img5}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
        <Col>
          <img
            src={img6}
            style={{
              height: "400px",
              width: "300px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default ImageLayer1;

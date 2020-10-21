import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function CarouselBody(props) {
  return (
    <Container className="carousel-holder my-container" fluid>
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div className="carousel-text-box">
            <div id="carousel-text"> Your Happiness Journey Simplified </div>
            <div id="carousel-text-2">
              {" "}
              Getting out of your Depression and Anxiety is much easier now with
              AAKAR{" "}
            </div>
            <div id="carousel-text-3">Speak to our medical experts now!</div>
            <button id="call-button">
              <img
                alt="my-header"
                src="https://img.techpowerup.org/200829/c-copy-2.png"
                style={{ height: "40px", width: "50px" }}
              />
              CALL NOW!
            </button>
          </div>
        </Col>
        <Col lg={2} md={0} sm={0}></Col>
        <Col lg={4} md={6} sm={6}>
          <div id="full-image-1">
            <img
              alt="my-header"
              id="first-figure"
              src="https://img.techpowerup.org/200829/istockphoto-1135325949-612x612-1.png"
              style={{
                height: "330px",
                width: "370px",
                marginTop: "35px",
                position: "absolute",
                zIndex: "1020",
              }}
            />
            <div id="second-figure"></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselBody;

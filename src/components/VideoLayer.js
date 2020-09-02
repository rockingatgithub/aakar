import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function VideoLayer(props) {
  return (
    <Container id="video-container" className="my-container">
      <Row noGutters>
        <Col>
          <div id="video-heading">
            <span id="video-heading-text"> INTRODUCTORY VIDEO</span>
          </div>
          <video id="video-tag" controls autoPlay>
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
          </video>
        </Col>
      </Row>
    </Container>
  );
}

export default VideoLayer;

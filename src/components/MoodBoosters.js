import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "./moodbooster0.png";
import img2 from "./moodbooster1.png";
import img3 from "./moodbooster2.png";
import img4 from "./moodbooster3.png";
import img5 from "./moodbooster4.png";

class MoodBoosters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageContent: "0",
    };
  }

  onHover = (n) => {
    console.log(n);
    this.setState({
      imageContent: n,
    });
  };
  render() {
    return (
      <Container fluid>
        <Row className="buttonsrow">
          <Col lg={5}>
            <div id="button-group">
              <button
                className="vertical-button"
                onClick={() => this.onHover("1")}
              >
                JOKES
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("2")}
              >
                BRAINSTORMING GAMES
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("3")}
              >
                MEDITATION
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("4")}
              >
                AUDIO VISUALS
              </button>
            </div>
          </Col>
          <Col lg={7}>
            {this.state.imageContent === "0" && (
              <div>
                {" "}
                <img alt="primary" src={img1} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Some mood lifters and boosters which are a sidekick to your
                  day to day life.
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "1" && (
              <div>
                {" "}
                <img alt="primary" src={img2} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Haha! Laugh till your tummy aches, Jokes that makes you laugh.
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "2" && (
              <div>
                {" "}
                <img alt="primary" src={img3} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Give your BRAIN some power pills to increase its power.
                </div>{" "}
              </div>
            )}

            {this.state.imageContent === "3" && (
              <div>
                {" "}
                <img alt="primary" src={img4} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Meditate and travel someplace else form your chaotic mind.
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "4" && (
              <div>
                {" "}
                <img alt="primary" src={img5} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Find yourself in some of the audios and visuals that we
                  provide here.
                </div>{" "}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MoodBoosters;

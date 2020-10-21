import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./knowyourselflogo.png";
import img1 from "./selfcare.png";
import img2 from "./knowimage2.png";
import img3 from "./knowimage3.png";
import img4 from "./knowimage4.png";
import img5 from "./knowimage5.png";
import img6 from "./knowimage6.png";
import img7 from "./knowimage7.png";
import img8 from "./knowimage8.png";

class KnowYourself extends Component {
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
        <Row>
          <Col id="knowimagecol">
            <img
              alt="header-logo"
              src={logo}
              style={{ height: "126px", width: "100%" }}
            />
          </Col>
        </Row>
        <Row className="buttonsrow">
          <Col lg={5}>
            <div id="button-group">
              <button
                className="vertical-button"
                onClick={() => this.onHover("1")}
              >
                MOOD TRACKER
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("2")}
              >
                PERSONAL INVENTORY
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("3")}
              >
                DEPRESSION
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("4")}
              >
                STRESS, PANIC, ANXIETY
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("5")}
              >
                THINKING PATTERN
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("6")}
              >
                TRAUMA
              </button>
              <button
                className="vertical-button"
                onClick={() => this.onHover("7")}
              >
                RELATIONSHIP ISSUES
              </button>
            </div>
          </Col>
          <Col lg={7}>
            {this.state.imageContent === "0" && (
              <div>
                {" "}
                <img alt="primary" src={img1} className="hoverimage" />{" "}
                <div className="hoverimagecaption"></div>{" "}
              </div>
            )}
            {this.state.imageContent === "1" && (
              <div>
                {" "}
                <img alt="primary" src={img2} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Keep a track of your mood that helps you know yourself better!
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "2" && (
              <div>
                {" "}
                <img alt="primary" src={img3} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  If you dont know what you are facing, answer some questions
                  and get aware of the reality. All by yourself!
                </div>{" "}
              </div>
            )}

            {this.state.imageContent === "3" && (
              <div>
                {" "}
                <img alt="primary" src={img4} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  “Depression is when you stop loving things you love”. These
                  questionare will help us know at what stage you are at and
                  give you the best possible remedy.{" "}
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "4" && (
              <div>
                {" "}
                <img alt="primary" src={img5} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Stressed? Panicked? Suffering from Anxiety? Well, don't worry!
                  We are here with you in all your troubles. Let us know more
                  about it.
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "5" && (
              <div>
                {" "}
                <img alt="primary" src={img6} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  We all think differently, isn't it? If you are having trouble
                  with your thoughts get along with us and we will lead you to
                  refinement.{" "}
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "6" && (
              <div>
                {" "}
                <img alt="primary" src={img7} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  Are you stuck with an unwanted incident? Share it with us and
                  we will find you a way out.
                </div>{" "}
              </div>
            )}
            {this.state.imageContent === "7" && (
              <div>
                {" "}
                <img alt="primary" src={img8} className="hoverimage" />{" "}
                <div className="hoverimagecaption">
                  “All relationships go through hell, real relationships gets
                  through it”. Answer few questions and we will help you with
                  it.
                </div>{" "}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default KnowYourself;

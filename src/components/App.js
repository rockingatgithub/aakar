import React, { Component } from "react";
import { Dropdown, Col, Row, Container } from "react-bootstrap";
import NavbarOne from "./NavbarOne";
import NavbarTwo from "./NavbarTwo";
import NavbarThree from "./NavbarThree";
import CarouselBody from "./CarouselBody";
import ImageLayer1 from "./ImageLayer1";
import VideoLayer from "./VideoLayer";
import Specialist from "./Specialist";
import BottomBlocks from "./BottomBlocks";
import LastRow from "./LastRow";
import KnowYourself from "./KnowYourself";
import MoodBoosters from "./MoodBoosters";
import Blogs from "./Blogs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      know: false,
      mood: false,
      blogs: false,
    };
  }

  knowHandler = () => {
    this.setState({
      home: false,
      know: true,
      mood: false,
      blogs: false,
    });
  };

  moodHandler = () => {
    this.setState({
      home: false,
      know: false,
      mood: true,
      blogs: false,
    });
  };

  blogHandler = () => {
    this.setState({
      home: false,
      know: false,
      mood: false,
      blogs: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <NavbarOne />
        <NavbarTwo />
        <NavbarThree />
        <Container fluid className="my-container container-4">
          <Row noGutters={true}>
            <Col md={1}></Col>
            <Col md={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn-edit"
                  onClick={this.knowHandler}
                >
                  Know Yourself Better
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn-edit"
                  onClick={this.moodHandler}
                >
                  Mood Lifters & Boosters
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn-edit"
                  onClick={this.blogHandler}
                >
                  Exam Fear & Phobia
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn-edit"
                >
                  Book Your Therapist
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={2}>
              <Dropdown>
                <Dropdown.Toggle
                  variant="secondary"
                  id="dropdown-basic"
                  className="btn-edit"
                >
                  Blog & Articles
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col md={1} style={{ alignSelf: "center" }}>
              FAQ'S
            </Col>
          </Row>
        </Container>
        {this.state.home && (
          <React.Fragment>
            <CarouselBody />
            <ImageLayer1 />
            <VideoLayer />
            <Specialist />
            <BottomBlocks />
          </React.Fragment>
        )}
        {this.state.know && <KnowYourself />}
        {this.state.mood && <MoodBoosters />}
        {this.state.blogs && <Blogs />}
        <LastRow />
      </React.Fragment>
    );
  }
}

export default App;

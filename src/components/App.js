import React, { Component } from 'react'
import { Dropdown, Col, Row, Container } from 'react-bootstrap'
import NavbarOne from './NavbarOne'
import NavbarTwo from './NavbarTwo'
import NavbarThree from './NavbarThree'
import CarouselBody from './CarouselBody'
import ImageLayer1 from './ImageLayer1'
import VideoLayer from './VideoLayer'
import Specialist from './Specialist'
import BottomBlocks from './BottomBlocks'
import LastRow from './LastRow'
import KnowYourself from './KnowYourself'
import MoodBoosters from './MoodBoosters'
import Blogs from './Blogs'
import Questionnaire from './Questionnaire'
import Questionnaire2 from './Questionnaire2'
import Questionnaire3 from './Questionnaire3'
import Questionnaire4 from './Questionnaire4'
import Questionnaire5 from './Questionnaire5'
import MoodTracker from './MoodTracker'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            know: false,
            mood: false,
            blogs: false,
            screen1: false,
            screen2a: false,
            screen2b: false,
            screen3: false,
            screen4: false,
        }
    }

    knowHandler = () => {
        this.setState({
            home: false,
            know: true,
            mood: false,
            blogs: false,
        })
    }

    moodHandler = () => {
        this.setState({
            home: false,
            know: false,
            mood: true,
            blogs: false,
        })
    }

    blogHandler = () => {
        this.setState({
            home: false,
            know: false,
            mood: false,
            blogs: true,
        })
    }

    homeHandler = () => {
        this.setState({
            home: true,
            know: false,
            mood: false,
            blogs: false,
        })
    }

    changeScreen = (num) => {
        if (num === 1) {
            this.setState({
                know: false,
                screen1: true,
                screen2a: false,
                screen2b: false,
                screen3: false,
                screen4: false,
            })
        }
        if (num === 2) {
            this.setState({
                know: false,
                screen1: false,
                screen2a: true,
                screen2b: false,
                screen3: false,
                screen4: false,
            })
        }
        if (num === 3) {
            this.setState({
                know: false,
                screen1: false,
                screen2a: false,
                screen2b: true,
                screen3: false,
                screen4: false,
            })
        }
        if (num === 4) {
            this.setState({
                know: false,
                screen1: false,
                screen2a: false,
                screen2b: false,
                screen3: true,
                screen4: false,
            })
        }
        if (num === 5) {
            this.setState({
                know: false,
                screen1: false,
                screen2a: false,
                screen2b: false,
                screen3: false,
                screen4: true,
            })
        }
    }

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
                                    <Dropdown.Item href="#/action-1">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={3}>
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
                                    <Dropdown.Item href="#/action-1">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        {/* <Col md={2}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                    className="btn-edit"
                                    onClick={this.homeHandler}
                                >
                                    Exam Fear & Phobia
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col> */}
                        <Col md={3}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic"
                                    className="btn-edit"
                                >
                                    Book Your Therapist
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        Action
                                    </Dropdown.Item>
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
                                    Blog & Articles
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        Something else
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={1} style={{ alignSelf: 'center' }}>
                            FAQ'S
                        </Col>
                    </Row>
                </Container>
                {this.state.home && (
                    <React.Fragment>
                        <CarouselBody />
                        <ImageLayer1 />
                        <VideoLayer />
                        <MoodTracker/>
                        <Specialist />
                        <BottomBlocks />
                    </React.Fragment>
                )}
                {this.state.know && (
                    <KnowYourself changeScreen={this.changeScreen} />
                )}
                {this.state.screen1 && (
                    <Questionnaire changeScreen={this.changeScreen} />
                )}
                {this.state.screen2a && (
                    <Questionnaire2 changeScreen={this.changeScreen} />
                )}
                {this.state.screen2b && (
                    <Questionnaire3 changeScreen={this.changeScreen} />
                )}
                {this.state.screen3 && (
                    <Questionnaire4 changeScreen={this.changeScreen} />
                )}
                {this.state.screen4 && (
                    <Questionnaire5 changeScreen={this.changeScreen} />
                )}
                {this.state.mood && <MoodBoosters />}
                {this.state.blogs && <Blogs />}

                <LastRow />
            </React.Fragment>
        )
    }
}

export default App

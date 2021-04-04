import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from './knowyourselflogo.png'
import img1 from './selfcare.png'

class KnowYourself extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageContent: '0',
            age: 18,
        }
    }

    onHover = (n) => {
        console.log(n)
        this.setState(
            {
                imageContent: n,
            },
            () => {
                this.props.changeScreen(1)
            }
        )
    }

    onAgeHandler = (e) => {
        this.setState({
            age: parseInt(e.target.value) || 0,
        })
    }

    onClickHandler = () => {
        this.props.changeScreen(1)
    }

    render() {
        const { user, signOut, signInWithGoogle } = this.props

        return (
            <Container fluid>
                <Row>
                    <Col id="knowimagecol">
                        <img
                            alt="header-logo"
                            src={logo}
                            style={{ height: '126px', width: '100%' }}
                        />
                    </Col>
                </Row>
                <Row className="buttonsrow">
                    <Col lg={3}>
                        <div
                            className="login-text"
                            onClick={!user && signInWithGoogle}
                        >
                            {user ? (
                                <span>
                                    HEY THERE, ENTER YOUR AGE AND CONTINUE
                                </span>
                            ) : (
                                <span>SUBSCRIBE AND LOGIN FROM HERE</span>
                            )}
                        </div>
                        {/* <div id="button-group">
                            <button
                                className="vertical-button"
                                onClick={() => this.onHover('1')}
                            >
                                ADULT
                            </button>
                            <button
                                className="vertical-button"
                                onClick={() => this.onHover('2')}
                            >
                                ADOLESCENCE
                            </button>
                            <button
                                className="vertical-button"
                                onClick={() => this.onHover('3')}
                            >
                                DEPRESSION
                            </button>
                            <button
                                className="vertical-button"
                                onClick={() => this.onHover('4')}
                            >
                                STRESS, PANIC, ANXIETY
                            </button>
                        </div> */}
                    </Col>
                    <Col lg={7}>
                        {this.state.imageContent === '0' && (
                            <div>
                                <img
                                    alt="primary"
                                    src={img1}
                                    className="hoverimage"
                                />
                                <div className="hoverimagecaption"></div>
                            </div>
                        )}
                        {/* {this.state.imageContent === '1' && (
                            <div>
                                <img
                                    alt="primary"
                                    src={img2}
                                    className="hoverimage"
                                />
                                <div className="hoverimagecaption">
                                    Keep a track of your mood that helps you
                                    know yourself better!
                                </div>
                            </div>
                        )}
                        {this.state.imageContent === '2' && (
                            <div>
                                <img
                                    alt="primary"
                                    src={img3}
                                    className="hoverimage"
                                />
                                <div className="hoverimagecaption">
                                    If you dont know what you are facing, answer
                                    some questions and get aware of the reality.
                                    All by yourself!
                                </div>
                            </div>
                        )}

                        {this.state.imageContent === '3' && (
                            <div>
                                <img
                                    alt="primary"
                                    src={img4}
                                    className="hoverimage"
                                />
                                <div className="hoverimagecaption">
                                    “Depression is when you stop loving things
                                    you love”. These questionare will help us
                                    know at what stage you are at and give you
                                    the best possible remedy.
                                </div>
                            </div>
                        )}
                        {this.state.imageContent === '4' && (
                            <div>
                                <img
                                    alt="primary"
                                    src={img5}
                                    className="hoverimage"
                                />
                                <div className="hoverimagecaption">
                                    Stressed? Panicked? Suffering from Anxiety?
                                    Well, don't worry! We are here with you in
                                    all your troubles. Let us know more about
                                    it.
                                </div>
                            </div>
                        )} */}
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row className="text-row">
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <div className="age-input">
                            Enter Age:
                            <input
                                type="number"
                                min={6}
                                className="age-input"
                                value={this.state.age}
                                onChange={this.onAgeHandler}
                            />
                            <button
                                className="age-submit"
                                onClick={this.onClickHandler}
                            >
                                Submit
                            </button>
                        </div>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                <Row className="text-row">
                    <Col lg={3}></Col>
                    <Col lg={6}>
                        Click on Submit! Answer some questions and we will take
                        you to a journey towards peace.
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        )
    }
}

export default KnowYourself

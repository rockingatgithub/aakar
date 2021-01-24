import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ExtHappy from './static/extremlyhappy.png'
import Happy from './static/happy.png'
import Straight from './static/straight.png'
import FaceFrowb from './static/frowbface.png'
import WaterHead from './static/waterhead.png'
import Sad from './static/sad.png'

function MoodTracker(props) {
    return (
        <Container>
            <Row>
                <Col className="mood-head-box">
                    <h1 className="txt-cen">Mood Tracker</h1>
                    <h5 className="txt-cen">
                        Keep your moods in check! We are here to handle your
                        thoughts.
                        <br />
                        Select all that apply to your current mood
                    </h5>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="emoji-box">
                        <img
                            src={WaterHead}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Grumpy / Irritated</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                    <div className="emoji-box">
                        <img
                            src={FaceFrowb}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Dull / Terrible</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                    <div className="emoji-box">
                        <img
                            src={Happy}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Nice / Good</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                </Col>
                <Col>
                    <div className="emoji-box">
                        <img
                            src={Sad}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Exhausted / Tired</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                    <div className="emoji-box">
                        <img
                            src={Straight}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Alright</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                    <div className="emoji-box">
                        <img
                            src={ExtHappy}
                            style={{ maxHeight: '120px', maxWidth: '120px' }}
                        />
                        <span className="mood-text">Awesome</span>
                        <input type="checkbox" className="mood-check" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="txt-cen">Selected: _________</h5>
                </Col>
            </Row>
        </Container>
    )
}

export default MoodTracker

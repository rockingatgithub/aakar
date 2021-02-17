import React, { Component } from 'react'
import {
    Container,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    Table,
} from 'react-bootstrap'
import Leadlogo from './knowyourselflogo.png'

class Questionnaire5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qarr: [
                [
                    '1. Isolation:',
                    '-Somebody present',
                    '-Somebody nearby, or in visual or vocal contact',
                    '-No-one nearby or in visual or vocal contact',
                ],
                [
                    '2. Timing:',
                    '-Intervention probable',
                    '-Intervention unlikely',
                    '-Intervention highly unlikely',
                ],
                [
                    '3. Precautions against discovery/ intervention:',
                    '-No precautions.',
                    '-Passive precautions, e.g. avoiding others but doing nothing to prevent their intervention, alone in room with unlocked door.',
                    '-Active precautions, e.g. locked door.',
                ],
                [
                    '4. Acting to get help during/after attempt:',
                    '-Notified potential helper regarding attempt',
                    '-Contacted but did not specifically notify potential helper regarding attempt',
                    '-Did not contact or notify potential helper',
                ],
                [
                    '5. Final acts in anticipation of death (e.g., will, gifts, insurance):',
                    '-None',
                    '-Thought about or made some arrangements',
                    '-Made definite plans or completed arrange',
                ],
                [
                    '6. Active preparation for attempt:',
                    '-None',
                    '-Minimal to moderate',
                    '-Extensive',
                ],
                [
                    '7. Suicide note:',
                    '-Absence of note',
                    '-Note written or torn up, or thought about',
                    '-Presence of note',
                ],
                [
                    '8. Overt communication of intent before attempt:',
                    '-None',
                    '-Equivocal communication',
                    '-Unequivocal communication',
                ],
                [
                    '9. Alleged purpose or intent:',
                    '-To manipulate environment, get attention, revenge',
                    '-Components of 0 and 2',
                    '-To escape, solve problems',
                ],
                [
                    '10. Expectations of fatality:',
                    '-Thought that death was unlikely',
                    '-Thought that death was possible, not probable',
                    '-Thought that death was probable or certain',
                ],
                [
                    '11. Conception of method’s lethality:',
                    '-Did less to self that thought would be lethal',
                    '-Was unsure if action would be lethal',
                    '-Equaled or exceeded what s/he thought would be lethal',
                ],
                [
                    '12. Seriousness of attempt:',
                    '-Did not seriously attempt to end life',
                    '-Uncertain about seriousness to end life',
                    '-Seriously attempted to end life',
                ],
                [
                    '13. Attitude towards living/dying:',
                    '-Did not want to die',
                    '-Components of 0 and 2',
                    '-Wanted to die',
                ],
                [
                    '14. Conception of medical rescuability:',
                    '-Thought death would be unlikely with medical attention.',
                    '-Was uncertain whether death could be averted by medical attention.',
                    '-Was certain of death even with medical attention',
                ],
                [
                    '15. Degree of premeditation:',
                    '-None, impulsive',
                    '-Contemplated for 3 hours or less before attempt',
                    '-Contemplated for more than 3 hours before attempt',
                ],
            ],
        }
    }

    handleChangePrev =() => {
        this.props.changeScreen(4)
    }

    render() {
        return (
            <Container className="screening-level-color" fluid>
                <Row>
                    <Col>
                        <div className="upper-row">
                            <img
                                src={Leadlogo}
                                alt="header-logo"
                                style={{ height: '126px', width: '100%' }}
                            />
                            <h3 className="questionslist-heading">
                                Level 4 Screening
                            </h3>

                            <div className="only-line"></div>

                            <div className="head-text">
                                Suicide Risk Assessment Form
                            </div>
                        </div>
                        <Table responsive bordered hover>
                            <tbody>
                                {this.state.qarr.map((quesarr, ind) => (
                                    <tr>
                                        <td key={ind}>{quesarr[0]}</td>

                                        <td>
                                            <ListGroup className="questions-list">
                                                {quesarr.map((ques, subind) =>
                                                    subind !== 0 ? (
                                                        <ListGroupItem className="no-border question-list-item">
                                                            {ques}
                                                        </ListGroupItem>
                                                    ) : null
                                                )}
                                            </ListGroup>
                                        </td>
                                        <td>
                                            <ListGroup className="questions-list">
                                                <ListGroupItem className="no-border question-list-item">
                                                    0
                                                </ListGroupItem>
                                                <ListGroupItem className="no-border question-list-item">
                                                    1
                                                </ListGroupItem>
                                                <ListGroupItem className="no-border question-list-item">
                                                    2
                                                </ListGroupItem>
                                            </ListGroup>
                                        </td>
                                        <td></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="total-row">
                            <div className="last-row-text">
                                <span className="dark-text">Total:</span>
                                <span>____YES's and ____NO's</span>
                                <span className="subtext">
                                    (age group 11 to 19 years)
                                </span>
                            </div>
                            <div className="last-row-nav">
                                <button
                                    className="no-design-btn"
                                    onClick={this.props.homeHandler}
                                >
                                    Back to Home
                                </button>
                                <button
                                    className="next-button"
                                    onClick={this.handleChangePrev}
                                >
                                    PREV
                                </button>
                                <button className="next-button">SUBMIT</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Questionnaire5

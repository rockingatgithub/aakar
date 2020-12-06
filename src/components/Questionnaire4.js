import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import Leadlogo from './knowyourselflogo.png'

class Questionnaire4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qarr: [
                '1. Did you have a strong desire or sense of compulsion to use substance? (‘craving’).',
                '2. Did you find it difficult or impossible to control your use of substance?.',
                '3. Did you experience withdrawal symptoms after going without substance for a while?',
                '4. Did you use substance to relieve or avoid withdrawal symptoms?',
                '5. Did you notice that you required more substance to achieve the same physical or mental effects? (‘tolerance’).',
                '6. Over time, did you tend not to vary your pattern of use of substance?',
                '7. Did you increasingly neglect other pleasures or interests in favour of using substance?',
                '8. Did you experience psychological or physical harm because of your substance use?',
                '9. Did you persist with using substance, despite clear evidence of harmful consequences?',
                '10. How long did you experience this pattern of problem drug use?',
            ],
        }
    }

    handleChange = () => {
        this.props.changeScreen(5)
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
                                Level 3 Screening
                            </h3>
                            <div className="only-line"></div>
                            <div className="head-text">
                                Psychoactive Substance Use Syndromes Module
                            </div>
                        </div>
                        <ListGroup className="questions-list">
                            {this.state.qarr.map((question, ind) => (
                                <ListGroupItem
                                    key={ind}
                                    className="question-list-item"
                                >
                                    <div className="question-box">
                                        <span className="question-text">
                                            {question}
                                        </span>
                                        {ind !== 9 ? (
                                            <div className="button-group">
                                                <button className="answer-button">
                                                    YES
                                                </button>
                                                <button className="answer-button answer-no-button">
                                                    NO
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <div>_____in months</div>
                                                <div>_____in years</div>
                                            </div>
                                        )}
                                    </div>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                        <div className="total-row">
                            <div className="last-row-text">
                                <span className="dark-text">Total:</span>
                                <span>____YES's and ____NO's</span>
                                <span className="subtext">
                                    (age group 11 to 19 years)
                                </span>
                            </div>
                            <div className="last-row-nav">
                                <button className="no-design-btn">
                                    {' '}
                                    Back to Home
                                </button>
                                <button
                                    className="next-button"
                                    onClick={this.handleChange}
                                >
                                    NEXT
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Questionnaire4

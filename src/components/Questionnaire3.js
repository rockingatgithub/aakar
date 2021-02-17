import React, { Component } from 'react'
import {
    Container,
    Row,
    Col,
    Table,
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap'
import Leadlogo from './knowyourselflogo.png'

class Questionnaire3 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headarr: [
                'During the past TWO (2) WEEKS, how much (or how often) have you...',
                'None',
                'Slight',
                'Mild',
                'Moderate',
                'Severe',
            ],
            bodyarr: [
                '1. Been bothered by stomachaches, headaches, or other aches and pains?',
                '2. Worried about your health or about getting sick?',
                '3. Been bothered by not being able to fall asleep or stay asleep, or by waking up too early?',
                '4. Been bothered by not being able to pay attention when you were in class or doing homework or reading a book or playing a game?',
                '5. Had less fun doing things than you used to?',
                '6. Felt sad or depressed for several hours?',
                '7. Felt more irritated or easily annoyed than usual?',
                '8.  Felt angry or lost your temper?',
                '9. Started lots more projects than usual or done more risky things than usual?',
                '10. Slept less than usual but still had a lot of energy?',
                '11. Felt nervous, anxious, or scared?',
                '12. Not been able to stop worrying?',
                '13. Not been able to do things you wanted to or should have done, because they made you feel nervous?',
                '14. Heard voices—when there was no one there—speaking about you or telling you what to do or saying bad things to you?',
                '15. Had visions when you were completely awake—that is, seen something or someone that no one else could see?',
                '16. Had thoughts that kept coming into your mind that you would do something bad or that something bad would happen to you or to someone else?',
                '17. Felt the need to check on certain things over and over again, like whether a door was locked or whether the stove was turned off?',
                '18. Worried a lot about things you touched being dirty or having germs or being poisoned?',
                '19. Felt you had to do things in a certain way, like counting or saying special things, to keep something bad from happening?',
            ],
            bodyarrnext: [
                'In the past TWO (2) WEEKS, have you...',
                '20. Had an alcoholic beverage (beer, wine, liquor, etc.)?',
                '21. Smoked a cigarette, a cigar, or pipe, or used snuff or chewing tobacco?',
                '22. Used drugs like marijuana, cocaine or crack, club drugs (like Ecstasy), hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or methamphetamine (like speed)?',
                '23. Used any medicine without a doctor’s prescription to get high or change the way you feel (e.g., painkillers [like Vicodin], stimulants [like Ritalin or Adderall], sedatives or tranquilizers [like sleeping pills or Valium], or steroids)?',
                '24. In the last 2 weeks, have you thought about killing yourself or committing suicide?',
                '25. Have you EVER tried to kill yourself?',
            ],
        }
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
                                Level 2 Screening
                            </h3>
                            <div className="head-text">
                                World Health Organization Disability Assessment
                                Schedule 2.0
                            </div>
                            <div className="only-line"></div>
                            <div className="head-text">
                                Enter your
                                Name:_____________________________________________________
                            </div>
                            <div className="head-text">
                                <span>Sex:___________ </span>
                                <span> Age:______________ </span>
                                <span> Date:____/____/________</span>
                            </div>
                            <div className="head-text">
                                Instructions: This questionnaire asks about
                                difficulties due to health/mental health
                                conditions. Health conditions include diseases
                                or illnesses, other health problems that may be
                                short or long lasting, injuries, mental or
                                emotional problems, and problems with alcohol or
                                drugs. Think back over the past 30 days and
                                answer these questions thinking about how much
                                difficulty you had doing the following
                                activities. For each question, please circle
                                only one response.
                            </div>
                        </div>
                        <Table responsive bordered hover>
                            <thead>
                                <tr>
                                    {this.state.headarr.map((head, index) => (
                                        <th key={index}>{head}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.bodyarr.map((ques, ind) => (
                                    <tr>
                                        <td key={ind}>{ques}</td>
                                        <td>0</td>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <ListGroup className="questions-list">
                            {this.state.bodyarrnext.map((question, ind) => (
                                <ListGroupItem
                                    key={ind}
                                    className="question-list-item"
                                >
                                    <div className="question-box">
                                        <span className="question-text">
                                            {question}
                                        </span>
                                        {ind !== 0 && (
                                            <div className="button-group">
                                                <button className="answer-button">
                                                    YES
                                                </button>
                                                <button className="answer-button answer-no-button">
                                                    NO
                                                </button>
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
                                <button className="no-design-btn" onClick={this.props.homeHandler}>
                                    
                                    Back to Home
                                </button>
                                <button
                                    className="next-button"
                                    onClick={this.handleChangePrev}
                                >
                                    PREV
                                </button>
                                <button className="next-button">NEXT</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Questionnaire3

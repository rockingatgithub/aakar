import React, { Component } from 'react'
import { Table, Container, Row, Col } from 'react-bootstrap'
import Leadlogo from './knowyourselflogo.png'

class Questionnaire2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headarr: [
                'In the last 30 days, how much difficulty did you have in:',
                'None',
                'Slight',
                'Mild',
                'Moderate',
                'Severe',
            ],
            bodyarr: [
                '1. Concentrating on doing something for ten minutes?',
                '2. Remembering to do important things?',
                '3. Analyzing and finding solutions to problems in day-to-day life?',
                '4. Learning a new task, for example, learning how to get to a new place?',
                '5. Generally understanding what people say?',
                '6. Starting and maintaining a conversation?',
                '7. Standing for long periods, such as 30 minutes?',
                '8.  Standing up from sitting down?',
                '9.Moving around inside your home?',
                '10. Getting out of your home?',
                '11. Walking a long distance, such as a kilometer (or equivalent)?',
                '12. Washing your whole body?',
                '13. Getting dressed?',
                '14. Eating?',
                '15. Staying by yourself for a few days?',
                '16. Dealing with people you do not know?',
                '17. Maintaining a friendship?',
                '17. Maintaining a friendship?',
                '19.Making new friends?',
                'Sexual activities?',
                'Taking care of your household responsibilities?',
                'Doing most important household tasks well?',
                'Getting all of the household work done that you needed to do?',
                'Getting your household work done as quickly as needed?',
                'If you work (paid, non-paid, self-employed) or go to school, complete questions D5.5–D5.8, below. Otherwise, skip to D6.1.',
                'Your day-to-day work/school?',
                'Doing your most important work/school tasks well?',
                'Getting all of the work done that you need to do?',
                'Getting your work done as quickly as needed?',
                'How much of a problem did you have in joining in community activities (for example, festivities, religious, or other activities) in the same way as anyone else can?',
                'How much of a problem did you have because of barriers or hindrances around you?',
                'How much of a problem did you have living with dignity because of the attitudes and actions of others?',
                'How much time did you spend on your health condition or its consequences?',
                'How much have you been emotionally affected by your health condition?',
                'How much has your health been a drain on the financial resources of you or your family?',
                'How much of a problem did your family have because of your health problems?',
                'How much of a problem did you have in doing things by yourself for relaxation or pleasure?',
            ],
        }
    }

    handleChange = () => {
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
                                <span>Sex:___________ </span>{' '}
                                <span> Age:______________ </span>{' '}
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

export default Questionnaire2

import React, { Component } from 'react';
import { Container, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Leadlogo from './knowyourselflogo.png'

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qarr : ['1. Feeling sad or down.',
              '2. Confused thinking or reduced ability to concentrate.',
              '3. Excessive fears or worries, or extreme feelings of guilt.',
              '4. Extreme mood changes of highs and lows.',
              '5. Withdrawal from friends and activities.',
              '6. Significant tiredness, low energy or problems sleeping.',
              '7. Detachment from reality (delusions), paranoia or hallucinations.',
              '8. Inability to cope with daily problems or stress.',
              '9. Trouble understanding and relating to situations and to people.',
              '10. Problems with alcohol or drug use.',
              '11. Major changes in eating habits.',
              '12. Sex drive changes.',
              '13. Excessive anger, hostility or violence.',
              '14. Suicidal thinking.',        
            ],
    }
  }
  
  render() {
    return (
     <Container className="screening-level-1" fluid>
       <Row >
          <Col>
          <div className="upper-row">
            <img src={Leadlogo} alt="header-logo"
              style={{ height: "126px", width: "100%" }} />
            <h3 className="questionslist-heading">Level 1 Screening</h3>
            <div className="only-line"></div>
            <div className="head-text">In last 15 days if came across any symptoms the person moves to second level.</div>
            </div>
            <ListGroup className="questions-list">
              {this.state.qarr.map((question, ind) => (
                <ListGroupItem key={ind} className="question-list-item">
                  <div className="question-box">
                  <span className="question-text">{question}</span>
                  <div className="button-group">
                    <button className="answer-button">YES</button>
                    <button className="answer-button answer-no-button">NO</button>
                  </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
            <div className="total-row">
              <div className="last-row-text">
                <span className="dark-text">Total:</span>
                <span>____YES's and ____NO's</span>
                <span className="subtext">(age group 11 to 19 years)</span>
              </div>
              <div className="last-row-nav">
                <button className="no-design-btn"> Back to Home</button><button className="next-button">NEXT</button>
              </div>
            </div>
          </Col>
       </Row>
     </Container>
    );
  }
}

export default Questionnaire;
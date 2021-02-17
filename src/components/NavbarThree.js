import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function NavbarThree(props) {
    return (
        <Container fluid className="my-container">
            <Row noGutters={true}>
                <Col xs={0} md={2} lg={7}></Col>
                <Col xs={2} md={2} lg={1}>
                    <button
                        style={{
                            fontWeight: '600',
                            border: 'none',
                            background: 'transparent',
                        }}
                        onClick={props.homeHandler}
                    >
                        Home
                    </button>
                </Col>
                <Col xs={3} md={2} lg={1}>
                    About Us
                </Col>
                <Col xs={2} md={2} lg={1}>
                    Join Us
                </Col>
                <Col xs={3} md={2} lg={1}>
                    Contact
                </Col>
                <Col xs={2} md={2} lg={1}>
                    Gallery
                </Col>
                <Col xs={0} md={0} lg={0}></Col>
            </Row>
        </Container>
    )
}

export default NavbarThree

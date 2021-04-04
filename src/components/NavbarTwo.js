import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function NavbarTwo(props) {
    const { user, signOut, signInWithGoogle } = props

    return (
        <Container fluid className="my-container">
            <Row>
                <Col xs={0} md={3} lg={6}></Col>
                <Col xs={4} md={3} lg={2}>
                    <img
                        alt="my-heders"
                        src="https://img.techpowerup.org/200826/hh-1.png"
                        style={{ height: '24px', width: '24px' }}
                    />
                    Consult Online
                </Col>
                <Col xs={4} md={3} lg={2}>
                    <img
                        alt="my-heders"
                        src="https://img.techpowerup.org/200826/mm-1.png"
                        style={{ height: '24px', width: '24px' }}
                    />
                    Download Our App
                </Col>
                <Col xs={4} md={3} lg={2}>
                    <Button variant="light" size="sm" onClick={user ? signOut : signInWithGoogle}>
                        <img
                            alt="my-heders"
                            src="https://img.techpowerup.org/200826/login-1.png"
                            style={{ height: '24px', width: '24px' }}
                        />
                        {user ? 'Logout' : 'Login/SignUp'}
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default NavbarTwo

import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate()
    return (
        <div className="Register auth-form-container">
            <Container className="border bg-light p-3">
                <Form>
                    <Row>
                        <Col md={12}>
                            <h2 className="mb-4">Register</h2>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Control type="text" placeholder="First Name" />
                            </Form.Group>
                        </Col>
                        <Col md={6} sm={12}>
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Control type="text" placeholder="Last Name" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="password">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="confirmPassword">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Form.Group>
                        </Col>
                        <Col md={12}>
                            <Button type="submit" onClick={() => { navigate('/') }}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Register;

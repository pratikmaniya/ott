import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form, Button } from "react-bootstrap";

function Login() {
    const navigate = useNavigate()
    return (
        <div className="Login auth-form-container">
            <Container className="border bg-light p-3">
                <Form>
                    <Row>
                        <Col md={12}>
                            <h2 className="mb-4">Login</h2>
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
                            <Button type="submit" onClick={() => { navigate('/') }}>Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default Login;

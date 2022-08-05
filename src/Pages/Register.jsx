import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { useAlert } from "react-alert";

function Register() {
    const navigate = useNavigate(),
        alert = useAlert(),
        [firstName, setFirstName] = useState(""),
        [lastName, setLastName] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState(""),
        registerClickHandler = _ => {
            if (password === confirmPassword) {
                fetch(`http://localhost:5000/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password
                    })
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then(json => {
                        alert.success(json.message)
                        navigate(process.env.PUBLIC_URL + '/')
                    })
                    .catch((err) => {
                        console.log(`Error ${err}`);
                        alert.error("Uh oh! Something went wrong.")
                    })
            } else {
                alert.show("Password and confirm password doesn't match.");
            }
        }
    return (
        <div className="Register auth-form-container">
            <Container className="border bg-light p-3">
                <Row>
                    <Col md={12}>
                        <h2 className="mb-4">Register</h2>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Control type="text" placeholder="First Name" onChange={event => setFirstName(event.target.value)} value={firstName} />
                        </Form.Group>
                    </Col>
                    <Col md={6} sm={12}>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Control type="text" placeholder="Last Name" onChange={event => setLastName(event.target.value)} value={lastName} />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} value={email} />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password} />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="mb-3" controlId="confirmPassword">
                            <Form.Control type="password" placeholder="Confirm Password" onChange={event => setConfirmPassword(event.target.value)} value={confirmPassword} />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Button type="submit" onClick={registerClickHandler}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Register;

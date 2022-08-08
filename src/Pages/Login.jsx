import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useAlert } from "react-alert";

import ottContext from '../context/ottContext';
import { API_URL } from '../config.json'

function Login() {
    const navigate = useNavigate(),
        { setIsLoggedIn } = useContext(ottContext),
        alert = useAlert(),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        loginClickHandler = _ => {
            fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then((res) => {
                    return res.json()
                })
                .then(json => {
                    setIsLoggedIn(true)
                    alert.success(json.message)
                    sessionStorage.setItem('id', json.body[0])
                    navigate(process.env.PUBLIC_URL + '/')
                })
                .catch((err) => {
                    console.log(`Error ${err}`);
                })
        }
    return (
        <div className="Login auth-form-container">
            <Container className="border bg-light p-3">
                <Row>
                    <Col md={12}>
                        <h2 className="mb-4">Login</h2>
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
                        <Button variant='dark' type="submit" onClick={loginClickHandler}>Submit</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;

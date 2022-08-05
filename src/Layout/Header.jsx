import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

import movieContext from '../context/movieContext';

function Header() {
    const location = useLocation(),
        navigate = useNavigate(),
        { isLoggedIn, setIsLoggedIn } = useContext(movieContext),
        logoutClickHandler = _ => {
            setIsLoggedIn(false)
            sessionStorage.removeItem('id')
            navigate(process.env.PUBLIC_URL + '/login')
        }
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark' style={{ zIndex: 50 }}>
            <Container>
                <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>OTT</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='me-auto'>
                        <Nav.Link className='align-self-center' href={process.env.PUBLIC_URL + '/listing'} active={location.pathname === '/listing'} disabled={location.pathname === '/listing'}>All Shows</Nav.Link>
                    </Nav>
                    {
                        isLoggedIn
                            ?
                            <Nav>
                                <Nav.Link className='align-self-center' href={process.env.PUBLIC_URL + '/dashboard'} active={location.pathname === '/dashboard'} disabled={location.pathname === '/dashboard'}>Dashboard</Nav.Link>
                                <Nav.Link className='align-self-center'><Button variant='secondary' onClick={logoutClickHandler}>Logout</Button></Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link className='align-self-center' href={process.env.PUBLIC_URL + '/register'} active={location.pathname === '/register'} disabled={location.pathname === '/register'}>Register</Nav.Link>
                                <Nav.Link className='align-self-center' href={process.env.PUBLIC_URL + '/login'} active={location.pathname === '/login'} disabled={location.pathname === '/login'}>Login</Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
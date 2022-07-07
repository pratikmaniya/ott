import { useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    const location = useLocation()
    return (
        <div className="Header">
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>OTT</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href={process.env.PUBLIC_URL + '/listing'} active={location.pathname==='/listing'} disabled={location.pathname==='/listing'}>All Shows</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href={process.env.PUBLIC_URL + '/register'} active={location.pathname==='/register'} disabled={location.pathname==='/register'}>Register</Nav.Link>
                            <Nav.Link href={process.env.PUBLIC_URL + '/login'} active={location.pathname==='/login'} disabled={location.pathname==='/login'}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
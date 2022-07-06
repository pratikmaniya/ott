import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    return (
        <div className="Header">
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>OTT</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link href={process.env.PUBLIC_URL + '/listing'}>All Shows</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href={process.env.PUBLIC_URL + '/register'}>Register</Nav.Link>
                            <Nav.Link href={process.env.PUBLIC_URL + '/login'}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
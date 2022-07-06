import { Col, Container, Row } from 'react-bootstrap'

import MovieCard from '../Components/MovieCard'

function Listing() {
    return (
        <div className="Listing">
            <h1>All Movies</h1>
            <Container className='my-3'>
                <Row>
                    <Col lg={3} md={3} sm={6} xs={12} my={3}>
                        <MovieCard
                            image='https://www.w3schools.com/w3images/rocks.jpg'
                            title='Narnia'
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Listing;

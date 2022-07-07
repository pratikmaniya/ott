import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap'

import MovieCard from '../Components/MovieCard'
import movieContext from '../context/movieContext';

function Listing() {
    const { movies } = useContext(movieContext);
    return (
        <div className="Listing">
            <h1>All Movies</h1>
            <Container className='my-3'>
                <Row>
                    {
                        movies && movies.length > 0
                            ?
                            movies.map(movie => (
                                <Col key={movie.id} md={3} sm={6} xs={12} className='mt-3'>
                                    <MovieCard
                                        id={movie.id}
                                        image={movie.image}
                                        title={movie.title}
                                    />
                                </Col>
                            ))
                            :
                            <h5 className='text-secondary bg-light p-5'>No Content Found</h5>
                    }
                </Row>
            </Container>
        </div>
    );
}

export default Listing;

import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MovieCard from './MovieCard';

function ProductsGrid(props) {
    return (
        <Row>
            {
                props.movies && props.movies.length > 0
                    ?
                    props.movies.map(movie => (
                        <Col key={movie.id} md={3} sm={6} xs={12} className='mt-3'>
                            <MovieCard
                                id={movie.id}
                                image={movie.image}
                                title={movie.title}
                            />
                        </Col>
                    ))
                    :
                    <h5 className='text-secondary bg-light p-3'>No Content Found</h5>
            }
        </Row>
    );
}

export default ProductsGrid;
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import MovieCard from './MovieCard';

function ProductsGrid() {
    return (
        <Row>
            <Col md={3} sm={6} xs={12} className='mt-3'>
                <MovieCard
                    image='https://www.w3schools.com/w3images/rocks.jpg'
                    title='Narnia'
                />
            </Col>
            <Col md={3} sm={6} xs={12} className='mt-3'>
                <MovieCard
                    image='https://www.w3schools.com/w3images/rocks.jpg'
                    title='Narnia'
                />
            </Col>
            <Col md={3} sm={6} xs={12} className='mt-3'>
                <MovieCard
                    image='https://www.w3schools.com/w3images/rocks.jpg'
                    title='Narnia'
                />
            </Col>
            <Col md={3} sm={6} xs={12} className='mt-3'>
                <MovieCard
                    image='https://www.w3schools.com/w3images/rocks.jpg'
                    title='Narnia'
                />
            </Col>
        </Row>
    );
}

export default ProductsGrid;
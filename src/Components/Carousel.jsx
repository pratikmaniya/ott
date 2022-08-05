import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

function ControlledCarousel(props) {
    const navigate = useNavigate()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel className='my-3' activeIndex={index} onSelect={handleSelect}>
            {
                props.movies && props.movies.length > 0
                    ?
                    props.movies.map(movie => (
                        <Carousel.Item style={{ height: '500px', cursor: 'pointer' }} key={movie.id} onClick={() => { navigate(process.env.PUBLIC_URL + '/movie-details/' + movie.id) }}>
                            <img
                                className="d-block w-100"
                                src={movie.largePoster}
                                alt="slide"
                            />
                            <Carousel.Caption>
                                <h3>{movie.title}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))
                    :
                    null
            }
        </Carousel>
    );
}

export default ControlledCarousel;
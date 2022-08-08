import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import { Row, Col, Container, Badge, Button } from "react-bootstrap";

import { API_URL } from '../config.json'

function MovieDetails() {
    const alert = useAlert(),
        { id } = useParams(),
        [movie, setMovie] = useState({
            id: "",
            title: "",
            details: "",
            image: "",
            unitPrice: 0,
            costPrice: "",
            isMovie: false,
            isShow: false,
            isFeatured: false,
            inDemand: false
        })
    useEffect(() => {
        fetch(`${API_URL}/movies/${id}`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setMovie(json.body[0]);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }, [id])

    return (
        <div className="MovieDetails">
            <Container className="my-3">
                {
                    movie
                        ?
                        <Row>
                            <Col md={12} sm={12}>
                                <div className="overflow-hidden">
                                    <img className="movie-details-image" src={movie.largePoster} alt={movie.title} />
                                </div>
                            </Col>
                            <Col sm={12}>
                                <Container className="my-3">
                                    <Row>
                                        <Col md={4} sm={12}>
                                            <div className="movie-details-small-poster">
                                                <img src={movie.smallPoster} alt={movie.title} />
                                            </div>
                                        </Col>
                                        <Col md={8} sm={12}>
                                            <div className="text-left">
                                                <h1>{movie.title}</h1>
                                                <p>{movie.details}</p>
                                                <Button className="m-2" variant="dark">Buy ${movie.unitPrice}</Button>
                                                <Button className="m-2" variant="dark">Rent ${movie.costPrice}</Button>
                                                {movie.inDeemand ? <Badge bg='danger'>Trending</Badge> : null}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        :
                        <h5 className='text-secondary bg-light p-3'>No Content Found</h5>
                }
            </Container>
        </div>
    );
}

export default MovieDetails;

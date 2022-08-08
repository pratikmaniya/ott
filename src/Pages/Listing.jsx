import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Tab, Nav, Button } from 'react-bootstrap'
import { useAlert } from "react-alert";

import MovieCard from '../Components/MovieCard'
import {API_URL} from '../config.json'

function Listing() {
    const alert = useAlert(),
        [key, setKey] = useState("movies"),
        [movies, setMovies] = useState([]),
        [shows, setShows] = useState([]),
        [searchInput, setSearchInput] = useState("")
    useEffect(() => {
        fetch(`${API_URL}/movies`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setMovies(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
        fetch(`${API_URL}/shows`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setShows(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }, [])
    const searchMovieHandler = _ => {
        fetch(`${API_URL}/search?query=${searchInput}&type=movie`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setMovies(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }
    const searchShowHandler = _ => {
        fetch(`${API_URL}/search?query=${searchInput}&type=show`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setShows(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }
    return (
        <div className="Listing">
            <Tab.Container id="top-tabs" activeKey={key} onSelect={k => { setKey(k); setSearchInput("") }}>
                <Nav variant="pills" className="justify-content-center mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="movies" href="#" className='btn-dark m-2'>
                            Movies
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="shows" href="#" className='btn-dark m-2'>
                            Shows
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="movies">
                        <Container className='my-3'>
                            <Row>
                                <Col col={12}>
                                    <div className="input-group justify-content-center">
                                        <div className="form-outline">
                                            <input type="search" className="form-control" placeholder='Search' onChange={event => setSearchInput(event.target.value)} value={searchInput} />
                                        </div>
                                        <Button variant='dark' onClick={_ => searchMovieHandler()}>
                                            <i className="fa fa-search"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    movies && movies.length > 0
                                        ?
                                        movies.map(movie => (
                                            <Col key={movie.id} md={3} sm={6} xs={12} className='mt-3'>
                                                <MovieCard
                                                    id={movie.id}
                                                    image={movie.smallPoster}
                                                    title={movie.title}
                                                />
                                            </Col>
                                        ))
                                        :
                                        <h5 className='text-secondary bg-light p-5'>No Content Found</h5>
                                }
                            </Row>
                        </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="shows">
                        <Container className='my-3'>
                            <Row>
                                <Col col={12}>
                                    <div className="input-group justify-content-center">
                                        <div className="form-outline">
                                            <input type="search" className="form-control" placeholder='Search' onChange={event => setSearchInput(event.target.value)} value={searchInput} />
                                        </div>
                                        <Button variant='dark' onClick={_ => searchShowHandler()}>
                                            <i className="fa fa-search"></i>
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    shows && shows.length > 0
                                        ?
                                        shows.map(show => (
                                            <Col key={show.id} md={3} sm={6} xs={12} className='mt-3'>
                                                <MovieCard
                                                    id={show.id}
                                                    image={show.smallPoster}
                                                    title={show.title}
                                                />
                                            </Col>
                                        ))
                                        :
                                        <h5 className='text-secondary bg-light p-5'>No Content Found</h5>
                                }
                            </Row>
                        </Container>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}

export default Listing;

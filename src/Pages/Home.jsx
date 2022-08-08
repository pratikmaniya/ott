import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useAlert } from "react-alert";

import Carousel from '../Components/Carousel';
import ProductsGrid from '../Components/ProductsGrid';
import { API_URL } from '../config.json'

function Home() {
    const alert = useAlert(),
        [inDemandItems, setInDemandItems] = useState([]),
        [featuredMovies, setInFeaturedMovies] = useState([]),
        [feeaturedShows, setInFeaturedShows] = useState([])

    useEffect(() => {
        fetch(`${API_URL}/inDemand`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setInDemandItems(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
        fetch(`${API_URL}/featured?type=movie`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setInFeaturedMovies(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
        fetch(`${API_URL}/featured?type=show`)
            .then((res) => {
                return res.json()
            })
            .then(json => {
                setInFeaturedShows(json.body);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
                alert.error("Uh oh! Something went wrong.")
            })
    }, [])

    return (
        <div className="Home">
            <Carousel movies={inDemandItems} />
            <Container fluid='md' className='mt-5'>
                <h4 className='text-left'>Featured Movies</h4>
                <ProductsGrid movies={featuredMovies} />
            </Container>
            <Container fluid='md' className='mt-5'>
                <h4 className='text-left'>Featured Shows</h4>
                <ProductsGrid movies={feeaturedShows} />
            </Container>
            <Container fluid='md' className='my-5'>
                <div className='homepage-banner-container'>
                    <img src="https://cdn.europosters.eu/image/hp/53271.jpg" alt="" />
                </div>
            </Container>
        </div>
    );
}

export default Home;

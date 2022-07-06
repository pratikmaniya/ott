import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Pages/Home'
import Listing from './Pages/Listing';
import MovieDetails from './Pages/MovieDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className='body-container'>
                    <Routes>
                        <Route path={process.env.PUBLIC_URL + "/"} exact element={<Home />} />
                        <Route path={process.env.PUBLIC_URL + "/listing"} exact element={<Listing />} />
                        <Route path={process.env.PUBLIC_URL + "/movie-details"} exact element={<MovieDetails />} />
                        <Route path={process.env.PUBLIC_URL + "/register"} exact element={<Register />} />
                        <Route path={process.env.PUBLIC_URL + "/login"} exact element={<Login />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

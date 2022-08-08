import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import ottContext from "./context/ottContext";
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import Home from './Pages/Home'
import Listing from './Pages/Listing';
import MovieDetails from './Pages/MovieDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';

import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false),
        options = {
            timeout: 5000,
            position: positions.TOP_RIGHT
        }
    useEffect(_ => {
        if (sessionStorage.getItem('id')) {
            setIsLoggedIn(true)
        }
    }, [])
    return (
        <ottContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <Provider template={AlertTemplate} {...options}>
                <Router>
                    <div className="App">
                        <Header />
                        <div className='body-container'>
                            <Routes>
                                <Route path={process.env.PUBLIC_URL + "/"} exact element={<Home />} />
                                <Route path={process.env.PUBLIC_URL + "/listing"} exact element={<Listing />} />
                                <Route path={process.env.PUBLIC_URL + "/movie-details/:id"} exact element={<MovieDetails />} />
                                <Route path={process.env.PUBLIC_URL + "/register"} exact element={<Register />} />
                                <Route path={process.env.PUBLIC_URL + "/login"} exact element={<Login />} />
                                <Route path={process.env.PUBLIC_URL + "/dashboard"} exact element={<Dashboard />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        </ottContext.Provider>
    );
}

export default App;

import React from 'react';
import Home from '../Home/Home';
import Navbar from './../Navbar/Navbar';

export default function Layout() {
    return <>
        <Navbar />
        <div className="container mt-4">
            <Home />
        </div>

    </>
}


import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Magazin de parfumuri</h1>
            <nav>
                <Link to="/register">Register</Link>
                <Link to="/user-info">User Info</Link>
            </nav>
        </div>
    );
};

export default Home;
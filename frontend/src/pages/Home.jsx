import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import homePagePhoto from '../../public/homePage.jpg.jpg'; // Adjust the path if necessary

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${homePagePhoto})`,
                height: '100vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                textShadow: '2px 2px 4px #000000',

            }}
        >
            <h1>Magazin de parfumuri</h1>
            <Menu />
            <button className="btn btn-primary" onClick={() => navigate(-1)}>Back</button>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Home</button>
        </div>
    );
};

export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Menu from '../components/Menu.jsx';
import homePagePhoto from '../../public/homePage.jpg.jpg';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${homePagePhoto})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100vw',
                color: 'white',
                textShadow: '2px 2px 4px #000000',
                margin: 0,
            }}
        >
            <h1>Magazin de parfumuri</h1>
        </div>
    );
};

export default Home;
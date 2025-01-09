import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Menu</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to={'/'} className="nav-link">Home</Link>
                        <Link to={'/register'} className="nav-link">Register</Link>
                        <Link to={'/login'} className="nav-link">Log In</Link>
                        <Link to={'/user-info'} className="nav-link">User Info</Link>
                        <Link to={'/product'} className="nav-link">Product</Link>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <Link to={'/wishlist'} className="nav-link">Wishlist</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
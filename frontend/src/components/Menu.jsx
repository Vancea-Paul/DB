import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <button onClick={toggleDropdown} className="dropdown-toggle">
                Functions
            </button>
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to="/register" className="dropdown-item">Register</Link>
                    <Link to="/user-info" className="dropdown-item">User Info</Link>
                </div>
            )}
        </div>
    );
};

export default Menu;
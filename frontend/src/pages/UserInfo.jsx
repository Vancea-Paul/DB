import React, { useState, useEffect } from 'react';
import homePagePhoto from '../../public/homePage.jpg.jpg';

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        phoneNumber: '',
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('User information updated successfully!');
    };

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
            <div className="container" style={{ maxWidth: '400px' }}>
                <h2>User Info</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                        <input
                            type="text"
                            className="form-control"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={userInfo.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
                {message && <div className="alert alert-success mt-3">{message}</div>}
            </div>
        </div>
    );
};

export default UserInfo;
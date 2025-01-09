import React, { useState } from 'react';
import homePagePhoto from '../../public/homePage.jpg.jpg';

const Product = () => {
    const [scents, setScents] = useState([]);
    const [newScent, setNewScent] = useState('');

    const handleAddScent = () => {
        if (newScent.trim()) {
            setScents([...scents, newScent]);
            setNewScent('');
        }
    };

    const handleRemoveScent = (index) => {
        const updatedScents = scents.filter((_, i) => i !== index);
        setScents(updatedScents);
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
                <h2>Product Page</h2>
                <div className="mb-3">
                    <label htmlFor="scent" className="form-label">Add Scents</label>
                    <input
                        type="text"
                        className="form-control"
                        id="scent"
                        value={newScent}
                        onChange={(e) => setNewScent(e.target.value)}
                    />
                    <button className="btn btn-primary mt-2" onClick={handleAddScent}>Add</button>
                </div>
                <ul className="list-group mt-3">
                    {scents.map((scent, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {scent}
                            <button className="btn btn-danger btn-sm" onClick={() => handleRemoveScent(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Product;
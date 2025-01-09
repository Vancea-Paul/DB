import React, { useState } from 'react';

const Product = () => {
    const [scents, setScents] = useState([]);
    const [newScent, setNewScent] = useState('');

    const handleAddScent = () => {
        if (newScent.trim()) {
            setScents([...scents, newScent]);
            setNewScent('');
        }
    };

    return (
        <div className="container">
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
                    <li key={index} className="list-group-item">{scent}</li>
                ))}
            </ul>
        </div>
    );
};

export default Product;
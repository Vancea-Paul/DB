import { useState } from 'react';
import UserService from '../services/UserService';

const UserInfo = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const handleGetUser = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await UserService.getUser(username);
            setUser(response.data);
        } catch (error) {
            setError('There was an error fetching the user!');
        }
    };

    return (
        <div className="container">
            <h2>User Information</h2>
            <form onSubmit={handleGetUser}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Get User</button>
            </form>
            {error && <p className="text-danger">{error}</p>}
            {user && (
                <div className="mt-4">
                    <h3>User Details</h3>
                    <p><strong>Username:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
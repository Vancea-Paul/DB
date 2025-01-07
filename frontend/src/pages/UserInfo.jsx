// UserInfo.jsx
import { useState } from 'react';
import UserService from '../services/UserService';

const UserInfo = () => {
    console.log('UserInfo component rendered');
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);

    const handleGetUser = async (e) => {
        e.preventDefault();
        try {
            const response = await UserService.getUser(username);
            setUser(response.data);
        } catch (error) {
            console.error('There was an error fetching the user!', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleGetUser}>
                <div>
                    <label>Username:</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <button type="submit">Get User</button>
            </form>
            {user && (
                <div>
                    <h3>User Information</h3>
                    <p>Username: {user.username}</p>
                </div>
            )}
        </div>
    );
};

export default UserInfo;
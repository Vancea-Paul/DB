import { useState } from 'react';
import UserService from '../services/UserService';

const Register = () => {
    console.log('Register component rendered');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = { username, password };
        try {
            await UserService.register(user);
            alert('User registered successfully');
        } catch (error) {
            console.error('There was an error registering the user!', error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
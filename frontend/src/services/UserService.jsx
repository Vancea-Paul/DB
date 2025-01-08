import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

class UserService {
    register(user) {
        return axios.post(`${API_URL}/register`, user);
    }

    getUser(username) {
        return axios.get(`${API_URL}/${username}`);
    }

    login(credentials) {
        return axios.post(`${API_URL}/login`, credentials);
    }
}

export default new UserService();
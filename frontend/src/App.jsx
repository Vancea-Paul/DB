import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserInfo from './pages/UserInfo';
import './App.css';
import Navbar from "./components/Navbar.jsx";
import React from "react";
import Login from "./components/Login.jsx";

function App() {
    return (

        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user-info" element={<UserInfo />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>

    );

}

export default App;
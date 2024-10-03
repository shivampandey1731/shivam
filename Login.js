import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { email, password });
            alert(response.data.message || 'Login successful');
        } catch (error) {
            alert('Login failed: ' + error.response.data.message);
        }
    };

    return (
        <section className="login-section">
            <div className="container3">
                <div className="login-box">
                    <h2>Login to Your Account</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" className="btn">Login</button>
                        <p className="register-link">
                            Don't have an account? <Link to="/register">Register here</Link> {/* Use Link */}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;

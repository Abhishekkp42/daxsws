import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        let formIsValid = validateForm();

        if (formIsValid) {
            console.log('Logging in with:', username, password);
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!username.match(/^[a-zA-Z0-9@._-]+$/)) {
            formIsValid = false;
            errors['username'] = '*Username should be alphanumeric with special characters.';
        }

        if (username === password) {
            formIsValid = false;
            errors['password'] = '*Username and password should not be the same.';
        }

        setErrors(errors);
        return formIsValid;
    };

    return (
        <div className="login-container">
            <div className="login-heading">
                <h2>Login</h2>
                <p>Sign in to continue</p>
            </div>

            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className="errorMsg">{errors.username}</div>
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="errorMsg">{errors.password}</div>
                </div>
                <button type="submit">Login</button>
                <p style={{color:"black"}}>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </form>
        </div>
    );
};

export default Login;

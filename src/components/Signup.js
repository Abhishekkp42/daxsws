import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    let formIsValid = validateForm();

    if (formIsValid) {
      console.log('Signing up with:', { name, username, password, email, phone });
      navigate('/');
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!name.match(/^[a-zA-Z]+$/)) {
      formIsValid = false;
      errors['name'] = '*Name should contain only alphabets.';
    }

    if (!username.match(/^[a-zA-Z0-9@._-]+$/)) {
      formIsValid = false;
      errors['username'] = '*Username should be alphanumeric with special characters.';
    }

    if (username === password) {
      formIsValid = false;
      errors['password'] = '*Username and password should not be the same.';
    }

    if (password !== confirmPassword) {
      formIsValid = false;
      errors['confirmPassword'] = '*Passwords do not match.';
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      formIsValid = false;
      errors['email'] = '*Invalid email format.';
    }

    if (!phone) {
      formIsValid = false;
      errors['phone'] = '*Invalid phone number format.';
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <div className="signup-container">
      <h2>Create new Account</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="errorMsg">{errors.name}</div>
        </div>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="errorMsg">{errors.confirmPassword}</div>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="errorMsg">{errors.email}</div>
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="errorMsg">{errors.phone}</div>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

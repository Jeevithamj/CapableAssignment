// Signup.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();

  const handleSignup = () => {
    // Implement signup functionality here
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Signup successful, redirect to login page
      setSuccess('Signup successful. Redirecting to login page...');
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <Link to="/">Login</Link>
      <p style={{ color: 'red' }}>{error}</p>
      <p style={{ color: 'green' }}>{success}</p>
    </div>
  );
}

export default Signup;

// Login.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Implement login functionality here
    if (username === 'demo' && password === 'demo') {
      if (rememberMe) {
        localStorage.setItem('username', username);
      }
      history.push('/game');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <label>
        Remember Me
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
      <Link to="/signup">Signup</Link>
      <p style={{ color: 'red' }}>{error}</p>
    </div>
  );
}

export default Login;

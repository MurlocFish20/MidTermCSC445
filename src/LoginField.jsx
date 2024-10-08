import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginField = () => {
  const username = 'Jimbo'
  const password = 'Jimbo12C00L'
  const [inputUsername, setInputUsername] = useState('')
  const [inputPassword, setInputPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    if (!inputUsername || !inputPassword) {
      setError('Please fill in all fields.');
      return;
    }
    console.log('Logging in with:', { inputUsername, inputPassword });
    
    if (inputUsername == username && inputPassword == password) {
        navigate('/landing')
    } else {
        alert("You tried logging in with an incorrect username and or password")
    }
    // Reset fields after submission if needed
    setInputUsername('');
    setInputPassword('');
  };

  return (
    <div style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="username"
              value={inputUsername}
              onChange={(e) => setInputUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit" onClick='handleSubmit'>Login</button>
      </form>
    </div>
  );
};

export default LoginField;
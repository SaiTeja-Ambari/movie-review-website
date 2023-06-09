import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onClose, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    const response = await fetch('http://localhost:8080/user/getuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (response.ok) {
      const text = await response.text();
      if (text) {
        const data = JSON.parse(text);
        if (data.email) {
          alert('User exists');
          onLogin(true);
        } else {
          alert('User does not exist');
          onLogin(false);
        }
      } else {
        alert('User does not exist');
        onLogin(false);
      }
      onClose();
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        <button type="submit">Login</button>
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
}

export default LoginForm;

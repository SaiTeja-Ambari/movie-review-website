import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login operation
    alert(`User logged in with email: ${email}`);
    onClose();
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

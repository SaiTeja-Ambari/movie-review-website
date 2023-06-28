import React, { useState } from 'react';
import './SignupForm.css';

function SignupForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email.length === 0){
      setError("Email cannot be empty");
    }
    else if (password.length < 8) {
        setError("Password should be at least 8 characters long.");
    } else if (password !== confirmPassword) {
        setError("Passwords do not match.");
    } else {
        setError(""); // clear any previous error
        onClose();
    
    fetch('http://localhost:8080/user/postusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
};


  return (
    <div className="signup-form-container">
      
      <form onSubmit={handleSubmit}>
        <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
        <label>Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /></label>
        <label>Confirm Password: <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /></label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>Close</button>
        <div className = "error">{error}</div>
  
      </form>
    </div>
  );
}

export default SignupForm;

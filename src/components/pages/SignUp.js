import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // You can add your API call to send the data to the server here
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="email">Email:</label>
          <input
            id="email"
            className="form-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="password">Password:</label>
          <input
            id="password"
            className="form-input"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
import React, { useState } from "react";

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Login</h4>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="btn btn-success float-right"
            onClick={() => onSubmit({ email, password })}
          >
            login
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

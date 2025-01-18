import React, { useState } from "react";
import "./LoginForm.css";

export function LoginForm() {
  const [isLoginView, setIsLoginView] = useState(true);

  const switchToLogin = () => {
    console.log("Switching to Login");
    setIsLoginView(true);
  };

  const switchToCreate = (e) => {
    // Prevent default to stop the page from scrolling to top
    e.preventDefault();
    console.log("Switching to Create");
    setIsLoginView(false);
  };

  // Add console log to track current view

  return (
    <div className="grid-container">
      <div className="grid-item">
        <div className="grid-content">
          <div className="about-tab-content active">
            <div className="container-home">
              <div className="content-home">
                <div className="auth-container" style={{ minHeight: "300px" }}>
                  {isLoginView ? (
                    <Login switchToCreate={switchToCreate} />
                  ) : (
                    <CreateUser switchToLogin={switchToLogin} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login({ switchToCreate }) {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };

  return (
    <div id="loginForm">
      <h2>Login</h2>
      <div id="loginError" className="error-message"></div>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input
            type="text"
            id="loginUsername"
            placeholder="Username"
            required
            maxLength="10"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="loginPassword"
            placeholder="Password"
            required
            maxLength="10"
          />
        </div>
        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="switch-form">
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={switchToCreate}>
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

function CreateUser({ switchToLogin }) {
  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log("Create user form submitted");
  };

  return (
    <div id="createUserForm" style={{ display: "block" }}>
      <h2>Create Account</h2>
      <div id="createError" className="error-message"></div>
      <form id="create-user" onSubmit={handleCreateUser}>
        <div className="form-group">
          <input
            type="text"
            id="newUsername"
            placeholder="Choose Username"
            required
            maxLength="10"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="newPassword"
            placeholder="Create Password"
            required
            maxLength="10"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
            maxLength="10"
          />
        </div>
        <div className="form-group">
          <button type="submit">Create Account</button>
        </div>
      </form>
      <div className="switch-form">
        <p>
          Already have an account?{" "}
          <a href="#" onClick={switchToLogin}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

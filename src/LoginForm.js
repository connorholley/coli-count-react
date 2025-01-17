import "./LoginForm.css";
export function LoginForm() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          <div className="grid-content">
            <div className="about-tab-content active">
              <div className="container-home">
                <div className="content-home">
                  <div className="auth-container">
                    <div id="loginForm">
                      <h2>Login</h2>
                      <div id="loginError" className="error-message"></div>
                      <form onsubmit="return handleLogin(event)">
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
                          Don't have an account?
                          <a href="#" onclick="switchToCreateUser()">
                            Create one
                          </a>
                        </p>
                      </div>
                    </div>

                    <div id="createUserForm">
                      <h2>Create Account</h2>
                      <div id="createError" className="error-message"></div>
                      <form
                        id="create-user"
                        onsubmit="return handleCreateUser(event)"
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            id="newUsername"
                            placeholder="Choose Username"
                            required
                            maxLength="10"
                          />
                          <small></small>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            id="newPassword"
                            placeholder="Create Password"
                            required
                            maxLength="10"
                          />
                          <small></small>
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            id="confirmPassword"
                            placeholder="Confirm Password"
                            required
                            maxLength="10"
                          />
                          <small></small>
                        </div>
                        <div className="form-group">
                          <button type="submit">Create Account</button>
                        </div>
                      </form>
                      <div className="switch-form">
                        <p>
                          Already have an account?
                          <a href="#" onclick="switchToLogin()">
                            Login
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

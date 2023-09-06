//LoginForm.jsx

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './LoginForm.css'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessMessage, setAccessMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // Prevent the form from submitting by default

    // Check if the username and password match the credentials
    if (username === 'user' && password === '123') {
      setAccessMessage('Access granted')
    } else {
      setAccessMessage('Access denied')
    }
  }

  let accessMessageClass = ''

  // Determine the CSS class based on access
  if (accessMessage === 'Access granted') {
    accessMessageClass = 'access-granted'
  } else if (accessMessage === 'Access denied') {
    accessMessageClass = 'access-denied'
  }

  return (
    <div className="login-container">
      <div className="login-form">
        {/* ... */}

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form onSubmit={handleSubmit}>
              <div className="text-center mb-3">
                <p>Sign in</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="loginName"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label className="form-label" htmlFor="loginName">
                  Username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className={`mb-4 ${accessMessageClass}`}>
                <p>{accessMessage}</p>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              <div className="text-center">
                <p>
                  Not a member? <Link to="/register">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

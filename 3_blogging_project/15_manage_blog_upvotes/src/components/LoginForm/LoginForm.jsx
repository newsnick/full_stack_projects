// //LoginForm.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth'
import './LoginForm.css'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [accessMessage, setAccessMessage] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()

    let loggedInUser = null

    // Check if the username and password match the credentials
    if (username === 'user' && password === '123') {
      loggedInUser = {
        username: 'user',
        email: 'user@example.com',
      }
    } else if (username === 'user2' && password === '123') {
      loggedInUser = {
        username: 'user2',
        email: 'user2@example2.com',
      }
    } else if (username === 'user3' && password === '123') {
      loggedInUser = {
        username: 'user3',
        email: 'user3@example3.com',
      }
    }

    if (loggedInUser) {
      // Redirect to the homepage after 2 seconds
      setTimeout(() => {
        navigate('/')
        // Dispatch the login action to update the Redux state
        dispatch(login(loggedInUser))
      }, 2000)
    } else {
      setAccessMessage('Access denied')
    }
  }

  let accessMessageClass = ''

  if (accessMessage === 'Welcome back, user') {
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
              <div className="text-center mb-3 form-header">
                <p>Sign in user</p>
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

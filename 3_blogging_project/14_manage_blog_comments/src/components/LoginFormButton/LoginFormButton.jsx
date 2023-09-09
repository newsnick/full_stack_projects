// LoginFormButton.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginFormButton.css'

const LoginFormButton = () => {
  return (
    <div className="loginContainer">
      <Link className="btn btn-secondary mb-5 mx-4" to="/login">
        Login
      </Link>
    </div>
  )
}

export default LoginFormButton

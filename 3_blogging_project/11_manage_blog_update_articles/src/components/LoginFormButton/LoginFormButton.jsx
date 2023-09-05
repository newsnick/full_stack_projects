// LoginFormButton.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './LoginFormButton.css'

const LoginFormButton = () => {
  return (
    <div className="loginContainer">
      <Link className="btn btn-secondary" to="/login">
        Login
      </Link>
    </div>
  )
}

export default LoginFormButton

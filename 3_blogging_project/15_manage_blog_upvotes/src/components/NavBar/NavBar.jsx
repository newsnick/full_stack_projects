// NavBar.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/auth'
import LoginFormButton from '../LoginFormButton/LoginFormButton'
import UserProfile from '../UserProfile/UserProfile'

import './NavBar.css'
import styles from './NavBar.module.css'
import NavBarLinks from '../NavBarLinks/NavBarLinks'

const NavBar = () => {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    // Dispatch the logout action to update the login state
    dispatch(logout())
  }

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles.nav}`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          React App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <NavBarLinks />
        </div>
        {user ? <UserProfile user={user} /> : <LoginFormButton />}
      </div>
    </nav>
  )
}

export default NavBar

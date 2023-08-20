// NavBarLinks.jsx
import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'

const NavBarLinks = (props) => {
  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
      <NavBarLink to="/" label="Home" />
      <NavBarLink to="/about" label="About" />
      <NavBarLink to="/articles" label="Articles" />
    </ul>
  )
}

export default NavBarLinks

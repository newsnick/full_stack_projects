// NavBarLinks2.jsx
import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'
import './NavBarLinks2.css'

const NavBarLinks2 = (props) => {
  return (
    <div className="cat-list">
      {' '}
      {/* You can use a <div> or a JSX fragment <>...</> */}
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
        <NavBarLink to="/react-articles/react" label="REACT JS" />
      </ul>
      <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
        <NavBarLink to="/javascript-articles/react" label="JS" />
      </ul>
    </div>
  )
}

export default NavBarLinks2

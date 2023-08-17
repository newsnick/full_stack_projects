import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLink = ({ to, label }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={to}>
        {label}
      </Link>
    </li>
  )
}

export default NavBarLink

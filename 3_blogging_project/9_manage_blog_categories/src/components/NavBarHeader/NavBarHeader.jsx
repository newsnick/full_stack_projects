import { Link } from 'react-router-dom'
import './NavBarHeader.css'

const NavBarHeader = () => {
  return (
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        My Awesome Blog
      </Link>
    </div>
  )
}

export default NavBarHeader

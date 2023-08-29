// NavBarLinks.jsx
import React, { useContext } from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'
import { Link } from 'react-router-dom'
import { FetchedCoursesContext } from '../FetchCourses/FetchCourses'
import './NavBarLinks.css'

const NavBarLinks = (props) => {
  const courses = useContext(FetchedCoursesContext)

  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
      <NavBarLink to="/" label="Home" />
      <NavBarLink to="/about" label="About" />
      <NavBarLink to="/courses" label="Topics" />

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle "
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Courses
        </a>
        <ul className="dropdown-menu">
          {courses.map((course) => (
            <li key={course._id}>
              {/* Construct the correct URL with the course ID */}
              <Link className="dropdown-item" to={`/courses/${course._id}`}>
                {course.course_title}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default NavBarLinks

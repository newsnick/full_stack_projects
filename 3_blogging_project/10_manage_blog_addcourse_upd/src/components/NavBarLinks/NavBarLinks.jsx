// // NavBarLinks.jsx
// import React from 'react'
// import styles from '../NavBar/NavBar.module.css'
// import NavBarLink from '../NavBarLink/NavBarLink'

// const NavBarLinks = (props) => {
//   return (
//     <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
//       <NavBarLink to="/" label="Home" />
//       <NavBarLink to="/about" label="About" />
//       <NavBarLink to="/courses" label="courses" />

//       <li className="nav-item dropdown">
//         <a
//           className="nav-link dropdown-toggle"
//           href="/"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Courses
//         </a>
//         <ul className="dropdown-menu">
//           <li>
//             <a className="dropdown-item" href="/courses">
//               REACT JS
//             </a>
//           </li>
//         </ul>
//       </li>
//     </ul>
//   )
// }

// export default NavBarLinks
import React, { useContext } from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'
import { FetchedCoursesContext } from '../FetchCourses/FetchCourses' // Adjust the path

const NavBarLinks = (props) => {
  const courses = useContext(FetchedCoursesContext)

  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
      <NavBarLink to="/" label="Home" />
      <NavBarLink to="/about" label="About" />
      <NavBarLink to="/courses" label="Courses" />

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
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
              <a
                className="dropdown-item"
                href={`/courses/${course.course_title}`}
              >
                {course.course_title}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default NavBarLinks

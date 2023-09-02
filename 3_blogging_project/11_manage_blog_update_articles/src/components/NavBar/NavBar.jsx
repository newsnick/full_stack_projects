// import React from 'react'
// import './NavBar.css'
// import styles from './NavBar.module.css'
// // import { Link } from 'react-router-dom'
// import NavBarLink from '../NavBarLink/NavBarLink'
// import NavBarLinks from '../NavBarLinks/NavBarLinks'
// import NavBarHeader from '../NavBarHeader/NavBarHeader'
// import NavBarForm from '../NavBarForm/NavBarForm'

// const NavBar = (props) => {
//   const courseLinks = props.courses.map((course) => (
//     <NavBarLink
//       key={course.course_title}
//       to={`/courses/${course.course_title}`}
//       label={course.course_title}
//     />
//   ))

//   return (
//     <nav
//       className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles['navbar-custom']}`}
//     >
//       <NavBarHeader />
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div
//         className={`collapse navbar-collapse ${styles['nav-collapse']}`}
//         id="navbarSupportedContent"
//       >
//         <NavBarLinks />
//         <NavBarForm />
//       </div>
//     </nav>
//   )
// }

// export default NavBar
import React from 'react'
import './NavBar.css'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'
//import NavBarLink from '../NavBarLink/NavBarLink'
import NavBarLinks from '../NavBarLinks/NavBarLinks'
//import NavBarHeader from '../NavBarHeader/NavBarHeader'
//import NavBarForm from '../NavBarForm/NavBarForm'

const NavBar = () => {
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
          <NavBarLinks /> {/* Passing fetched courses context here */}
        </div>
      </div>
    </nav>
  )
}

export default NavBar

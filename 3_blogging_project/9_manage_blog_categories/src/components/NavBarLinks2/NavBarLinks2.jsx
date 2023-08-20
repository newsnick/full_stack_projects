// // NavBarLinks2.jsx
// import React from 'react'
// import styles from '../NavBar/NavBar.module.css'
// import NavBarLink from '../NavBarLink/NavBarLink'

// const NavBarLinks2 = (props) => {
//   return (
//     <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
//       <NavBarLink to="/" label="Home" />
//       <NavBarLink to="/about" label="About" />
//       <NavBarLink to="/react-articles" label="React" />
//       {/* <li className={`nav-item dropdown ${styles['nav-item-dropdown']}`}>
//          {props.articleLinks}
//       </li> */}
//       <li className={`nav-item dropdown ${styles['nav-item-dropdown']}`}>
//         <a
//           className={`nav-link dropdown-toggle ${styles['nav-link-dropdown']}`}
//           href="/"
//           role="button"
//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//         >
//           Browse Articles
//         </a>
//         <ul className={`dropdown-menu ${styles['dropdown-menu']}`}>
//           {props.articleLinks}
//         </ul>
//       </li>
//     </ul>
//   )
// }

// export default NavBarLinks2
// NavBarLinks2.jsx
import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'

const NavBarLinks2 = (props) => {
  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
      {/* <NavBarLink to="/react-articles/react" label="REACT JS" /> */}
      <NavBarLink to="/react-articles/react" label="REACT JS" />
    </ul>
  )
}

export default NavBarLinks2

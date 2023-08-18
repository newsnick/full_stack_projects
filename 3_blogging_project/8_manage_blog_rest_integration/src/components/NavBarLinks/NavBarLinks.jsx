// import styles from '../NavBar/NavBar.module.css'
// import NavBarLink from '../NavBarLink/NavBarLink'

// const NavBarLinks = (props) => {
//   return (
//     <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
//       <NavBarLink to="/" label="Home" />
//       <NavBarLink to="/about" label="About" />
//       <NavBarLink to="/articles" label="Articles" />
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

// export default NavBarLinks

import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'

const NavBarLinks = (props) => {
  return (
    <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-list']}`}>
      <NavBarLink to="/" label="Home" />
      <NavBarLink to="/about" label="About" />
      <NavBarLink to="/articles" label="Articles" />
      {/* <li className={`nav-item dropdown ${styles['nav-item-dropdown']}`}>
         {props.articleLinks}
      </li> */}
      <li className={`nav-item dropdown ${styles['nav-item-dropdown']}`}>
        <a
          className={`nav-link dropdown-toggle ${styles['nav-link-dropdown']}`}
          href="/"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Browse Articles
        </a>
        <ul className={`dropdown-menu ${styles['dropdown-menu']}`}>
          {props.articleLinks}
        </ul>
      </li>
    </ul>
  )
}

export default NavBarLinks

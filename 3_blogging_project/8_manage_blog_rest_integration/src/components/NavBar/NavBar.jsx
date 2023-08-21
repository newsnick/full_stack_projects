import React from 'react'
import './NavBar.css'
import styles from './NavBar.module.css'
// import { Link } from 'react-router-dom'
import NavBarLink from '../NavBarLink/NavBarLink'
import NavBarLinks from '../NavBarLinks/NavBarLinks'
import NavBarHeader from '../NavBarHeader/NavBarHeader'
import NavBarForm from '../NavBarForm/NavBarForm'

const NavBar = (props) => {
  const articleLinks = props.articles.map((article) => (
    <NavBarLink
      key={article.articleId}
      to={`/articles/${article.articleId}`}
      label={article.title}
    />
  ))

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${styles['navbar-custom']}`}
    >
      <NavBarHeader />
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${styles['nav-collapse']}`}
        id="navbarSupportedContent"
      >
        <NavBarLinks articleLinks={articleLinks} />
        <NavBarForm />
      </div>
    </nav>
  )
}

export default NavBar

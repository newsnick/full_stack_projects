// NavBar2.jsx
import React from 'react'
import './NavBar2.css'
import styles from './NavBar2.module.css'
import NavBarLink from '../NavBarLink/NavBarLink'
import NavBarLinks2 from '../NavBarLinks2/NavBarLinks2'
import NavBarForm from '../NavBarForm/NavBarForm'

const NavBar2 = (props) => {
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
        <NavBarLinks2 articleLinks={articleLinks} />
        <NavBarForm />
      </div>
    </nav>
  )
}

export default NavBar2

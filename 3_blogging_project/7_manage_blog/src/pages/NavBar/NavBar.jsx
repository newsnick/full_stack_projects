import React from 'react'
import './NavBar.css'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  const articleLinks = props.articles.map((article) => (
    <li key={article.articleId} className={styles['nav-item']}>
      <Link
        className={styles['nav-link']}
        to={`/articles/${article.articleId}`}
      >
        {article.title}
      </Link>
    </li>
  ))

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ backgroundColor: '#0074D9' }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          My Awesome Blog
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/articles">
                Articles
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browse Articles
              </a>
              <ul className="dropdown-menu">{articleLinks}</ul>
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

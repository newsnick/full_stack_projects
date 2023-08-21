// ArticleList.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleList.css'

export const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map((article) => (
        <Link
          key={article.articleId}
          className="articles-list-item"
          to={`/articles/${article.articleId}`}
        >
          <h2>{article.title}</h2>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  )
}

export default ArticleList

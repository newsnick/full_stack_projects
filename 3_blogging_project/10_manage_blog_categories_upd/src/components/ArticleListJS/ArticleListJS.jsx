// ArticleListJS.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FetchedJSArticlesContext } from '../../components/FetchJSArticles/FetchJSArticles'
import './ArticleListJS.css'

const ArticleListJS = () => {
  const articles = useContext(FetchedJSArticlesContext)

  return (
    <nav id="sidebar" className="bg-dark">
      <div className="p-4">
        <h1 className="text-white">JavaScript Articles</h1>
        <ul className="list-unstyled components">
          {articles.map((article) => {
            return (
              <li key={article.articleId}>
                <Link
                  className="list-items"
                  to={`/javascript-articles/${article.articleId}`}
                >
                  {article.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default ArticleListJS

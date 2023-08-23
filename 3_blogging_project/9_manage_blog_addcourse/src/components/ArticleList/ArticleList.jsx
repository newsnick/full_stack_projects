// ArticleList.jsx
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FetchedArticlesContext } from '../../components/FetchReactArticles/FetchReactArticles'
import './ArticleList.css'

const ArticleList = () => {
  const articles = useContext(FetchedArticlesContext)

  return (
    <nav id="sidebar" className="bg-dark">
      <div className="p-4">
        <h1 className="text-white">React Articles</h1>

        <ul className="list-unstyles components">
          {articles.map((article) => (
            <li key={article.articleId}>
              <Link
                className="list-items"
                to={`/react-articles/${article.articleId}`}
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>{' '}
    </nav>
  )
}

export default ArticleList

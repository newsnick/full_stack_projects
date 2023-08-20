// ArticlePage.jsx
import React from 'react'

export const ArticlePage = ({ articles }) => {
  return (
    <div>
      {articles.map((article) => (
        <div key={article.articleId}>
          <h2>{article.title}</h2>
          {article.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <p>Upvotes: {article.upvotes}</p>
        </div>
      ))}
    </div>
  )
}

export default ArticlePage

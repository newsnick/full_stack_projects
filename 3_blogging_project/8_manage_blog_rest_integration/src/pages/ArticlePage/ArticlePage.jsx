// ArticlePage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

export const ArticlePage = ({ articles }) => {
  const params = useParams()
  const articleId = params.articleId

  const article = articles.find((article) => article.articleId === articleId)

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h2>{article.title}</h2>
      <b className="greenbox">This article has {article.upvotes} upvotes</b>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </>
  )
}

export default ArticlePage

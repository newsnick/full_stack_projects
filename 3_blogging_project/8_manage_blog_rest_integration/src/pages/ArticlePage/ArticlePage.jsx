// // ArticlePage.jsx
// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
// import './ArticlePage.css'

// export const ArticlePage = ({ articles }) => {
//   const params = useParams()
//   const articleId = params.articleId

//   const article = articles.find((article) => article.articleId === articleId)

//   if (!article) {
//     return <NotFoundPage />
//   }

//   return (
//     <>
//       <h2>{article.title}</h2>
//       <b className="greenbox">This article has {article.upvotes} upvotes</b>
//       {article.content.map((paragraph, index) => (
//         <p key={index}>{paragraph}</p>
//       ))}
//     </>
//   )
// }

// export default ArticlePage
import React from 'react'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import './ArticlePage.css' // Import the ArticlePage.css

export const ArticlePage = ({ articles }) => {
  const params = useParams()
  const articleId = params.articleId

  const article = articles.find((article) => article.articleId === articleId)

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <div className="article-container">
      <h2 className="article-title">{article.title}</h2>
      <b className="upvotes">This article has {article.upvotes} upvotes</b>
      <div className="article-content">
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default ArticlePage

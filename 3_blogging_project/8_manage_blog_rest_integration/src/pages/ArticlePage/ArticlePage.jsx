// // ArticlePage.jsx
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { articles } from '../../components/FetchArticles/FetchArticles'
// import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

// const ArticlePage = () => {
//   const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
//   const params = useParams()
//   const articleId = params.articleId
//   useEffect(() => {
//     setArticleInfo({ upvotes: [] })
//   }, [])

//   const article = articles.find((article) => article.name === articleId)
//   if (!articleId) {
//     return <NotFoundPage />
//   }

//   return (
//     <>
//       <h2>article.title</h2>
//       <b className="greenbox">This article has {article.upvotes} upvotes</b>
//       {/* articleInfo state updates on page reload */}
//       <p>{articleInfo.upvotes}</p>
//       {article.content.map((paragraph) => {
//         ;<p>{paragraph}</p>
//       })}
//     </>
//   )
// }

// export default ArticlePage
// ArticlePage.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import FetchArticles from '../../components/FetchArticles/FetchArticles'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

export const ArticlePage = () => {
  const params = useParams()
  const articleId = params.articleId

  return (
    <FetchArticles>
      {(articles) => {
        const article = articles.find(
          (article) => article.articleId === articleId
        )
        if (!article) {
          return <NotFoundPage />
        }

        return (
          <>
            <h2>{article.title}</h2>
            <b className="greenbox">
              This article has {article.upvotes} upvotes
            </b>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </>
        )
      }}
    </FetchArticles>
  )
}

export default ArticlePage

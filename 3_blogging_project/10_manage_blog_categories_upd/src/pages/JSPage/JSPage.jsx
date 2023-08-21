// // JSPage.jsx
// import React, { useContext } from 'react'
// import { useParams } from 'react-router-dom'
// import { FetchedArticlesContext } from '../../components/FetchJSArticles/FetchJSArticles'
// import ArticleListJS from '../../components/ArticleListJS/ArticleListJS'
// import SelectedArticle from '../../components/SelectedArticle/SelectedArticle'
// import './JSPage.css' // import css file

// export const JSPage = () => {
//   const { articleId } = useParams()
//   const articles = useContext(FetchedArticlesContext)

//   // Find the articles with the matching articleId ("javascript")
//   const selectedArticle = articles.find(
//     (article) => article.articleId === articleId
//   )

//   return (
//     <div className="js-page-container">
//       <ArticleListJS />
//       <SelectedArticle selectedArticle={selectedArticle} />
//     </div>
//   )
// }

// export default JSPage
// JSPage.jsx
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FetchedJSArticlesContext } from '../../components/FetchJSArticles/FetchJSArticles'
import ArticleListJS from '../../components/ArticleListJS/ArticleListJS'
import SelectedArticle from '../../components/SelectedArticle/SelectedArticle'
import DisplayArticle from '../../components/DisplayArticle/DisplayArticle' // Import DisplayArticle component

import './JSPage.css' // import css file

export const JSPage = () => {
  const { articleId } = useParams()
  const articles = useContext(FetchedJSArticlesContext)

  // Find the articles with the matching articleId ("javascript")
  const selectedArticle = articles.find(
    (article) => article.articleId === articleId
  )

  return (
    <div className="js-page-container">
      <ArticleListJS />
      <SelectedArticle selectedArticle={selectedArticle} />
      <DisplayArticle articleId={articleId} />{' '}
      {/* Pass articleId to DisplayArticle */}
    </div>
  )
}

export default JSPage

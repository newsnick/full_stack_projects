// DisplayArticle.jsx
import React, { useContext } from 'react'
import { FetchedArticlesContext } from '../FetchReactArticles/FetchReactArticles'

const DisplayArticle = ({ articleId }) => {
  const articles = useContext(FetchedArticlesContext)

  // Find the selected article
  const selectedArticle = articles.find(
    (article) => article.articleId === articleId
  )

  if (!selectedArticle) {
    return <p>Article not found.</p>
  }

  return (
    <div>
      <h1>{selectedArticle.title}</h1>
      <p>{selectedArticle.content}</p>
      <p>{selectedArticle.upvotes}</p>
      {/* <p>{selectedArticle.comments}</p> */}
    </div>
  )
}

export default DisplayArticle
// import React, { useContext } from 'react'
// import { FetchedArticlesContext } from '../FetchReactArticles/FetchReactArticles'
// import { FetchJSArticles } from '../FetchJSArticles/FetchJSArticles'

// const DisplayArticle = ({ articleId }) => {
//   const reactArticles = useContext(FetchedArticlesContext)
//   const jsArticles = useContext(FetchJSArticles)

//   // Extract the articles from the contexts
//   const allArticles = [...reactArticles, ...jsArticles]

//   // Find the selected article
//   const selectedArticle = allArticles.find(
//     (article) => article.articleId === articleId
//   )

//   if (!selectedArticle) {
//     return <p>Article not found.</p>
//   }

//   return (
//     <div>
//       <h1>{selectedArticle.title}</h1>
//       <p>{selectedArticle.content}</p>
//       <p>{selectedArticle.upvotes}</p>
//     </div>
//   )
// }

// export default DisplayArticle

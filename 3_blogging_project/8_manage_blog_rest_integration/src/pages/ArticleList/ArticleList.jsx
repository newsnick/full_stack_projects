// // ArticlePage.jsx
// import React from 'react'

// export const ArticlePage = ({ articles }) => {
//   return (
//     <div>
//       {articles.map((article) => (
//         <div key={article.articleId}>
//           <h2>{article.title}</h2>
//           {article.content.map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//           <p>Upvotes: {article.upvotes}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ArticlePage
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

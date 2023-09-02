import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../Article-Content/Article-Content'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'
import './ArticlePage.css'

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
  const params = useParams()
  const articleId = params.articleId

  useEffect(() => {
    setArticleInfo({ upvotes: null, comments: [] })
  }, [])

  const article = Articles.find((article) => article.name === articleId)
  if (!article) {
    return <NotFoundPage />
  }

  return (
    <div className="article-page-box">
      <h2>{article.title}</h2>
      <b className="green-box">This article has {article.upvotes} upvotes</b>
      <p>{articleInfo.upvotes}</p>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  )
}

export default ArticlePage

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Articles } from '../Article-Content/Article-Content'
import { NotFoundPage } from '../NotFoundPage/NotFoundPage'

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] })
  const params = useParams()
  const articleId = params.articleId

  useEffect(() => {
    setArticleInfo({ upvotes: 3, comments: [] })
  }, [])
  // useEffect(() => {
  //   setArticleInfo({ upvotes: 3, comments: [] })
  // }, [])

  const article = Articles.find((article) => article.name === articleId)
  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h2>{article.title}!</h2>
      <b className="green-box">This article has {article.upvotes} upvotes</b>
      <p>
        articleInfo state is updating by useEffect, when page is loading-{' '}
        {articleInfo.upvotes}
      </p>
      {article.content.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </>
  )
}

export default ArticlePage
